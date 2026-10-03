import time
import json
from backend.sensors.telemetry_provider import simulation_telemetry_provider, ESP32TelemetryProvider

def test_simulation_provider():
    print("Testing SimulationTelemetryProvider...")
    for i in range(5):
        time.sleep(0.05)
        t = simulation_telemetry_provider.get_telemetry()
        print(f"Tick {i+1}:")
        print(f"  Mode: {t['mode']}, Hardware Mode: {t['hardware_mode']}, Connected: {t['esp32_connected']}")
        print(f"  Ultrasonic: L={t['ultrasonic']['left']} cm, C={t['ultrasonic']['center']} cm, R={t['ultrasonic']['right']} cm")
        print(f"  Obstacle Status: {t['ultrasonic']['obstacle_status']}, Robot Status: {t['ultrasonic']['robot_status']}")
        print(f"  Soil Moisture: {t['soil_moisture']}% ({t['soil_moisture_status']})")
        print(f"  DHT22: {t['dht22']['temperature']} °C, {t['dht22']['humidity']}%")
        print(f"  MPU6050 Accel: X={t['mpu6050']['accel_x']} Y={t['mpu6050']['accel_y']} Z={t['mpu6050']['accel_z']}")
        print(f"  MPU6050 Gyro: X={t['mpu6050']['gyro_x']} Y={t['mpu6050']['gyro_y']} Z={t['mpu6050']['gyro_z']}")
        print(f"  Pump: {t['pump']['state']}, Relay: {t['pump']['relay']}, Spray: {t['pump']['spray_status']}")

    # Test pump toggle
    print("\nTesting Pump Toggle...")
    res_on = simulation_telemetry_provider.set_pump(True)
    t_on = simulation_telemetry_provider.get_telemetry()
    assert t_on['pump']['state'] == "ON", "Pump should be ON"
    assert t_on['pump']['relay'] == "ON", "Relay should be ON"
    assert t_on['pump']['spray_status'] == "ACTIVE", "Spray status should be ACTIVE"
    print("  Pump ON OK:", t_on['pump'])

    res_off = simulation_telemetry_provider.set_pump(False)
    t_off = simulation_telemetry_provider.get_telemetry()
    assert t_off['pump']['state'] == "OFF", "Pump should be OFF"
    assert t_off['pump']['relay'] == "OFF", "Relay should be OFF"
    assert t_off['pump']['spray_status'] == "READY", "Spray status should be READY"
    print("  Pump OFF OK:", t_off['pump'])

    print("\nVerifying unified schema consistency between Simulation and ESP32 providers:")
    esp32_provider = ESP32TelemetryProvider()
    t_esp32 = esp32_provider.get_telemetry()
    for key in ['mode', 'ultrasonic', 'soil_moisture', 'dht22', 'mpu6050', 'pump']:
        assert key in t_on, f"Missing key {key} in simulation"
        assert key in t_esp32, f"Missing key {key} in ESP32 provider"
        print(f"  Key '{key}' matches across both providers!")

    print("\nALL SIMULATION TELEMETRY TESTS PASSED!")

if __name__ == '__main__':
    test_simulation_provider()
