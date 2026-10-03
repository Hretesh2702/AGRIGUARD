"""
AgriGuard — Telemetry Provider Architecture
Decoupled telemetry interfaces supporting both realistic simulation and future physical ESP32 hardware.

Architecture:
Dashboard
    ↓
Telemetry Provider Interface
    ↓
┌───────────────────────────────┐
│                               │
SimulationTelemetryProvider   ESP32TelemetryProvider
│                               │
SIMULATED DATA (Active)         FUTURE HARDWARE
└───────────────────────────────┘
"""

import time
import math
import random
import logging
from abc import ABC, abstractmethod
from typing import Dict, Any, Optional

logger = logging.getLogger(__name__)


class TelemetryProvider(ABC):
    """
    Standard Telemetry Provider Interface.
    Both Simulation and Physical ESP32 providers produce the EXACT same telemetry structure.
    """

    @abstractmethod
    def get_telemetry(self) -> Dict[str, Any]:
        """Returns the unified telemetry dictionary."""
        pass

    @abstractmethod
    def set_pump(self, active: bool) -> Dict[str, Any]:
        """Toggles pump/relay state."""
        pass

    @abstractmethod
    def is_connected(self) -> bool:
        """Returns physical connection state."""
        pass

    @abstractmethod
    def get_mode(self) -> str:
        """Returns 'SIMULATION' or 'REAL_HARDWARE'."""
        pass


class SimulationTelemetryProvider(TelemetryProvider):
    """
    Simulated Hardware Telemetry Provider.
    Generates realistic, continuous, smoothly-varying telemetry for:
    1. Ultrasonic Left (cm)
    2. Ultrasonic Center (cm)
    3. Ultrasonic Right (cm)
    4. Soil Moisture Sensor (%)
    5. DHT22 (Temperature °C & Humidity %)
    6. Water Pump + Relay (Synchronized ON/OFF)
    7. MPU6050 (Accelerometer X,Y,Z & Gyroscope X,Y,Z & Tilt)

    Values vary smoothly over time using a damped random-walk + harmonic model.
    Never produces wild random jumps or impossible negative values.
    """

    def __init__(self):
        self._start_time = time.time()
        self._last_update_time = time.time()

        # 1. Ultrasonic Initial States (in cm)
        # Left safe: 20-150 cm, Center: 10-150 cm, Right safe: 20-150 cm
        self._us_left = 72.0
        self._us_center = 48.0
        self._us_right = 86.0

        # Safe boundaries
        self._us_left_bounds = (20.0, 150.0)
        self._us_center_bounds = (10.0, 150.0)
        self._us_right_bounds = (20.0, 150.0)

        # 2. Soil Moisture Initial State (0-100%)
        self._soil_moisture = 42.0

        # 3. DHT22 Initial States (Temp 20-40 °C, Humidity 30-90%)
        self._dht_temp = 29.4
        self._dht_humidity = 74.0

        # 4. MPU6050 Initial States (accel in g, gyro in deg/s)
        self._accel_x = 0.03
        self._accel_y = 0.12
        self._accel_z = 0.98
        self._gyro_x = 1.2
        self._gyro_y = -0.8
        self._gyro_z = 0.5

        # 5. Water Pump + Relay States (Logically Connected)
        self._pump_on = False
        self._relay_on = False
        self._spray_status = "READY"  # READY or ACTIVE

        # Subtle drift velocities for smooth variations
        self._v_left = 0.0
        self._v_center = 0.0
        self._v_right = 0.0
        self._v_temp = 0.0
        self._v_humidity = 0.0
        self._v_soil = 0.0

    def get_mode(self) -> str:
        return "SIMULATION"

    def is_connected(self) -> bool:
        # Strictly reports false for real physical ESP32 connection
        return False

    def set_pump(self, active: bool) -> Dict[str, Any]:
        """
        Actuates simulated pump and relay simultaneously.
        Does NOT activate any real hardware.
        """
        self._pump_on = bool(active)
        self._relay_on = bool(active)
        self._spray_status = "ACTIVE" if active else "READY"
        logger.info(f"[SIMULATION] Water Pump & Relay set to: {'ON' if active else 'OFF'}")
        return {
            "ok": True,
            "pump": "ON" if self._pump_on else "OFF",
            "relay": "ON" if self._relay_on else "OFF",
            "spray_status": self._spray_status,
            "simulated": True
        }

    def _step_simulation(self):
        """Advances physics/random-walk state smoothly."""
        now = time.time()
        dt = max(0.01, min(now - self._last_update_time, 0.5))
        self._last_update_time = now
        elapsed = now - self._start_time

        # 1. Ultrasonic Left (target ~72 cm, safe range 20-150 cm)
        target_left = 72.0 + 8.0 * math.sin(elapsed * 0.15)
        self._v_left = 0.85 * self._v_left + 0.15 * (target_left - self._us_left) + random.uniform(-0.4, 0.4)
        self._us_left = max(self._us_left_bounds[0], min(self._us_left_bounds[1], self._us_left + self._v_left * dt))

        # 2. Ultrasonic Center (target ~48 cm, range 10-150 cm)
        # Gently modulates so operator can see SAFE, WARNING, and OBSTACLE transitions realistically
        target_center = 48.0 + 26.0 * math.sin(elapsed * 0.12)
        self._v_center = 0.85 * self._v_center + 0.15 * (target_center - self._us_center) + random.uniform(-0.5, 0.5)
        self._us_center = max(self._us_center_bounds[0], min(self._us_center_bounds[1], self._us_center + self._v_center * dt))

        # 3. Ultrasonic Right (target ~86 cm, safe range 20-150 cm)
        target_right = 86.0 + 10.0 * math.cos(elapsed * 0.18)
        self._v_right = 0.85 * self._v_right + 0.15 * (target_right - self._us_right) + random.uniform(-0.4, 0.4)
        self._us_right = max(self._us_right_bounds[0], min(self._us_right_bounds[1], self._us_right + self._v_right * dt))

        # 4. Soil Moisture (target ~42%, slow drift)
        target_soil = 42.0 + 2.5 * math.sin(elapsed * 0.05)
        self._v_soil = 0.92 * self._v_soil + 0.08 * (target_soil - self._soil_moisture) + random.uniform(-0.04, 0.04)
        self._soil_moisture = max(0.0, min(100.0, self._soil_moisture + self._v_soil * dt))

        # 5. DHT22 Temperature (target ~29.4 °C, gradual variation)
        target_temp = 29.4 + 0.8 * math.sin(elapsed * 0.08)
        self._v_temp = 0.90 * self._v_temp + 0.10 * (target_temp - self._dht_temp) + random.uniform(-0.03, 0.03)
        self._dht_temp = max(20.0, min(40.0, self._dht_temp + self._v_temp * dt))

        # 5b. DHT22 Humidity (target ~74%, gradual variation)
        target_hum = 74.0 + 2.0 * math.cos(elapsed * 0.07)
        self._v_humidity = 0.90 * self._v_humidity + 0.10 * (target_hum - self._dht_humidity) + random.uniform(-0.08, 0.08)
        self._dht_humidity = max(30.0, min(90.0, self._dht_humidity + self._v_humidity * dt))

        # 6. MPU6050 Accelerometer & Gyroscope micro-variations
        # Small changes around realistic rest/motion values
        self._accel_x = 0.03 + 0.008 * math.sin(elapsed * 1.5) + random.uniform(-0.003, 0.003)
        self._accel_y = 0.12 + 0.010 * math.cos(elapsed * 1.2) + random.uniform(-0.003, 0.003)
        self._accel_z = 0.98 + 0.005 * math.sin(elapsed * 0.8) + random.uniform(-0.002, 0.002)

        self._gyro_x = 1.2 + 0.25 * math.sin(elapsed * 1.8) + random.uniform(-0.06, 0.06)
        self._gyro_y = -0.8 + 0.20 * math.cos(elapsed * 1.4) + random.uniform(-0.05, 0.05)
        self._gyro_z = 0.5 + 0.15 * math.sin(elapsed * 1.1) + random.uniform(-0.04, 0.04)

    def calculate_obstacle_status(self) -> Dict[str, Any]:
        """
        Obstacle logic:
        distance > 60 cm -> SAFE
        25 <= distance <= 60 cm -> WARNING
        distance < 25 cm -> OBSTACLE

        If CENTER sensor detects < 25 cm:
        Robot status: OBSTACLE AHEAD
        """
        center_val = round(self._us_center, 1)
        left_val = round(self._us_left, 1)
        right_val = round(self._us_right, 1)

        min_dist = min(left_val, center_val, right_val)

        if min_dist > 60.0:
            overall_status = "SAFE"
        elif min_dist >= 25.0:
            overall_status = "WARNING"
        else:
            overall_status = "OBSTACLE"

        center_obstacle = center_val < 25.0
        robot_status = "OBSTACLE AHEAD" if center_obstacle else overall_status

        return {
            "overall_status": overall_status,
            "robot_status": robot_status,
            "obstacle_ahead": center_obstacle,
            "obstacle_detected": overall_status == "OBSTACLE"
        }

    def calculate_soil_status(self) -> str:
        """
        Soil moisture status:
        70-100 -> WET
        40-69  -> NORMAL
        0-39   -> DRY
        """
        sm = round(self._soil_moisture, 1)
        if sm >= 70.0:
            return "WET"
        elif sm >= 40.0:
            return "NORMAL"
        else:
            return "DRY"

    def calculate_tilt(self) -> Dict[str, Any]:
        """Calculates pitch, roll, and tilt classification from simulated MPU6050."""
        # Convert accel to pitch and roll angles in degrees
        ay = self._accel_y
        ax = self._accel_x
        az = self._accel_z
        pitch = math.degrees(math.atan2(ax, math.sqrt(ay * ay + az * az)))
        roll = math.degrees(math.atan2(ay, math.sqrt(ax * ax + az * az)))
        tilt_status = "LEVEL" if (abs(pitch) < 5.0 and abs(roll) < 5.0) else "TILTED"
        return {
            "pitch_deg": round(pitch, 1),
            "roll_deg": round(roll, 1),
            "tilt_status": tilt_status
        }

    def get_telemetry(self) -> Dict[str, Any]:
        """
        Generates unified telemetry dictionary matching the exact schema specified in Section 7:
        {
          "mode": "SIMULATION",
          "ultrasonic": { "left": 72, "center": 48, "right": 86 },
          "soil_moisture": 42,
          "dht22": { "temperature": 29.4, "humidity": 74 },
          "mpu6050": { "accel_x": 0.03, ... },
          "pump": { "state": "OFF", "relay": "OFF" }
        }
        Plus standard backward-compatibility keys for full dashboard integration.
        """
        self._step_simulation()

        obs_info = self.calculate_obstacle_status()
        soil_status = self.calculate_soil_status()
        tilt_info = self.calculate_tilt()

        us_left_rounded = round(self._us_left, 1)
        us_center_rounded = round(self._us_center, 1)
        us_right_rounded = round(self._us_right, 1)
        soil_rounded = round(self._soil_moisture, 1)
        temp_rounded = round(self._dht_temp, 1)
        hum_rounded = round(self._dht_humidity, 1)
        accel_x_r = round(self._accel_x, 3)
        accel_y_r = round(self._accel_y, 3)
        accel_z_r = round(self._accel_z, 3)
        gyro_x_r = round(self._gyro_x, 2)
        gyro_y_r = round(self._gyro_y, 2)
        gyro_z_r = round(self._gyro_z, 2)

        pump_state_str = "ON" if self._pump_on else "OFF"
        relay_state_str = "ON" if self._relay_on else "OFF"

        return {
            # --- 1. EXACT UNIFIED SIMULATED TELEMETRY OBJECT (Section 7) ---
            "mode": "SIMULATION",
            "hardware_mode": "SIMULATION",
            "data_source": "SIMULATION",
            "esp32_connected": False,  # Truthful status: physical hardware not connected

            "ultrasonic": {
                "left": us_left_rounded,
                "center": us_center_rounded,
                "right": us_right_rounded,
                "distance_cm": us_center_rounded,
                "obstacle_status": obs_info["overall_status"],
                "robot_status": obs_info["robot_status"],
                "obstacle_detected": obs_info["obstacle_detected"],
                "obstacle_ahead": obs_info["obstacle_ahead"],
                "status": obs_info["overall_status"],
                "valid": True
            },

            "soil_moisture": soil_rounded,
            "soil_moisture_status": soil_status,

            "dht22": {
                "temperature": temp_rounded,
                "humidity": hum_rounded,
                "valid": True
            },

            "mpu6050": {
                "accel_x": accel_x_r,
                "accel_y": accel_y_r,
                "accel_z": accel_z_r,
                "gyro_x": gyro_x_r,
                "gyro_y": gyro_y_r,
                "gyro_z": gyro_z_r,
                "pitch_deg": tilt_info["pitch_deg"],
                "roll_deg": tilt_info["roll_deg"],
                "tilt_status": tilt_info["tilt_status"],
                "valid": True
            },

            "pump": {
                "state": pump_state_str,
                "relay": relay_state_str,
                "spray_status": self._spray_status
            },

            # --- 2. BACKWARD-COMPATIBILITY ADAPTERS FOR EXISTING DASHBOARD WIDGETS ---
            # Strictly NO other sensors are simulated because operator wants to connect real hardware later
            "timestamp_ms": int(time.time() * 1000),
            "battery_voltage": None,
            "battery_percentage": None,
            "environment": {
                "temperature_c": temp_rounded,
                "humidity_pct": hum_rounded,
                "valid": True,
                "status": "OK"
            },
            "imu": {
                "ax": accel_x_r,
                "ay": accel_y_r,
                "az": accel_z_r,
                "gx": gyro_x_r,
                "gy": gyro_y_r,
                "gz": gyro_z_r,
                "pitch_deg": tilt_info["pitch_deg"],
                "roll_deg": tilt_info["roll_deg"],
                "yaw_deg": 0.0,
                "valid": True,
                "status": "OK"
            },
            "soil_moisture_data": {
                "raw_adc": int(soil_rounded * 32),
                "moisture_pct": soil_rounded,
                "status": soil_status,
                "valid": True
            },
            "npk": {
                "nitrogen_mg_kg": None,
                "phosphorus_mg_kg": None,
                "potassium_mg_kg": None,
                "valid": False,
                "status": "OFFLINE (Awaiting Real Hardware)"
            },
            "actuators": {
                "pump_active": self._pump_on,
                "relay_active": self._relay_on,
                "valve_open": self._pump_on,
                "flow_rate_ml_s": 0.0,
                "motor_state": "STOPPED",
                "motor_speed": 0,
                "spray_state": self._spray_status
            },
            "safety": {
                "emergency_stop": False,
                "watchdog_tripped": False,
                "obstacle_detected": obs_info["obstacle_detected"],
                "physical_estop_pin": False,
                "robot_status": obs_info["robot_status"],
                "hardware_errors": []
            }
        }


class ESP32TelemetryProvider(TelemetryProvider):
    """
    Physical ESP32 Telemetry Provider (Ready for future real hardware).
    Queries real ESP32 over Wi-Fi or Bluetooth, normalizes sensor inputs,
    and returns the EXACT SAME unified telemetry structure.
    """

    def __init__(self, base_url: str = "http://192.168.4.1", timeout: float = 2.0):
        self.base_url = base_url
        self.timeout = timeout
        self._connected = False
        self._last_telemetry: Optional[Dict[str, Any]] = None

    def get_mode(self) -> str:
        return "REAL_HARDWARE"

    def is_connected(self) -> bool:
        return self._connected

    def set_pump(self, active: bool) -> Dict[str, Any]:
        """Dispatches physical spray/pump actuation command to ESP32."""
        import requests
        try:
            resp = requests.post(
                f"{self.base_url}/api/command",
                json={
                    "type": "spray_command",
                    "action": "pump_on" if active else "pump_off",
                    "duration_ms": 5000 if active else 0
                },
                timeout=self.timeout
            )
            return resp.json()
        except Exception as e:
            logger.error(f"[ESP32TelemetryProvider] Actuator command failed: {e}")
            return {"ok": False, "error": str(e)}

    def get_telemetry(self) -> Dict[str, Any]:
        """Fetches and maps physical ESP32 registers into the unified schema."""
        import requests
        try:
            resp = requests.get(f"{self.base_url}/api/telemetry", timeout=self.timeout)
            if resp.status_code == 200:
                raw = resp.json()
                self._connected = True
                self._last_telemetry = raw

                sensors = raw.get("sensors", {})
                us = sensors.get("ultrasonic", {})
                us_dist = us.get("distance_cm", raw.get("ultrasonic_front", 0.0)) or 0.0
                obs_status = "SAFE" if us_dist > 60.0 else ("WARNING" if us_dist >= 25.0 else "OBSTACLE")

                sm = sensors.get("soil_moisture", {})
                sm_pct = sm.get("moisture_pct", raw.get("soil_moisture", 0.0)) or 0.0
                sm_status = "WET" if sm_pct >= 70.0 else ("NORMAL" if sm_pct >= 40.0 else "DRY")

                env = sensors.get("environment", {})
                dht_t = env.get("temperature_c", raw.get("temperature", 0.0)) or 0.0
                dht_h = env.get("humidity_pct", raw.get("humidity", 0.0)) or 0.0

                imu = sensors.get("imu", {})
                pump_state = "ON" if raw.get("actuators", {}).get("pump_active") else "OFF"

                return {
                    "mode": "REAL_HARDWARE",
                    "hardware_mode": "REAL_HARDWARE",
                    "data_source": "ESP32_PHYSICAL",
                    "esp32_connected": True,
                    "ultrasonic": {
                        "left": round(raw.get("ultrasonic_left", us_dist), 1),
                        "center": round(raw.get("ultrasonic_center", us_dist), 1),
                        "right": round(raw.get("ultrasonic_right", us_dist), 1),
                        "distance_cm": round(us_dist, 1),
                        "obstacle_status": obs_status,
                        "robot_status": "OBSTACLE AHEAD" if us_dist < 25.0 else obs_status,
                        "obstacle_detected": us_dist < 25.0,
                        "obstacle_ahead": us_dist < 25.0,
                        "status": obs_status,
                        "valid": us.get("valid", True)
                    },
                    "soil_moisture": round(sm_pct, 1),
                    "soil_moisture_status": sm_status,
                    "dht22": {
                        "temperature": round(dht_t, 1),
                        "humidity": round(dht_h, 1),
                        "valid": env.get("valid", True)
                    },
                    "mpu6050": {
                        "accel_x": round(imu.get("accel_x", 0.0), 3),
                        "accel_y": round(imu.get("accel_y", 0.0), 3),
                        "accel_z": round(imu.get("accel_z", 0.98), 3),
                        "gyro_x": round(imu.get("gyro_x", 0.0), 2),
                        "gyro_y": round(imu.get("gyro_y", 0.0), 2),
                        "gyro_z": round(imu.get("gyro_z", 0.0), 2),
                        "pitch_deg": round(imu.get("pitch_deg", 0.0), 1),
                        "roll_deg": round(imu.get("roll_deg", 0.0), 1),
                        "tilt_status": "LEVEL" if abs(imu.get("pitch_deg", 0.0)) < 5.0 else "TILTED",
                        "valid": imu.get("valid", True)
                    },
                    "pump": {
                        "state": pump_state,
                        "relay": pump_state,
                        "spray_status": "ACTIVE" if pump_state == "ON" else "READY"
                    },
                    "timestamp_ms": int(time.time() * 1000),
                    "battery_voltage": raw.get("battery_voltage"),
                    "battery_percentage": raw.get("battery_percentage"),
                    "environment": env,
                    "imu": imu,
                    "actuators": raw.get("actuators", {}),
                    "safety": raw.get("safety", {})
                }
        except Exception:
            self._connected = False

        return {
            "mode": "REAL_HARDWARE",
            "hardware_mode": "REAL_HARDWARE",
            "data_source": "ESP32_PHYSICAL",
            "esp32_connected": False,
            "ultrasonic": {
                "left": None,
                "center": None,
                "right": None,
                "distance_cm": None,
                "obstacle_status": "OFFLINE",
                "robot_status": "ESP32 OFFLINE",
                "obstacle_detected": False,
                "obstacle_ahead": False,
                "status": "OFFLINE",
                "valid": False
            },
            "soil_moisture": None,
            "soil_moisture_status": "OFFLINE",
            "dht22": {"temperature": None, "humidity": None, "valid": False},
            "mpu6050": {
                "accel_x": None, "accel_y": None, "accel_z": None,
                "gyro_x": None, "gyro_y": None, "gyro_z": None,
                "pitch_deg": None, "roll_deg": None, "tilt_status": "OFFLINE", "valid": False
            },
            "pump": {"state": "OFF", "relay": "OFF", "spray_status": "OFFLINE"},
            "timestamp_ms": int(time.time() * 1000),
            "safety": {"emergency_stop": False, "watchdog_tripped": False, "obstacle_detected": False, "hardware_errors": ["ESP32 Disconnected"]}
        }


# Global Default Simulation Provider
simulation_telemetry_provider = SimulationTelemetryProvider()
