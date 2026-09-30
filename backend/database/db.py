"""
AgriGuard — SQLite Persistence Layer
Handles transactional storage for real sensor telemetry, observations, verified spray events, and errors.
"""

import sqlite3
import json
import logging
from pathlib import Path
from typing import List, Dict, Any, Optional
from datetime import datetime, timezone

from backend.database.models import (
    SensorReading,
    PlantObservation,
    TreatmentRecommendationRecord,
    SprayEventRecord,
    HardwareErrorRecord,
    FieldZoneRecord,
    get_utc_now_iso
)

logger = logging.getLogger(__name__)
DEFAULT_DB_FILE = Path(__file__).resolve().parent.parent.parent / "data" / "agriguard_real.db"


class DatabaseManager:
    def __init__(self, db_path: Optional[Path] = None):
        self.db_path = db_path or DEFAULT_DB_FILE
        self.db_path.parent.mkdir(parents=True, exist_ok=True)
        self.init_schema()

    def get_connection(self) -> sqlite3.Connection:
        conn = sqlite3.connect(str(self.db_path), check_same_thread=False)
        conn.row_factory = sqlite3.Row
        return conn

    def init_schema(self):
        """Creates physical prototype tables with strict indexing."""
        with self.get_connection() as conn:
            cur = conn.cursor()

            # 1. Real Sensor Readings
            cur.execute("""
                CREATE TABLE IF NOT EXISTS sensor_readings (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    timestamp TEXT NOT NULL,
                    nitrogen_mg_kg INTEGER,
                    phosphorus_mg_kg INTEGER,
                    potassium_mg_kg INTEGER,
                    soil_moisture_pct REAL,
                    temperature_c REAL,
                    humidity_pct REAL,
                    ultrasonic_distance_cm REAL,
                    flow_rate_ml_s REAL,
                    battery_v REAL,
                    battery_pct INTEGER,
                    npk_status TEXT,
                    dht_status TEXT
                )
            """)

            # 2. Plant Observations (Real AI inference results with spatial coordinates)
            cur.execute("""
                CREATE TABLE IF NOT EXISTS plant_observations (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    timestamp TEXT NOT NULL,
                    zone_id TEXT NOT NULL,
                    x INTEGER NOT NULL DEFAULT 1,
                    y INTEGER NOT NULL DEFAULT 1,
                    latitude REAL,
                    longitude REAL,
                    plant_id TEXT,
                    crop TEXT NOT NULL,
                    disease_detected TEXT NOT NULL,
                    confidence REAL NOT NULL,
                    severity TEXT NOT NULL,
                    affected_area_ratio REAL DEFAULT 0.0,
                    plant_health_score INTEGER NOT NULL,
                    image_snapshot_path TEXT,
                    reinspection_count INTEGER DEFAULT 0
                )
            """)

            # 3. Treatment Recommendations
            cur.execute("""
                CREATE TABLE IF NOT EXISTS treatment_recommendations (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    timestamp TEXT NOT NULL,
                    observation_id INTEGER NOT NULL,
                    zone_id TEXT NOT NULL,
                    treatment_id TEXT NOT NULL,
                    treatment_name TEXT NOT NULL,
                    prescribed_dose TEXT NOT NULL,
                    application_method TEXT NOT NULL,
                    duration_ms INTEGER NOT NULL,
                    estimated_volume_ml REAL NOT NULL,
                    inventory_code TEXT NOT NULL,
                    inventory_available INTEGER NOT NULL,
                    status TEXT NOT NULL,
                    FOREIGN KEY(observation_id) REFERENCES plant_observations(id)
                )
            """)

            # 4. Verified Spray Events
            cur.execute("""
                CREATE TABLE IF NOT EXISTS spray_events (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    timestamp TEXT NOT NULL,
                    recommendation_id INTEGER,
                    zone_id TEXT NOT NULL,
                    treatment_name TEXT NOT NULL,
                    inventory_code TEXT NOT NULL,
                    commanded_duration_ms INTEGER NOT NULL,
                    measured_flow_rate_ml_s REAL NOT NULL,
                    actual_volume_delivered_ml REAL NOT NULL,
                    flow_verified INTEGER NOT NULL,
                    approved_by TEXT NOT NULL,
                    status TEXT NOT NULL,
                    fault_reason TEXT,
                    FOREIGN KEY(recommendation_id) REFERENCES treatment_recommendations(id)
                )
            """)

            # 5. Hardware Errors & Fault Logs
            cur.execute("""
                CREATE TABLE IF NOT EXISTS hardware_errors (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    timestamp TEXT NOT NULL,
                    subsystem TEXT NOT NULL,
                    error_code TEXT NOT NULL,
                    message TEXT NOT NULL,
                    details_json TEXT
                )
            """)

            # 6. Field Zones & Grid Mapping
            cur.execute("""
                CREATE TABLE IF NOT EXISTS field_zones (
                    zone_id TEXT PRIMARY KEY,
                    row INTEGER NOT NULL,
                    col INTEGER NOT NULL,
                    crop TEXT NOT NULL,
                    status TEXT NOT NULL,
                    last_health_score INTEGER,
                    last_inspected TEXT,
                    last_condition TEXT,
                    total_treatments_applied INTEGER DEFAULT 0
                )
            """)

            conn.commit()
            self._migrate_schema_if_needed(cur, conn)
            self._ensure_field_zones(cur, conn)

    def _migrate_schema_if_needed(self, cur: sqlite3.Cursor, conn: sqlite3.Connection):
        """Runs incremental schema migrations without data loss."""
        cur.execute("PRAGMA table_info(plant_observations)")
        cols = [r[1] for r in cur.fetchall()]
        if cols:
            if "x" not in cols:
                cur.execute("ALTER TABLE plant_observations ADD COLUMN x INTEGER NOT NULL DEFAULT 1")
            if "y" not in cols:
                cur.execute("ALTER TABLE plant_observations ADD COLUMN y INTEGER NOT NULL DEFAULT 1")
            if "latitude" not in cols:
                cur.execute("ALTER TABLE plant_observations ADD COLUMN latitude REAL")
            if "longitude" not in cols:
                cur.execute("ALTER TABLE plant_observations ADD COLUMN longitude REAL")
            conn.commit()

            # Backfill any observations that have default 1,1 if zone_id contains coordinate info
            cur.execute("SELECT id, zone_id, x, y FROM plant_observations")
            rows = cur.fetchall()
            for row in rows:
                oid, zid, cur_x, cur_y = row[0], row[1], row[2], row[3]
                if (cur_x == 1 and cur_y == 1) and "R" in zid and "C" in zid:
                    try:
                        # Parse ZONE-R{r}C{c}
                        parts = zid.replace("ZONE-", "").split("C")
                        r_val = int(parts[0].replace("R", ""))
                        c_val = int(parts[1])
                        cur.execute("UPDATE plant_observations SET x = ?, y = ? WHERE id = ?", (c_val, r_val, oid))
                    except Exception:
                        pass
            conn.commit()

    def _ensure_field_zones(self, cur: sqlite3.Cursor, conn: sqlite3.Connection):
        cur.execute("SELECT COUNT(*) FROM field_zones")
        if cur.fetchone()[0] == 0:
            zones = []
            for r in range(1, 5):
                for c in range(1, 7):
                    zid = f"ZONE-R{r}C{c}"
                    zones.append((zid, r, c, "tomato", "UNINSPECTED", None, None, None, 0))
            cur.executemany("""
                INSERT INTO field_zones (zone_id, row, col, crop, status, last_health_score, last_inspected, last_condition, total_treatments_applied)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
            """, zones)
            conn.commit()

    # --- Sensor Recording ---
    def record_sensors(self, s: SensorReading) -> int:
        with self.get_connection() as conn:
            cur = conn.cursor()
            cur.execute("""
                INSERT INTO sensor_readings (timestamp, nitrogen_mg_kg, phosphorus_mg_kg, potassium_mg_kg,
                                            soil_moisture_pct, temperature_c, humidity_pct, ultrasonic_distance_cm,
                                            flow_rate_ml_s, battery_v, battery_pct, npk_status, dht_status)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            """, (s.timestamp, s.nitrogen_mg_kg, s.phosphorus_mg_kg, s.potassium_mg_kg,
                  s.soil_moisture_pct, s.temperature_c, s.humidity_pct, s.ultrasonic_distance_cm,
                  s.flow_rate_ml_s, s.battery_v, s.battery_pct, s.npk_status, s.dht_status))
            rec_id = cur.lastrowid
            conn.commit()
            return rec_id

    def get_latest_sensor_reading(self) -> Optional[SensorReading]:
        with self.get_connection() as conn:
            cur = conn.cursor()
            cur.execute("SELECT * FROM sensor_readings ORDER BY id DESC LIMIT 1")
            row = cur.fetchone()
            if not row:
                return None
            return SensorReading(
                id=row[0],
                timestamp=row[1],
                nitrogen_mg_kg=row[2],
                phosphorus_mg_kg=row[3],
                potassium_mg_kg=row[4],
                soil_moisture_pct=row[5],
                temperature_c=row[6],
                humidity_pct=row[7],
                ultrasonic_distance_cm=row[8],
                flow_rate_ml_s=row[9],
                battery_v=row[10],
                battery_pct=row[11],
                npk_status=row[12],
                dht_status=row[13]
            )

    # --- Observations ---
    def record_observation(self, obs: PlantObservation) -> int:
        with self.get_connection() as conn:
            cur = conn.cursor()
            cur.execute("""
                INSERT INTO plant_observations (timestamp, zone_id, x, y, latitude, longitude,
                                                plant_id, crop, disease_detected,
                                                confidence, severity, affected_area_ratio, plant_health_score,
                                                image_snapshot_path, reinspection_count)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            """, (obs.timestamp, obs.zone_id, obs.x, obs.y, obs.latitude, obs.longitude,
                  obs.plant_id, obs.crop, obs.disease_detected,
                  obs.confidence, obs.severity, obs.affected_area_ratio, obs.plant_health_score,
                  obs.image_snapshot_path, obs.reinspection_count))
            obs_id = cur.lastrowid

            # Update zone status
            new_status = "HEALTHY" if obs.disease_detected == "healthy" else ("INFECTED" if obs.severity == "severe" else "MONITOR")
            cur.execute("""
                UPDATE field_zones
                SET status = ?, last_health_score = ?, last_inspected = ?, last_condition = ?
                WHERE zone_id = ?
            """, (new_status, obs.plant_health_score, obs.timestamp, obs.disease_detected, obs.zone_id))

            conn.commit()
            return obs_id

    def get_latest_observation_for_zone(self, zone_id: str) -> Optional[PlantObservation]:
        with self.get_connection() as conn:
            cur = conn.cursor()
            cur.execute("SELECT * FROM plant_observations WHERE zone_id = ? ORDER BY id DESC LIMIT 1", (zone_id,))
            row = cur.fetchone()
            if row:
                return PlantObservation(**dict(row))
        return None

    def get_all_observations(self) -> List[PlantObservation]:
        with self.get_connection() as conn:
            cur = conn.cursor()
            cur.execute("SELECT * FROM plant_observations ORDER BY id DESC")
            return [PlantObservation(**dict(r)) for r in cur.fetchall()]

    def get_field_heatmap_data(self, field_width: int = 6, field_height: int = 4) -> Dict[str, Any]:
        """
        Returns real persisted field observations for the heatmap visualization.
        Correlates with treatment recommendations and spray events.
        """
        with self.get_connection() as conn:
            cur = conn.cursor()
            cur.execute("""
                SELECT o.*,
                       r.status as rec_status,
                       r.treatment_name as prescribed_treatment,
                       s.status as spray_status
                FROM plant_observations o
                LEFT JOIN treatment_recommendations r ON r.observation_id = o.id
                LEFT JOIN spray_events s ON s.recommendation_id = r.id
                ORDER BY o.id DESC
            """)
            rows = cur.fetchall()

            observations = []
            for r in rows:
                row_dict = dict(r)
                # Determine real treatment status
                if row_dict.get("spray_status") == "COMPLETED":
                    trt_status = "TREATED"
                elif row_dict.get("rec_status") == "PENDING_APPROVAL":
                    trt_status = "PENDING_APPROVAL"
                elif row_dict.get("disease_detected") == "healthy":
                    trt_status = "NO_ACTION_REQUIRED"
                elif row_dict.get("rec_status") == "REJECTED":
                    trt_status = "REJECTED_BY_FARMER"
                else:
                    trt_status = "UNREVISED"

                zid = row_dict.get("zone_id", "ZONE-R1C1")
                zone_short = zid.replace("ZONE-", "")

                observations.append({
                    "id": row_dict["id"],
                    "timestamp": row_dict["timestamp"],
                    "zone_id": zid,
                    "zone": zone_short,
                    "x": row_dict.get("x", 1),
                    "y": row_dict.get("y", 1),
                    "latitude": row_dict.get("latitude"),
                    "longitude": row_dict.get("longitude"),
                    "crop": row_dict.get("crop", "tomato"),
                    "disease": row_dict["disease_detected"],
                    "confidence": round(float(row_dict["confidence"]), 3),
                    "severity": row_dict["severity"],
                    "health_score": row_dict["plant_health_score"],
                    "treatment_status": trt_status,
                    "prescribed_treatment": row_dict.get("prescribed_treatment")
                })

            return {
                "field": {
                    "width": field_width,
                    "height": field_height,
                    "cell_size_m": 1.5,
                    "name": "AgriGuard Precision Field Alpha"
                },
                "observations": observations
            }

    # --- Recommendations & Spray Events ---
    def record_recommendation(self, rec: TreatmentRecommendationRecord) -> int:
        with self.get_connection() as conn:
            cur = conn.cursor()
            cur.execute("""
                INSERT INTO treatment_recommendations (timestamp, observation_id, zone_id, treatment_id,
                                                      treatment_name, prescribed_dose, application_method,
                                                      duration_ms, estimated_volume_ml, inventory_code,
                                                      inventory_available, status)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            """, (rec.timestamp, rec.observation_id, rec.zone_id, rec.treatment_id,
                  rec.treatment_name, rec.prescribed_dose, rec.application_method,
                  rec.duration_ms, rec.estimated_volume_ml, rec.inventory_code,
                  1 if rec.inventory_available else 0, rec.status))
            rec_id = cur.lastrowid
            conn.commit()
            return rec_id

    def record_spray_event(self, ev: SprayEventRecord) -> int:
        with self.get_connection() as conn:
            cur = conn.cursor()
            cur.execute("""
                INSERT INTO spray_events (timestamp, recommendation_id, zone_id, treatment_name,
                                         inventory_code, commanded_duration_ms, measured_flow_rate_ml_s,
                                         actual_volume_delivered_ml, flow_verified, approved_by,
                                         status, fault_reason)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            """, (ev.timestamp, ev.recommendation_id, ev.zone_id, ev.treatment_name,
                  ev.inventory_code, ev.commanded_duration_ms, ev.measured_flow_rate_ml_s,
                  ev.actual_volume_delivered_ml, 1 if ev.flow_verified else 0,
                  ev.approved_by, ev.status, ev.fault_reason))
            ev_id = cur.lastrowid

            if ev.flow_verified and ev.status == "COMPLETED":
                cur.execute("""
                    UPDATE field_zones
                    SET status = 'TREATED', total_treatments_applied = total_treatments_applied + 1
                    WHERE zone_id = ?
                """, (ev.zone_id,))

            conn.commit()
            return ev_id

    # --- Hardware Error Logging ---
    def log_error(self, err: HardwareErrorRecord) -> int:
        with self.get_connection() as conn:
            cur = conn.cursor()
            details_str = json.dumps(err.details) if err.details else None
            cur.execute("""
                INSERT INTO hardware_errors (timestamp, subsystem, error_code, message, details_json)
                VALUES (?, ?, ?, ?, ?)
            """, (err.timestamp, err.subsystem, err.error_code, err.message, details_str))
            err_id = cur.lastrowid
            conn.commit()
            return err_id

    # --- Field Zones ---
    def get_all_zones(self) -> List[FieldZoneRecord]:
        with self.get_connection() as conn:
            cur = conn.cursor()
            cur.execute("SELECT * FROM field_zones ORDER BY row ASC, col ASC")
            return [FieldZoneRecord(**dict(r)) for r in cur.fetchall()]
