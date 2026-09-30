"""
AgriGuard — Protocol & Serialization Tests (Level A: Software Tests)
Tests strict Pydantic models for Motor, Spray, and E-Stop commands.
"""

import pytest
from backend.communication.protocol import (
    MotorCommand,
    SprayCommand,
    EStopCommand,
    HardwareStatus,
    ESP32CommandResponse
)

def test_motor_command_validation():
    # Valid forward command
    cmd = MotorCommand(direction="forward", speed=150, duration_ms=500)
    assert cmd.direction == "forward"
    assert cmd.speed == 150
    assert cmd.command_id.startswith("CMD-MOVE-")

    # Stop command
    cmd_stop = MotorCommand(direction="stop", speed=0)
    assert cmd_stop.direction == "stop"
    assert cmd_stop.speed == 0

def test_spray_command_signed_token():
    # Spray command requires duration_ms and approval_token
    token = "AUTH-FARMER-DEC1234-1700000000"
    spray_cmd = SprayCommand(duration_ms=2500, approval_token=token)
    assert spray_cmd.duration_ms == 2500
    assert spray_cmd.approval_token == token
    assert spray_cmd.command_id.startswith("CMD-SPRAY-")

    data = spray_cmd.model_dump()
    assert "command_id" in data
    assert data["duration_ms"] == 2500

def test_estop_command():
    estop = EStopCommand()
    assert estop.action == "estop"
    assert estop.command_id.startswith("CMD-ESTOP-")

def test_command_response_parsing():
    status = HardwareStatus(
        motors="STOPPED",
        pump="OFF",
        valve="CLOSED",
        spray_state="IDLE_OFF",
        estop_active=False
    )
    resp = ESP32CommandResponse(
        command_id="CMD-MOVE-TEST01",
        accepted=True,
        executed=True,
        timestamp_ms=1234567,
        hardware_status=status,
        message="Command acknowledged"
    )
    assert resp.accepted is True
    assert resp.executed is True
    assert resp.hardware_status.motors == "STOPPED"
