"""
AgriGuard — Database Models and Schema Definitions
"""

from typing import Optional, Dict, Any, List
from pydantic import BaseModel, Field
from datetime import datetime, timezone


def get_utc_now_iso() -> str:
    return datetime.now(timezone.utc).isoformat()


class SensorReading(BaseModel):
    id: Optional[int] = None
    timestamp: str = Field(default_factory=get_utc_now_iso)
    nitrogen_mg_kg: Optional[int] = None
    phosphorus_mg_kg: Optional[int] = None
    potassium_mg_kg: Optional[int] = None
    soil_moisture_pct: Optional[float] = None
    temperature_c: Optional[float] = None
    humidity_pct: Optional[float] = None
    ultrasonic_distance_cm: Optional[float] = None
    flow_rate_ml_s: Optional[float] = None
    battery_v: Optional[float] = None
    battery_pct: Optional[int] = None
    npk_status: str = "UNKNOWN"
    dht_status: str = "UNKNOWN"


class PlantObservation(BaseModel):
    id: Optional[int] = None
    timestamp: str = Field(default_factory=get_utc_now_iso)
    zone_id: str
    x: int = 1
    y: int = 1
    latitude: Optional[float] = None
    longitude: Optional[float] = None
    plant_id: Optional[str] = None
    crop: str = "tomato"
    disease_detected: str
    confidence: float
    severity: str  # mild, moderate, severe, none, unknown
    affected_area_ratio: float = 0.0
    plant_health_score: int
    image_snapshot_path: Optional[str] = None
    reinspection_count: int = 0
    treatment_status: Optional[str] = None


class TreatmentRecommendationRecord(BaseModel):
    id: Optional[int] = None
    timestamp: str = Field(default_factory=get_utc_now_iso)
    observation_id: int
    zone_id: str
    treatment_id: str
    treatment_name: str
    prescribed_dose: str
    application_method: str
    duration_ms: int
    estimated_volume_ml: float
    inventory_code: str
    inventory_available: bool
    status: str  # PENDING_APPROVAL, APPROVED, REJECTED, CONTRAINDICATED


class SprayEventRecord(BaseModel):
    id: Optional[int] = None
    timestamp: str = Field(default_factory=get_utc_now_iso)
    recommendation_id: Optional[int] = None
    zone_id: str
    treatment_name: str
    inventory_code: str
    commanded_duration_ms: int
    measured_flow_rate_ml_s: float
    actual_volume_delivered_ml: float
    flow_verified: bool
    approved_by: str
    status: str  # COMPLETED, FAILED_NO_FLOW, ABORTED_ESTOP
    fault_reason: Optional[str] = None


class HardwareErrorRecord(BaseModel):
    id: Optional[int] = None
    timestamp: str = Field(default_factory=get_utc_now_iso)
    subsystem: str  # ESP32, CAMERA, NPK, PUMP, FLOW_SENSOR, AI
    error_code: str
    message: str
    details: Optional[Dict[str, Any]] = None


class FieldZoneRecord(BaseModel):
    zone_id: str
    row: int
    col: int
    crop: str = "tomato"
    status: str = "UNINSPECTED"  # HEALTHY, MONITOR, INFECTED, TREATED, UNINSPECTED
    last_health_score: Optional[int] = None
    last_inspected: Optional[str] = None
    last_condition: Optional[str] = None
    total_treatments_applied: int = 0

    @property
    def health_status(self) -> str:
        return self.status

