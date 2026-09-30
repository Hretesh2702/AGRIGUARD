"""
AgriGuard — Database Tests (Level A: Software Tests)
Tests SQLite persistence of sensors, observations, recommendations, and spray events.
"""

import pytest
from pathlib import Path
from backend.database.db import DatabaseManager
from backend.database.models import (
    SensorReading,
    PlantObservation,
    TreatmentRecommendationRecord,
    SprayEventRecord,
    HardwareErrorRecord
)

@pytest.fixture
def test_db(tmp_path):
    db_file = tmp_path / "test_agri.db"
    return DatabaseManager(db_path=db_file)

def test_db_initialization(test_db):
    zones = test_db.get_all_zones()
    assert len(zones) == 24
    assert any(z.zone_id == "ZONE-R1C1" for z in zones)

def test_sensor_recording(test_db):
    reading = SensorReading(
        nitrogen_mg_kg=48,
        phosphorus_mg_kg=22,
        potassium_mg_kg=190,
        soil_moisture_pct=34.5,
        temperature_c=27.2,
        humidity_pct=62.0,
        ultrasonic_distance_cm=88.5,
        flow_rate_ml_s=0.0,
        battery_v=12.4,
        battery_pct=88,
        npk_status="VALID",
        dht_status="VALID"
    )
    rec_id = test_db.record_sensors(reading)
    assert rec_id > 0

    latest = test_db.get_latest_sensor_reading()
    assert latest is not None
    assert latest.nitrogen_mg_kg == 48
    assert latest.soil_moisture_pct == 34.5

def test_observation_and_spray_lifecycle(test_db):
    obs_id = test_db.record_observation(PlantObservation(
        zone_id="ZONE-R1C1",
        plant_id="PLANT-01",
        crop="tomato",
        disease_detected="early_blight",
        confidence=0.94,
        severity="moderate",
        affected_area_ratio=0.18,
        plant_health_score=68
    ))
    assert obs_id > 0

    # Zone should be updated to MONITOR
    zones = {z.zone_id: z for z in test_db.get_all_zones()}
    assert zones["ZONE-R1C1"].status in ("MONITOR", "INFECTED")
    assert zones["ZONE-R1C1"].health_status in ("MONITOR", "INFECTED")

    # Record Recommendation
    rec_id = test_db.record_recommendation(TreatmentRecommendationRecord(
        observation_id=obs_id,
        zone_id="ZONE-R1C1",
        treatment_id="TRT-TOM-EB-01",
        treatment_name="Copper Hydroxide 77%",
        prescribed_dose="2.0 g/L",
        application_method="Targeted Canopy Pulse",
        duration_ms=2500,
        estimated_volume_ml=40.0,
        inventory_code="TANK_COPPER_FUNGICIDE",
        inventory_available=True,
        status="PENDING_APPROVAL"
    ))
    assert rec_id > 0

    # Record Spray Event
    spray_id = test_db.record_spray_event(SprayEventRecord(
        recommendation_id=rec_id,
        zone_id="ZONE-R1C1",
        treatment_name="Copper Hydroxide 77%",
        inventory_code="TANK_COPPER_FUNGICIDE",
        commanded_duration_ms=2500,
        measured_flow_rate_ml_s=16.8,
        actual_volume_delivered_ml=42.0,
        flow_verified=True,
        approved_by="Farmer Alice",
        status="COMPLETED"
    ))
    assert spray_id > 0

    # Zone should be updated to TREATED
    updated_zones = {z.zone_id: z for z in test_db.get_all_zones()}
    assert updated_zones["ZONE-R1C1"].status == "TREATED"
    assert updated_zones["ZONE-R1C1"].total_treatments_applied == 1
