"""
AgriGuard — Data Schemas and Validation Models
Pydantic definitions for all database records, telemetry, and API payloads.
"""

from typing import Optional, List, Dict, Any
from pydantic import BaseModel, Field
from datetime import datetime


class SensorReadingCreate(BaseModel):
    nitrogen: str = Field(default="normal", description="low, normal, high, or mg/kg")
    phosphorus: str = Field(default="normal", description="low, normal, high, or mg/kg")
    potassium: str = Field(default="normal", description="low, normal, high, or mg/kg")
    soil_moisture: float = Field(default=35.0, ge=0.0, le=100.0, description="Volumetric moisture %")
    temperature_c: float = Field(default=27.5, description="Ambient temperature in Celsius")
    humidity_pct: float = Field(default=65.0, ge=0.0, le=100.0, description="Relative humidity %")
    distance_cm: float = Field(default=120.0, ge=0.0, description="Obstacle distance via HC-SR04 in cm")
    battery_pct: float = Field(default=84.0, ge=0.0, le=100.0, description="Robot battery state %")
    battery_v: float = Field(default=12.2, ge=0.0, description="Battery voltage")
    flow_rate_ml_s: float = Field(default=0.0, ge=0.0, description="Flow sensor reading in mL/s")


class SensorReadingRecord(SensorReadingCreate):
    id: Optional[int] = None
    timestamp: str = Field(default_factory=lambda: datetime.utcnow().isoformat())


class ObservationCreate(BaseModel):
    zone_id: str = Field(default="ZONE-A1")
    plant_id: Optional[str] = Field(default="PLANT-01")
    crop: str = Field(default="tomato")
    condition: str = Field(default="early_blight")
    confidence: float = Field(default=0.92, ge=0.0, le=1.0)
    severity: str = Field(default="moderate")
    health_score: int = Field(default=72, ge=0, le=100)
    image_path: Optional[str] = None
    bounding_box: Optional[Dict[str, Any]] = None


class ObservationRecord(ObservationCreate):
    id: Optional[int] = None
    timestamp: str = Field(default_factory=lambda: datetime.utcnow().isoformat())


class SprayEventCreate(BaseModel):
    observation_id: Optional[int] = None
    zone_id: str
    plant_id: Optional[str] = None
    treatment_name: str
    inventory_item_id: str
    volume_ml: float = Field(ge=0.0)
    duration_ms: int = Field(ge=0)
    approved_by: str = Field(default="Farmer / Operator")
    status: str = Field(default="COMPLETED")  # COMPLETED, FAILED, INTERRUPTED
    notes: Optional[str] = None


class SprayEventRecord(SprayEventCreate):
    id: Optional[int] = None
    timestamp: str = Field(default_factory=lambda: datetime.utcnow().isoformat())


class FieldZone(BaseModel):
    zone_id: str
    row: int
    col: int
    crop: str = "tomato"
    health_status: str = "HEALTHY"  # HEALTHY, MONITOR, INFECTED, TREATED
    health_score: int = 100
    last_inspected: Optional[str] = None
    last_condition: Optional[str] = None
    treatment_count: int = 0


class RobotCommandPayload(BaseModel):
    action: str = Field(..., description="forward, reverse, left, right, stop, speed, spray, estop")
    speed: Optional[int] = Field(default=120, ge=0, le=255)
    duration_ms: Optional[int] = Field(default=0, ge=0)
    request_id: Optional[str] = None


class ApprovalRequestPayload(BaseModel):
    decision_id: str
    approved: bool
    operator_name: Optional[str] = "Farmer / Operator"
    notes: Optional[str] = None
