"""
AgriGuard — Robot Hardware Communication Client
Connects to ESP32 over HTTP/WebSocket and provides realistic mock hardware simulation.
"""

import time
import json
import logging
import threading
import requests
from typing import Dict, Any, Optional, Callable

from robot_comm.protocol import RobotCommand, RobotResponse, CommandType, MoveAction

logger = logging.getLogger(__name__)


class RobotCommClient:
    """
    Communicates with the AgriGuard ESP32.
    Supports real Wi-Fi HTTP dispatch and integrated mock hardware simulation.
    """

    def __init__(
        self,
        esp32_ip: str = "192.168.4.1",
        port: int = 80,
        use_simulation: bool = True,
        timeout: float = 2.0
    ):
        self.esp32_ip = esp32_ip
        self.port = port
        self.use_simulation = use_simulation
        self.timeout = timeout
        self.connected = False
        self.estop_active = False

        # Simulation State
        self._sim_lock = threading.RLock()
        self._sim_motor_state = "STOPPED"
        self._sim_speed = 120
        self._sim_spray_active = False
        self._sim_spray_timer: Optional[threading.Timer] = None
        self._sim_battery_v = 12.4
        self._sim_battery_pct = 88.0

        # Simulated Sensor Telemetry
        self._sim_telemetry = {
            "nitrogen": "normal",
            "phosphorus": "normal",
            "potassium": "normal",
            "soil_moisture": 34.5,
            "temperature_c": 27.2,
            "humidity_pct": 66.0,
            "distance_cm": 115.0,
            "flow_rate_ml_s": 0.0,
            "pump_active": False,
            "solenoid_open": False
        }

        if self.use_simulation:
            self.connected = True
            logger.info("Robot client initialized in SIMULATION mode.")
        else:
            self.check_connection()

    @property
    def base_url(self) -> str:
        return f"http://{self.esp32_ip}:{self.port}"

    def set_simulation_mode(self, enabled: bool):
        self.use_simulation = enabled
        if enabled:
            self.connected = True
            logger.info("Switched robot communication to SIMULATION mode.")
        else:
            self.check_connection()

    def check_connection(self) -> bool:
        if self.use_simulation:
            self.connected = True
            return True
        try:
            resp = requests.get(f"{self.base_url}/status", timeout=self.timeout)
            self.connected = (resp.status_code == 200)
        except Exception:
            self.connected = False
        return self.connected

    def send_command(self, cmd: RobotCommand) -> RobotResponse:
        """Sends validated command to ESP32 or simulation."""
        if self.estop_active and cmd.type not in (CommandType.STOP, CommandType.EMERGENCY_STOP):
            return RobotResponse(
                request_id=cmd.request_id,
                type="error",
                ok=False,
                message="Emergency Stop is active! Reset before moving or spraying.",
                estop_active=True
            )

        if self.use_simulation:
            return self._handle_simulation_command(cmd)

        # Real ESP32 HTTP Dispatch
        try:
            url = f"{self.base_url}/api/command"
            resp = requests.post(url, json=cmd.to_dict(), timeout=self.timeout)
            if resp.status_code == 200:
                data = resp.json()
                return RobotResponse(
                    request_id=cmd.request_id,
                    type=cmd.type,
                    ok=data.get("ok", True),
                    message=data.get("message", "Success"),
                    battery_v=data.get("battery_v", 12.0),
                    battery_pct=data.get("battery_pct", 80.0),
                    motor_state=data.get("motor_state", "UNKNOWN"),
                    spray_state=data.get("spray_state", "OFF"),
                    estop_active=data.get("estop_active", False)
                )
            else:
                return RobotResponse(
                    request_id=cmd.request_id,
                    type="error",
                    ok=False,
                    message=f"ESP32 returned status {resp.status_code}"
                )
        except Exception as e:
            self.connected = False
            return RobotResponse(
                request_id=cmd.request_id,
                type="error",
                ok=False,
                message=f"Failed to communicate with ESP32: {str(e)}"
            )

    def get_telemetry(self) -> Dict[str, Any]:
        """Fetches telemetry from ESP32 or simulation."""
        if self.use_simulation:
            with self._sim_lock:
                import random
                # Add realistic micro-variations
                sm = round(self._sim_telemetry["soil_moisture"] + random.uniform(-0.1, 0.1), 1)
                temp = round(self._sim_telemetry["temperature_c"] + random.uniform(-0.05, 0.05), 1)
                hum = round(self._sim_telemetry["humidity_pct"] + random.uniform(-0.1, 0.1), 1)
                dist = round(max(15.0, min(250.0, self._sim_telemetry["distance_cm"] + random.uniform(-0.5, 0.5))), 1)

                flow = 16.5 if self._sim_spray_active else 0.0

                return {
                    "connected": self.connected,
                    "simulation": True,
                    "estop_active": self.estop_active,
                    "battery_v": round(self._sim_battery_v, 2),
                    "battery_pct": round(self._sim_battery_pct, 1),
                    "motor_state": self._sim_motor_state,
                    "speed": self._sim_speed,
                    "spray_state": "ACTIVE" if self._sim_spray_active else "OFF",
                    "nitrogen": self._sim_telemetry["nitrogen"],
                    "phosphorus": self._sim_telemetry["phosphorus"],
                    "potassium": self._sim_telemetry["potassium"],
                    "soil_moisture": sm,
                    "temperature_c": temp,
                    "humidity_pct": hum,
                    "distance_cm": dist,
                    "flow_rate_ml_s": flow
                }

        try:
            resp = requests.get(f"{self.base_url}/api/sensors", timeout=self.timeout)
            if resp.status_code == 200:
                data = resp.json()
                data["connected"] = True
                data["simulation"] = False
                return data
        except Exception:
            self.connected = False

        return {
            "connected": False,
            "simulation": False,
            "error": "ESP32 disconnected"
        }

    # --- Simulation Handler ---
    def _handle_simulation_command(self, cmd: RobotCommand) -> RobotResponse:
        with self._sim_lock:
            if cmd.type == CommandType.EMERGENCY_STOP:
                self.estop_active = True
                self._sim_motor_state = "STOPPED"
                self._stop_simulation_spray()
                return RobotResponse(
                    request_id=cmd.request_id,
                    type=cmd.type,
                    ok=True,
                    message="EMERGENCY STOP ACTIVATED",
                    estop_active=True,
                    motor_state="STOPPED",
                    spray_state="OFF"
                )

            if cmd.type == CommandType.STOP:
                self.estop_active = False
                self._sim_motor_state = "STOPPED"
                self._stop_simulation_spray()
                return RobotResponse(
                    request_id=cmd.request_id,
                    type=cmd.type,
                    ok=True,
                    message="Robot stopped",
                    motor_state="STOPPED"
                )

            if cmd.type == CommandType.MOVE:
                self._sim_motor_state = f"MOVING_{cmd.action.upper()}"
                self._sim_speed = cmd.speed
                return RobotResponse(
                    request_id=cmd.request_id,
                    type=cmd.type,
                    ok=True,
                    message=f"Moving {cmd.action} at speed {cmd.speed}",
                    motor_state=self._sim_motor_state
                )

            if cmd.type == CommandType.SPRAY_START:
                self._sim_spray_active = True
                self._sim_telemetry["pump_active"] = True
                self._sim_telemetry["solenoid_open"] = True

                # Schedule automatic spray shutoff after specified duration
                if self._sim_spray_timer:
                    self._sim_spray_timer.cancel()
                duration_sec = cmd.duration_ms / 1000.0
                self._sim_spray_timer = threading.Timer(duration_sec, self._stop_simulation_spray)
                self._sim_spray_timer.daemon = True
                self._sim_spray_timer.start()

                return RobotResponse(
                    request_id=cmd.request_id,
                    type=cmd.type,
                    ok=True,
                    message=f"Targeted spray active for {cmd.duration_ms}ms",
                    spray_state="ACTIVE"
                )

            if cmd.type == CommandType.SPRAY_STOP:
                self._stop_simulation_spray()
                return RobotResponse(
                    request_id=cmd.request_id,
                    type=cmd.type,
                    ok=True,
                    message="Spray halted",
                    spray_state="OFF"
                )

            return RobotResponse(
                request_id=cmd.request_id,
                type=cmd.type,
                ok=True,
                message="Command acknowledged"
            )

    def _stop_simulation_spray(self):
        with self._sim_lock:
            self._sim_spray_active = False
            self._sim_telemetry["pump_active"] = False
            self._sim_telemetry["solenoid_open"] = False
            if self._sim_spray_timer:
                self._sim_spray_timer = None
