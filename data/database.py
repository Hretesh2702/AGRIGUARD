"""
AgriGuard — SQLite Database Interface
Stores observations, sensor telemetry, spray events, field zone maps, and audit logs.
"""

import sqlite3
import json
import logging
from pathlib import Path
from typing import List, Dict, Any, Optional
from datetime import datetime, timezone

from data.schemas import (
    SensorReadingCreate,
    SensorReadingRecord,
    ObservationCreate,
    ObservationRecord,
    SprayEventCreate,
    SprayEventRecord,
    FieldZone
)

logger = logging.getLogger(__name__)

DEFAULT_DB_PATH = Path(__file__).parent / "agriguard.db"


class Database:
    def __init__(self, db_path: Optional[Path] = None):
        self.db_path = db_path or DEFAULT_DB_PATH
        self.init_db()

    def get_connection(self) -> sqlite3.Connection:
        conn = sqlite3.connect(str(self.db_path), check_same_thread=False)
        conn.row_factory = sqlite3.Row
        return conn

    def init_db(self):
        """Initializes tables with proper indices and schemas."""
        with self.get_connection() as conn:
            cursor = conn.cursor()

            # Sensor Readings
            cursor.execute("""
                CREATE TABLE IF NOT EXISTS sensor_readings (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    timestamp TEXT NOT NULL,
                    nitrogen TEXT,
                    phosphorus TEXT,
                    potassium TEXT,
                    soil_moisture REAL,
                    temperature_c REAL,
                    humidity_pct REAL,
                    distance_cm REAL,
                    battery_pct REAL,
                    battery_v REAL,
                    flow_rate_ml_s REAL
                )
            """)

            # Plant Observations
            cursor.execute("""
                CREATE TABLE IF NOT EXISTS observations (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    timestamp TEXT NOT NULL,
                    zone_id TEXT NOT NULL,
                    plant_id TEXT,
                    crop TEXT NOT NULL,
                    condition TEXT NOT NULL,
                    confidence REAL NOT NULL,
                    severity TEXT NOT NULL,
                    health_score INTEGER NOT NULL,
                    image_path TEXT,
                    bounding_box_json TEXT
                )
            """)

            # Spray Events
            cursor.execute("""
                CREATE TABLE IF NOT EXISTS spray_events (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    timestamp TEXT NOT NULL,
                    observation_id INTEGER,
                    zone_id TEXT NOT NULL,
                    plant_id TEXT,
                    treatment_name TEXT NOT NULL,
                    inventory_item_id TEXT NOT NULL,
                    volume_ml REAL NOT NULL,
                    duration_ms INTEGER NOT NULL,
                    approved_by TEXT NOT NULL,
                    status TEXT NOT NULL,
                    notes TEXT,
                    FOREIGN KEY(observation_id) REFERENCES observations(id)
                )
            """)

            # Field Zones
            cursor.execute("""
                CREATE TABLE IF NOT EXISTS field_zones (
                    zone_id TEXT PRIMARY KEY,
                    row INTEGER NOT NULL,
                    col INTEGER NOT NULL,
                    crop TEXT NOT NULL,
                    health_status TEXT NOT NULL,
                    health_score INTEGER NOT NULL,
                    last_inspected TEXT,
                    last_condition TEXT,
                    treatment_count INTEGER DEFAULT 0
                )
            """)

            # Robot Audit & Safety Logs
            cursor.execute("""
                CREATE TABLE IF NOT EXISTS audit_logs (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    timestamp TEXT NOT NULL,
                    event_type TEXT NOT NULL,
                    message TEXT NOT NULL,
                    details_json TEXT
                )
            """)

            conn.commit()
            logger.info("Database initialized successfully.")
            self._ensure_default_zones(cursor, conn)

    def _ensure_default_zones(self, cursor: sqlite3.Cursor, conn: sqlite3.Connection):
        """Pre-populates a 4x6 field demo grid if empty."""
        cursor.execute("SELECT COUNT(*) FROM field_zones")
        if cursor.fetchone()[0] == 0:
            zones = []
            now = datetime.now(timezone.utc).isoformat()
            for r in range(1, 5):
                for c in range(1, 7):
                    zid = f"ZONE-R{r}C{c}"
                    # Default healthy, with a couple demonstration infected zones
                    if (r, c) == (2, 2):
                        zones.append((zid, r, c, "tomato", "INFECTED", 65, now, "early_blight", 0))
                    elif (r, c) == (2, 3):
                        zones.append((zid, r, c, "tomato", "MONITOR", 78, now, "bacterial_spot", 0))
                    else:
                        zones.append((zid, r, c, "tomato", "HEALTHY", 95, now, "healthy", 0))

            cursor.executemany("""
                INSERT INTO field_zones (zone_id, row, col, crop, health_status, health_score, last_inspected, last_condition, treatment_count)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
            """, zones)
            conn.commit()

    # --- Sensor Operations ---
    def record_sensor_reading(self, data: SensorReadingCreate) -> SensorReadingRecord:
        now = datetime.now(timezone.utc).isoformat()
        with self.get_connection() as conn:
            cur = conn.cursor()
            cur.execute("""
                INSERT INTO sensor_readings (timestamp, nitrogen, phosphorus, potassium, soil_moisture,
                                             temperature_c, humidity_pct, distance_cm, battery_pct, battery_v, flow_rate_ml_s)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            """, (now, data.nitrogen, data.phosphorus, data.potassium, data.soil_moisture,
                  data.temperature_c, data.humidity_pct, data.distance_cm, data.battery_pct, data.battery_v, data.flow_rate_ml_s))
            record_id = cur.lastrowid
            conn.commit()
        return SensorReadingRecord(id=record_id, timestamp=now, **data.model_dump())

    def get_latest_sensor_reading(self) -> Optional[SensorReadingRecord]:
        with self.get_connection() as conn:
            cur = conn.cursor()
            cur.execute("SELECT * FROM sensor_readings ORDER BY id DESC LIMIT 1")
            row = cur.fetchone()
            if row:
                return SensorReadingRecord(**dict(row))
        return None

    # --- Observation Operations ---
    def record_observation(self, data: ObservationCreate) -> ObservationRecord:
        now = datetime.now(timezone.utc).isoformat()
        bb_json = json.dumps(data.bounding_box) if data.bounding_box else None
        with self.get_connection() as conn:
            cur = conn.cursor()
            cur.execute("""
                INSERT INTO observations (timestamp, zone_id, plant_id, crop, condition,
                                         confidence, severity, health_score, image_path, bounding_box_json)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            """, (now, data.zone_id, data.plant_id, data.crop, data.condition,
                  data.confidence, data.severity, data.health_score, None, bb_json))  # Camera feed/image excluded from database
            obs_id = cur.lastrowid

            # Update zone status
            new_status = "HEALTHY" if data.condition == "healthy" else ("INFECTED" if data.severity == "severe" else "MONITOR")
            cur.execute("""
                UPDATE field_zones
                SET health_status = ?, health_score = ?, last_inspected = ?, last_condition = ?
                WHERE zone_id = ?
            """, (new_status, data.health_score, now, data.condition, data.zone_id))

            conn.commit()
        return ObservationRecord(id=obs_id, timestamp=now, **data.model_dump())

    def get_recent_observations(self, limit: int = 15) -> List[ObservationRecord]:
        with self.get_connection() as conn:
            cur = conn.cursor()
            cur.execute("SELECT * FROM observations ORDER BY id DESC LIMIT ?", (limit,))
            rows = cur.fetchall()
            results = []
            for r in rows:
                d = dict(r)
                bb_str = d.pop("bounding_box_json", None)
                d["bounding_box"] = json.loads(bb_str) if bb_str else None
                results.append(ObservationRecord(**d))
            return results

    # --- Spray Event Operations ---
    def record_spray_event(self, data: SprayEventCreate) -> SprayEventRecord:
        now = datetime.now(timezone.utc).isoformat()
        with self.get_connection() as conn:
            cur = conn.cursor()
            cur.execute("""
                INSERT INTO spray_events (timestamp, observation_id, zone_id, plant_id, treatment_name,
                                         inventory_item_id, volume_ml, duration_ms, approved_by, status, notes)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            """, (now, data.observation_id, data.zone_id, data.plant_id, data.treatment_name,
                  data.inventory_item_id, data.volume_ml, data.duration_ms, data.approved_by, data.status, data.notes))
            spray_id = cur.lastrowid

            # Increment zone treatment count & mark TREATED
            cur.execute("""
                UPDATE field_zones
                SET health_status = 'TREATED', treatment_count = treatment_count + 1
                WHERE zone_id = ?
            """, (data.zone_id,))

            conn.commit()
        return SprayEventRecord(id=spray_id, timestamp=now, **data.model_dump())

    def get_recent_spray_events(self, limit: int = 15) -> List[SprayEventRecord]:
        with self.get_connection() as conn:
            cur = conn.cursor()
            cur.execute("SELECT * FROM spray_events ORDER BY id DESC LIMIT ?", (limit,))
            rows = cur.fetchall()
            return [SprayEventRecord(**dict(r)) for r in rows]

    # --- Field Zones Operations ---
    def get_all_zones(self) -> List[FieldZone]:
        with self.get_connection() as conn:
            cur = conn.cursor()
            cur.execute("SELECT * FROM field_zones ORDER BY row ASC, col ASC")
            rows = cur.fetchall()
            return [FieldZone(**dict(r)) for r in rows]

    def update_zone_status(self, zone_id: str, status: str, health_score: int):
        with self.get_connection() as conn:
            cur = conn.cursor()
            cur.execute("""
                UPDATE field_zones
                SET health_status = ?, health_score = ?, last_inspected = ?
                WHERE zone_id = ?
            """, (status, health_score, datetime.now(timezone.utc).isoformat(), zone_id))
            conn.commit()

    # --- Audit Logging ---
    def log_audit(self, event_type: str, message: str, details: Optional[Dict[str, Any]] = None):
        now = datetime.now(timezone.utc).isoformat()
        details_str = json.dumps(details) if details else None
        with self.get_connection() as conn:
            cur = conn.cursor()
            cur.execute("INSERT INTO audit_logs (timestamp, event_type, message, details_json) VALUES (?, ?, ?, ?)",
                        (now, event_type, message, details_str))
            conn.commit()
