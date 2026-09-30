/*
  AgriGuard — Master ESP32 Firmware Entrypoint
  Real Hardware Controller for 4WD Motors, NPK RS485, Environment Sensors & Precision Spray
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

#if __has_include("npk_modbus.h")
  #include "npk_modbus.h"
#elif __has_include("../include/npk_modbus.h")
  #include "../include/npk_modbus.h"
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

    digitalWrite(PIN_STATUS_LED, LOW);
    Serial.println("[SYSTEM] AgriGuard Real Hardware Firmware v2.1.0 Ready.");
    Serial.printf("[SYSTEM] Active Controller Address: %s\n", WiFiServerManager::getActiveIP().toString().c_str());
    Serial.println("=======================================================\n");
}

void loop() {
    // 1. Handle incoming network HTTP requests & commands
    WiFiServerManager::handleClient();

    // 2. Refresh sensor readings (Non-blocking sampling)
    SensorManager::update();

    // 3. Update spray duration timer & pulse flow verification
    SprayController::update();

    // 4. Evaluate Safety Interlocks (Physical E-Stop, Comm Watchdog & Obstacle Braking)
    SensorReadings currentReadings = SensorManager::getLatest();
    bool isMovingFwd = (MotorDriver::getState() == MotorState::MOVING_FORWARD);
    SafetyManager::update(currentReadings.ultrasonic_distance_cm, isMovingFwd);

    // 5. Visual Heartbeat & Safety Diagnostic Blinker
    unsigned long now = millis();
    unsigned long blinkInterval = 1000; // Normal standby: 1 Hz
    if (SafetyManager::isEStopActive()) {
        blinkInterval = 100; // Fast panic flash: 10 Hz
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
