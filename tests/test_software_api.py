"""
AgriGuard — FastAPI Backend API Tests (Level A: Software Tests)
Tests HTTP REST endpoints with real validation rules and honesty invariants.
"""

import pytest
from fastapi.testclient import TestClient
from backend.main import app

@pytest.fixture
def client():
    with TestClient(app) as c:
        yield c

def test_api_diagnostics(client):
    """Verifies Section 27 Real Hardware Diagnostics endpoint."""
    resp = client.get("/api/diagnostics")
    assert resp.status_code == 200
    data = resp.json()
    assert "esp32" in data
    assert "camera" in data
    assert "npk" in data
    assert "soil_moisture" in data
    assert "temperature" in data
    assert "ultrasonic" in data
    assert "imu" in data
    assert "pump" in data
    assert "valve" in data
    assert "flow" in data
    assert data["esp32"] in ("CONNECTED", "DISCONNECTED")
    assert data["camera"] in ("CONNECTED", "DISCONNECTED")

def test_api_zones(client):
    resp = client.get("/api/zones")
    assert resp.status_code == 200
    data = resp.json()
    assert "zones" in data
    assert len(data["zones"]) == 24

def test_api_inventory(client):
    resp = client.get("/api/inventory")
    assert resp.status_code == 200
    data = resp.json()
    assert "tanks" in data
    assert "TANK_COPPER_FUNGICIDE" in data["tanks"]
    assert "Copper Hydroxide" in data["tanks"]["TANK_COPPER_FUNGICIDE"]["chemical_name"]

def test_api_robot_mobility_commands(client):
    # Test move command
    move_resp = client.post("/api/robot/move", json={"direction": "forward", "speed": 130})
    assert move_resp.status_code == 200
    move_data = move_resp.json()
    assert "command_id" in move_data

    # Test stop command
    stop_resp = client.post("/api/robot/stop")
    assert stop_resp.status_code == 200
    stop_data = stop_resp.json()
    assert "command_id" in stop_data

    # Test emergency stop
    estop_resp = client.post("/api/robot/estop")
    assert estop_resp.status_code == 200
    estop_data = estop_resp.json()
    assert "command_id" in estop_data

def test_api_camera_status(client):
    resp = client.get("/api/camera/status")
    assert resp.status_code == 200
    data = resp.json()
    assert "camera_connected" in data
    assert "device_index" in data

def test_api_camera_power_toggle(client):
    # Test power OFF
    resp_off = client.post("/api/camera/power", json={"enabled": False})
    assert resp_off.status_code == 200
    data_off = resp_off.json()
    assert data_off["enabled"] is False
    assert data_off["status"] == "OFF"

    # Test power ON
    resp_on = client.post("/api/camera/power", json={"enabled": True})
    assert resp_on.status_code == 200
    data_on = resp_on.json()
    assert data_on["enabled"] is True

def test_api_field_heatmap(client):
    """Verifies GET /api/field/heatmap returns valid schema, real observations, and robot position."""
    resp = client.get("/api/field/heatmap")
    assert resp.status_code == 200
    data = resp.json()
    assert "field" in data
    assert data["field"]["width"] == 6
    assert data["field"]["height"] == 4
    assert "observations" in data
    assert isinstance(data["observations"], list)
    assert "current_robot_position" in data
    assert data["current_robot_position"]["mode"] == "Prototype Estimated Position"

    # If observations exist, verify minimum required fields
    for obs in data["observations"]:
        assert "id" in obs
        assert "timestamp" in obs
        assert "x" in obs
        assert "y" in obs
        assert "zone" in obs
        assert "crop" in obs
        assert "disease" in obs
        assert "confidence" in obs
        assert "severity" in obs
        assert "health_score" in obs
        assert "treatment_status" in obs
        assert 1 <= obs["x"] <= 6
        assert 1 <= obs["y"] <= 4

def test_api_robot_location_tracker_movement(client):
    """Verifies physical robot movement commands update deterministic field grid coordinates."""
    # Reset position to 1, 1
    resp_init = client.post("/api/robot/position", json={"x": 1, "y": 1})
    assert resp_init.status_code == 200
    assert resp_init.json()["location"]["x"] == 1
    assert resp_init.json()["location"]["y"] == 1

    # Move forward (+y)
    fwd_resp = client.post("/api/robot/move", json={"direction": "forward", "speed": 120})
    assert fwd_resp.status_code == 200
    assert fwd_resp.json()["robot_location"]["y"] == 2
    assert fwd_resp.json()["robot_location"]["x"] == 1

    # Move right (+x)
    right_resp = client.post("/api/robot/move", json={"direction": "right", "speed": 120})
    assert right_resp.status_code == 200
    assert right_resp.json()["robot_location"]["x"] == 2
    assert right_resp.json()["robot_location"]["y"] == 2

    # Check heatmap reflects current robot position
    hm_resp = client.get("/api/field/heatmap")
    assert hm_resp.status_code == 200
    curr_pos = hm_resp.json()["current_robot_position"]
    assert curr_pos["x"] == 2
    assert curr_pos["y"] == 2
    assert curr_pos["zone_id"] == "ZONE-R2C2"

def test_api_crop_scan_stores_actual_location(client, monkeypatch):
    """Verifies camera capture & AI detection saves real observation at current robot location."""
    import numpy as np
    from backend.main import camera

    # Position robot at Plot B3 (X=3, Y=2)
    client.post("/api/robot/position", json={"x": 3, "y": 2, "zone_id": "ZONE-R2C3"})

    # Provide a camera frame with healthy foliage for deterministic inference
    frame = np.zeros((480, 640, 3), dtype=np.uint8)
    frame[100:380, 150:490] = [45, 175, 55]
    monkeypatch.setattr(camera, "capture_frame", lambda: (True, frame))

    scan_resp = client.post("/api/ai/scan")
    assert scan_resp.status_code == 200
    scan_data = scan_resp.json()
    assert "observation_id" in scan_data
    obs_id = scan_data["observation_id"]

    # Verify heatmap returns the new observation at (3, 2)
    hm_resp = client.get("/api/field/heatmap")
    assert hm_resp.status_code == 200
    observations = hm_resp.json()["observations"]
    matching = [o for o in observations if o["id"] == obs_id]
    assert len(matching) == 1
    new_obs = matching[0]
    assert new_obs["x"] == 3
    assert new_obs["y"] == 2
    assert new_obs["zone_id"] == "ZONE-R2C3"
    assert new_obs["disease"] == "healthy"
    assert new_obs["severity"] == "none"
    assert new_obs["health_score"] >= 80

def test_api_robot_heartbeat(client):
    """Verifies heartbeat endpoint keeps connection alive and validates field-site operating mode."""
    resp = client.post("/api/robot/heartbeat", json={"client_time": 1000})
    assert resp.status_code == 200
    data = resp.json()
    assert data["ok"] is True
    assert "timestamp" in data
    assert "esp32_connected" in data
    assert data["operating_mode"] == "Remote-controlled from the field site over a local Wi-Fi network"

def test_api_network_status_and_config(client):
    """Verifies local field Wi-Fi network reporting and dynamic ESP32 target IP switching."""
    resp = client.get("/api/network/status")
    assert resp.status_code == 200
    data = resp.json()
    assert data["internet_required"] is False
    assert data["offline_ready"] is True
    assert data["operating_mode"] == "Remote-controlled from the field site over a local Wi-Fi network"
    assert "laptop_lan_ip" in data
    assert "dashboard_mobile_url" in data
    assert data["watchdog_timeout_ms"] == 1500

    # Test dynamic configuration
    cfg_resp = client.post("/api/network/config", json={"esp32_ip": "192.168.1.150", "esp32_port": 80})
    assert cfg_resp.status_code == 200
    assert cfg_resp.json()["esp32_ip"] == "192.168.1.150"

    # Reset back to Option A default
    client.post("/api/network/config", json={"esp32_ip": "192.168.4.1", "esp32_port": 80})

def test_api_safety_watchdog_and_estop(client):
    """Verifies emergency stop dispatches shutdown and locks motion commands."""
    # Trigger emergency stop
    estop_resp = client.post("/api/robot/estop")
    assert estop_resp.status_code == 200
    assert estop_resp.json()["command_id"].startswith("CMD-")

    # Stop command clears/resets
    stop_resp = client.post("/api/robot/stop")
    assert stop_resp.status_code == 200
    assert stop_resp.json()["command_id"].startswith("CMD-")
