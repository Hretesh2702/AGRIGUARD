"""
AgriGuard — Sensor Telemetry Manager & Validation
Parses incoming telemetry from the ESP32 and flags sensor disconnections honestly.
"""

from typing import Dict, Any, Optional
import logging

logger = logging.getLogger(__name__)


class SensorManagerService:
    def __init__(self):
        self.latest_telemetry: Optional[Dict[str, Any]] = None

    def process_telemetry(self, raw: Dict[str, Any]) -> Dict[str, Any]:
        """
        Parses real hardware telemetry.
        Never fabricates numbers. If a sensor reports invalid or disconnected,
        propagates error state to the UI.
        """
        self.latest_telemetry = raw
        sensors = raw.get("sensors", {})

        # 1. Ultrasonic
        us = sensors.get("ultrasonic", {})
        us_distance = us.get("distance_cm") if us.get("valid") else None
        us_status = "OK" if us.get("valid") else "UNAVAILABLE"

        # 2. Soil Moisture
        sm = sensors.get("soil_moisture", {})
        sm_pct = sm.get("moisture_pct") if sm.get("valid") else None
        sm_status = "OK" if sm.get("valid") else "UNAVAILABLE"

        # 3. Environment (DHT22)
        env = sensors.get("environment", {})
        temp_c = env.get("temperature_c") if env.get("valid") else None
        hum_pct = env.get("humidity_pct") if env.get("valid") else None
        env_status = "OK" if env.get("valid") else "UNAVAILABLE"

        # 4. IMU (MPU6050)
        imu = sensors.get("imu", {})
        imu_status = "OK" if imu.get("valid") else "UNAVAILABLE"

        # 5. RS485 Modbus NPK
        npk = sensors.get("npk", {})
        npk_valid = npk.get("valid", False)
        n_val = npk.get("nitrogen_mg_kg") if npk_valid else None
        p_val = npk.get("phosphorus_mg_kg") if npk_valid else None
        k_val = npk.get("potassium_mg_kg") if npk_valid else None
        npk_status = "OK" if npk_valid else ("DISCONNECTED" if not raw.get("esp32_connected") else (npk.get("error", "TIMEOUT")))

        # 6. Flow Sensor & Pump
        actuators = raw.get("actuators", {})
        flow_rate = actuators.get("flow_rate_ml_s", 0.0)
        pump_on = actuators.get("pump_active", False)
        valve_open = actuators.get("valve_open", False)

        return {
            "esp32_connected": raw.get("esp32_connected", False),
            "battery_voltage": raw.get("battery_voltage"),
            "battery_percentage": raw.get("battery_percentage"),
            "ultrasonic": {
                "distance_cm": us_distance,
                "status": us_status
            },
            "soil_moisture": {
                "moisture_pct": sm_pct,
                "status": sm_status
            },
            "environment": {
                "temperature_c": temp_c,
                "humidity_pct": hum_pct,
                "status": env_status
            },
            "imu": {
                "pitch_deg": imu.get("pitch_deg") if imu.get("valid") else None,
                "roll_deg": imu.get("roll_deg") if imu.get("valid") else None,
                "status": imu_status
            },
            "npk": {
                "nitrogen_mg_kg": n_val,
                "phosphorus_mg_kg": p_val,
                "potassium_mg_kg": k_val,
                "status": npk_status
            },
            "actuators": {
                "pump_active": pump_on,
                "valve_open": valve_open,
                "flow_rate_ml_s": flow_rate,
                "spray_state": actuators.get("spray_state", "IDLE_OFF")
            }
        }
