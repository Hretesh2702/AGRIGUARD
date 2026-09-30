"""
AgriGuard — Real Hardware Diagnostics API Route (Section 27)
Evaluates real physical connection states for ESP32, Camera, NPK, Soil, Microclimate, Actuators, and Flow.
"""

from fastapi import APIRouter, Depends
from typing import Dict, Any

router = APIRouter(prefix="/api/diagnostics", tags=["Diagnostics"])


def get_diagnostics_report(app_state: Any) -> Dict[str, Any]:
    """
    Evaluates real physical hardware connections without simulation.
    Reports CONNECTED / DISCONNECTED and OK / ERROR states truthfully.
    """
    esp32 = app_state.esp32_client
    camera = app_state.camera_service
    telemetry = esp32.fetch_real_telemetry()

    esp32_connected = telemetry.get("esp32_connected", False)
    sensors = telemetry.get("sensors", {})
    actuators = telemetry.get("actuators", {})

    # NPK status
    npk = sensors.get("npk", {})
    npk_status = "CONNECTED" if (esp32_connected and npk.get("valid")) else "DISCONNECTED"

    # Soil Moisture status
    sm = sensors.get("soil_moisture", {})
    soil_status = "OK" if (esp32_connected and sm.get("valid")) else "ERROR"

    # Temperature / Humidity status
    env = sensors.get("environment", {})
    temp_status = "OK" if (esp32_connected and env.get("valid")) else "ERROR"

    # Ultrasonic status
    us = sensors.get("ultrasonic", {})
    us_status = "OK" if (esp32_connected and us.get("valid")) else "ERROR"

    # IMU status
    imu = sensors.get("imu", {})
    imu_status = "OK" if (esp32_connected and imu.get("valid")) else "ERROR"

    # Actuators
    pump_status = "ON" if actuators.get("pump_active") else "OFF"
    valve_status = "OPEN" if actuators.get("valve_open") else "CLOSED"

    # Flow
    flow_rate = actuators.get("flow_rate_ml_s", 0.0)
    flow_status = f"{flow_rate:.1f} mL/s" if flow_rate > 0.5 else "NO FLOW"

    return {
        "timestamp": telemetry.get("timestamp_ms"),
        "esp32": "CONNECTED" if esp32_connected else "DISCONNECTED",
        "camera": "CONNECTED" if (camera.is_connected or getattr(camera, "hardware_yielded", False)) else "DISCONNECTED",
        "npk": npk_status,
        "soil_moisture": soil_status,
        "temperature": temp_status,
        "ultrasonic": us_status,
        "imu": imu_status,
        "pump": pump_status,
        "valve": valve_status,
        "flow": flow_status,
        "battery_voltage": telemetry.get("battery_voltage"),
        "raw_telemetry": telemetry
    }
