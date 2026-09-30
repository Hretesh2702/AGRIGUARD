"""
Unit Tests for AgriGuard Treatment Engine & Tank Inventory Management
"""

import pytest
from treatment.inventory import TankInventoryManager, TankItem
from treatment.engine import TreatmentDecisionEngine, TreatmentDecision


def test_inventory_management():
    inv = TankInventoryManager()
    all_tanks = inv.get_all_tanks()
    assert "TANK_COPPER_FUNGICIDE" in all_tanks
    assert all_tanks["TANK_COPPER_FUNGICIDE"]["status"] == "READY"

    # Availability check
    check = inv.check_availability("TANK_COPPER_FUNGICIDE", required_ml=40.0)
    assert check["available"] is True

    # Consumption
    success = inv.consume("TANK_COPPER_FUNGICIDE", 40.0)
    assert success is True
    assert inv.get_tank("TANK_COPPER_FUNGICIDE").current_ml == 710.0

    # Over-consumption rejection
    success_over = inv.consume("TANK_COPPER_FUNGICIDE", 2000.0)
    assert success_over is False

    # Refill
    inv.refill("TANK_COPPER_FUNGICIDE")
    assert inv.get_tank("TANK_COPPER_FUNGICIDE").current_ml == 1000.0


def test_treatment_engine_early_blight():
    engine = TreatmentDecisionEngine()
    ai_det = {
        "crop": "tomato",
        "condition": "early_blight",
        "confidence": 0.94,
        "severity": "moderate",
        "health_score": 68
    }
    sensors = {
        "nitrogen": "normal",
        "soil_moisture": 35.0,
        "temperature_c": 26.5,
        "humidity_pct": 68.0
    }

    decision = engine.evaluate(ai_det, sensor_context=sensors)
    assert decision.status == "ACTIONABLE"
    assert decision.spray_permitted is False  # Spray strictly false before approval
    assert decision.approval_required is True
    assert decision.primary_treatment is not None
    assert "Copper" in decision.primary_treatment["treatment_name"]
    assert decision.inventory_check["available"] is True

    # Farmer approval
    approved_decision = engine.approve_treatment(decision, approved_by="Farmer Bob")
    assert approved_decision.approved is True
    assert approved_decision.spray_permitted is True
    assert approved_decision.approved_by == "Farmer Bob"


def test_treatment_engine_healthy():
    engine = TreatmentDecisionEngine()
    ai_det = {
        "crop": "tomato",
        "condition": "healthy",
        "confidence": 0.96,
        "severity": "none",
        "health_score": 96
    }
    decision = engine.evaluate(ai_det)
    assert decision.status == "NO_ACTION_REQUIRED"
    assert decision.spray_permitted is False
    assert decision.primary_treatment is None


def test_treatment_engine_drought_contraindication():
    engine = TreatmentDecisionEngine()
    ai_det = {
        "crop": "tomato",
        "condition": "early_blight",
        "confidence": 0.92,
        "severity": "moderate",
        "health_score": 65
    }
    sensors = {
        "soil_moisture": 14.0,  # Critically low moisture
        "temperature_c": 32.0,
        "humidity_pct": 50.0
    }
    decision = engine.evaluate(ai_det, sensor_context=sensors)
    assert decision.status == "CONTRAINDICATED"
    assert decision.spray_permitted is False
    assert any("drought" in w.lower() for w in decision.context_warnings)


def test_treatment_engine_low_confidence():
    engine = TreatmentDecisionEngine()
    ai_det = {
        "crop": "tomato",
        "condition": "early_blight",
        "confidence": 0.45,  # Below threshold
        "severity": "moderate",
        "health_score": 65
    }
    decision = engine.evaluate(ai_det)
    assert decision.status == "LOW_CONFIDENCE_REVIEW"
    assert decision.spray_permitted is False
