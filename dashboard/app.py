"""
AgriGuard — Master FastAPI Dashboard Application
Integrates AI vision, treatment engine, robot communication, SQLite storage, and real-time WebSockets.
"""

import os
import sys
import time
import asyncio
import logging
from pathlib import Path
from typing import Dict, Any, Optional

from fastapi import FastAPI, WebSocket, WebSocketDisconnect, Request, HTTPException, BackgroundTasks
from fastapi.responses import HTMLResponse, StreamingResponse, JSONResponse
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

# Ensure parent directory is on sys.path
BASE_DIR = Path(__file__).resolve().parent.parent
if str(BASE_DIR) not in sys.path:
    sys.path.insert(0, str(BASE_DIR))

from ai.camera import AgriGuardCamera
from ai.inference import CropHealthDetector
from treatment.inventory import TankInventoryManager
from treatment.engine import TreatmentDecisionEngine, TreatmentDecision
from robot_comm.client import RobotCommClient
from robot_comm.protocol import RobotCommand, CommandType, MoveAction
from data.database import Database
from data.schemas import (
    SensorReadingCreate,
    ObservationCreate,
    SprayEventCreate,
    RobotCommandPayload,
    ApprovalRequestPayload
)

logging.basicConfig(level=logging.INFO, format="%(asctime)s [%(levelname)s] %(name)s: %(message)s")
logger = logging.getLogger("AgriGuardApp")

app = FastAPI(title="AgriGuard API & Dashboard", version="1.0.0")

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Static and Templates
STATIC_DIR = Path(__file__).parent / "static"
TEMPLATES_DIR = Path(__file__).parent / "templates"
app.mount("/static", StaticFiles(directory=str(STATIC_DIR)), name="static")

# Subsystem Initializations
db = Database()
inventory_mgr = TankInventoryManager()
treatment_engine = TreatmentDecisionEngine(inventory_manager=inventory_mgr)
detector = CropHealthDetector()
camera = AgriGuardCamera(camera_index=0)
robot = RobotCommClient(use_simulation=True)

# Application In-Memory State
active_decision: Optional[TreatmentDecision] = None
current_zone_id: str = "ZONE-R2C2"
active_scenario: str = "early_blight"

# Initial observation pre-run
camera.set_simulation_condition(active_scenario)


# ==========================================
# 1. STREAMING & REAL-TIME WEBSOCKET
# ==========================================

def generate_video_stream():
    """Generates MJPEG multipart stream from camera."""
    while True:
        frame_bytes = camera.get_jpeg_bytes()
        if frame_bytes:
            yield (b"--frame\r\n"
                   b"Content-Type: image/jpeg\r\n\r\n" + frame_bytes + b"\r\n")
        time.sleep(0.04)  # ~25 FPS


@app.get("/video_feed")
def video_feed():
    return StreamingResponse(
        generate_video_stream(),
        media_type="multipart/x-mixed-replace; boundary=frame"
    )


class ConnectionManager:
    def __init__(self):
        self.active_connections: list[WebSocket] = []

    async def connect(self, websocket: WebSocket):
        await websocket.accept()
        self.active_connections.append(websocket)

    def disconnect(self, websocket: WebSocket):
        if websocket in self.active_connections:
            self.active_connections.remove(websocket)

    async def broadcast(self, data: Dict[str, Any]):
        for connection in list(self.active_connections):
            try:
                await connection.send_json(data)
            except Exception:
                self.disconnect(connection)

ws_manager = ConnectionManager()


@app.websocket("/ws/telemetry")
async def websocket_telemetry(websocket: WebSocket):
    await ws_manager.connect(websocket)
    try:
        while True:
            # Poll telemetry and push to connected clients at 4Hz
            telemetry = robot.get_telemetry()
            telemetry["active_zone_id"] = current_zone_id
            telemetry["active_scenario"] = active_scenario

            # Save periodically to database
            if telemetry.get("connected"):
                db.record_sensor_reading(SensorReadingCreate(
                    nitrogen=str(telemetry.get("nitrogen", "normal")),
                    phosphorus=str(telemetry.get("phosphorus", "normal")),
                    potassium=str(telemetry.get("potassium", "normal")),
                    soil_moisture=float(telemetry.get("soil_moisture", 35.0)),
                    temperature_c=float(telemetry.get("temperature_c", 27.0)),
                    humidity_pct=float(telemetry.get("humidity_pct", 65.0)),
                    distance_cm=float(telemetry.get("distance_cm", 120.0)),
                    battery_pct=float(telemetry.get("battery_pct", 85.0)),
                    battery_v=float(telemetry.get("battery_v", 12.2)),
                    flow_rate_ml_s=float(telemetry.get("flow_rate_ml_s", 0.0))
                ))

            await websocket.send_json(telemetry)
            await asyncio.sleep(0.35)
    except WebSocketDisconnect:
        ws_manager.disconnect(websocket)
    except Exception as e:
        logger.warning(f"WebSocket telemetry loop error: {e}")
        ws_manager.disconnect(websocket)


# ==========================================
# 2. REST API ENDPOINTS
# ==========================================

@app.get("/", response_class=HTMLResponse)
async def read_index():
    index_file = TEMPLATES_DIR / "index.html"
    if not index_file.exists():
        return HTMLResponse("<h1>AgriGuard Dashboard loading...</h1>")
    with open(index_file, "r", encoding="utf-8") as f:
        return HTMLResponse(f.read())


@app.get("/api/status")
def get_status():
    telemetry = robot.get_telemetry()
    return {
        "status": "online",
        "robot_connected": telemetry.get("connected", False),
        "simulation_mode": robot.use_simulation,
        "estop_active": robot.estop_active,
        "active_zone": current_zone_id,
        "active_scenario": active_scenario,
        "tanks": inventory_mgr.get_all_tanks()
    }


@app.post("/api/scenario/set")
def set_demo_scenario(payload: Dict[str, str]):
    global active_scenario
    scenario = payload.get("scenario", "early_blight")
    active_scenario = scenario
    camera.set_simulation_condition(scenario)
    logger.info(f"Demo scenario switched to: {scenario}")
    return {"ok": True, "active_scenario": scenario}


@app.post("/api/mode/toggle")
def toggle_mode(payload: Dict[str, bool]):
    simulation = payload.get("simulation", True)
    robot.set_simulation_mode(simulation)
    return {"ok": True, "simulation": robot.use_simulation}


@app.post("/api/robot/command")
def send_robot_command(cmd: RobotCommandPayload):
    action = cmd.action.lower()
    if action == "estop":
        command = RobotCommand.create_emergency_stop()
        db.log_audit("EMERGENCY_STOP", "Emergency Stop Triggered from Dashboard")
    elif action == "stop":
        command = RobotCommand.create_stop()
    elif action in ("forward", "backward", "left", "right"):
        command = RobotCommand.create_move(action, speed=cmd.speed or 120, duration_ms=cmd.duration_ms or 0)
    else:
        raise HTTPException(status_code=400, detail=f"Unsupported robot action: {action}")

    response = robot.send_command(command)
    return response.to_dict()


@app.post("/api/ai/scan")
def run_ai_scan():
    """
    Captures live frame, executes disease detection, evaluates treatment decision,
    checks inventory availability, and stores observation.
    """
    global active_decision, current_zone_id
    frame = camera.capture_frame()

    # 1. Run AI Inference
    detection = detector.predict(frame, force_scenario=active_scenario if robot.use_simulation else None)

    # 2. Get Real-Time Sensor Context
    telemetry = robot.get_telemetry()

    # 3. Evaluate Treatment Decision
    decision = treatment_engine.evaluate(detection, sensor_context=telemetry)
    active_decision = decision

    # 4. Save Observation to SQLite
    obs_record = db.record_observation(ObservationCreate(
        zone_id=current_zone_id,
        plant_id=f"P-{current_zone_id.replace('ZONE-', '')}",
        crop="tomato",
        condition=decision.condition,
        confidence=decision.confidence,
        severity=decision.severity,
        health_score=decision.health_score,
        bounding_box=detection.get("bounding_box")
    ))

    db.log_audit("AI_SCAN", f"Scanned {current_zone_id}: {decision.condition_display} ({decision.confidence*100:.1f}%)", {
        "status": decision.status,
        "health_score": decision.health_score
    })

    return {
        "ok": True,
        "observation_id": obs_record.id,
        "detection": detection,
        "decision": decision.to_dict(),
        "tanks": inventory_mgr.get_all_tanks()
    }


@app.post("/api/treatment/approve")
def approve_treatment(payload: ApprovalRequestPayload):
    """
    Critical Farmer-in-the-loop Gate:
    Validates approval, signs actuation token, commands ESP32 spray mechanism,
    deducts chemical inventory, and records audit trail.
    """
    global active_decision
    if not active_decision:
        raise HTTPException(status_code=400, detail="No active diagnosis or treatment decision to approve.")

    if not payload.approved:
        # Rejection path
        active_decision.approved = False
        db.log_audit("TREATMENT_REJECTED", f"Farmer rejected treatment for {active_decision.condition_display}")
        return {"ok": True, "message": "Treatment rejected by farmer. No spray actuation performed."}

    # Verify actionable state & inventory
    try:
        approved_decision = treatment_engine.approve_treatment(
            active_decision,
            approved_by=payload.operator_name or "Farmer / Operator"
        )
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))

    primary_trt = approved_decision.primary_treatment
    if not primary_trt:
        raise HTTPException(status_code=400, detail="No valid primary treatment available.")

    duration_ms = primary_trt.get("spray_duration_ms", 2500)
    item_id = primary_trt.get("inventory_item_id", "TANK_COPPER_FUNGICIDE")
    volume_ml = primary_trt.get("spray_volume_est_ml", 40.0)

    # Dispatch Spray Command to Robot Controller
    approval_token = f"AUTH-TOKEN-{int(time.time())}-{approved_decision.decision_id}"
    cmd = RobotCommand.create_spray_start(duration_ms=duration_ms, approval_token=approval_token)
    robot_resp = robot.send_command(cmd)

    if not robot_resp.ok:
        raise HTTPException(status_code=500, detail=f"Robot hardware failed to actuate spray: {robot_resp.message}")

    # Deduct Chemical Inventory
    inventory_mgr.consume(item_id, volume_ml)

    # Record Spray Event in Database
    event_record = db.record_spray_event(SprayEventCreate(
        zone_id=current_zone_id,
        plant_id=f"P-{current_zone_id.replace('ZONE-', '')}",
        treatment_name=primary_trt.get("treatment_name", "Unknown Treatment"),
        inventory_item_id=item_id,
        volume_ml=volume_ml,
        duration_ms=duration_ms,
        approved_by=approved_decision.approved_by or "Farmer / Operator",
        status="COMPLETED",
        notes=payload.notes or "Farmer approved targeted intervention."
    ))

    db.log_audit("SPRAY_ACTUATED", f"Sprayed {volume_ml}mL of {primary_trt.get('treatment_name')} at {current_zone_id}", {
        "event_id": event_record.id,
        "duration_ms": duration_ms
    })

    return {
        "ok": True,
        "spray_event_id": event_record.id,
        "message": f"Approved! Actuated {duration_ms}ms precision spray ({volume_ml}mL {primary_trt.get('treatment_name')}).",
        "robot_response": robot_resp.to_dict(),
        "tanks": inventory_mgr.get_all_tanks()
    }


@app.get("/api/zones")
def get_zones():
    return {"zones": [z.model_dump() for z in db.get_all_zones()]}


@app.post("/api/zone/select")
def select_zone(payload: Dict[str, str]):
    global current_zone_id
    zid = payload.get("zone_id", "ZONE-R1C1")
    current_zone_id = zid
    logger.info(f"Target zone selected: {zid}")
    return {"ok": True, "current_zone_id": current_zone_id}


@app.get("/api/history")
def get_history():
    return {
        "recent_observations": [o.model_dump() for o in db.get_recent_observations(10)],
        "recent_spray_events": [s.model_dump() for s in db.get_recent_spray_events(10)]
    }


@app.get("/api/inventory")
def get_inventory():
    return {"tanks": inventory_mgr.get_all_tanks()}


@app.post("/api/inventory/refill")
def refill_inventory(payload: Dict[str, Any]):
    item_id = payload.get("item_id", "")
    amount = payload.get("amount_ml")
    success = inventory_mgr.refill(item_id, amount)
    return {"ok": success, "tanks": inventory_mgr.get_all_tanks()}


if __name__ == "__main__":
    uvicorn.run("dashboard.app:app", host="0.0.0.0", port=8000, reload=True)
