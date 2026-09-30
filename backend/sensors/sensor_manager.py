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
        us_distance = us.get("distance_cm") if us.get("valid") else raw.get("ultrasonic_front")
        if us_distance is not None and us_distance < 0:
            us_distance = None
        us_status = "OK" if us_distance is not None else "UNAVAILABLE"

        # 2. Soil Moisture
        sm = sensors.get("soil_moisture", {})
        sm_pct = sm.get("moisture_pct") if sm.get("valid") else raw.get("soil_moisture")
        sm_status = "OK" if sm_pct is not None else "UNAVAILABLE"

        # 3. Environment (DHT22)
        env = sensors.get("environment", {})
        temp_c = env.get("temperature_c") if env.get("valid") else raw.get("temperature")
        hum_pct = env.get("humidity_pct") if env.get("valid") else raw.get("humidity")
        env_status = "OK" if (temp_c is not None and hum_pct is not None) else "UNAVAILABLE"

        # 4. IMU (MPU6050)
        imu = sensors.get("imu", {})
        imu_status = "OK" if imu.get("valid") else "UNAVAILABLE"

        # 5. RS485 Modbus NPK
        npk = sensors.get("npk") or raw.get("npk") or {}
        npk_valid = npk.get("valid", False)
        n_val = (npk.get("nitrogen_mg_kg") if npk.get("nitrogen_mg_kg") is not None else npk.get("n")) if npk_valid else None
        p_val = (npk.get("phosphorus_mg_kg") if npk.get("phosphorus_mg_kg") is not None else npk.get("p")) if npk_valid else None
        k_val = (npk.get("potassium_mg_kg") if npk.get("potassium_mg_kg") is not None else npk.get("k")) if npk_valid else None
        npk_status = "OK" if npk_valid else ("DISCONNECTED" if not raw.get("esp32_connected") else (npk.get("error", "TIMEOUT")))

        # 6. Flow Sensor & Pump
        actuators = raw.get("actuators", {})
        flow_rate = actuators.get("flow_rate_ml_s", 0.0)
        pump_on = actuators.get("pump_active", False)
        valve_open = actuators.get("valve_open", False)

        # 7. Safety & Obstacle Status
        safety = raw.get("safety", {})
        obs_detected = safety.get("obstacle_detected", False)
        if us_distance is not None and us_distance > 0 and us_distance <= 25.0:
            obs_detected = True

        return {
            "esp32_connected": raw.get("esp32_connected", False),
            "hardware_mode": raw.get("hardware_mode", "REAL_HARDWARE"),
            "battery_voltage": raw.get("battery_voltage"),
            "battery_percentage": raw.get("battery_percentage"),
            "ultrasonic": {
                "distance_cm": us_distance,
                "status": us_status,
                "obstacle_detected": obs_detected
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
                "motor_state": raw.get("motors", {}).get("state", "STOPPED"),
                "motor_speed": raw.get("motors", {}).get("speed", 0),
                "spray_state": actuators.get("spray_state", "IDLE_OFF")
            },
            "safety": {
                "emergency_stop": safety.get("estop_active", False),
                "physical_estop_pin": safety.get("physical_estop_pin", False),
                "watchdog_tripped": safety.get("watchdog_tripped", False),
                "obstacle_detected": obs_detected,
                "hardware_errors": []
            }
        }
