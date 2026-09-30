"""
AgriGuard — Hardware Communication Protocol & Payload Definitions
"""

from typing import Dict, Any, Optional, List
from pydantic import BaseModel, Field
import uuid
import time


class MotorCommand(BaseModel):
    direction: str = Field(..., description="forward, backward, left, right, stop")
    speed: int = Field(default=120, ge=0, le=255)
    duration_ms: Optional[int] = Field(default=0, ge=0)
    command_id: str = Field(default_factory=lambda: f"CMD-MOVE-{uuid.uuid4().hex[:6].upper()}")


class SprayCommand(BaseModel):
    duration_ms: int = Field(..., ge=500, le=6000, description="Duration in milliseconds")
    approval_token: str = Field(..., min_length=8, description="Cryptographic/session approval token")
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


class ESP32CommandResponse(BaseModel):
    command_id: str
    accepted: bool
    executed: bool
    timestamp_ms: Optional[int] = None
    hardware_status: Optional[HardwareStatus] = None
    message: str = ""
    error_code: Optional[str] = None
