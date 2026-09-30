"""
AgriGuard — Abstract Robot Transport Layer
Provides extensible transport abstraction:
  RobotTransport (ABC)
    ├── WiFiTransport (Active primary field transport)
    ├── BluetoothTransport (BLE future fallback)
    └── MockSimulationTransport (Explicit test sandbox only)
"""

from abc import ABC, abstractmethod
import time
import logging
from typing import Dict, Any, Optional
import requests

from backend.communication.protocol import (
    RobotMovementCommand,
    StandardSprayCommand,
    ESP32CommandResponse,
    HardwareStatus
)

logger = logging.getLogger("RobotTransport")


class RobotTransport(ABC):
    """Abstract interface for all hardware robot communication transports."""

    @abstractmethod
    def connect(self) -> bool:
        """Establishes or verifies connection to physical controller."""
        pass

    @abstractmethod
    def disconnect(self) -> None:
        """Closes transport connection safely."""
        pass

    @abstractmethod
    def is_connected(self) -> bool:
        """Returns True if controller is reachable."""
        pass

    @abstractmethod
    def send_command(self, payload: Dict[str, Any]) -> ESP32CommandResponse:
        """Sends machine-readable command payload to robot."""
        pass

    @abstractmethod
    def receive_telemetry(self) -> Dict[str, Any]:
        """Fetches real-time sensor and actuator telemetry from robot."""
        pass

    @abstractmethod
    def send_heartbeat(self) -> Dict[str, Any]:
        """Dispatches keep-alive heartbeat to prevent watchdog trip."""
        pass


class WiFiTransport(RobotTransport):
    """
    Primary Wi-Fi Transport for ESP32 hardware.
    Supports Option A (SoftAP at 192.168.4.1) and Option B (Local network router/hotspot).
    """
    name = "Wi-Fi"

    def __init__(self, ip: str = "192.168.4.1", port: int = 80, timeout: float = 2.0):
        self.ip = ip.strip()
        self.port = port
        self.timeout = timeout
        self._connected = False
        self.last_ping_ms: Optional[float] = None
        self.last_telemetry: Optional[Dict[str, Any]] = None

    @property
    def base_url(self) -> str:
        return f"http://{self.ip}:{self.port}"

    def set_endpoint(self, ip: str, port: int = 80):
        self.ip = ip.strip()
        self.port = port
        self._connected = False
        logger.info(f"[WiFiTransport] Target updated to {self.base_url}")

    def connect(self) -> bool:
        t0 = time.time()
        try:
            resp = requests.get(f"{self.base_url}/api/status", timeout=self.timeout)
            if resp.status_code == 200:
                self._connected = True
                self.last_ping_ms = round((time.time() - t0) * 1000.0, 1)
                return True
        except Exception as e:
            logger.debug(f"[WiFiTransport] Connect check failed: {e}")
        self._connected = False
        self.last_ping_ms = None
        return False

    def disconnect(self) -> None:
        self._connected = False
        logger.info("[WiFiTransport] Transport marked disconnected.")

    def is_connected(self) -> bool:
        return self._connected

    def send_heartbeat(self) -> Dict[str, Any]:
        t0 = time.time()
        try:
            resp = requests.get(f"{self.base_url}/api/heartbeat", timeout=1.2)
            latency = round((time.time() - t0) * 1000.0, 1)
            if resp.status_code == 200:
                self._connected = True
                self.last_ping_ms = latency
                return {
                    "ok": True,
                    "connected": True,
                    "ping_ms": latency,
                    "esp32_status": resp.json()
                }
        except Exception:
            pass
        self._connected = False
        self.last_ping_ms = None
        return {
            "ok": False,
            "connected": False,
            "ping_ms": None,
            "error": "ESP32 heartbeat failed: Unreachable over local Wi-Fi"
        }

    def send_command(self, payload: Dict[str, Any]) -> ESP32CommandResponse:
        url = f"{self.base_url}/api/command"
        cmd_id = payload.get("command_id", f"CMD-{int(time.time()*1000)}")

        try:
            resp = requests.post(url, json=payload, timeout=self.timeout)
            data = resp.json() if resp.status_code in (200, 400, 401, 403, 409) else {}
            if resp.status_code == 200:
                self._connected = True
                return ESP32CommandResponse(
                    command_id=cmd_id,
                    accepted=data.get("accepted", True),
                    executed=data.get("executed", True),
                    timestamp_ms=data.get("timestamp_ms"),
                    message=data.get("message", "Command executed"),
                    hardware_status=HardwareStatus(
                        motors=data.get("motor_state", "NOMINAL"),
                        pump=data.get("spray_state", "OFF")
                    )
                )
            elif resp.status_code == 409:
                # Obstacle safety event returned from ESP32
                return ESP32CommandResponse(
                    command_id=cmd_id,
                    accepted=False,
                    executed=False,
                    message=data.get("error", "Obstacle detected in path"),
                    error_code="OBSTACLE_DETECTED",
                    safety_event=data
                )
            elif resp.status_code == 401:
                return ESP32CommandResponse(
                    command_id=cmd_id,
                    accepted=False,
                    executed=False,
                    message=data.get("error", "Unauthorized: Approval token required"),
                    error_code="UNAUTHORIZED"
                )
            elif resp.status_code == 403:
                return ESP32CommandResponse(
                    command_id=cmd_id,
                    accepted=False,
                    executed=False,
                    message=data.get("error", "Rejected: Emergency Stop active"),
                    error_code="ESTOP_ACTIVE"
                )
            else:
                return ESP32CommandResponse(
                    command_id=cmd_id,
                    accepted=False,
                    executed=False,
                    message=data.get("message", f"HTTP Error {resp.status_code}"),
                    error_code="HTTP_ERROR"
                )
        except requests.exceptions.RequestException as e:
            self._connected = False
            return ESP32CommandResponse(
                command_id=cmd_id,
                accepted=False,
                executed=False,
                message=f"ESP32 unreachable at {self.base_url}",
                error_code="ESP32_DISCONNECTED"
            )

    def receive_telemetry(self) -> Dict[str, Any]:
        try:
            resp = requests.get(f"{self.base_url}/api/telemetry", timeout=self.timeout)
            if resp.status_code == 200:
                data = resp.json()
                self._connected = True
                self.last_telemetry = data
                data["esp32_connected"] = True
                return data
        except Exception:
            pass

        self._connected = False
        return {
            "esp32_connected": False,
            "status": "DISCONNECTED",
            "message": f"Physical ESP32 unreachable at {self.base_url}",
            "battery_voltage": None,
            "battery_percentage": None,
            "ultrasonic_front": None,
            "soil_moisture": None,
            "temperature": None,
            "humidity": None,
            "pump": False,
            "valve": False,
            "npk": {
                "n": None,
                "p": None,
                "k": None,
                "valid": False,
                "error": "ESP32 offline"
            },
            "safety": {
                "estop_active": False,
                "watchdog_tripped": False,
                "obstacle_detected": False
            },
            "motors": {"state": "DISCONNECTED", "speed": 0},
            "actuators": {"pump_active": False, "valve_open": False, "flow_rate_ml_s": 0.0},
            "sensors": {
                "ultrasonic": {"valid": False, "distance_cm": None, "error": "Offline"},
                "soil_moisture": {"valid": False, "moisture_pct": None, "error": "Offline"},
                "environment": {"valid": False, "temperature_c": None, "humidity_pct": None, "error": "Offline"},
                "imu": {"valid": False, "pitch_deg": None, "roll_deg": None, "error": "Offline"},
                "npk": {"valid": False, "nitrogen_mg_kg": None, "phosphorus_mg_kg": None, "potassium_mg_kg": None, "error": "Offline"}
            }
        }


class BluetoothTransport(RobotTransport):
    """
    Bluetooth Low Energy (BLE) / Serial transport stub.
    Reserved for future direct Bluetooth pairing when Wi-Fi is unavailable in remote fields.
    """
    name = "Bluetooth BLE"

    def __init__(self, device_address: str = ""):
        self.device_address = device_address
        self._connected = False

    def connect(self) -> bool:
        logger.info("[BluetoothTransport] Bluetooth LE fallback is in standby mode. Wi-Fi is primary.")
        return False

    def disconnect(self) -> None:
        self._connected = False

    def is_connected(self) -> bool:
        return False

    def send_command(self, payload: Dict[str, Any]) -> ESP32CommandResponse:
        return ESP32CommandResponse(
            command_id=payload.get("command_id", "CMD-BT"),
            accepted=False,
            executed=False,
            message="Bluetooth transport standby: Please connect via Wi-Fi",
            error_code="TRANSPORT_UNAVAILABLE"
        )

    def receive_telemetry(self) -> Dict[str, Any]:
        return {
            "esp32_connected": False,
            "status": "BLUETOOTH_STANDBY",
            "message": "Bluetooth transport in standby; Wi-Fi is active transport"
        }

    def send_heartbeat(self) -> Dict[str, Any]:
        return {"ok": False, "connected": False, "transport": "bluetooth"}


class MockSimulationTransport(RobotTransport):
    """
    Explicit simulation transport for development and algorithmic bench testing.
    Active ONLY when operator explicitly toggles SIMULATION mode in the UI.
    """
    name = "MockSimulation"

    def __init__(self):
        self._connected = True
        self._motor_state = "STOPPED"
        self._speed = 120
        self._pump = False
        self._valve = False
        self._estop = False

    def connect(self) -> bool:
        self._connected = True
        return True

    def disconnect(self) -> None:
        self._connected = False

    def is_connected(self) -> bool:
        return self._connected

    def send_heartbeat(self) -> Dict[str, Any]:
        return {
            "ok": True,
            "connected": True,
            "ping_ms": 1.2,
            "simulation": True
        }

    def send_command(self, payload: Dict[str, Any]) -> ESP32CommandResponse:
        cmd_id = payload.get("command_id", "CMD-SIM")
        cmd_type = payload.get("type", "")
        cmd = payload.get("command", "")

        if cmd_type == "estop" or cmd == "EMERGENCY_STOP":
            self._estop = True
            self._motor_state = "STOPPED"
            self._pump = False
            self._valve = False
            return ESP32CommandResponse(command_id=cmd_id, accepted=True, executed=True, message="SIM E-STOP ACTIVE")

        if cmd_type == "reset_estop" or (cmd == "STOP" and self._estop):
            self._estop = False
            return ESP32CommandResponse(command_id=cmd_id, accepted=True, executed=True, message="SIM E-STOP RESET")

        if self._estop:
            return ESP32CommandResponse(command_id=cmd_id, accepted=False, executed=False, message="Sim E-Stop Active")

        if cmd_type in ("robot_command", "move"):
            motion = cmd.upper() if cmd else payload.get("direction", "stop").upper()
            if motion in ("FORWARD", "BACKWARD", "LEFT", "RIGHT", "STOP"):
                self._motor_state = "STOPPED" if motion == "STOP" else f"MOVING_{motion}"
                return ESP32CommandResponse(command_id=cmd_id, accepted=True, executed=True, message=f"Sim motor {motion}")

        if cmd_type in ("spray_command", "spray"):
            token = payload.get("approval_token", "")
            if len(token) >= 4:
                self._pump = True
                self._valve = True
                return ESP32CommandResponse(command_id=cmd_id, accepted=True, executed=True, message="Sim spray actuated")
            return ESP32CommandResponse(command_id=cmd_id, accepted=False, executed=False, message="Sim spray rejected: No token")

        return ESP32CommandResponse(command_id=cmd_id, accepted=True, executed=True, message="Sim executed")

    def receive_telemetry(self) -> Dict[str, Any]:
        return {
            "esp32_connected": True,
            "simulation_mode": True,
            "battery_voltage": 12.3,
            "battery_percentage": 85,
            "ultrasonic_front": 85.0,
            "soil_moisture": 42.0,
            "temperature": 27.8,
            "humidity": 64.0,
            "pump": self._pump,
            "valve": self._valve,
            "npk": {"n": 52, "p": 34, "k": 48, "valid": True},
            "safety": {
                "estop_active": self._estop,
                "watchdog_tripped": False,
                "obstacle_detected": False
            },
            "motors": {"state": self._motor_state, "speed": self._speed},
            "actuators": {"pump_active": self._pump, "valve_open": self._valve, "flow_rate_ml_s": 15.0 if self._pump else 0.0},
            "sensors": {
                "ultrasonic": {"valid": True, "distance_cm": 85.0},
                "soil_moisture": {"valid": True, "moisture_pct": 42.0},
                "environment": {"valid": True, "temperature_c": 27.8, "humidity_pct": 64.0},
                "imu": {"valid": True, "pitch_deg": 1.2, "roll_deg": -0.8},
                "npk": {"valid": True, "nitrogen_mg_kg": 52, "phosphorus_mg_kg": 34, "potassium_mg_kg": 48}
            }
        }
