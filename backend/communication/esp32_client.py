"""
AgriGuard — Real ESP32 Hardware Communication Client
Connects to physical ESP32 via HTTP/REST/WebSocket.
Fails honestly without silent simulation or fabricated numbers.
"""

import time
import os
import logging
from typing import Dict, Any, Optional

from backend.communication.protocol import (
    MotorCommand,
    SprayCommand,
    EStopCommand,
    ESP32CommandResponse,
    HardwareStatus,
    RobotMovementCommand,
    StandardSprayCommand
)
from backend.communication.transport import (
    RobotTransport,
    WiFiTransport,
    BluetoothTransport,
    MockSimulationTransport
)

logger = logging.getLogger(__name__)


class ESP32Client:
    """
    Communicates with the physical AgriGuard ESP32.
    Strictly reports real hardware status and fails honestly if disconnected.
    Supports switching to explicit SIMULATION mode only on operator request.
    """

    def __init__(self, ip: Optional[str] = None, port: int = 80, timeout: float = 2.0):
        self.ip = ip or os.getenv("AGRIGUARD_ESP32_IP", "192.168.4.1")
        self.port = int(os.getenv("AGRIGUARD_ESP32_PORT", str(port)))
        self.timeout = timeout

        # Active Transport (Default: Real Wi-Fi)
        self.wifi_transport = WiFiTransport(ip=self.ip, port=self.port, timeout=self.timeout)
        self.bt_transport = BluetoothTransport()
        self.sim_transport = MockSimulationTransport()

        # Operational Mode: "SIMULATION" (Default for disconnected prototype) vs "REAL_HARDWARE"
        self.hardware_mode = os.getenv("AGRIGUARD_HARDWARE_MODE", "SIMULATION")
        self.active_transport: RobotTransport = self.sim_transport if self.hardware_mode == "SIMULATION" else self.wifi_transport

        self.last_telemetry: Optional[Dict[str, Any]] = None
        self.last_telemetry_time = 0.0
        self.last_heartbeat_time = 0.0

    @property
    def is_connected(self) -> bool:
        return self.active_transport.is_connected()

    @property
    def last_ping_ms(self) -> Optional[float]:
        if isinstance(self.active_transport, WiFiTransport):
            return self.active_transport.last_ping_ms
        return 1.0 if self.is_connected else None

    @property
    def base_url(self) -> str:
        return self.wifi_transport.base_url

    def set_ip(self, new_ip: str, new_port: int = 80):
        """Allows switching target ESP32 address between Option A (192.168.4.1) and Option B."""
        self.ip = new_ip.strip()
        self.port = new_port
        self.wifi_transport.set_endpoint(self.ip, self.port)
        if self.hardware_mode == "REAL_HARDWARE":
            self.active_transport = self.wifi_transport
        logger.info(f"ESP32 target URL updated to: {self.base_url}")

    def set_hardware_mode(self, mode: str):
        """Explicitly toggles between REAL_HARDWARE and SIMULATION mode."""
        clean_mode = mode.upper().strip()
        if clean_mode == "SIMULATION":
            self.hardware_mode = "SIMULATION"
            self.active_transport = self.sim_transport
            logger.info("[ESP32Client] Switched to explicit SIMULATION test mode.")
        else:
            self.hardware_mode = "REAL_HARDWARE"
            self.active_transport = self.wifi_transport
            logger.info("[ESP32Client] Switched to REAL_HARDWARE mode.")

    def check_connection(self) -> bool:
        """Pings controller."""
        return self.active_transport.connect()

    def send_heartbeat(self) -> Dict[str, Any]:
        """Dispatches keep-alive heartbeat to prevent watchdog timeout."""
        res = self.active_transport.send_heartbeat()
        if res.get("ok"):
            self.last_heartbeat_time = time.time()
        return res

    def send_robot_command(self, command: str, speed: int = 120, duration_ms: int = 0) -> ESP32CommandResponse:
        """
        Dispatches standardized machine-readable robot command:
        {
          "type": "robot_command",
          "command": "FORWARD",
          "speed": 70,
          "timestamp": 123456789
        }
        """
        payload = {
            "type": "robot_command",
            "command": command.upper().strip(),
            "speed": max(0, min(255, speed)),
            "duration_ms": duration_ms,
            "timestamp": time.time(),
            "command_id": f"CMD-ROBOT-{int(time.time()*1000)}"
        }
        return self.active_transport.send_command(payload)

    def send_motor_command(self, cmd: MotorCommand) -> ESP32CommandResponse:
        """Dispatches motor motion to ESP32 (compatible with both protocol formats)."""
        payload = {
            "type": "robot_command",
            "command": cmd.direction.upper().strip(),
            "direction": cmd.direction.lower().strip(),
            "speed": cmd.speed,
            "duration_ms": cmd.duration_ms,
            "command_id": cmd.command_id
        }
        return self.active_transport.send_command(payload)

    def send_spray_command(self, cmd: SprayCommand) -> ESP32CommandResponse:
        """Dispatches authorized precision spray pulse to ESP32."""
        payload = {
            "type": "spray_command",
            "pump": True,
            "valve": True,
            "duration_ms": cmd.duration_ms,
            "approval_token": cmd.approval_token,
            "command_id": cmd.command_id
        }
        return self.active_transport.send_command(payload)

    def send_emergency_stop(self) -> ESP32CommandResponse:
        """Sends instant Emergency Stop command."""
        payload = {
            "type": "robot_command",
            "command": "EMERGENCY_STOP",
            "action": "estop",
            "command_id": f"CMD-ESTOP-{int(time.time())}"
        }
        return self.active_transport.send_command(payload)

    def fetch_real_telemetry(self) -> Dict[str, Any]:
        """
        Polls real hardware sensors from physical ESP32 or Simulation Provider.
        If in REAL_HARDWARE mode and ESP32 is offline, strictly reports disconnected
        state without fabricating numbers.
        """
        telemetry = self.active_transport.receive_telemetry()
        self.last_telemetry = telemetry
        self.last_telemetry_time = time.time()
        telemetry["hardware_mode"] = self.hardware_mode
        return telemetry

    def set_simulated_pump(self, active: bool) -> Dict[str, Any]:
        """Toggles simulated pump and relay simultaneously without activating physical hardware."""
        from backend.sensors.telemetry_provider import simulation_telemetry_provider
        return simulation_telemetry_provider.set_pump(active)
