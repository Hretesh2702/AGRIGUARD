import json
import time
import urllib.request
import asyncio
import websockets
import sqlite3

async def test_websocket_telemetry():
    uri = "ws://localhost:8000/ws/telemetry"
    print(f"Connecting to WebSocket: {uri} ...")
    async with websockets.connect(uri) as ws:
        for i in range(5):
            msg = await ws.recv()
            data = json.loads(msg)
            print(f"\n[WS Telemetry Sample #{i+1}]")
            print(f"  Mode: {data.get('mode')}, Hardware Mode: {data.get('hardware_mode')}, Connected: {data.get('esp32_connected')}")
            us = data.get("ultrasonic", {})
            print(f"  Ultrasonic: Left={us.get('left')} cm, Center={us.get('center')} cm, Right={us.get('right')} cm")
            print(f"  Obstacle Status: {us.get('obstacle_status')}, Robot Status: {us.get('robot_status')}")
            print(f"  Soil Moisture: {data.get('soil_moisture')}% (Status: {data.get('soil_moisture_status')})")
            dht = data.get("dht22", {})
            print(f"  DHT22: {dht.get('temperature')} °C, {dht.get('humidity')}%")
            mpu = data.get("mpu6050", {})
            print(f"  MPU6050 Accel: X={mpu.get('accel_x')} Y={mpu.get('accel_y')} Z={mpu.get('accel_z')}")
            print(f"  MPU6050 Gyro: X={mpu.get('gyro_x')} Y={mpu.get('gyro_y')} Z={mpu.get('gyro_z')}")
            pump = data.get("pump", {})
            print(f"  Pump: {pump.get('state')}, Relay: {pump.get('relay')}, Spray: {pump.get('spray_status')}")

            # Assertions
            assert data.get("mode") == "SIMULATION"
            assert data.get("esp32_connected") is False
            assert us.get("left") is not None and us.get("left") > 0
            assert us.get("center") is not None and us.get("center") > 0
            assert us.get("right") is not None and us.get("right") > 0
            assert us.get("obstacle_status") in ("SAFE", "WARNING", "OBSTACLE")
            assert data.get("soil_moisture") is not None and 0 <= data.get("soil_moisture") <= 100
            assert data.get("soil_moisture_status") in ("DRY", "NORMAL", "WET")
            assert dht.get("temperature") is not None and 20 <= dht.get("temperature") <= 40
            assert dht.get("humidity") is not None and 30 <= dht.get("humidity") <= 90
            assert mpu.get("accel_z") is not None
            assert pump.get("state") in ("ON", "OFF")
            assert pump.get("relay") == pump.get("state")

def test_pump_api():
    print("\n--- Testing Pump Actuation Endpoints ---")
    # 1. Turn Pump ON
    req_on = urllib.request.Request(
        "http://localhost:8000/api/simulation/pump",
        data=json.dumps({"state": "ON"}).encode("utf-8"),
        headers={"Content-Type": "application/json"}
    )
    res_on = json.loads(urllib.request.urlopen(req_on).read().decode())
    print("Pump ON Response:", res_on)
    assert res_on["pump"] == "ON"
    assert res_on["relay"] == "ON"
    assert res_on["spray_status"] == "ACTIVE"

    # 2. Verify state via GET
    res_get = json.loads(urllib.request.urlopen("http://localhost:8000/api/simulation/pump").read().decode())
    print("Pump GET Response:", res_get)
    assert res_get["state"] == "ON"
    assert res_get["relay"] == "ON"

    # 3. Turn Pump OFF
    req_off = urllib.request.Request(
        "http://localhost:8000/api/simulation/pump",
        data=json.dumps({"state": "OFF"}).encode("utf-8"),
        headers={"Content-Type": "application/json"}
    )
    res_off = json.loads(urllib.request.urlopen(req_off).read().decode())
    print("Pump OFF Response:", res_off)
    assert res_off["pump"] == "OFF"
    assert res_off["relay"] == "OFF"
    assert res_off["spray_status"] == "READY"

def test_database_camera_isolation():
    print("\n--- Testing Database Camera Isolation ---")
    conn = sqlite3.connect("data/agriguard_real.db")
    cur = conn.cursor()
    
    # Check all plant_observations to verify no camera images or base64 blobs are stored
    cur.execute("SELECT id, timestamp, image_snapshot_path FROM plant_observations")
    rows = cur.fetchall()
    print(f"Total plant_observations records: {len(rows)}")
    for r in rows:
        assert r[2] is None, f"Found non-null image_snapshot_path: {r}"
    print("PASS: Zero camera frames or snapshot paths exist in plant_observations!")

    # Check that sensor_readings table does not have camera blobs
    cur.execute("PRAGMA table_info(sensor_readings)")
    cols = [c[1] for c in cur.fetchall()]
    print("Sensor readings columns:", cols)
    for forbidden in ["image", "frame", "snapshot", "video", "base64"]:
        assert not any(forbidden in col.lower() for col in cols), f"Forbidden column found: {forbidden}"
    print("PASS: No camera frame/video/image columns exist in sensor_readings!")

if __name__ == "__main__":
    print("==================================================")
    print("   AGRIGUARD SIMULATION & NO-STORAGE VERIFICATION ")
    print("==================================================")
    test_pump_api()
    test_database_camera_isolation()
    asyncio.run(test_websocket_telemetry())
    print("\n>>> ALL TESTS PASSED SUCCESSFULLY! <<<")
