"""
AgriGuard — Treatment Decision Engine & Inventory Tests (Level A: Software Tests)
Tests verified database prescriptions, contraindication logic, and stock management.
"""

import pytest
from backend.treatment.inventory import TankInventoryService
from backend.treatment.engine import TreatmentDecisionEngine

def test_inventory_management():
    inv = TankInventoryService()
    tanks = inv.get_all()
    assert "TANK_COPPER_FUNGICIDE" in tanks
    assert "Copper Hydroxide" in tanks["TANK_COPPER_FUNGICIDE"]["chemical_name"]

    # Availability check
    check = inv.check_availability("TANK_COPPER_FUNGICIDE", required_ml=40.0)
    assert check["available"] is True

    # Check excessive volume rejection
    over_check = inv.check_availability("TANK_COPPER_FUNGICIDE", required_ml=5000.0)
    assert over_check["available"] is False

    # Consumption deduction
    ok = inv.deduct_consumption("TANK_COPPER_FUNGICIDE", 40.0)
    assert ok is True
    assert inv.tanks["TANK_COPPER_FUNGICIDE"].current_ml == 760.0

    # Refill
    inv.refill("TANK_COPPER_FUNGICIDE")
    assert inv.tanks["TANK_COPPER_FUNGICIDE"].current_ml == 1000.0

def test_treatment_engine_early_blight():
    engine = TreatmentDecisionEngine()
    ai_det = {
        "crop": "tomato",
        "disease": "early_blight",
        "confidence": 0.92,
        "severity": "moderate"
    }
    telemetry = {
        "sensors": {
            "soil_moisture": {"moisture_pct": 36.0, "valid": True},
            "npk": {"nitrogen_mg_kg": 65, "valid": True},
            "environment": {"temperature_c": 26.5, "humidity_pct": 68.0, "valid": True}
        }
    }

    decision = engine.evaluate(ai_det, telemetry)
    assert decision["status"] == "ACTIONABLE"
    assert decision["approval_required"] is True
    assert decision["spray_permitted"] is False  # Must remain false until farmer explicitly approves
    assert decision["recommended_treatment"] is not None
    assert "Copper" in decision["recommended_treatment"]["trade_name"]

def test_treatment_engine_healthy():
    engine = TreatmentDecisionEngine()
    ai_det = {
        "crop": "tomato",
        "disease": "healthy",
        "confidence": 0.95,
        "severity": "none"
    }
    decision = engine.evaluate(ai_det, {})
    assert decision["status"] == "NO_ACTION_REQUIRED"
    assert decision["spray_permitted"] is False
    assert decision["recommended_treatment"] is None

def test_treatment_engine_drought_contraindication():
    engine = TreatmentDecisionEngine()
    ai_det = {
        "crop": "tomato",
        "disease": "early_blight",
        "confidence": 0.88,
        "severity": "moderate"
    }
    # Critically dry soil (<20% moisture)
    telemetry = {
        "sensors": {
            "soil_moisture": {"moisture_pct": 14.5, "valid": True},
            "npk": {"nitrogen_mg_kg": 50, "valid": True}
        }
    }
    decision = engine.evaluate(ai_det, telemetry)
    assert decision["status"] == "CONTRAINDICATED"
    assert decision["spray_permitted"] is False
    assert any("drought" in w.lower() for w in decision["warnings"])

def test_treatment_engine_low_confidence_gate():
    engine = TreatmentDecisionEngine()
    ai_det = {
        "crop": "tomato",
        "disease": "early_blight",
        "confidence": 0.45,  # Below threshold
        "severity": "moderate"
    }
    decision = engine.evaluate(ai_det, {})
    assert decision["status"] == "LOW_CONFIDENCE_REVIEW"
    assert decision["spray_permitted"] is False
    assert decision["approval_required"] is False
