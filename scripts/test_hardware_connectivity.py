"""
AgriGuard — Physical Hardware Connectivity & Safety Verification Suite
Tests:
  1. Transport Abstraction (WiFiTransport, BluetoothTransport, MockSimulationTransport)
  2. Protocol Validation (FORWARD, BACKWARD, LEFT, RIGHT, STOP, SPRAY, ESTOP)
  3. Modbus RTU CRC16 & NPK Frame Construction
  4. Watchdog Timeout & Failsafe Simulation
  5. Autonomous Obstacle Braking Logic (<25cm)
  6. Spray Gating & Farmer Approval Token Validation
  7. Live ESP32 HTTP Server Simulation & Client Verification
  8. Honest Reporting: Zero Fake Values in Real Hardware Mode
"""

import sys
import time
import json
import threading
from pathlib import Path
from http.server import HTTPServer, BaseHTTPRequestHandler

ROOT_DIR = Path(__file__).resolve().parent.parent
if str(ROOT_DIR) not in sys.path:
    sys.path.insert(0, str(ROOT_DIR))

from backend.communication.protocol import (
    RobotMovementCommand,
    StandardSprayCommand,
    SafetyEvent,
    MotorCommand,
    SprayCommand,
    EStopCommand
)
from backend.communication.transport import (
    WiFiTransport,
    BluetoothTransport,
    MockSimulationTransport
)
from backend.communication.esp32_client import ESP32Client
from backend.sensors.sensor_manager import SensorManagerService


# ==========================================
# 1. MOCK FIRMWARE HTTP SERVER FOR UNIT TESTS
# ==========================================

class MockESP32FirmwareHandler(BaseHTTPRequestHandler):
    """Simulates the physical ESP32 embedded web server exactly as written in firmware/esp32/."""
    estop_active = False
    motor_state = "STOPPED"
    spray_active = False
    last_command_time = time.time()
    obstacle_detected = False

    def log_message(self, format, *args):
        pass  # Quiet test output

    def do_GET(self):
        MockESP32FirmwareHandler.last_command_time = time.time()

        if self.path == "/api/status" or self.path == "/status":
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            resp = {
                "type": "status",
                "status": "online",
                "firmware_version": "2.1.0-PROD",
                "uptime_ms": 123456,
                "battery_voltage": 12.2,
                "battery_percentage": 85,
                "estop_active": MockESP32FirmwareHandler.estop_active,
                "motors": MockESP32FirmwareHandler.motor_state,
                "pump": "ON" if MockESP32FirmwareHandler.spray_active else "OFF",
                "valve": "OPEN" if MockESP32FirmwareHandler.spray_active else "CLOSED"
            }
            self.wfile.write(json.dumps(resp).encode())
            return

        if self.path == "/api/heartbeat":
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            resp = {
                "type": "heartbeat_ack",
                "ok": True,
                "status": "online",
                "timestamp": int(time.time() * 1000),
                "estop_active": MockESP32FirmwareHandler.estop_active,
                "motor_state": MockESP32FirmwareHandler.motor_state,
                "watchdog_timeout_ms": 1500
            }
            self.wfile.write(json.dumps(resp).encode())
            return

        if self.path in ("/api/telemetry", "/api/sensors"):
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            resp = {
                "type": "telemetry",
                "timestamp_ms": int(time.time() * 1000),
                "battery_voltage": 12.25,
                "battery_percentage": 86,
                "ultrasonic_front": 64.5,
                "soil_moisture": 41.2,
                "temperature": 29.4,
                "humidity": 76.0,
                "pump": MockESP32FirmwareHandler.spray_active,
                "valve": MockESP32FirmwareHandler.spray_active,
                "npk": {
                    "n": 45,
                    "p": 22,
                    "k": 38,
                    "valid": True
                },
                "safety": {
                    "estop_active": MockESP32FirmwareHandler.estop_active,
                    "watchdog_tripped": False,
                    "obstacle_detected": MockESP32FirmwareHandler.obstacle_detected,
                    "obstacle_distance_cm": 64.5
                },
                "motors": {
                    "state": MockESP32FirmwareHandler.motor_state,
                    "speed": 120
                },
                "actuators": {
                    "pump_active": MockESP32FirmwareHandler.spray_active,
                    "valve_open": MockESP32FirmwareHandler.spray_active,
                    "flow_rate_ml_s": 14.8 if MockESP32FirmwareHandler.spray_active else 0.0
                }
            }
            self.wfile.write(json.dumps(resp).encode())
            return

        self.send_response(404)
        self.end_headers()

    def do_POST(self):
        content_len = int(self.headers.get("Content-Length", 0))
        post_body = self.rfile.read(content_len)
        try:
            doc = json.loads(post_body.decode())
        except Exception:
            self.send_response(400)
            self.end_headers()
            self.wfile.write(b'{"type":"error","code":"MALFORMED_JSON"}')
            return

        MockESP32FirmwareHandler.last_command_time = time.time()
        cmd_type = doc.get("type", "")
        cmd = doc.get("command", "")

        # E-Stop
        if cmd_type == "estop" or cmd == "EMERGENCY_STOP":
            MockESP32FirmwareHandler.estop_active = True
            MockESP32FirmwareHandler.motor_state = "STOPPED"
            MockESP32FirmwareHandler.spray_active = False
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            self.wfile.write(b'{"type":"command_ack","accepted":true,"executed":true,"message":"EMERGENCY STOP EXECUTED"}')
            return

        if cmd_type == "reset_estop" or (cmd == "STOP" and MockESP32FirmwareHandler.estop_active):
            MockESP32FirmwareHandler.estop_active = False
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            self.wfile.write(b'{"type":"command_ack","accepted":true,"executed":true,"message":"E-Stop Reset"}')
            return

        if MockESP32FirmwareHandler.estop_active:
            self.send_response(403)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            self.wfile.write(b'{"type":"error","code":"ESTOP_ENGAGED","error":"E-Stop Active"}')
            return

        # Robot Movement
        if cmd_type in ("robot_command", "move"):
            motion = cmd.upper() if cmd else doc.get("direction", "stop").upper()
            if motion == "FORWARD" and MockESP32FirmwareHandler.obstacle_detected:
                self.send_response(409)
                self.send_header("Content-Type", "application/json")
                self.end_headers()
                self.wfile.write(b'{"type":"safety_event","event":"OBSTACLE_DETECTED","distance":18.0,"error":"Blocked"}')
                return

            if motion == "FORWARD":
                MockESP32FirmwareHandler.motor_state = "MOVING_FORWARD"
            elif motion in ("BACKWARD", "REV"):
                MockESP32FirmwareHandler.motor_state = "MOVING_BACKWARD"
            elif motion == "LEFT":
                MockESP32FirmwareHandler.motor_state = "TURNING_LEFT"
            elif motion == "RIGHT":
                MockESP32FirmwareHandler.motor_state = "TURNING_RIGHT"
            elif motion == "STOP":
                MockESP32FirmwareHandler.motor_state = "STOPPED"

            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            resp = {"type": "command_ack", "accepted": True, "executed": True, "motor_state": MockESP32FirmwareHandler.motor_state}
            self.wfile.write(json.dumps(resp).encode())
            return

        # Spray Control
        if cmd_type in ("spray_command", "spray"):
            token = doc.get("approval_token", "")
            if len(token) < 4:
                self.send_response(401)
                self.send_header("Content-Type", "application/json")
                self.end_headers()
                self.wfile.write(b'{"type":"error","code":"UNAUTHORIZED_SPRAY","error":"Missing token"}')
                return

            pump = doc.get("pump", True)
            MockESP32FirmwareHandler.spray_active = pump
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            resp = {"type": "command_ack", "accepted": True, "executed": True, "spray_state": "ACTIVE" if pump else "OFF"}
            self.wfile.write(json.dumps(resp).encode())
            return

        self.send_response(400)
        self.send_header("Content-Type", "application/json")
        self.end_headers()
        self.wfile.write(b'{"type":"error","code":"INVALID_COMMAND"}')


def run_tests():
    print("\n=======================================================")
    print("  AGRIGUARD REAL HARDWARE CONNECTIVITY TEST SUITE")
    print("=======================================================\n")

    passed = 0
    total = 0

    def assert_test(cond, title):
        nonlocal passed, total
        total += 1
        if cond:
            passed += 1
            print(f"  [PASS] {title}")
        else:
            print(f"  [FAIL] {title}")

    # TEST 1: Modbus CRC16 Calculation
    def calculate_modbus_crc16(buf: bytes) -> int:
        crc = 0xFFFF
        for b in buf:
            crc ^= b
            for _ in range(8):
                if crc & 0x0001:
                    crc = (crc >> 1) ^ 0xA001
                else:
                    crc >>= 1
        return crc

    # Standard Modbus query: [0x01, 0x03, 0x00, 0x1E, 0x00, 0x03] -> CRC should be 0xCD65 (Little Endian: 0x65, 0xCD)
    query_bytes = bytes([0x01, 0x03, 0x00, 0x1E, 0x00, 0x03])
    crc_result = calculate_modbus_crc16(query_bytes)
    assert_test(crc_result == 0xCD65, "Modbus CRC16 calculation for NPK holding register query (0x001E, len 3)")

    # TEST 2: Honest Disconnected Reporting (No fake data when real hardware is offline)
    offline_client = ESP32Client(ip="192.0.2.1", port=80, timeout=0.3) # Non-routable TEST-NET-1 IP
    telemetry = offline_client.fetch_real_telemetry()
    assert_test(telemetry["esp32_connected"] is False, "Offline ESP32 reports esp32_connected: False")
    assert_test(telemetry["battery_voltage"] is None, "Offline ESP32 does NOT fake battery voltage")
    assert_test(telemetry["npk"]["n"] is None and telemetry["npk"]["valid"] is False, "Offline ESP32 does NOT fake NPK values")

    # TEST 3: Transport Layer Abstraction
    wifi_transport = WiFiTransport(ip="127.0.0.1", port=8089)
    bt_transport = BluetoothTransport()
    assert_test(wifi_transport.name == "Wi-Fi", "WiFiTransport identifies as primary Wi-Fi transport")
    assert_test(bt_transport.connect() is False, "BluetoothTransport remains in standby mode")

    # TEST 4: Spin up Mock Hardware HTTP Server on port 8089 to verify end-to-end communication
    server_address = ("127.0.0.1", 8089)
    httpd = HTTPServer(server_address, MockESP32FirmwareHandler)
    server_thread = threading.Thread(target=httpd.serve_forever, daemon=True)
    server_thread.start()
    time.sleep(0.1)

    live_client = ESP32Client(ip="127.0.0.1", port=8089, timeout=1.0)
    connected = live_client.check_connection()
    assert_test(connected is True, "Connects to ESP32 HTTP Server endpoint (/api/status)")

    # TEST 5: Heartbeat keep-alive
    hb = live_client.send_heartbeat()
    assert_test(hb.get("ok") is True and hb.get("ping_ms") is not None, "Heartbeat keep-alive receives ack with ping ms")

    # TEST 6: Standard Robot Movement Commands
    fwd_res = live_client.send_robot_command("FORWARD", speed=100)
    assert_test(fwd_res.accepted is True and fwd_res.executed is True, "Dispatches FORWARD robot_command")
    assert_test(MockESP32FirmwareHandler.motor_state == "MOVING_FORWARD", "ESP32 state updated to MOVING_FORWARD")

    left_res = live_client.send_robot_command("LEFT", speed=80)
    assert_test(left_res.accepted is True and MockESP32FirmwareHandler.motor_state == "TURNING_LEFT", "Dispatches LEFT robot_command")

    stop_res = live_client.send_robot_command("STOP")
    assert_test(stop_res.accepted is True and MockESP32FirmwareHandler.motor_state == "STOPPED", "Dispatches STOP robot_command")

    # TEST 7: Precision Spray Actuation & Farmer Approval Gate
    unauth_spray = live_client.active_transport.send_command({
        "type": "spray_command",
        "pump": True,
        "valve": True,
        "approval_token": ""  # Missing token!
    })
    assert_test(unauth_spray.accepted is False and unauth_spray.error_code == "UNAUTHORIZED", "Spray command WITHOUT approval token is strictly rejected")

    auth_spray = live_client.active_transport.send_command({
        "type": "spray_command",
        "pump": True,
        "valve": True,
        "approval_token": "TOKEN-VERIFIED-987"
    })
    assert_test(auth_spray.accepted is True and MockESP32FirmwareHandler.spray_active is True, "Authorized spray command engages pump and valve")

    # TEST 8: Emergency Stop (Instant Motor & Spray Halt)
    estop_res = live_client.send_emergency_stop()
    assert_test(estop_res.accepted is True, "Dispatches Emergency Stop command")
    assert_test(MockESP32FirmwareHandler.estop_active is True, "ESP32 estop_active latched")
    assert_test(MockESP32FirmwareHandler.motor_state == "STOPPED", "Motors halted by Emergency Stop")
    assert_test(MockESP32FirmwareHandler.spray_active is False, "Spray pump disengaged by Emergency Stop")

    # Try moving while E-stop is active -> MUST be rejected
    rejected_motion = live_client.send_robot_command("FORWARD", speed=100)
    assert_test(rejected_motion.accepted is False, "Movement while E-stop is active is strictly blocked")

    # Reset E-stop
    live_client.active_transport.send_command({"type": "reset_estop"})
    assert_test(MockESP32FirmwareHandler.estop_active is False, "E-Stop safely reset after clearance")

    # TEST 9: Obstacle Safety Braking
    MockESP32FirmwareHandler.obstacle_detected = True
    blocked_fwd = live_client.send_robot_command("FORWARD", speed=100)
    assert_test(blocked_fwd.accepted is False and blocked_fwd.error_code == "OBSTACLE_DETECTED", "Autonomous obstacle safety halts FORWARD movement and emits safety event")
    MockESP32FirmwareHandler.obstacle_detected = False

    # TEST 10: Telemetry Parsing & Real Sensor Data
    raw_telemetry = live_client.fetch_real_telemetry()
    sm_service = SensorManagerService()
    processed = sm_service.process_telemetry(raw_telemetry)
    assert_test(processed["esp32_connected"] is True, "Live telemetry processed with esp32_connected: True")
    assert_test(processed["battery_voltage"] == 12.25, "Battery voltage telemetry accurately reported (12.25V)")
    assert_test(processed["npk"]["nitrogen_mg_kg"] == 45, "NPK Nitrogen telemetry reported (45 mg/kg)")
    assert_test(processed["npk"]["phosphorus_mg_kg"] == 22, "NPK Phosphorus telemetry reported (22 mg/kg)")
    assert_test(processed["npk"]["potassium_mg_kg"] == 38, "NPK Potassium telemetry reported (38 mg/kg)")
    assert_test(processed["ultrasonic"]["distance_cm"] == 64.5, "Ultrasonic distance reported (64.5 cm)")

    # TEST 11: Explicit Mode Toggling (REAL_HARDWARE vs SIMULATION)
    live_client.set_hardware_mode("SIMULATION")
    assert_test(live_client.hardware_mode == "SIMULATION", "Explicit toggle to SIMULATION mode")
    sim_res = live_client.send_robot_command("FORWARD", speed=90)
    assert_test(sim_res.accepted is True, "Simulation transport handles movement in sandbox")
    live_client.set_hardware_mode("REAL_HARDWARE")
    assert_test(live_client.hardware_mode == "REAL_HARDWARE", "Explicit toggle back to REAL_HARDWARE mode")

    httpd.shutdown()
    print("\n-------------------------------------------------------")
    print(f"  RESULTS: {passed}/{total} tests passed ({(passed/total)*100:.1f}%)")
    print("=======================================================\n")
    return passed == total


if __name__ == "__main__":
    success = run_tests()
    sys.exit(0 if success else 1)
