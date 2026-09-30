"""
Unit Tests for AgriGuard Robot Communication Protocol and Client
"""

import pytest
from robot_comm.protocol import RobotCommand, CommandType, MoveAction
from robot_comm.client import RobotCommClient


def test_command_creation():
    cmd = RobotCommand.create_move("forward", speed=150)
    assert cmd.type == CommandType.MOVE
    assert cmd.action == "forward"
    assert cmd.speed == 150
    assert cmd.request_id.startswith("cmd_")

    stop_cmd = RobotCommand.create_stop()
    assert stop_cmd.type == CommandType.STOP
    assert stop_cmd.action == "stop"


def test_spray_command_approval_safety():
    # Attempting spray without token must raise error
    with pytest.raises(ValueError):
        RobotCommand.create_spray_start(duration_ms=2500, approval_token="")

    # Valid token works
    valid_spray = RobotCommand.create_spray_start(duration_ms=2500, approval_token="VALID_TOKEN_123")
    assert valid_spray.type == CommandType.SPRAY_START
    assert valid_spray.approval_token == "VALID_TOKEN_123"
    assert valid_spray.duration_ms == 2500


def test_simulation_mobility():
    client = RobotCommClient(use_simulation=True)
    assert client.connected is True

    # Move Forward
    fwd_cmd = RobotCommand.create_move("forward", speed=180)
    resp = client.send_command(fwd_cmd)
    assert resp.ok is True
    assert "MOVING_FORWARD" in resp.motor_state

    # Stop
    stop_cmd = RobotCommand.create_stop()
    resp_stop = client.send_command(stop_cmd)
    assert resp_stop.ok is True
    assert resp_stop.motor_state == "STOPPED"


def test_simulation_emergency_stop():
    client = RobotCommClient(use_simulation=True)
    estop_cmd = RobotCommand.create_emergency_stop()
    resp = client.send_command(estop_cmd)
    assert resp.ok is True
    assert client.estop_active is True

    # When estop is active, subsequent movement commands must be blocked
    fwd_cmd = RobotCommand.create_move("forward")
    blocked_resp = client.send_command(fwd_cmd)
    assert blocked_resp.ok is False
    assert "Emergency Stop is active" in blocked_resp.message

    # Reset with STOP
    stop_cmd = RobotCommand.create_stop()
    client.send_command(stop_cmd)
    assert client.estop_active is False
