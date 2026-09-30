"""
AgriGuard — Robot Hardware Communication Protocol
Structured command and response schemas with strict safety validation.
"""

from typing import Dict, Any, Optional, Tuple
from dataclasses import dataclass, asdict
import uuid
import time


class CommandType:
    MOVE = "move"
    STOP = "stop"
    SET_SPEED = "set_speed"
    SPRAY_START = "spray_start"
    SPRAY_STOP = "spray_stop"
    READ_SENSORS = "read_sensors"
    READ_STATUS = "read_status"
    EMERGENCY_STOP = "emergency_stop"
    PING = "ping"


class MoveAction:
    FORWARD = "forward"
    BACKWARD = "backward"
    LEFT = "left"
    RIGHT = "right"
    STOP = "stop"


@dataclass
class RobotCommand:
    type: str
    action: Optional[str] = None
    speed: int = 120
    duration_ms: int = 0
    approval_token: Optional[str] = None
    request_id: str = ""

    def __post_init__(self):
        if not self.request_id:
            self.request_id = f"cmd_{uuid.uuid4().hex[:8]}"

    def to_dict(self) -> Dict[str, Any]:
        return asdict(self)

    @classmethod
    def create_move(cls, action: str, speed: int = 120, duration_ms: int = 0) -> "RobotCommand":
        if action not in (MoveAction.FORWARD, MoveAction.BACKWARD, MoveAction.LEFT, MoveAction.RIGHT, MoveAction.STOP):
            raise ValueError(f"Invalid move action: {action}")
        speed = max(0, min(255, speed))
        return cls(type=CommandType.MOVE, action=action, speed=speed, duration_ms=duration_ms)

    @classmethod
    def create_stop(cls) -> "RobotCommand":
        return cls(type=CommandType.STOP, action=MoveAction.STOP, speed=0)

    @classmethod
    def create_emergency_stop(cls) -> "RobotCommand":
        return cls(type=CommandType.EMERGENCY_STOP, action="estop", speed=0)

    @classmethod
    def create_spray_start(cls, duration_ms: int, approval_token: str) -> "RobotCommand":
        if not approval_token:
            raise ValueError("Safety violation: spray_start command requires a valid farmer approval token.")
        duration_ms = max(500, min(10000, duration_ms))  # Safety clamped: 0.5s to 10s max
        return cls(type=CommandType.SPRAY_START, duration_ms=duration_ms, approval_token=approval_token)

    @classmethod
    def create_spray_stop(cls) -> "RobotCommand":
        return cls(type=CommandType.SPRAY_STOP)


@dataclass
class RobotResponse:
    request_id: str
    type: str
    ok: bool
    message: str = ""
    battery_v: float = 12.2
    battery_pct: float = 85.0
    motor_state: str = "STOPPED"
    spray_state: str = "OFF"
    estop_active: bool = False
    timestamp: float = 0.0
    telemetry: Optional[Dict[str, Any]] = None

    def __post_init__(self):
        if not self.timestamp:
            self.timestamp = time.time()

    def to_dict(self) -> Dict[str, Any]:
        return asdict(self)


def validate_incoming_command(data: Dict[str, Any]) -> Tuple[bool, str]:
    """Validates raw JSON incoming from network before dispatch."""
    cmd_type = data.get("type")
    valid_types = [
        CommandType.MOVE, CommandType.STOP, CommandType.SET_SPEED,
        CommandType.SPRAY_START, CommandType.SPRAY_STOP, CommandType.READ_SENSORS,
        CommandType.READ_STATUS, CommandType.EMERGENCY_STOP, CommandType.PING
    ]
    if cmd_type not in valid_types:
        return False, f"Unknown command type: {cmd_type}"

    if cmd_type == CommandType.SPRAY_START and not data.get("approval_token"):
        return False, "Spray actuation requires explicit approval_token."

    return True, "Valid"
