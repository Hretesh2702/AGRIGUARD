"""
AgriGuard — Abstract Robot Transport Layer
Provides extensible transport abstraction:
  RobotTransport (ABC)
    ├── WiFiTransport (Active primary field transport)
    ├── BluetoothTransport (BLE real transport via bleak)
    └── MockSimulationTransport (Explicit test sandbox only)
"""

from abc import ABC, abstractmethod
import time
import json
import asyncio
import logging
import threading
from typing import Dict, Any, Optional, List
import requests

from backend.communication.protocol import (
    RobotMovementCommand,
    StandardSprayCommand,
    ESP32CommandResponse,
    HardwareStatus
)

logger = logging.getLogger("RobotTransport")

# ── BLE UUIDs (must match firmware) ────────────────────────────────────────────
AGRIGUARD_BLE_SERVICE_UUID    = "12345678-1234-1234-1234-123456789abc"
AGRIGUARD_CMD_CHAR_UUID       = "12345678-1234-1234-1234-123456789ab1"  # Write
AGRIGUARD_TELEMETRY_CHAR_UUID = "12345678-1234-1234-1234-123456789ab2"  # Notify/Read
AGRIGUARD_BLE_DEVICE_NAME     = "AgriGuard-Robot"


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


# ───────────────────────────────────────────────────────────────────────────────
# Wi-Fi Transport (Primary)
# ───────────────────────────────────────────────────────────────────────────────

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


# ───────────────────────────────────────────────────────────────────────────────
# Bluetooth BLE Transport (Real — via bleak)
# ───────────────────────────────────────────────────────────────────────────────

class BluetoothScanner:
    """
    Async BLE device scanner helper.
    Run from a sync context via _run_in_thread().
    """

    @staticmethod
    async def _async_scan(timeout: float = 8.0) -> List[Dict[str, str]]:
        try:
            from bleak import BleakScanner
            devices = await BleakScanner.discover(timeout=timeout)
            return [
                {
                    "address": d.address,
                    "name": d.name or "Unknown",
                    "rssi": str(d.rssi) if hasattr(d, "rssi") else "N/A",
                    "is_agriguard": (d.name or "").startswith(AGRIGUARD_BLE_DEVICE_NAME)
                }
                for d in devices
            ]
        except Exception as e:
            logger.warning(f"[BluetoothScanner] Scan failed: {e}")
            return []

    @staticmethod
    def scan_sync(timeout: float = 8.0) -> List[Dict[str, str]]:
        """Synchronous wrapper — runs async scan in a dedicated event loop thread."""
        result: List[Dict[str, str]] = []

        def _thread_target():
            loop = asyncio.new_event_loop()
            asyncio.set_event_loop(loop)
            try:
                nonlocal result
                result = loop.run_until_complete(BluetoothScanner._async_scan(timeout))
            finally:
                loop.close()

        t = threading.Thread(target=_thread_target, daemon=True)
        t.start()
        t.join(timeout=timeout + 2.0)
        return result


class BluetoothTransport(RobotTransport):
    """
    Real Bluetooth Low Energy (BLE) transport for AgriGuard ESP32.
    Uses bleak for cross-platform BLE (Windows/macOS/Linux).
    Connects to the ESP32 BLE GATT server (AgriGuard-Robot device).

    Command GATT characteristic: write JSON command bytes.
    Telemetry GATT characteristic: read last JSON telemetry snapshot.
    """
    name = "Bluetooth BLE"

    def __init__(self, device_address: str = ""):
        self.device_address = device_address  # BLE MAC or UUID
        self._connected = False
        self._client = None           # bleak BleakClient instance
        self._last_telemetry: Optional[Dict[str, Any]] = None
        self.last_ping_ms: Optional[float] = None
        self._loop: Optional[asyncio.AbstractEventLoop] = None
        self._loop_thread: Optional[threading.Thread] = None
        self._start_background_loop()

    # ── Background asyncio loop (runs BLE in a dedicated thread) ───────────────

    def _start_background_loop(self):
        """Starts a persistent background asyncio event loop for BLE operations."""
        if self._loop_thread and self._loop_thread.is_alive():
            return
        self._loop = asyncio.new_event_loop()

        def _run_loop():
            asyncio.set_event_loop(self._loop)
            self._loop.run_forever()

        self._loop_thread = threading.Thread(target=_run_loop, daemon=True, name="BLE-EventLoop")
        self._loop_thread.start()

    def _run_async(self, coro):
        """Schedule a coroutine on the background BLE loop and block until done."""
        if self._loop is None or not self._loop.is_running():
            self._start_background_loop()
        fut = asyncio.run_coroutine_threadsafe(coro, self._loop)
        return fut.result(timeout=12.0)

    # ── Core BLE operations ────────────────────────────────────────────────────

    async def _async_connect(self) -> bool:
        try:
            from bleak import BleakClient, BleakError
            if not self.device_address:
                logger.warning("[BluetoothTransport] No device address set. Run scan first.")
                return False

            t0 = time.time()
            client = BleakClient(self.device_address, timeout=10.0)
            await client.connect()
            if client.is_connected:
                self._client = client
                self._connected = True
                self.last_ping_ms = round((time.time() - t0) * 1000.0, 1)
                logger.info(f"[BluetoothTransport] Connected to {self.device_address} in {self.last_ping_ms}ms")
                return True
        except Exception as e:
            logger.warning(f"[BluetoothTransport] Connect failed: {e}")
        self._connected = False
        self.last_ping_ms = None
        return False

    async def _async_disconnect(self):
        try:
            if self._client and self._client.is_connected:
                await self._client.disconnect()
        except Exception:
            pass
        self._client = None
        self._connected = False

    async def _async_write_command(self, payload: Dict[str, Any]) -> bool:
        """Writes a JSON command to the ESP32 command GATT characteristic."""
        try:
            if not self._client or not self._client.is_connected:
                return False
            raw = json.dumps(payload).encode("utf-8")
            await self._client.write_gatt_char(
                AGRIGUARD_CMD_CHAR_UUID,
                raw,
                response=True
            )
            return True
        except Exception as e:
            logger.warning(f"[BluetoothTransport] Write failed: {e}")
            self._connected = False
            return False

    async def _async_read_telemetry(self) -> Optional[Dict[str, Any]]:
        """Reads JSON telemetry from the ESP32 telemetry GATT characteristic."""
        try:
            if not self._client or not self._client.is_connected:
                return None
            raw = await self._client.read_gatt_char(AGRIGUARD_TELEMETRY_CHAR_UUID)
            data = json.loads(raw.decode("utf-8"))
            data["esp32_connected"] = True
            data["transport"] = "bluetooth"
            return data
        except Exception as e:
            logger.warning(f"[BluetoothTransport] Read telemetry failed: {e}")
            self._connected = False
            return None

    # ── RobotTransport interface ───────────────────────────────────────────────

    def set_device(self, address: str):
        """Update the target BLE device address."""
        self.device_address = address
        self._connected = False
        logger.info(f"[BluetoothTransport] Target BLE device set to: {address}")

    def connect(self) -> bool:
        try:
            return self._run_async(self._async_connect())
        except Exception as e:
            logger.warning(f"[BluetoothTransport] connect() error: {e}")
            return False

    def disconnect(self) -> None:
        try:
            self._run_async(self._async_disconnect())
        except Exception:
            pass

    def is_connected(self) -> bool:
        if self._client is None:
            return False
        try:
            return self._client.is_connected and self._connected
        except Exception:
            return False

    def send_heartbeat(self) -> Dict[str, Any]:
        ok = False
        try:
            ok = self._run_async(self._async_write_command({
                "type": "heartbeat",
                "timestamp": time.time()
            }))
        except Exception:
            pass
        if ok:
            return {"ok": True, "connected": True, "transport": "bluetooth", "ping_ms": self.last_ping_ms}
        return {"ok": False, "connected": False, "transport": "bluetooth"}

    def send_command(self, payload: Dict[str, Any]) -> ESP32CommandResponse:
        cmd_id = payload.get("command_id", f"CMD-BT-{int(time.time()*1000)}")
        try:
            ok = self._run_async(self._async_write_command(payload))
            if ok:
                return ESP32CommandResponse(
                    command_id=cmd_id,
                    accepted=True,
                    executed=True,
                    message="BLE command sent to AgriGuard ESP32"
                )
        except Exception as e:
            logger.warning(f"[BluetoothTransport] send_command failed: {e}")
            self._connected = False

        return ESP32CommandResponse(
            command_id=cmd_id,
            accepted=False,
            executed=False,
            message="Bluetooth command failed: device unreachable",
            error_code="BLE_DISCONNECTED"
        )

    def receive_telemetry(self) -> Dict[str, Any]:
        _disconnected_stub = {
            "esp32_connected": False,
            "status": "BLE_DISCONNECTED",
            "transport": "bluetooth",
            "message": "AgriGuard BLE device not connected",
            "battery_voltage": None,
            "battery_percentage": None,
            "ultrasonic_front": None,
            "soil_moisture": None,
            "temperature": None,
            "humidity": None,
            "pump": False,
            "valve": False,
            "npk": {"n": None, "p": None, "k": None, "valid": False},
            "safety": {"estop_active": False, "watchdog_tripped": False, "obstacle_detected": False},
            "motors": {"state": "DISCONNECTED", "speed": 0},
            "actuators": {"pump_active": False, "valve_open": False, "flow_rate_ml_s": 0.0},
            "sensors": {
                "ultrasonic": {"valid": False, "distance_cm": None},
                "soil_moisture": {"valid": False, "moisture_pct": None},
                "environment": {"valid": False, "temperature_c": None, "humidity_pct": None},
                "imu": {"valid": False, "pitch_deg": None, "roll_deg": None},
                "npk": {"valid": False}
            }
        }
        try:
            data = self._run_async(self._async_read_telemetry())
            if data:
                self._last_telemetry = data
                return data
        except Exception:
            self._connected = False
        return _disconnected_stub


# ───────────────────────────────────────────────────────────────────────────────
# Mock Simulation Transport (Development / Bench testing only)
# ───────────────────────────────────────────────────────────────────────────────

class MockSimulationTransport(RobotTransport):
    """
    Explicit simulation transport for development and algorithmic bench testing.
    Uses SimulationTelemetryProvider to generate continuous, smoothly-varying telemetry.
    Strictly reports esp32_connected as False (simulation mode).
    """
    name = "MockSimulation"

    def __init__(self):
        self._connected = True
        self._motor_state = "STOPPED"
        self._speed = 120
        self._estop = False

    def connect(self) -> bool:
        self._connected = True
        return True

    def disconnect(self) -> None:
        self._connected = False

    def is_connected(self) -> bool:
        # Physical ESP32 is NOT connected in simulation
        return False

    def send_heartbeat(self) -> Dict[str, Any]:
        return {
            "ok": True,
            "connected": True,
            "ping_ms": 1.2,
            "simulation": True
        }

    def send_command(self, payload: Dict[str, Any]) -> ESP32CommandResponse:
        from backend.sensors.telemetry_provider import simulation_telemetry_provider

        cmd_id = payload.get("command_id", "CMD-SIM")
        cmd_type = payload.get("type", "")
        cmd = payload.get("command", "")
        action = payload.get("action", "")

        if cmd_type == "estop" or cmd == "EMERGENCY_STOP":
            self._estop = True
            self._motor_state = "STOPPED"
            simulation_telemetry_provider.set_pump(False)
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

        if cmd_type in ("spray_command", "spray", "pump") or action in ("pump_on", "pump_off", "spray_pulse"):
            if action == "pump_on" or payload.get("active") is True or payload.get("pump") == "ON" or cmd == "PUMP_ON":
                simulation_telemetry_provider.set_pump(True)
                return ESP32CommandResponse(command_id=cmd_id, accepted=True, executed=True, message="Simulated Pump & Relay ON")
            elif action == "pump_off" or payload.get("active") is False or payload.get("pump") == "OFF" or cmd == "PUMP_OFF":
                simulation_telemetry_provider.set_pump(False)
                return ESP32CommandResponse(command_id=cmd_id, accepted=True, executed=True, message="Simulated Pump & Relay OFF")
            else:
                token = payload.get("approval_token", "")
                if len(token) >= 4 or payload.get("force"):
                    simulation_telemetry_provider.set_pump(True)
                    return ESP32CommandResponse(command_id=cmd_id, accepted=True, executed=True, message="Simulated spray actuated")
                return ESP32CommandResponse(command_id=cmd_id, accepted=False, executed=False, message="Sim spray rejected: No token")

        return ESP32CommandResponse(command_id=cmd_id, accepted=True, executed=True, message="Sim executed")

    def receive_telemetry(self) -> Dict[str, Any]:
        from backend.sensors.telemetry_provider import simulation_telemetry_provider
        data = simulation_telemetry_provider.get_telemetry()
        data["motors"] = {"state": self._motor_state, "speed": self._speed}
        data["actuators"]["motor_state"] = self._motor_state
        data["actuators"]["motor_speed"] = self._speed
        data["safety"]["emergency_stop"] = self._estop
        data["safety"]["estop_active"] = self._estop
        if self._estop:
            data["safety"]["robot_status"] = "EMERGENCY_STOP"
        return data
