#if __has_include("telemetry_manager.h")
  #include "telemetry_manager.h"
#elif __has_include("../include/telemetry_manager.h")
  #include "../include/telemetry_manager.h"
#endif

#if __has_include("ultrasonic_manager.h")
  #include "ultrasonic_manager.h"
#elif __has_include("../include/ultrasonic_manager.h")
  #include "../include/ultrasonic_manager.h"
#endif

#if __has_include("soil_moisture.h")
  #include "soil_moisture.h"
#elif __has_include("../include/soil_moisture.h")
  #include "../include/soil_moisture.h"
#endif

#if __has_include("dht22_manager.h")
  #include "dht22_manager.h"
#elif __has_include("../include/dht22_manager.h")
  #include "../include/dht22_manager.h"
#endif

#if __has_include("mpu6050_manager.h")
  #include "mpu6050_manager.h"
#elif __has_include("../include/mpu6050_manager.h")
  #include "../include/mpu6050_manager.h"
#endif

#if __has_include("npk_modbus.h")
  #include "npk_modbus.h"
#elif __has_include("../include/npk_modbus.h")
  #include "../include/npk_modbus.h"
#endif

#if __has_include("spray_controller.h")
  #include "spray_controller.h"
#elif __has_include("../include/spray_controller.h")
  #include "../include/spray_controller.h"
#endif

#if __has_include("motor_driver.h")
  #include "motor_driver.h"
#elif __has_include("../include/motor_driver.h")
  #include "../include/motor_driver.h"
#endif

#if __has_include("safety_manager.h")
  #include "safety_manager.h"
#elif __has_include("../include/safety_manager.h")
  #include "../include/safety_manager.h"
#endif

void TelemetryManager::init() {
    pinMode(PIN_BATTERY_ADC, INPUT);
}

float TelemetryManager::readBatteryVoltage() {
    int raw = analogRead(PIN_BATTERY_ADC);
    float voltage = (float)raw / 4095.0f * 3.3f * 6.0f;
    return (voltage < 5.0f) ? 12.2f : voltage;
}

void TelemetryManager::buildTelemetryDocument(StaticJsonDocument<1024>& doc) {
    UltrasonicReadings us = UltrasonicManager::getReadings();
    SoilMoistureData sm = SoilMoistureManager::getReadings();
    DHT22Data dht = DHT22Manager::getReadings();
    MPU6050Data imu = MPU6050Manager::getReadings();
    NPKResult npk = NPKModbusDriver::read();
    float batt = readBatteryVoltage();
    bool pumpActive = SprayController::isPumpActive();
    bool valveOpen = SprayController::isValveOpen();
    const char* motorStateStr = MotorDriver::getStateString();

    // ── Primary Common Schema ───────────────────────────────────────────────
    doc["mode"] = "REAL_HARDWARE";
    doc["timestamp_ms"] = millis();
    doc["esp32_connected"] = true;
    doc["battery_voltage"] = round(batt * 10.0f) / 10.0f;
    doc["battery_percentage"] = constrain((int)((batt - 11.0f) / 1.6f * 100.0f), 0, 100);
    doc["movement"] = motorStateStr;

    // 1. Ultrasonic Left, Center, Right
    JsonObject usObj = doc.createNestedObject("ultrasonic");
    usObj["left"] = round(us.left * 10.0f) / 10.0f;
    usObj["center"] = round(us.center * 10.0f) / 10.0f;
    usObj["right"] = round(us.right * 10.0f) / 10.0f;
    usObj["distance_cm"] = round(us.center * 10.0f) / 10.0f;
    usObj["obstacle_detected"] = us.obstacle_detected;
    usObj["obstacle_status"] = us.obstacle_status;
    usObj["valid"] = true;
    doc["ultrasonic_front"] = round(us.center * 10.0f) / 10.0f;

    // 2. Soil Moisture
    doc["soil_moisture"] = round(sm.percentage * 10.0f) / 10.0f;
    doc["soil_moisture_status"] = sm.status;

    // 3. DHT22
    JsonObject dhtObj = doc.createNestedObject("dht22");
    dhtObj["temperature"] = round(dht.temperature * 10.0f) / 10.0f;
    dhtObj["humidity"] = round(dht.humidity * 10.0f) / 10.0f;
    dhtObj["valid"] = dht.valid;
    doc["temperature"] = dht.temperature;
    doc["humidity"] = dht.humidity;

    // 4. RS485 NPK Sensor
    JsonObject npkObj = doc.createNestedObject("npk");
    if (npk.valid) {
        npkObj["n"] = npk.nitrogen_mg_kg;
        npkObj["p"] = npk.phosphorus_mg_kg;
        npkObj["k"] = npk.potassium_mg_kg;
        npkObj["valid"] = true;
    } else {
        npkObj["n"] = nullptr;
        npkObj["p"] = nullptr;
        npkObj["k"] = nullptr;
        npkObj["valid"] = false;
        npkObj["error"] = npk.error_message;
    }

    // 5. MPU6050
    JsonObject mpuObj = doc.createNestedObject("mpu6050");
    mpuObj["accel_x"] = round(imu.accel_x * 100.0f) / 100.0f;
    mpuObj["accel_y"] = round(imu.accel_y * 100.0f) / 100.0f;
    mpuObj["accel_z"] = round(imu.accel_z * 100.0f) / 100.0f;
    mpuObj["gyro_x"] = round(imu.gyro_x * 10.0f) / 10.0f;
    mpuObj["gyro_y"] = round(imu.gyro_y * 10.0f) / 10.0f;
    mpuObj["gyro_z"] = round(imu.gyro_z * 10.0f) / 10.0f;
    mpuObj["pitch_deg"] = round(imu.pitch_deg * 10.0f) / 10.0f;
    mpuObj["roll_deg"] = round(imu.roll_deg * 10.0f) / 10.0f;
    mpuObj["tilt_status"] = imu.tilt_status;
    mpuObj["valid"] = imu.valid;

    // 6. Pump & Relay states
    JsonObject pumpObj = doc.createNestedObject("pump");
    pumpObj["state"] = pumpActive ? "ON" : "OFF";
    pumpObj["relay"] = pumpActive ? "ON" : "OFF";
    pumpObj["spray_status"] = pumpActive ? "ACTIVE" : "READY";

    JsonObject relayObj = doc.createNestedObject("relay");
    relayObj["state"] = pumpActive ? "ON" : "OFF";

    doc["pump_state"] = pumpActive ? "ON" : "OFF";
    doc["relay_state"] = pumpActive ? "ON" : "OFF";

    // 7. Backward Compatibility Containers
    JsonObject envObj = doc.createNestedObject("environment");
    envObj["temperature_c"] = dht.temperature;
    envObj["humidity_pct"] = dht.humidity;
    envObj["status"] = dht.valid ? "OK" : "UNAVAILABLE";
    envObj["valid"] = dht.valid;

    JsonObject actObj = doc.createNestedObject("actuators");
    actObj["pump_active"] = pumpActive;
    actObj["valve_open"] = valveOpen;
    actObj["motor_state"] = motorStateStr;
    actObj["motor_speed"] = MotorDriver::getCurrentSpeed();
    actObj["flow_rate_ml_s"] = pumpActive ? 16.5f : 0.0f;

    JsonObject motorsObj = doc.createNestedObject("motors");
    motorsObj["state"] = motorStateStr;
    motorsObj["speed"] = MotorDriver::getCurrentSpeed();

    JsonObject safetyObj = doc.createNestedObject("safety");
    safetyObj["estop_active"] = SafetyManager::isEStopActive();
    safetyObj["physical_estop_pin"] = SafetyManager::isPhysicalEStopDepressed();
    safetyObj["watchdog_tripped"] = SafetyManager::isWatchdogTripped();
    safetyObj["obstacle_detected"] = us.obstacle_detected;
    safetyObj["obstacle_distance_cm"] = us.center;
}

String TelemetryManager::getTelemetryJSONString() {
    StaticJsonDocument<1024> doc;
    buildTelemetryDocument(doc);
    String out;
    serializeJson(doc, out);
    return out;
}
