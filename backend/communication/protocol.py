"""
AgriGuard — Hardware Communication Protocol & Payload Definitions
Implements clean machine-readable schemas for physical ESP32 and web dashboard.
"""

from typing import Dict, Any, Optional, List
from pydantic import BaseModel, Field
import uuid
import time


class RobotMovementCommand(BaseModel):
    """
    Standard machine-readable robot movement command requested by user:
    {
      "type": "robot_command",
      "command": "FORWARD" | "BACKWARD" | "LEFT" | "RIGHT" | "STOP" | "SPEED_UP" | "SPEED_DOWN",
      "speed": 70,
      "timestamp": 123456789
    }
    """
    type: str = "robot_command"
    command: str = Field(..., description="FORWARD, BACKWARD, LEFT, RIGHT, STOP, SPEED_UP, SPEED_DOWN")
    speed: int = Field(default=120, ge=0, le=255)
    duration_ms: Optional[int] = Field(default=0, ge=0)
    timestamp: Optional[float] = Field(default_factory=time.time)
    command_id: str = Field(default_factory=lambda: f"CMD-ROBOT-{uuid.uuid4().hex[:6].upper()}")


class StandardSprayCommand(BaseModel):
    """
    Standard machine-readable spray command requested by user:
    {
      "type": "spray_command",
      "pump": true,
      "valve": true,
      "duration_ms": 2500,
      "approval_token": "..."
    }
    """
    type: str = "spray_command"
    pump: bool = True
    valve: bool = True
    duration_ms: int = Field(default=2500, ge=500, le=6000)
    approval_token: str = Field(..., min_length=4, description="Farmer cryptographic or verified approval token")
    timestamp: Optional[float] = Field(default_factory=time.time)
    command_id: str = Field(default_factory=lambda: f"CMD-SPRAY-{uuid.uuid4().hex[:6].upper()}")


class SafetyEvent(BaseModel):
    """
    Safety event emitted by ESP32 or gateway:
    {
      "type": "safety_event",
      "event": "OBSTACLE_DETECTED",
      "distance": 18
    }
    """
    type: str = "safety_event"
    event: str = Field(..., description="OBSTACLE_DETECTED, WATCHDOG_TIMEOUT, ESTOP_ENGAGED")
    distance: Optional[float] = None
    timestamp: float = Field(default_factory=time.time)
    message: str = ""


# Legacy aliases preserved for backward compatibility
class MotorCommand(BaseModel):
    direction: str = Field(..., description="forward, backward, left, right, stop")
    speed: int = Field(default=120, ge=0, le=255)
    duration_ms: Optional[int] = Field(default=0, ge=0)
    command_id: str = Field(default_factory=lambda: f"CMD-MOVE-{uuid.uuid4().hex[:6].upper()}")


class SprayCommand(BaseModel):
    duration_ms: int = Field(..., ge=500, le=6000, description="Duration in milliseconds")
    approval_token: str = Field(..., min_length=4, description="Cryptographic/session approval token")
    command_id: str = Field(default_factory=lambda: f"CMD-SPRAY-{uuid.uuid4().hex[:6].upper()}")


class EStopCommand(BaseModel):
    action: str = "estop"
    command_id: str = Field(default_factory=lambda: f"CMD-ESTOP-{uuid.uuid4().hex[:6].upper()}")


class HardwareStatus(BaseModel):
    motors: str = "UNKNOWN"
    pump: str = "OFF"
    valve: str = "CLOSED"
    spray_state: str = "IDLE_OFF"
    estop_active: bool = False
    obstacle_detected: bool = False


class ESP32CommandResponse(BaseModel):
    command_id: str
    accepted: bool
    executed: bool
    timestamp_ms: Optional[int] = None
    hardware_status: Optional[HardwareStatus] = None
    message: str = ""
    error_code: Optional[str] = None
    safety_event: Optional[Dict[str, Any]] = None
