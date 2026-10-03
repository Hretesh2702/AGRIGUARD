/*
  AgriGuard — Master ESP32 Firmware Entrypoint
  Real Hardware Controller for 4WD Motors, NPK RS485, Environment Sensors & Precision Spray
  + Bluetooth BLE GATT Server (parallel to Wi-Fi REST)
*/

#if __has_include(<IPAddress.h>)
  #include <Arduino.h>
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

#if __has_include(<string.h>)
  #include <string.h>
#endif

#if __has_include("safety_manager.h")
  #include "safety_manager.h"
#elif __has_include("../include/safety_manager.h")
  #include "../include/safety_manager.h"
#endif

#if __has_include("wifi_server.h")
  #include "wifi_server.h"
#elif __has_include("../include/wifi_server.h")
  #include "../include/wifi_server.h"
#endif

// Bluetooth BLE GATT Server (parallel transport alongside Wi-Fi REST)
#if __has_include("ble_server.h")
  #include "ble_server.h"
#elif __has_include("../include/ble_server.h")
  #include "../include/ble_server.h"
#endif

// Wi-Fi Configuration
// Option A: Direct SoftAP Mode (Default field operation)
const char* AP_SSID = "AgriGuard-Robot";
const char* AP_PASS = "agri12345password";

// Option B: Field Local Router / Hotspot Mode (Optional)
const char* STA_SSID = ""; // Set to field router/phone hotspot SSID if used
const char* STA_PASS = ""; // Set to field router password

// LED Status Indicator
unsigned long lastHeartbeatBlink = 0;
bool ledState = false;


// ── BLE Command Handler ───────────────────────────────────────────────────────
/**
 * Called by BLEServerManager when a JSON command arrives via Bluetooth.
 * Parses the same command format used by the Wi-Fi REST /api/command endpoint.
 */
void handleBLECommand(const char* jsonCmd) {
    StaticJsonDocument<256> doc;
    DeserializationError err = deserializeJson(doc, jsonCmd);
    if (err) {
        Serial.printf("[BLE CMD] JSON parse error: %s\n", err.c_str());
        return;
    }

    SafetyManager::feedWatchdog();

    const char* cmdType = doc["type"] | "";
    const char* cmd     = doc["command"] | "";
    const char* dir     = doc["direction"] | "";
    int speed           = doc["speed"] | 120;
    speed = constrain(speed, 0, 255);

    // 1. Emergency stop commands
    if (strcmp(cmdType, "estop") == 0 || strcmp(cmd, "EMERGENCY_STOP") == 0 || strcmp(cmdType, "emergency_stop") == 0) {
        SafetyManager::triggerSoftwareEStop();
        MotorDriver::emergencyHalt();
        SprayController::emergencyHalt();
        Serial.println("[BLE CMD] Emergency Stop Executed");
        return;
    }

    // 2. Reset Emergency Stop
    if (strcmp(cmdType, "reset_estop") == 0 || (strcmp(cmd, "STOP") == 0 && SafetyManager::isEStopActive())) {
        SafetyManager::resetEStop();
        MotorDriver::stop();
        Serial.println("[BLE CMD] Emergency Stop Reset");
        return;
    }

    if (SafetyManager::isEStopActive()) {
        Serial.println("[BLE CMD] Rejected: E-Stop active");
        return;
    }

    // 3. Motor commands
    if (strcmp(cmdType, "robot_command") == 0 || strcmp(cmdType, "move") == 0 || strcmp(cmdType, "stop") == 0) {
        const char* motion = (strlen(cmd) > 0) ? cmd : dir;

        if (strcmp(cmdType, "stop") == 0 || strcmp(motion, "STOP") == 0) {
            MotorDriver::stop();
        } else if (strcmp(motion, "FORWARD") == 0 || strcmp(motion, "forward") == 0) {
            if (SafetyManager::isObstacleDetected()) {
                Serial.println("[BLE CMD] Forward blocked by obstacle");
            } else {
                MotorDriver::moveForward(speed);
            }
        } else if (strcmp(motion, "BACKWARD") == 0 || strcmp(motion, "backward") == 0 || strcmp(motion, "REV") == 0) {
            MotorDriver::moveBackward(speed);
        } else if (strcmp(motion, "LEFT") == 0 || strcmp(motion, "left") == 0) {
            MotorDriver::turnLeft(speed);
        } else if (strcmp(motion, "RIGHT") == 0 || strcmp(motion, "right") == 0) {
            MotorDriver::turnRight(speed);
        }
        Serial.printf("[BLE CMD] Motor: %s @ speed %d\n", motion, speed);
    }

    // 4. Spray/pump commands
    else if (strcmp(cmdType, "spray_command") == 0 || strcmp(cmdType, "spray") == 0 || strcmp(cmdType, "pump") == 0) {
        bool active = doc["active"] | doc["pump"] | false;
        const char* pump = doc["pump"] | "";
        const char* token = doc["approval_token"] | "DIRECT_OVERRIDE";
        unsigned long duration = doc["duration_ms"] | 3000;

        if (active || strcmp(pump, "ON") == 0 || strcmp(cmd, "PUMP_ON") == 0) {
            SprayController::startSpray(duration, token);
            Serial.printf("[BLE CMD] Spray ON for %lu ms\n", duration);
        } else {
            SprayController::stopSpray();
            Serial.println("[BLE CMD] Spray OFF");
        }
    }

    // 5. Heartbeat
    else if (strcmp(cmdType, "heartbeat") == 0) {
        SafetyManager::feedWatchdog();
        Serial.println("[BLE CMD] Heartbeat received.");
    }
}

// ── BLE Telemetry JSON Builder ────────────────────────────────────────────────
/**
 * Returns the live JSON telemetry snapshot over BLE
 * (shares exact same standardized schema as WiFiServerManager::buildTelemetryJson).
 */
String buildTelemetryJSON() {
    return WiFiServerManager::buildTelemetryJson();
}


// ── Arduino setup() ───────────────────────────────────────────────────────────

void setup() {
    Serial.begin(115200);
    delay(200);
    Serial.println("\n=======================================================");
    Serial.println("  AGRIGUARD — AI-POWERED PRECISION FARMING ROBOT");
    Serial.println("  ESP32 Hardware Controller Initializing...");
    Serial.println("=======================================================");

    pinMode(PIN_STATUS_LED, OUTPUT);
    digitalWrite(PIN_STATUS_LED, HIGH); // ON during boot

    // 1. Initialize Safety Subsystem First (Fail-Safe Verification)
    SafetyManager::init();

    // 2. Initialize Actuators (Motors and Precision Spray in strictly OFF state)
    MotorDriver::init();
    SprayController::init();

    // 3. Initialize Sensors (Ultrasonic, Soil ADC, DHT22, MPU6050, RS485 NPK)
    SensorManager::init();

    // 4. Initialize Wi-Fi Access Point and HTTP REST Server
    WiFiServerManager::init(AP_SSID, AP_PASS, STA_SSID, STA_PASS);

    // 5. Initialize Bluetooth BLE GATT Server (parallel to Wi-Fi)
    BLEServerManager::init();

    digitalWrite(PIN_STATUS_LED, LOW);
    Serial.println("[SYSTEM] AgriGuard Real Hardware Firmware v2.2.0 Ready.");
    Serial.printf("[SYSTEM] Wi-Fi AP: %s  |  IP: %s\n",
        AP_SSID, WiFiServerManager::getActiveIP().toString().c_str());
    Serial.printf("[SYSTEM] BLE:     %s  (UUID: 12345678-…-789abc)\n", AP_SSID);
    Serial.println("=======================================================\n");
}


// ── Arduino loop() ────────────────────────────────────────────────────────────

void loop() {
    // 1. Handle incoming Wi-Fi HTTP requests & commands
    WiFiServerManager::handleClient();

    // 2. Handle incoming BLE commands & push telemetry notifications
    BLEServerManager::update();

    // 3. Refresh sensor readings (Non-blocking sampling)
    SensorManager::update();

    // 4. Update spray duration timer & pulse flow verification
    SprayController::update();

    // 5. Evaluate Safety Interlocks (Physical E-Stop, Comm Watchdog & Obstacle Braking)
    SensorReadings currentReadings = SensorManager::getLatest();
    bool isMovingFwd = (MotorDriver::getState() == MotorState::MOVING_FORWARD);
    SafetyManager::update(currentReadings.ultrasonic_distance_cm, isMovingFwd);

    // 6. Visual Heartbeat & Safety Diagnostic Blinker
    unsigned long now = millis();
    unsigned long blinkInterval = 1000; // Normal standby: 1 Hz
    if (SafetyManager::isEStopActive()) {
        blinkInterval = 100; // Fast panic flash: 10 Hz
    } else if (BLEServerManager::isClientConnected()) {
        blinkInterval = 250; // BLE connected: 4 Hz double-flash
    } else if (SafetyManager::isObstacleDetected() || SafetyManager::isWatchdogTripped()) {
        blinkInterval = 300; // Warning flash: ~3 Hz
    } else if (MotorDriver::getState() != MotorState::STOPPED || SprayController::isPumpActive()) {
        blinkInterval = 500; // Active movement / spraying flash: 2 Hz
    }

    if (now - lastHeartbeatBlink > blinkInterval) {
        ledState = !ledState;
        digitalWrite(PIN_STATUS_LED, ledState ? HIGH : LOW);
        lastHeartbeatBlink = now;
    }

    delay(2);
}
