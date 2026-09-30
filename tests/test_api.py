import pytest

try:
    from fastapi.testclient import TestClient
except (ImportError, ModuleNotFoundError) as err:
    TestClient = None
    _testclient_err = str(err)
else:
    _testclient_err = None

from dashboard.app import app


@pytest.fixture
def client():
    if TestClient is None:
        pytest.skip(f"fastapi.testclient requires 'httpx' installed: {_testclient_err}")
    with TestClient(app) as c:
        yield c


def test_api_status(client):
    resp = client.get("/api/status")
    assert resp.status_code == 200
    data = resp.json()
    assert data["status"] == "online"
    assert "tanks" in data


def test_api_zones(client):
    resp = client.get("/api/zones")
    assert resp.status_code == 200
    data = resp.json()
    assert "zones" in data
    assert len(data["zones"]) == 24


def test_api_scenario_switch(client):
    resp = client.post("/api/scenario/set", json={"scenario": "late_blight"})
    assert resp.status_code == 200
    assert resp.json()["active_scenario"] == "late_blight"


def test_api_scan_and_approval_flow(client):
    # Set to early blight
    client.post("/api/scenario/set", json={"scenario": "early_blight"})

    # 1. Trigger AI scan
    scan_resp = client.post("/api/ai/scan")
    assert scan_resp.status_code == 200
    scan_data = scan_resp.json()
    assert scan_data["ok"] is True
    assert "decision" in scan_data
    decision = scan_data["decision"]
    assert decision["status"] == "ACTIONABLE"
    decision_id = decision["decision_id"]

    # 2. Farmer approves treatment
    approve_resp = client.post("/api/treatment/approve", json={
        "decision_id": decision_id,
        "approved": True,
        "operator_name": "Test Evaluator"
    })
    assert approve_resp.status_code == 200
    approve_data = approve_resp.json()
    assert approve_data["ok"] is True
    assert "spray_event_id" in approve_data


def test_api_robot_command(client):
    resp = client.post("/api/robot/command", json={"action": "forward", "speed": 140})
    assert resp.status_code == 200
    assert resp.json()["ok"] is True

    # Stop command
    stop_resp = client.post("/api/robot/command", json={"action": "stop"})
    assert stop_resp.status_code == 200
    assert stop_resp.json()["motor_state"] == "STOPPED"
