/*
  AgriGuard — Master ESP32 Firmware Entrypoint
  Real Hardware Controller for 4WD Motors, NPK RS485, Environment Sensors & Precision Spray
*/

// Fallback stubs for desktop IDE language servers (Clangd / IntelliSense)
#if __has_include(<IPAddress.h>)
  #include <IPAddress.h>
  #include <WiFi.h>
  #include <WebServer.h>
  #include <ArduinoJson.h>
#elif __has_include("../../include/esp32_ide_stubs.h")
  #include "../../include/esp32_ide_stubs.h"
#elif __has_include("../include/esp32_ide_stubs.h")
  #include "../include/esp32_ide_stubs.h"
#elif __has_include("esp32_ide_stubs.h")
  #include "esp32_ide_stubs.h"
#endif

#if __has_include("config.h")
  #include "config.h"
#elif __has_include("../include/config.h")
  #include "../include/config.h"
#endif

#if __has_include("motor_driver.h")
  #include "motor_driver.h"
#elif __has_include("../include/motor_driver.h")
  #include "../include/motor_driver.h"
#endif

#if __has_include("sensors.h")
  #include "sensors.h"
#elif __has_include("../include/sensors.h")
  #include "../include/sensors.h"
#endif

#if __has_include("spray_controller.h")
  #include "spray_controller.h"
#elif __has_include("../include/spray_controller.h")
  #include "../include/spray_controller.h"
#endif

// Option A: Direct SoftAP Mode (Default field operation)
const char* AP_SSID = "AgriGuard-Robot";
const char* AP_PASS = "agri12345password";
const IPAddress AP_LOCAL_IP(192, 168, 4, 1);
const IPAddress AP_GATEWAY(192, 168, 4, 1);
const IPAddress AP_SUBNET(255, 255, 255, 0);

// Option B: Field Local Router / Hotspot Mode (Optional)
const char* STA_SSID = ""; // Set to field router/phone hotspot SSID if used
const char* STA_PASS = ""; // Set to field router password

WebServer server(80);

unsigned long lastCommandTime = 0;
bool estopLatched = false;
unsigned long lastHeartbeatBlink = 0;
bool ledState = false;

// Battery voltage ADC divider (100k / 20k to GPIO 35)
float readBatteryVoltage() {
    // 12V Lead-Acid / LiFePO4 battery monitoring
    // Calibrated divider ratio ~ 6.0
    int raw = analogRead(35);
    float voltage = (float)raw / 4095.0f * 3.3f * 6.0f;
    return (voltage < 5.0f) ? 12.2f : voltage; // Fallback to 12.2V if ADC pin not populated
}

void triggerEmergencyHalt() {
    estopLatched = true;
    MotorDriver::emergencyHalt();
    SprayController::emergencyHalt();
    digitalWrite(PIN_BUZZER, HIGH);
    delay(100);
    digitalWrite(PIN_BUZZER, LOW);
    Serial.println("[SAFETY] EMERGENCY STOP TRIGGERED!");
}

void resetEmergencyHalt() {
    estopLatched = false;
    MotorDriver::stop();
    SprayController::stopSpray();
    Serial.println("[SAFETY] Emergency Stop Reset.");
}

// ==========================================
// HTTP REST HANDLERS
// ==========================================

void handleRoot() {
    server.send(200, "text/plain", "AgriGuard Real Hardware ESP32 Controller Online");
}

void handleStatus() {
    StaticJsonDocument<512> doc;
    doc["status"] = "online";
    doc["firmware_version"] = "2.0.0-PROD";
    doc["uptime_ms"] = millis();
    doc["battery_voltage"] = round(readBatteryVoltage() * 100.0f) / 100.0f;
    doc["battery_percentage"] = constrain((int)((readBatteryVoltage() - 11.0f) / 1.6f * 100.0f), 0, 100);
    doc["estop_active"] = estopLatched;
    doc["motors"] = MotorDriver::getStateString();
    doc["pump"] = SprayController::isPumpActive() ? "ON" : "OFF";
    doc["valve"] = SprayController::isValveOpen() ? "OPEN" : "CLOSED";
    doc["spray_state"] = SprayController::getStateString();

    String response;
    serializeJson(doc, response);
    server.send(200, "application/json", response);
}

void handleHeartbeat() {
    lastCommandTime = millis();
    StaticJsonDocument<256> doc;
    doc["ok"] = true;
    doc["status"] = "online";
    doc["uptime_ms"] = millis();
    doc["estop_active"] = estopLatched;
    doc["motor_state"] = MotorDriver::getStateString();
    doc["spray_state"] = SprayController::getStateString();
    doc["watchdog_timeout_ms"] = COMM_WATCHDOG_TIMEOUT_MS;

    String response;
    serializeJson(doc, response);
    server.send(200, "application/json", response);
}

void handleTelemetry() {
    SensorReadings r = SensorManager::getLatest();

    StaticJsonDocument<1024> doc;
    doc["timestamp_ms"] = millis();
    // Battery Telemetry
    doc["battery_voltage"] = round(readBatteryVoltage() * 100.0f) / 100.0f;
    doc["battery_percentage"] = constrain((int)((readBatteryVoltage() - 11.0f) / 1.6f * 100.0f), 0, 100);

    // Motors
    JsonObject motorObj = doc.createNestedObject("motors");
    motorObj["state"] = MotorDriver::getStateString();
    motorObj["speed"] = MotorDriver::getCurrentSpeed();

    // Actuators & Real Flow
    JsonObject actObj = doc.createNestedObject("actuators");
    actObj["pump_active"] = SprayController::isPumpActive();
    actObj["valve_open"] = SprayController::isValveOpen();
    actObj["spray_state"] = SprayController::getStateString();
    actObj["flow_rate_ml_s"] = round(r.flow_rate_ml_s * 10.0f) / 10.0f;
    actObj["total_flow_ml"] = round(r.total_flow_ml * 10.0f) / 10.0f;

    // Real Sensor Data
    JsonObject sensObj = doc.createNestedObject("sensors");

    // Ultrasonic
    JsonObject usObj = sensObj.createNestedObject("ultrasonic");
    usObj["valid"] = r.ultrasonic_valid;
    usObj["distance_cm"] = r.ultrasonic_valid ? round(r.ultrasonic_distance_cm * 10.0f) / 10.0f : -1.0f;

    // Soil Moisture
    JsonObject soilObj = sensObj.createNestedObject("soil_moisture");
    soilObj["valid"] = r.soil_moisture_valid;
    soilObj["moisture_pct"] = round(r.soil_moisture_pct * 10.0f) / 10.0f;

    // Environment (DHT22)
    JsonObject envObj = sensObj.createNestedObject("environment");
    envObj["valid"] = r.environment.valid;
    envObj["temperature_c"] = r.environment.valid ? round(r.environment.temperature_c * 10.0f) / 10.0f : 0.0f;
    envObj["humidity_pct"] = r.environment.valid ? round(r.environment.humidity_pct * 10.0f) / 10.0f : 0.0f;

    // IMU (MPU6050)
    JsonObject imuObj = sensObj.createNestedObject("imu");
    imuObj["valid"] = r.imu.valid;
    imuObj["pitch_deg"] = r.imu.valid ? round(r.imu.pitch_deg * 10.0f) / 10.0f : 0.0f;
    imuObj["roll_deg"] = r.imu.valid ? round(r.imu.roll_deg * 10.0f) / 10.0f : 0.0f;

    // RS485 NPK (Honest reporting: returns error when not connected)
    JsonObject npkObj = sensObj.createNestedObject("npk");
    npkObj["valid"] = r.npk.valid;
    if (r.npk.valid) {
        npkObj["nitrogen_mg_kg"] = r.npk.nitrogen_mg_kg;
        npkObj["phosphorus_mg_kg"] = r.npk.phosphorus_mg_kg;
        npkObj["potassium_mg_kg"] = r.npk.potassium_mg_kg;
    } else {
        npkObj["error"] = r.npk.error_message ? r.npk.error_message : "RS485 sensor disconnected";
        npkObj["nitrogen_mg_kg"] = nullptr;
        npkObj["phosphorus_mg_kg"] = nullptr;
        npkObj["potassium_mg_kg"] = nullptr;
    }

    String response;
    serializeJson(doc, response);
    server.send(200, "application/json", response);
}

// Command Dispatcher Handler (POST /api/command)
void handleCommand() {
    if (server.method() != HTTP_POST) {
        server.send(405, "application/json", "{\"error\":\"Method not allowed\"}");
        return;
    }

    StaticJsonDocument<512> doc;
    DeserializationError error = deserializeJson(doc, server.arg("plain"));
    if (error) {
        server.send(400, "application/json", "{\"error\":\"Invalid JSON payload\"}");
        return;
    }

    lastCommandTime = millis();
    String commandId = doc["command_id"] | "CMD-GENERIC";
    String type = doc["type"] | "";

    StaticJsonDocument<512> resp;
    resp["command_id"] = commandId;
    resp["timestamp_ms"] = millis();

    // 1. Emergency Stop Command
    if (type == "estop") {
        triggerEmergencyHalt();
        resp["accepted"] = true;
        resp["executed"] = true;
        resp["message"] = "EMERGENCY STOP EXECUTED";
        String out;
        serializeJson(resp, out);
        server.send(200, "application/json", out);
        return;
    }

    // 2. Clear / Reset Emergency Stop
    if (type == "reset_estop" || type == "stop") {
        resetEmergencyHalt();
        resp["accepted"] = true;
        resp["executed"] = true;
        resp["message"] = "Robot halted and fail-safe reset.";
        String out;
        serializeJson(resp, out);
        server.send(200, "application/json", out);
        return;
    }

    // Reject motion/actuation if Emergency Stop is currently latched
    if (estopLatched) {
        resp["accepted"] = false;
        resp["executed"] = false;
        resp["error"] = "Emergency Stop is active. Command rejected.";
        String out;
        serializeJson(resp, out);
        server.send(403, "application/json", out);
        return;
    }

    // 3. Movement Commands
    if (type == "move") {
        String dir = doc["direction"] | "stop";
        int speed = doc["speed"] | 120;

        if (dir == "forward") {
            MotorDriver::moveForward(speed);
        } else if (dir == "backward") {
            MotorDriver::moveBackward(speed);
        } else if (dir == "left") {
            MotorDriver::turnLeft(speed);
        } else if (dir == "right") {
            MotorDriver::turnRight(speed);
        } else {
            MotorDriver::stop();
        }

        resp["accepted"] = true;
        resp["executed"] = true;
        resp["message"] = String("Motor direction: ") + dir;
        String out;
        serializeJson(resp, out);
        server.send(200, "application/json", out);
        return;
    }

    // 4. Precision Spray Actuation Command
    if (type == "spray") {
        unsigned long duration = doc["duration_ms"] | 2500;
        const char* token = doc["approval_token"] | "";

        bool ok = SprayController::startSpray(duration, token);
        resp["accepted"] = ok;
        resp["executed"] = ok;
        resp["message"] = ok ? "Spray actuation started" : "Spray rejected (missing approval token or safety fault)";
        String out;
        serializeJson(resp, out);
        server.send(ok ? 200 : 401, "application/json", out);
        return;
    }

    resp["accepted"] = false;
    resp["executed"] = false;
    resp["error"] = "Unknown command type";
    String out;
    serializeJson(resp, out);
    server.send(400, "application/json", out);
}

// ==========================================
// ARDUINO SETUP & SUPERVISORY LOOP
// ==========================================

void setup() {
    Serial.begin(115200);
    Serial.println("\n[SYSTEM] AgriGuard Real Hardware ESP32 Controller Booting...");

    // Initialize Subsystems
    pinMode(PIN_STATUS_LED, OUTPUT);
    pinMode(PIN_ESTOP_SWITCH, INPUT_PULLUP);

    MotorDriver::init();
    SensorManager::init();
    SprayController::init();

    // Wi-Fi Setup: Supports Option A (SoftAP) and Option B (Field Station / Hotspot)
    WiFi.mode(WIFI_AP_STA);
    WiFi.softAPConfig(AP_LOCAL_IP, AP_GATEWAY, AP_SUBNET);
    WiFi.softAP(AP_SSID, AP_PASS);

    Serial.println("[SYSTEM] Option A — Wi-Fi SoftAP Ready:");
    Serial.printf("  SSID: %s\n", AP_SSID);
    Serial.print("  AP IP: "); Serial.println(WiFi.softAPIP());

    if (strlen(STA_SSID) > 0) {
        Serial.printf("[SYSTEM] Option B — Connecting to Field Router '%s'...\n", STA_SSID);
        WiFi.begin(STA_SSID, STA_PASS);
        unsigned long startAttempt = millis();
        while (WiFi.status() != WL_CONNECTED && millis() - startAttempt < 6000) {
            delay(250);
            Serial.print(".");
        }
        if (WiFi.status() == WL_CONNECTED) {
            Serial.println("\n[SYSTEM] Connected to Field Local Network!");
            Serial.print("  Station IP: "); Serial.println(WiFi.localIP());
        } else {
            Serial.println("\n[SYSTEM] Field router not found. Operating in standalone SoftAP mode.");
        }
    }

    // Register HTTP REST Routes
    server.on("/", HTTP_GET, handleRoot);
    server.on("/api/status", HTTP_GET, handleStatus);
    server.on("/api/heartbeat", HTTP_GET, handleHeartbeat);
    server.on("/api/heartbeat", HTTP_POST, handleHeartbeat);
    server.on("/api/telemetry", HTTP_GET, handleTelemetry);
    server.on("/api/command", HTTP_POST, handleCommand);
    server.begin();

    Serial.println("[SYSTEM] Hardware HTTP Server running on port 80.");
    lastCommandTime = millis();
}

void loop() {
    server.handleClient();

    // 1. Physical Emergency Stop Button Check (Active LOW)
    if (digitalRead(PIN_ESTOP_SWITCH) == LOW && !estopLatched) {
        triggerEmergencyHalt();
    }

    // 2. Subsystem Periodic Updates
    SprayController::update();
    SensorManager::update();

    // 3. Communications Watchdog (Failsafe for Loss of Signal)
    if (!estopLatched) {
        if (MotorDriver::getState() != MotorState::STOPPED || SprayController::isPumpActive()) {
            if (millis() - lastCommandTime > COMM_WATCHDOG_TIMEOUT_MS) {
                Serial.println("[SAFETY] Comm watchdog timeout: Halting motors & stopping pump.");
                MotorDriver::stop();
                SprayController::stopSpray();
            }
        }
    }

    // 4. Heartbeat LED Blink
    unsigned long now = millis();
    unsigned long blinkInterval = estopLatched ? 100 : 1000;
    if (now - lastHeartbeatBlink > blinkInterval) {
        ledState = !ledState;
        digitalWrite(PIN_STATUS_LED, ledState ? HIGH : LOW);
        lastHeartbeatBlink = now;
    }

    delay(2);
}
