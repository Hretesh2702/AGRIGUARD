"""
Unit Tests for AgriGuard SQLite Database Layer
"""

import pytest
from pathlib import Path
from data.database import Database
from data.schemas import SensorReadingCreate, ObservationCreate, SprayEventCreate


@pytest.fixture
def temp_db(tmp_path):
    db_file = tmp_path / "test_agriguard.db"
    return Database(db_path=db_file)


def test_db_initialization(temp_db):
    zones = temp_db.get_all_zones()
    assert len(zones) == 24  # 4x6 grid
    assert any(z.zone_id == "ZONE-R2C2" for z in zones)


def test_sensor_recording(temp_db):
    sensor_data = SensorReadingCreate(
        nitrogen="normal",
        phosphorus="normal",
        potassium="normal",
        soil_moisture=38.2,
        temperature_c=28.1,
        humidity_pct=64.0,
        distance_cm=95.0,
        battery_pct=82.0
    )
    rec = temp_db.record_sensor_reading(sensor_data)
    assert rec.id is not None
    assert rec.soil_moisture == 38.2

    latest = temp_db.get_latest_sensor_reading()
    assert latest is not None
    assert latest.id == rec.id


def test_observation_and_spray_lifecycle(temp_db):
    # Record Observation
    obs = temp_db.record_observation(ObservationCreate(
        zone_id="ZONE-R1C1",
        crop="tomato",
        condition="early_blight",
        confidence=0.93,
        severity="moderate",
        health_score=71
    ))
    assert obs.id is not None

    # Check that zone was updated
    zones = {z.zone_id: z for z in temp_db.get_all_zones()}
    assert zones["ZONE-R1C1"].health_status in ("MONITOR", "INFECTED")

    # Record Spray Event
    spray = temp_db.record_spray_event(SprayEventCreate(
        observation_id=obs.id,
        zone_id="ZONE-R1C1",
        treatment_name="Copper Hydroxide 77%",
        inventory_item_id="TANK_COPPER_FUNGICIDE",
        volume_ml=40.0,
        duration_ms=2500,
        approved_by="Farmer Alice"
    ))
    assert spray.id is not None

    # Check zone marked TREATED
    updated_zones = {z.zone_id: z for z in temp_db.get_all_zones()}
    assert updated_zones["ZONE-R1C1"].health_status == "TREATED"
    assert updated_zones["ZONE-R1C1"].treatment_count == 1
