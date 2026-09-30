"""
AgriGuard — Real ESP32 Hardware Communication Client
Connects to physical ESP32 via HTTP/REST. Fails honestly without simulation or dummy numbers.
"""

import time
import requests
import logging
from typing import Dict, Any, Optional

from backend.communication.protocol import MotorCommand, SprayCommand, EStopCommand, ESP32CommandResponse, HardwareStatus

logger = logging.getLogger(__name__)


class ESP32Client:
    """
    Communicates with the physical AgriGuard ESP32.
    Strictly reports real hardware status and fails honestly if disconnected.
    """

    def __init__(self, ip: Optional[str] = None, port: int = 80, timeout: float = 2.0):
        import os
        self.ip = ip or os.getenv("AGRIGUARD_ESP32_IP", "192.168.4.1")
        self.port = int(os.getenv("AGRIGUARD_ESP32_PORT", str(port)))
        self.timeout = timeout
        self.is_connected = False
        self.last_telemetry: Optional[Dict[str, Any]] = None
        self.last_telemetry_time = 0.0
        self.last_ping_ms: Optional[float] = None
        self.last_heartbeat_time = 0.0

    @property
    def base_url(self) -> str:
        return f"http://{self.ip}:{self.port}"

    def set_ip(self, new_ip: str, new_port: int = 80):
        """Allows switching target ESP32 address between Option A (192.168.4.1) and Option B."""
        self.ip = new_ip.strip()
        self.port = new_port
        self.is_connected = False
        logger.info(f"ESP32 target URL updated to: {self.base_url}")

    def check_connection(self) -> bool:
        """Pings physical ESP32 /api/status endpoint."""
        t0 = time.time()
        try:
            resp = requests.get(f"{self.base_url}/api/status", timeout=self.timeout)
            if resp.status_code == 200:
                self.is_connected = True
                self.last_ping_ms = round((time.time() - t0) * 1000.0, 1)
                return True
        except Exception:
            pass
        self.is_connected = False
        self.last_ping_ms = None
        return False

    def send_heartbeat(self) -> Dict[str, Any]:
        """Dispatches keep-alive heartbeat to ESP32 to prevent watchdog timeout."""
        t0 = time.time()
        try:
            resp = requests.get(f"{self.base_url}/api/heartbeat", timeout=1.0)
            latency = round((time.time() - t0) * 1000.0, 1)
            if resp.status_code == 200:
                self.is_connected = True
                self.last_ping_ms = latency
                self.last_heartbeat_time = time.time()
                return {
                    "ok": True,
                    "connected": True,
                    "ping_ms": latency,
                    "esp32_status": resp.json()
                }
        except Exception:
            pass
        self.is_connected = False
        self.last_ping_ms = None
        return {
            "ok": False,
            "connected": False,
            "ping_ms": None,
            "error": "ESP32 heartbeat failed: target unreachable"
        }

    def send_motor_command(self, cmd: MotorCommand) -> ESP32CommandResponse:
        """Dispatches motor motion to ESP32."""
        url = f"{self.base_url}/api/command"
        payload = {
            "command_id": cmd.command_id,
            "type": "move",
            "direction": cmd.direction,
            "speed": cmd.speed,
            "duration_ms": cmd.duration_ms
        }

        try:
            resp = requests.post(url, json=payload, timeout=self.timeout)
            if resp.status_code == 200:
                data = resp.json()
                self.is_connected = True
                return ESP32CommandResponse(
                    command_id=cmd.command_id,
                    accepted=data.get("accepted", True),
                    executed=data.get("executed", True),
                    timestamp_ms=data.get("timestamp_ms"),
                    message=data.get("message", "Move acknowledged"),
                    hardware_status=HardwareStatus(motors=data.get("message", "MOVING"))
                )
            else:
                return ESP32CommandResponse(
                    command_id=cmd.command_id,
                    accepted=False,
                    executed=False,
                    message=f"ESP32 HTTP Error: {resp.status_code}",
                    error_code="HTTP_ERROR"
                )
        except requests.exceptions.RequestException as e:
            self.is_connected = False
            logger.error(f"Cannot reach ESP32 at {self.base_url}: {e}")
            return ESP32CommandResponse(
                command_id=cmd.command_id,
                accepted=False,
                executed=False,
                message="ESP32 disconnected / unreachable",
                error_code="ESP32_DISCONNECTED"
            )

    def send_spray_command(self, cmd: SprayCommand) -> ESP32CommandResponse:
        """Dispatches authorized precision spray pulse to ESP32."""
        url = f"{self.base_url}/api/command"
        payload = {
            "command_id": cmd.command_id,
            "type": "spray",
            "duration_ms": cmd.duration_ms,
            "approval_token": cmd.approval_token
        }

        try:
            resp = requests.post(url, json=payload, timeout=self.timeout)
            data = resp.json() if resp.status_code in (200, 401, 403) else {}
            if resp.status_code == 200:
                self.is_connected = True
                return ESP32CommandResponse(
                    command_id=cmd.command_id,
                    accepted=True,
                    executed=True,
                    timestamp_ms=data.get("timestamp_ms"),
                    message=data.get("message", "Spray pulse engaged"),
                    hardware_status=HardwareStatus(pump="ON", valve="OPEN", spray_state="ACTIVE_SPRAYING")
                )
            elif resp.status_code == 401:
                return ESP32CommandResponse(
                    command_id=cmd.command_id,
                    accepted=False,
                    executed=False,
                    message="Rejected: Missing or invalid farmer approval token",
                    error_code="UNAUTHORIZED"
                )
            else:
                return ESP32CommandResponse(
                    command_id=cmd.command_id,
                    accepted=False,
                    executed=False,
                    message=data.get("error", f"ESP32 error status: {resp.status_code}"),
                    error_code="EXECUTION_FAILED"
                )
        except requests.exceptions.RequestException as e:
            self.is_connected = False
            return ESP32CommandResponse(
                command_id=cmd.command_id,
                accepted=False,
                executed=False,
                message="ESP32 unreachable: Spray command NOT executed",
                error_code="ESP32_DISCONNECTED"
            )

    def send_emergency_stop(self) -> ESP32CommandResponse:
        """Sends instant Emergency Stop command."""
        url = f"{self.base_url}/api/command"
        payload = {"command_id": f"CMD-ESTOP-{int(time.time())}", "type": "estop"}
        try:
            resp = requests.post(url, json=payload, timeout=1.0)
            if resp.status_code == 200:
                return ESP32CommandResponse(
                    command_id=payload["command_id"],
                    accepted=True,
                    executed=True,
                    message="EMERGENCY STOP EXECUTED",
                    hardware_status=HardwareStatus(motors="STOPPED", pump="OFF", valve="CLOSED", estop_active=True)
                )
        except Exception:
            pass
        return ESP32CommandResponse(
            command_id=payload["command_id"],
            accepted=False,
            executed=False,
            message="ESP32 unreachable during E-stop dispatch",
            error_code="ESP32_DISCONNECTED"
        )

    def fetch_real_telemetry(self) -> Dict[str, Any]:
        """
        Polls real hardware sensors from physical ESP32.
        If ESP32 is offline, strictly reports disconnected state without fabricating numbers.
        """
        try:
            resp = requests.get(f"{self.base_url}/api/telemetry", timeout=self.timeout)
            if resp.status_code == 200:
                data = resp.json()
                self.is_connected = True
                self.last_telemetry = data
                self.last_telemetry_time = time.time()
                data["esp32_connected"] = True
                return data
        except Exception as e:
            logger.debug(f"Telemetry poll failed: {e}")

        self.is_connected = False
        return {
            "esp32_connected": False,
            "status": "DISCONNECTED",
            "message": "ESP32 hardware controller unreachable over Wi-Fi",
            "battery_voltage": None,
            "battery_percentage": None,
            "motors": {"state": "DISCONNECTED", "speed": 0},
            "actuators": {"pump_active": False, "valve_open": False, "flow_rate_ml_s": 0.0},
            "sensors": {
                "ultrasonic": {"valid": False, "distance_cm": None, "error": "Sensor unavailable"},
                "soil_moisture": {"valid": False, "moisture_pct": None, "error": "Sensor unavailable"},
                "environment": {"valid": False, "temperature_c": None, "humidity_pct": None, "error": "Sensor unavailable"},
                "imu": {"valid": False, "pitch_deg": None, "roll_deg": None, "error": "Sensor unavailable"},
                "npk": {"valid": False, "nitrogen_mg_kg": None, "phosphorus_mg_kg": None, "potassium_mg_kg": None, "error": "Sensor unavailable"}
            }
        }
