"""
AgriGuard — Sensor Telemetry Manager & Validation
Parses incoming telemetry from both simulation providers and physical ESP32.
Preserves unified simulation telemetry structures and reports honest connection states.
"""

from typing import Dict, Any, Optional
import logging

logger = logging.getLogger(__name__)


class SensorManagerService:
    def __init__(self):
        self.latest_telemetry: Optional[Dict[str, Any]] = None

    def process_telemetry(self, raw: Dict[str, Any]) -> Dict[str, Any]:
        """
        Processes unified telemetry payload.
        Ensures strict adherence to the unified schema:
        - ultrasonic (left, center, right, obstacle status)
        - soil_moisture (value & DRY/NORMAL/WET status)
        - dht22 (temperature, humidity)
        - mpu6050 (accel, gyro, tilt)
        - pump (state, relay, spray_status)
        - mode & hardware_mode ("SIMULATION" vs "REAL_HARDWARE")
        """
        self.latest_telemetry = raw

        mode = raw.get("mode") or raw.get("hardware_mode") or "SIMULATION"
        is_simulation = mode.upper() == "SIMULATION"
        esp32_connected = False if is_simulation else bool(raw.get("esp32_connected", False))

        # 1. Ultrasonic (Left, Center, Right)
        us_raw = raw.get("ultrasonic", {})
        if isinstance(us_raw, dict) and "left" in us_raw:
            us_left = us_raw.get("left")
            us_center = us_raw.get("center")
            us_right = us_raw.get("right")
            us_dist = us_center
        else:
            sensors = raw.get("sensors", {})
            us_sensor = sensors.get("ultrasonic", {})
            us_dist = us_sensor.get("distance_cm") if us_sensor.get("valid") else raw.get("ultrasonic_front")
            us_left = raw.get("ultrasonic_left", us_dist)
            us_center = us_dist
            us_right = raw.get("ultrasonic_right", us_dist)

        # Sanitize distances
        if us_dist is not None and us_dist < 0:
            us_dist = None
        if us_left is not None and us_left < 0:
            us_left = None
        if us_center is not None and us_center < 0:
            us_center = None
        if us_right is not None and us_right < 0:
            us_right = None

        # Derive obstacle status
        # distance > 60 cm -> SAFE
        # 25 <= distance <= 60 cm -> WARNING
        # distance < 25 cm -> OBSTACLE
        # Center < 25 cm -> OBSTACLE AHEAD
        if not is_simulation and not esp32_connected:
            # Physical ESP32 is disconnected: ZERO fake values, honest OFFLINE status
            obs_status = "OFFLINE"
            robot_status = "ROBOT: DISCONNECTED"
            obs_detected = False
            center_obstacle = False
            sm_status = "OFFLINE"
            env_status = "OFFLINE"
            accel_x = None
            accel_y = None
            accel_z = None
            gyro_x = None
            gyro_y = None
            gyro_z = None
            pitch_deg = None
            roll_deg = None
            tilt_status = "OFFLINE"
            pump_state = "OFF"
            relay_state = "OFF"
            spray_status = "OFFLINE"
            pump_active_bool = False
            relay_active_bool = False
            flow_rate = 0.0
            motor_state = "DISCONNECTED"
            motor_speed = 0
            n_val = None
            p_val = None
            k_val = None
            npk_valid = False
            npk_status = "OFFLINE"
            estop_active = False

            return {
                "mode": mode,
                "hardware_mode": mode,
                "data_source": "ESP32_PHYSICAL",
                "esp32_connected": False,
                "operating_mode": "ROBOT: DISCONNECTED",
                "robot_status": "ROBOT: DISCONNECTED",
                "battery_voltage": None,
                "battery_percentage": None,
                "ultrasonic": {
                    "left": None,
                    "center": None,
                    "right": None,
                    "distance_cm": None,
                    "obstacle_status": "OFFLINE",
                    "robot_status": "ROBOT: DISCONNECTED",
                    "obstacle_detected": False,
                    "obstacle_ahead": False,
                    "status": "OFFLINE",
                    "valid": False
                },
                "soil_moisture": None,
                "soil_moisture_status": "OFFLINE",
                "dht22": {
                    "temperature": None,
                    "humidity": None,
                    "valid": False
                },
                "mpu6050": {
                    "accel_x": None,
                    "accel_y": None,
                    "accel_z": None,
                    "gyro_x": None,
                    "gyro_y": None,
                    "gyro_z": None,
                    "pitch_deg": None,
                    "roll_deg": None,
                    "tilt_status": "OFFLINE",
                    "valid": False
                },
                "pump": {
                    "state": "OFF",
                    "relay": "OFF",
                    "spray_status": "OFFLINE"
                },
                "environment": {
                    "temperature_c": None,
                    "humidity_pct": None,
                    "status": "OFFLINE",
                    "valid": False
                },
                "imu": {
                    "ax": None,
                    "ay": None,
                    "az": None,
                    "gx": None,
                    "gy": None,
                    "gz": None,
                    "pitch_deg": None,
                    "roll_deg": None,
                    "valid": False,
                    "status": "OFFLINE"
                },
                "npk": {
                    "nitrogen_mg_kg": None,
                    "phosphorus_mg_kg": None,
                    "potassium_mg_kg": None,
                    "valid": False,
                    "status": "OFFLINE"
                },
                "actuators": {
                    "pump_active": False,
                    "relay_active": False,
                    "valve_open": False,
                    "flow_rate_ml_s": 0.0,
                    "motor_state": "DISCONNECTED",
                    "motor_speed": 0,
                    "spray_state": "OFFLINE"
                },
                "safety": {
                    "emergency_stop": False,
                    "watchdog_tripped": False,
                    "obstacle_detected": False,
                    "robot_status": "ROBOT: DISCONNECTED",
                    "hardware_errors": []
                }
            }

        center_val = us_center if us_center is not None else 999.0
        left_val = us_left if us_left is not None else 999.0
        right_val = us_right if us_right is not None else 999.0
        min_dist = min(left_val, center_val, right_val)

        if min_dist > 60.0:
            obs_status = "SAFE"
        elif min_dist >= 25.0:
            obs_status = "WARNING"
        else:
            obs_status = "OBSTACLE"

        center_obstacle = center_val < 25.0
        robot_status = "OBSTACLE AHEAD" if center_obstacle else obs_status
        obs_detected = obs_status == "OBSTACLE"

        # 2. Soil Moisture
        # 70-100 -> WET, 40-69 -> NORMAL, 0-39 -> DRY
        sm_raw = raw.get("soil_moisture")
        if isinstance(sm_raw, dict):
            sm_pct = sm_raw.get("moisture_pct", sm_raw.get("percentage"))
        elif isinstance(sm_raw, (int, float)):
            sm_pct = float(sm_raw)
        else:
            sm_pct = raw.get("sensors", {}).get("soil_moisture", {}).get("moisture_pct")

        if sm_pct is not None:
            if sm_pct >= 70.0:
                sm_status = "WET"
            elif sm_pct >= 40.0:
                sm_status = "NORMAL"
            else:
                sm_status = "DRY"
        else:
            sm_status = "UNAVAILABLE"

        # 3. DHT22 Environment
        dht_raw = raw.get("dht22", {})
        temp_c = dht_raw.get("temperature") if isinstance(dht_raw, dict) and "temperature" in dht_raw else raw.get("environment", {}).get("temperature_c", raw.get("temperature"))
        hum_pct = dht_raw.get("humidity") if isinstance(dht_raw, dict) and "humidity" in dht_raw else raw.get("environment", {}).get("humidity_pct", raw.get("humidity"))
        env_status = "OK" if (temp_c is not None and hum_pct is not None) else "UNAVAILABLE"

        # 4. MPU6050 Motion
        mpu_raw = raw.get("mpu6050", {})
        imu_raw = raw.get("imu", {})
        accel_x = mpu_raw.get("accel_x", imu_raw.get("ax", 0.03))
        accel_y = mpu_raw.get("accel_y", imu_raw.get("ay", 0.12))
        accel_z = mpu_raw.get("accel_z", imu_raw.get("az", 0.98))
        gyro_x = mpu_raw.get("gyro_x", imu_raw.get("gx", 1.2))
        gyro_y = mpu_raw.get("gyro_y", imu_raw.get("gy", -0.8))
        gyro_z = mpu_raw.get("gyro_z", imu_raw.get("gz", 0.5))
        pitch_deg = mpu_raw.get("pitch_deg", imu_raw.get("pitch_deg", 1.2))
        roll_deg = mpu_raw.get("roll_deg", imu_raw.get("roll_deg", -0.8))
        tilt_status = mpu_raw.get("tilt_status", "LEVEL" if (abs(pitch_deg or 0) < 5 and abs(roll_deg or 0) < 5) else "TILTED")

        # 5. Water Pump + Relay
        pump_dict = raw.get("pump", {})
        if isinstance(pump_dict, dict) and "state" in pump_dict:
            pump_state = pump_dict.get("state", "OFF")
            relay_state = pump_dict.get("relay", pump_state)
            spray_status = pump_dict.get("spray_status", "ACTIVE" if pump_state == "ON" else "READY")
        else:
            act = raw.get("actuators", {})
            pump_on = act.get("pump_active", False)
            pump_state = "ON" if pump_on else "OFF"
            relay_state = "ON" if pump_on else "OFF"
            spray_status = "ACTIVE" if pump_on else "READY"

        pump_active_bool = (pump_state == "ON")
        relay_active_bool = (relay_state == "ON")

        # 6. Actuators & Motors
        actuators = raw.get("actuators", {})
        flow_rate = actuators.get("flow_rate_ml_s", 15.0 if pump_active_bool else 0.0)
        motor_state = raw.get("motors", {}).get("state", actuators.get("motor_state", "STOPPED"))
        motor_speed = raw.get("motors", {}).get("speed", actuators.get("motor_speed", 0))

        # 7. RS485 NPK (Strictly Real Hardware - Never Simulated)
        npk = raw.get("npk") or raw.get("sensors", {}).get("npk") or {}
        npk_valid = bool(npk.get("valid", False)) and not is_simulation
        n_val = npk.get("nitrogen_mg_kg", npk.get("n")) if npk_valid else None
        p_val = npk.get("phosphorus_mg_kg", npk.get("p")) if npk_valid else None
        k_val = npk.get("potassium_mg_kg", npk.get("k")) if npk_valid else None
        npk_status = "OK" if npk_valid else "OFFLINE"

        # 8. Safety & Interlocks
        safety = raw.get("safety", {})
        estop_active = safety.get("emergency_stop", safety.get("estop_active", False))

        return {
            # Standard unified simulated telemetry object (Section 7)
            "mode": mode,
            "hardware_mode": mode,
            "data_source": "SIMULATION" if is_simulation else "ESP32_PHYSICAL",
            "esp32_connected": esp32_connected,

            "ultrasonic": {
                "left": us_left,
                "center": us_center,
                "right": us_right,
                "distance_cm": us_center,
                "obstacle_status": obs_status,
                "robot_status": robot_status,
                "obstacle_detected": obs_detected,
                "obstacle_ahead": center_obstacle,
                "status": obs_status,
                "valid": True
            },

            "soil_moisture": sm_pct,
            "soil_moisture_status": sm_status,

            "dht22": {
                "temperature": temp_c,
                "humidity": hum_pct,
                "valid": True
            },

            "mpu6050": {
                "accel_x": accel_x,
                "accel_y": accel_y,
                "accel_z": accel_z,
                "gyro_x": gyro_x,
                "gyro_y": gyro_y,
                "gyro_z": gyro_z,
                "pitch_deg": pitch_deg,
                "roll_deg": roll_deg,
                "tilt_status": tilt_status,
                "valid": True
            },

            "pump": {
                "state": pump_state,
                "relay": relay_state,
                "spray_status": spray_status
            },

            # Backward-compatibility adaptors for existing widgets
            # Battery & NPK are NOT simulated, preserving real hardware slots
            "battery_voltage": raw.get("battery_voltage") if not is_simulation else None,
            "battery_percentage": raw.get("battery_percentage") if not is_simulation else None,
            "environment": {
                "temperature_c": temp_c,
                "humidity_pct": hum_pct,
                "status": env_status,
                "valid": True
            },
            "imu": {
                "ax": accel_x,
                "ay": accel_y,
                "az": accel_z,
                "gx": gyro_x,
                "gy": gyro_y,
                "gz": gyro_z,
                "pitch_deg": pitch_deg,
                "roll_deg": roll_deg,
                "valid": True,
                "status": "OK"
            },
            "npk": {
                "nitrogen_mg_kg": n_val,
                "phosphorus_mg_kg": p_val,
                "potassium_mg_kg": k_val,
                "valid": False if is_simulation else npk_valid,
                "status": npk_status
            },
            "actuators": {
                "pump_active": pump_active_bool,
                "relay_active": relay_active_bool,
                "valve_open": pump_active_bool,
                "flow_rate_ml_s": flow_rate,
                "motor_state": motor_state,
                "motor_speed": motor_speed,
                "spray_state": spray_status
            },
            "safety": {
                "emergency_stop": estop_active,
                "watchdog_tripped": safety.get("watchdog_tripped", False),
                "obstacle_detected": obs_detected,
                "robot_status": robot_status,
                "hardware_errors": []
            }
        }
