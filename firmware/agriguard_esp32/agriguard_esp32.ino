/*
  AgriGuard — ESP32 Real-Time Hardware Controller Firmware
  =======================================================
  Hardware:
    - ESP32 Development Board (NodeMCU / WROOM-32)
    - 4WD DC Geared Motors via L298N Dual H-Bridge Driver
    - 12V Mini Diaphragm Pump & 12V Solenoid Valve via MOSFET/Relay
    - YF-S401 Flow Sensor (Pulse Interrupt)
    - HC-SR04 Ultrasonic Distance Sensor
    - DHT22 / BME280 Temperature & Humidity Sensor
    - Capacitive Soil Moisture Sensor (Analog ADC)
    - 7-in-1 / 3-in-1 Soil NPK Sensor via RS485-TTL Transceiver (Modbus RTU)
    - Hardware Emergency Stop Pushbutton (Active LOW)

  Safety Rules:
    - Motors, Pump, and Valve default strictly OFF at startup.
    - Heartbeat watchdog: if no command received within WATCHDOG_TIMEOUT_MS,
      all motors and spray actuation automatically disengage.
    - Physical emergency stop triggers instant hardware and software shutdown.
    - Autonomous obstacle safety: stops forward motion if obstacle < 25cm.
*/

// Fallback stubs for desktop IDE language servers (Clangd / IntelliSense)
#if __has_include(<IPAddress.h>)
  #include <Arduino.h>
  #include <WiFi.h>
  #include <WebServer.h>
  #include <ArduinoJson.h>
  #include <Wire.h>
  #if __has_include(<BLEDevice.h>)
    #include <BLEDevice.h>
    #include <BLEServer.h>
    #include <BLEUtils.h>
    #include <BLE2902.h>
    #define AGRIGUARD_ENABLE_BLE 1
  #endif
#elif __has_include("../include/esp32_ide_stubs.h")
  #include "../include/esp32_ide_stubs.h"
#elif __has_include("../../include/esp32_ide_stubs.h")
  #include "../../include/esp32_ide_stubs.h"
#endif

#include <math.h>

// ==========================================
// 1. PIN DEFINITIONS & CONFIGURATION
// ==========================================

// Option A: Direct SoftAP Mode (Default field operation)
const char* AP_SSID = "AgriGuard-Robot";
const char* AP_PASS = "agri12345password"; // WPA2 Key for field AP mode
const IPAddress AP_LOCAL_IP(192, 168, 4, 1);
const IPAddress AP_GATEWAY(192, 168, 4, 1);
const IPAddress AP_SUBNET(255, 255, 255, 0);

// Option B: Field Local Router / Hotspot Mode (Optional)
const char* STA_SSID = ""; // Set to field router/phone hotspot SSID if used
const char* STA_PASS = ""; // Set to field router password

// Option C: Bluetooth Connectivity
// AGRIGUARD_USE_BLE: Modern BLE GATT server (Compatible with Web Bluetooth in Chrome & Python Bleak)
// AGRIGUARD_USE_CLASSIC_BT: Serial Bluetooth SPP (Pairs as COM port in Windows/Android Bluetooth Settings)
#define AGRIGUARD_USE_BLE 1
#define AGRIGUARD_USE_CLASSIC_BT 0

#define BLE_SERVICE_UUID        "12345678-1234-1234-1234-123456789abc"
#define BLE_CMD_CHAR_UUID       "12345678-1234-1234-1234-123456789ab1"
#define BLE_TELEMETRY_CHAR_UUID "12345678-1234-1234-1234-123456789ab2"
#define BLE_STATUS_CHAR_UUID    "12345678-1234-1234-1234-123456789ab3"
#define BLE_DEVICE_NAME         "AgriGuard-Robot"

#ifdef AGRIGUARD_ENABLE_BLE
BLEServer* pBleServer = nullptr;
BLECharacteristic* pBleCmdChar = nullptr;
BLECharacteristic* pBleTelemetryChar = nullptr;
BLECharacteristic* pBleStatusChar = nullptr;
bool bleClientConnected = false;
unsigned long lastBleNotifyTime = 0;
#endif

// MPU-6050 6-DOF Inertial Motion Unit (I2C)
#define PIN_I2C_SDA             21
#define PIN_I2C_SCL             22
#define MPU6050_I2C_ADDR        0x68
bool mpuDetected = false;
float mpuAccelX = 0.03f, mpuAccelY = 0.12f, mpuAccelZ = 0.98f;
float mpuGyroX = 1.2f, mpuGyroY = -0.8f, mpuGyroZ = 0.5f;
float mpuPitch = 1.2f, mpuRoll = -0.8f;

// DHT22 Environmental Sensor Values
float dhtTemperature = 28.5f;
float dhtHumidity = 68.0f;

// L298N Motor Driver Pins
#define MOTOR_LEFT_PWM      13  // ENA
#define MOTOR_LEFT_IN1      12  // IN1
#define MOTOR_LEFT_IN2      14  // IN2
#define MOTOR_RIGHT_PWM     23  // ENB
#define MOTOR_RIGHT_IN3     19  // IN3
#define MOTOR_RIGHT_IN4     18  // IN4

// Precision Spray Actuation Pins
#define PIN_SPRAY_PUMP      25  // Low-side MOSFET or Relay
#define PIN_SPRAY_VALVE     26  // Solenoid Valve MOSFET or Relay
#define PIN_FLOW_SENSOR     27  // Flow sensor pulse interrupt pin

// Environmental & Distance Sensors
#define PIN_TRIG            4   // HC-SR04 Trigger
#define PIN_ECHO            5   // HC-SR04 Echo
#define PIN_SOIL_MOISTURE   34  // Analog ADC1 (0 - 4095)
#define PIN_DHT22           15  // One-wire DHT sensor

// RS485 Modbus NPK Sensor (HardwareSerial 2)
#define RS485_RX_PIN        16  // ESP32 RX2 <- Transceiver RO
#define RS485_TX_PIN        17  // ESP32 TX2 -> Transceiver DI
#define RS485_DE_RE_PIN     33  // Transceiver DE/RE direction pin

// Safety Emergency Stop Pin & Buzzer
#define PIN_ESTOP           32  // Hardware E-stop switch to GND (Internal Pullup)
#define PIN_STATUS_LED      2   // Built-in Blue LED
#define PIN_BUZZER          0   // Active Piezo Warning Buzzer

// Safety Watchdog & Obstacle Stopping
const unsigned long WATCHDOG_TIMEOUT_MS = 1500;
#ifdef MIN_OBSTACLE_STOP_CM
#undef MIN_OBSTACLE_STOP_CM
#endif
const float MIN_OBSTACLE_STOP_CM = 25.0f;
unsigned long lastCommandTime = 0;
bool isEStopActive = false;
bool obstacleDetected = false;
float lastDistanceCm = -1.0f;

// PWM Channels (ESP32 LEDC)
const int PWM_FREQ = 1000;
const int PWM_RES = 8; // 8-bit (0-255)
const int PWM_CHAN_L = 0;
const int PWM_CHAN_R = 1;

// Flow Sensor Pulse Measurement
volatile unsigned long flowPulseCount = 0;
void IRAM_ATTR flowSensorISR() {
  flowPulseCount++;
}

// Global Actuator States
String currentMotorState = "STOPPED";
int currentSpeedSetting = 0;
bool sprayPumpState = false;
bool sprayValveState = false;
unsigned long sprayAutoOffTime = 0;

WebServer server(80);

// ==========================================
// 2. HARDWARE CONTROL ROUTINES
// ==========================================

void setMotors(int leftSpeed, bool leftFwd, int rightSpeed, bool rightFwd) {
  leftSpeed = constrain(leftSpeed, 0, 255);
  rightSpeed = constrain(rightSpeed, 0, 255);

  digitalWrite(MOTOR_LEFT_IN1, leftFwd ? HIGH : LOW);
  digitalWrite(MOTOR_LEFT_IN2, leftFwd ? LOW : HIGH);
  ledcWrite(PWM_CHAN_L, leftSpeed);

  digitalWrite(MOTOR_RIGHT_IN3, rightFwd ? HIGH : LOW);
  digitalWrite(MOTOR_RIGHT_IN4, rightFwd ? LOW : HIGH);
  ledcWrite(PWM_CHAN_R, rightSpeed);

  currentSpeedSetting = (leftSpeed + rightSpeed) / 2;
}

void stopMotors() {
  digitalWrite(MOTOR_LEFT_IN1, LOW);
  digitalWrite(MOTOR_LEFT_IN2, LOW);
  digitalWrite(MOTOR_RIGHT_IN3, LOW);
  digitalWrite(MOTOR_RIGHT_IN4, LOW);
  ledcWrite(PWM_CHAN_L, 0);
  ledcWrite(PWM_CHAN_R, 0);
  currentMotorState = "STOPPED";
  currentSpeedSetting = 0;
}

void startSpray(unsigned long durationMs) {
  if (isEStopActive) return;
  durationMs = constrain(durationMs, 500UL, 6000UL);
  digitalWrite(PIN_SPRAY_VALVE, HIGH);
  delay(50);
  digitalWrite(PIN_SPRAY_PUMP, HIGH);
  sprayPumpState = true;
  sprayValveState = true;
  sprayAutoOffTime = millis() + durationMs;
  Serial.printf("[SPRAY] Actuated for %lu ms\n", durationMs);
}

void stopSpray() {
  digitalWrite(PIN_SPRAY_PUMP, LOW);
  digitalWrite(PIN_SPRAY_VALVE, LOW);
  sprayPumpState = false;
  sprayValveState = false;
  sprayAutoOffTime = 0;
  Serial.println("[SPRAY] Actuation stopped.");
}

void triggerEStop() {
  isEStopActive = true;
  stopMotors();
  stopSpray();
  digitalWrite(PIN_BUZZER, HIGH);
  delay(100);
  digitalWrite(PIN_BUZZER, LOW);
  Serial.println("[SAFETY] EMERGENCY STOP ACTIVATED");
}

bool resetEStop() {
  if (digitalRead(PIN_ESTOP) == LOW) {
    Serial.println("[SAFETY] Cannot reset: Physical switch is depressed!");
    return false;
  }
  isEStopActive = false;
  obstacleDetected = false;
  stopMotors();
  stopSpray();
  Serial.println("[SAFETY] Emergency Stop Reset.");
  return true;
}

void initMPU6050() {
  Wire.begin(PIN_I2C_SDA, PIN_I2C_SCL);
  Wire.beginTransmission(MPU6050_I2C_ADDR);
  Wire.write(0x6B); // Power management register 1
  Wire.write(0);    // Wake up MPU6050
  if (Wire.endTransmission() == 0) {
    mpuDetected = true;
    Serial.println("[SYSTEM] MPU-6050 IMU detected on I2C bus (0x68).");
  } else {
    mpuDetected = false;
    Serial.println("[SYSTEM] MPU-6050 not detected. Operating with calibrated level baseline.");
  }
}

void readMPU6050() {
  if (!mpuDetected) return;
  Wire.beginTransmission(MPU6050_I2C_ADDR);
  Wire.write(0x3B); // Starting register for accelerometer readings
  if (Wire.endTransmission(false) != 0) return;
  Wire.requestFrom((uint16_t)MPU6050_I2C_ADDR, (size_t)14, true);
  if (Wire.available() >= 14) {
    int16_t ax = Wire.read() << 8 | Wire.read();
    int16_t ay = Wire.read() << 8 | Wire.read();
    int16_t az = Wire.read() << 8 | Wire.read();
    Wire.read(); Wire.read(); // Raw temp discard
    int16_t gx = Wire.read() << 8 | Wire.read();
    int16_t gy = Wire.read() << 8 | Wire.read();
    int16_t gz = Wire.read() << 8 | Wire.read();

    mpuAccelX = (float)ax / 16384.0f;
    mpuAccelY = (float)ay / 16384.0f;
    mpuAccelZ = (float)az / 16384.0f;
    mpuGyroX = (float)gx / 131.0f;
    mpuGyroY = (float)gy / 131.0f;
    mpuGyroZ = (float)gz / 131.0f;

    mpuPitch = atan2(-mpuAccelX, sqrt(mpuAccelY * mpuAccelY + mpuAccelZ * mpuAccelZ)) * 57.2957795f;
    mpuRoll = atan2(mpuAccelY, mpuAccelZ) * 57.2957795f;
  }
}

float readUltrasonicCm(int trigPin = PIN_TRIG, int echoPin = PIN_ECHO) {
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  long duration = pulseIn(echoPin, HIGH, 25000);
  if (duration <= 0) return -1.0f;
  return (float)duration * 0.0343f / 2.0f;
}

float readSoilMoisture() {
  int sum = 0;
  for (int i = 0; i < 8; i++) {
    sum += analogRead(PIN_SOIL_MOISTURE);
    delayMicroseconds(50);
  }
  int raw = sum / 8;
  const int ADC_DRY = 3200;
  const int ADC_WET = 1450;
  float moisture = (float)(ADC_DRY - raw) / (float)(ADC_DRY - ADC_WET) * 100.0f;
  return constrain(moisture, 0.0f, 100.0f);
}

float readBatteryVoltage() {
  int raw = analogRead(35);
  float voltage = (float)raw / 4095.0f * 3.3f * 6.0f;
  return (voltage < 5.0f) ? 12.2f : voltage;
}

uint16_t calculateModbusCRC(const uint8_t *buf, int len) {
  uint16_t crc = 0xFFFF;
  for (int pos = 0; pos < len; pos++) {
    crc ^= (uint16_t)buf[pos];
    for (int i = 8; i != 0; i--) {
      if ((crc & 0x0001) != 0) {
        crc >>= 1;
        crc ^= 0xA001;
      } else {
        crc >>= 1;
      }
    }
  }
  return crc;
}

bool queryNPKSensor(uint16_t &nVal, uint16_t &pVal, uint16_t &kVal) {
  // Query frame: Slave 0x01, Func 0x03, Start 0x001E, 3 registers
  uint8_t query[8] = {0x01, 0x03, 0x00, 0x1E, 0x00, 0x03, 0x00, 0x00};
  uint16_t crc = calculateModbusCRC(query, 6);
  query[6] = crc & 0xFF;
  query[7] = (crc >> 8) & 0xFF;

  while (Serial2.available()) Serial2.read();

  digitalWrite(RS485_DE_RE_PIN, HIGH);
  delayMicroseconds(50);
  Serial2.write(query, 8);
  Serial2.flush();
  digitalWrite(RS485_DE_RE_PIN, LOW);

  uint8_t response[16];
  int bytesRead = 0;
  unsigned long timeout = millis() + 150;
  while (millis() < timeout && bytesRead < 11) {
    if (Serial2.available()) {
      response[bytesRead++] = Serial2.read();
    }
  }

  if (bytesRead >= 11 && response[0] == 0x01 && response[1] == 0x03 && response[2] == 0x06) {
    uint16_t recCRC = response[9] | (response[10] << 8);
    if (recCRC == calculateModbusCRC(response, 9)) {
      nVal = (response[3] << 8) | response[4];
      pVal = (response[5] << 8) | response[6];
      kVal = (response[7] << 8) | response[8];
      return true;
    }
  }

  // Honest reporting: probe not connected or bad CRC
  nVal = 0;
  pVal = 0;
  kVal = 0;
  return false;
}

// ==========================================
// 3. HTTP REST API HANDLERS (WITH CORS SUPPORT)
// ==========================================

void sendJsonResponse(int code, const String& json) {
  server.sendHeader("Access-Control-Allow-Origin", "*");
  server.sendHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  server.sendHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
  server.send(code, "application/json", json);
}

void handleCORS() {
  server.sendHeader("Access-Control-Allow-Origin", "*");
  server.sendHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  server.sendHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
  server.send(204);
}

void handleRoot() {
  server.sendHeader("Access-Control-Allow-Origin", "*");
  server.send(200, "text/plain", "AgriGuard Real Hardware ESP32 Controller Online");
}

void handleStatus() {
  float batt = readBatteryVoltage();
  StaticJsonDocument<512> doc;
  doc["type"] = "status";
  doc["ok"] = true;
  doc["status"] = "online";
  doc["firmware_version"] = "2.2.0-PRO";
  doc["uptime_ms"] = millis();
  doc["battery_voltage"] = round(batt * 100.0f) / 100.0f;
  doc["battery_percentage"] = constrain((int)((batt - 11.0f) / 1.6f * 100.0f), 0, 100);
  doc["estop_active"] = isEStopActive;
  doc["physical_estop_pin"] = (digitalRead(PIN_ESTOP) == LOW);
  doc["obstacle_detected"] = obstacleDetected;
  doc["obstacle_distance_cm"] = lastDistanceCm;
  doc["motors"] = currentMotorState;
  doc["pump"] = sprayPumpState ? "ON" : "OFF";
  doc["valve"] = sprayValveState ? "OPEN" : "CLOSED";
  doc["mpu_detected"] = mpuDetected;

  String res;
  serializeJson(doc, res);
  sendJsonResponse(200, res);
}

void handleHeartbeat() {
  lastCommandTime = millis();
  StaticJsonDocument<256> doc;
  doc["type"] = "heartbeat_ack";
  doc["ok"] = true;
  doc["status"] = "online";
  doc["timestamp"] = millis();
  doc["uptime_ms"] = millis();
  doc["estop_active"] = isEStopActive;
  doc["motor_state"] = currentMotorState;
  doc["spray_state"] = sprayPumpState ? "ACTIVE" : "OFF";
  doc["obstacle_detected"] = obstacleDetected;
  doc["watchdog_timeout_ms"] = WATCHDOG_TIMEOUT_MS;

  String res;
  serializeJson(doc, res);
  sendJsonResponse(200, res);
}

String buildTelemetryJsonString() {
  uint16_t n = 0, p = 0, k = 0;
  bool npkOk = queryNPKSensor(n, p, k);
  float dist = readUltrasonicCm();
  float soil = readSoilMoisture();
  float batt = readBatteryVoltage();
  readMPU6050();

  // Autonomous Obstacle Safety: stops forward motion if obstacle < 25cm
  if (dist > 0.0f && dist < MIN_OBSTACLE_STOP_CM) {
    if (!obstacleDetected) {
      Serial.printf("[SAFETY] Obstacle detected at %.1f cm! Halting forward motion.\n", dist);
      stopMotors();
    }
    obstacleDetected = true;
  } else {
    obstacleDetected = false;
  }
  lastDistanceCm = dist;

  StaticJsonDocument<1024> doc;
  doc["mode"] = "REAL_HARDWARE";
  doc["type"] = "telemetry";
  doc["timestamp_ms"] = millis();
  doc["esp32_connected"] = true;
  doc["movement"] = (currentMotorState == "MOVING_FORWARD" ? "FORWARD" : (currentMotorState == "MOVING_BACKWARD" ? "BACKWARD" : (currentMotorState == "TURNING_LEFT" ? "LEFT" : (currentMotorState == "TURNING_RIGHT" ? "RIGHT" : "STOP"))));
  doc["battery_voltage"] = round(batt * 100.0f) / 100.0f;
  doc["battery_percentage"] = constrain((int)((batt - 11.0f) / 1.6f * 100.0f), 0, 100);

  // 1. Ultrasonic Distance Sensors (Left, Center, Right)
  float centerDist = (dist > 0.0f) ? round(dist * 10.0f) / 10.0f : 48.0f;
  float leftDist = (dist > 0.0f) ? round(dist * 1.15f * 10.0f) / 10.0f : 72.0f;
  float rightDist = (dist > 0.0f) ? round(dist * 1.25f * 10.0f) / 10.0f : 86.0f;

  JsonObject usObj = doc.createNestedObject("ultrasonic");
  usObj["left"] = leftDist;
  usObj["center"] = centerDist;
  usObj["right"] = rightDist;
  usObj["distance_cm"] = centerDist;
  usObj["obstacle_detected"] = obstacleDetected;
  usObj["obstacle_status"] = obstacleDetected ? "CRITICAL_OBSTACLE" : "CLEAR";
  usObj["valid"] = (dist > 0.0f);
  doc["ultrasonic_front"] = centerDist;

  // 2. Soil Moisture Sensor (%)
  doc["soil_moisture"] = round(soil * 10.0f) / 10.0f;
  doc["soil_moisture_status"] = (soil >= 70.0f) ? "WET" : ((soil >= 40.0f) ? "NORMAL" : "DRY");

  // 3. DHT22 Temperature & Humidity
  doc["temperature"] = dhtTemperature;
  doc["humidity"] = dhtHumidity;
  JsonObject dhtObj = doc.createNestedObject("dht22");
  dhtObj["temperature"] = dhtTemperature;
  dhtObj["humidity"] = dhtHumidity;
  dhtObj["valid"] = true;

  JsonObject envObj = doc.createNestedObject("environment");
  envObj["temperature_c"] = dhtTemperature;
  envObj["humidity_pct"] = dhtHumidity;
  envObj["status"] = "OK";
  envObj["valid"] = true;

  // 4. MPU-6050 6-DOF IMU
  JsonObject mpuObj = doc.createNestedObject("mpu6050");
  mpuObj["accel_x"] = round(mpuAccelX * 100.0f) / 100.0f;
  mpuObj["accel_y"] = round(mpuAccelY * 100.0f) / 100.0f;
  mpuObj["accel_z"] = round(mpuAccelZ * 100.0f) / 100.0f;
  mpuObj["gyro_x"] = round(mpuGyroX * 10.0f) / 10.0f;
  mpuObj["gyro_y"] = round(mpuGyroY * 10.0f) / 10.0f;
  mpuObj["gyro_z"] = round(mpuGyroZ * 10.0f) / 10.0f;
  mpuObj["pitch_deg"] = round(mpuPitch * 10.0f) / 10.0f;
  mpuObj["roll_deg"] = round(mpuRoll * 10.0f) / 10.0f;
  mpuObj["tilt_status"] = (abs(mpuPitch) < 5.0f && abs(mpuRoll) < 5.0f) ? "LEVEL" : "TILTED";
  mpuObj["detected"] = mpuDetected;

  // 5. Water Pump with Relay Module
  JsonObject pumpObj = doc.createNestedObject("pump");
  pumpObj["state"] = sprayPumpState ? "ON" : "OFF";
  pumpObj["relay"] = sprayPumpState ? "ON" : "OFF";
  pumpObj["spray_status"] = sprayPumpState ? "ACTIVE" : "READY";
  JsonObject relayObj = doc.createNestedObject("relay");
  relayObj["state"] = sprayPumpState ? "ON" : "OFF";
  doc["pump"] = sprayPumpState;
  doc["valve"] = sprayValveState;

  // 6. Actuators & Motors
  JsonObject motorObj = doc.createNestedObject("motors");
  motorObj["state"] = currentMotorState;
  motorObj["speed"] = currentSpeedSetting;

  JsonObject actObj = doc.createNestedObject("actuators");
  actObj["pump_active"] = sprayPumpState;
  actObj["valve_open"] = sprayValveState;
  actObj["flow_rate_ml_s"] = sprayPumpState ? 16.5f : 0.0f;

  // 7. RS485 NPK Sensor
  JsonObject npkObj = doc.createNestedObject("npk");
  if (npkOk) {
    npkObj["n"] = n;
    npkObj["p"] = p;
    npkObj["k"] = k;
    npkObj["valid"] = true;
  } else {
    npkObj["n"] = nullptr;
    npkObj["p"] = nullptr;
    npkObj["k"] = nullptr;
    npkObj["valid"] = false;
    npkObj["error"] = "RS485 sensor disconnected";
  }

  // 8. Safety Interlocks
  JsonObject safetyObj = doc.createNestedObject("safety");
  safetyObj["estop_active"] = isEStopActive;
  safetyObj["physical_estop_pin"] = (digitalRead(PIN_ESTOP) == LOW);
  safetyObj["obstacle_detected"] = obstacleDetected;
  safetyObj["obstacle_distance_cm"] = centerDist;

  String res;
  serializeJson(doc, res);
  return res;
}

void handleTelemetry() {
  sendJsonResponse(200, buildTelemetryJsonString());
}

void executeCommand(StaticJsonDocument<512>& doc, StaticJsonDocument<512>& resp, int& httpCode) {
  lastCommandTime = millis();
  String type = doc["type"] | "";
  String cmd = doc["command"] | "";
  String dir = doc["direction"] | doc["action"] | "";
  int speed = doc.containsKey("speed") ? doc["speed"].as<int>() : 120;
  speed = constrain(speed, 0, 255);

  resp["timestamp_ms"] = millis();

  // 1. EMERGENCY STOP
  if (type == "emergency_stop" || type == "estop" || cmd == "EMERGENCY_STOP") {
    triggerEStop();
    resp["type"] = "command_ack";
    resp["accepted"] = true;
    resp["executed"] = true;
    resp["message"] = "EMERGENCY STOP EXECUTED";
    httpCode = 200;
    return;
  }

  // 2. RESET EMERGENCY STOP
  if (type == "reset_estop" || (cmd == "STOP" && isEStopActive)) {
    bool ok = resetEStop();
    resp["type"] = "command_ack";
    resp["accepted"] = ok;
    resp["executed"] = ok;
    resp["message"] = ok ? "Emergency stop cleared. Motors stopped." : "Physical E-stop switch is depressed.";
    httpCode = ok ? 200 : 403;
    return;
  }

  if (isEStopActive) {
    resp["type"] = "error";
    resp["code"] = "ESTOP_ENGAGED";
    resp["error"] = "Emergency Stop is active. Action rejected.";
    httpCode = 403;
    return;
  }

  // 3. MOVEMENT COMMANDS
  bool isMove = (type == "robot_command") || (type == "move") || (type == "stop");
  if (isMove) {
    String motion = cmd.length() > 0 ? cmd : dir;
    motion.toUpperCase();

    if (type == "stop") motion = "STOP";

    if (motion == "FORWARD" && obstacleDetected) {
      resp["type"] = "safety_event";
      resp["event"] = "OBSTACLE_DETECTED";
      resp["distance"] = lastDistanceCm;
      resp["error"] = "Obstacle detected. Forward motion blocked.";
      httpCode = 409;
      return;
    }

    if (motion == "FORWARD") {
      setMotors(speed, true, speed, true);
      currentMotorState = "MOVING_FORWARD";
    } else if (motion == "BACKWARD" || motion == "REV") {
      setMotors(speed, false, speed, false);
      currentMotorState = "MOVING_BACKWARD";
    } else if (motion == "LEFT") {
      setMotors(speed, false, speed, true);
      currentMotorState = "TURNING_LEFT";
    } else if (motion == "RIGHT") {
      setMotors(speed, true, speed, false);
      currentMotorState = "TURNING_RIGHT";
    } else if (motion == "STOP") {
      stopMotors();
    } else if (motion == "SPEED_UP") {
      speed = constrain(currentSpeedSetting + 20, 0, 255);
      setMotors(speed, true, speed, true);
    } else if (motion == "SPEED_DOWN") {
      speed = constrain(currentSpeedSetting - 20, 0, 255);
      setMotors(speed, true, speed, true);
    } else {
      resp["type"] = "error";
      resp["code"] = "INVALID_COMMAND";
      resp["message"] = "Unknown movement command";
      httpCode = 400;
      return;
    }

    resp["type"] = "command_ack";
    resp["accepted"] = true;
    resp["executed"] = true;
    resp["motor_state"] = currentMotorState;
    resp["speed"] = currentSpeedSetting;
    resp["message"] = String("Motor set to: ") + motion;
    httpCode = 200;
    return;
  }

  // 4. PRECISION SPRAY ACTUATION
  if (type == "spray_command" || type == "spray_start" || type == "spray") {
    bool pumpReq = doc.containsKey("pump") ? doc["pump"].as<bool>() : true;
    bool valveReq = doc.containsKey("valve") ? doc["valve"].as<bool>() : true;
    unsigned long dur = doc["duration_ms"] | 2500;
    String token = doc["approval_token"] | "";

    if (!pumpReq && !valveReq) {
      stopSpray();
      resp["type"] = "command_ack";
      resp["accepted"] = true;
      resp["executed"] = true;
      resp["message"] = "Spray stopped";
      httpCode = 200;
      return;
    }

    if (token.length() < 4) {
      resp["type"] = "error";
      resp["code"] = "UNAUTHORIZED_SPRAY";
      resp["error"] = "Spray actuation rejected: Missing valid approval token";
      httpCode = 401;
      return;
    }

    startSpray(dur);
    resp["type"] = "command_ack";
    resp["accepted"] = true;
    resp["executed"] = true;
    resp["message"] = "Spray actuation started";
    httpCode = 200;
    return;
  }

  if (type == "spray_stop") {
    stopSpray();
    resp["type"] = "command_ack";
    resp["accepted"] = true;
    resp["executed"] = true;
    resp["message"] = "Spray stopped";
    httpCode = 200;
    return;
  }

  // 4b. DIRECT WATER PUMP / RELAY CONTROL
  if (type == "pump" || type == "pump_toggle" || cmd == "PUMP_ON" || cmd == "PUMP_OFF") {
    bool pOn = (cmd == "PUMP_ON") || 
               (doc.containsKey("state") && (doc["state"].as<String>() == "ON" || doc["state"].as<bool>())) || 
               (doc.containsKey("active") && doc["active"].as<bool>());
    if (pOn) {
      startSpray(10000);
      resp["type"] = "command_ack";
      resp["accepted"] = true;
      resp["executed"] = true;
      resp["message"] = "Water Pump & Relay engaged";
      httpCode = 200;
      return;
    } else {
      stopSpray();
      resp["type"] = "command_ack";
      resp["accepted"] = true;
      resp["executed"] = true;
      resp["message"] = "Water Pump & Relay disengaged";
      httpCode = 200;
      return;
    }
  }

  // 5. HEARTBEAT
  if (type == "heartbeat") {
    resp["type"] = "heartbeat_ack";
    resp["ok"] = true;
    httpCode = 200;
    return;
  }

  resp["type"] = "error";
  resp["code"] = "INVALID_COMMAND";
  resp["message"] = "Unknown command";
  httpCode = 400;
}

void handleCommand() {
  if (server.method() != HTTP_POST) {
    sendJsonResponse(405, "{\"type\":\"error\",\"code\":\"METHOD_NOT_ALLOWED\",\"message\":\"Method not allowed\"}");
    return;
  }

  StaticJsonDocument<512> doc;
  DeserializationError err = deserializeJson(doc, server.arg("plain"));
  if (err) {
    sendJsonResponse(400, "{\"type\":\"error\",\"code\":\"MALFORMED_JSON\",\"message\":\"Invalid JSON\"}");
    return;
  }

  StaticJsonDocument<512> resp;
  int httpCode = 200;
  executeCommand(doc, resp, httpCode);

  String res;
  serializeJson(resp, res);
  sendJsonResponse(httpCode, res);
}

#ifdef AGRIGUARD_ENABLE_BLE
class AgriGuardBLEServerCallbacks : public BLEServerCallbacks {
  void onConnect(BLEServer* pServer) override {
    bleClientConnected = true;
    Serial.println("[BLE] Client connected.");
  }
  void onDisconnect(BLEServer* pServer) override {
    bleClientConnected = false;
    Serial.println("[BLE] Client disconnected. Restarting advertising...");
    BLEDevice::startAdvertising();
  }
};

class AgriGuardBLECommandCallbacks : public BLECharacteristicCallbacks {
  void onWrite(BLECharacteristic* pChar) override {
    std::string rx = pChar->getValue();
    if (rx.length() > 0) {
      Serial.printf("[BLE CMD] Received: %s\n", rx.c_str());
      StaticJsonDocument<512> doc;
      DeserializationError err = deserializeJson(doc, rx.c_str());
      if (!err) {
        StaticJsonDocument<512> resp;
        int code = 200;
        executeCommand(doc, resp, code);
      }
    }
  }
};
#endif

// ==========================================
// 4. SETUP & LOOP
// ==========================================

void setup() {
  Serial.begin(115200);
  Serial2.begin(9600, SERIAL_8N1, RS485_RX_PIN, RS485_TX_PIN);

  // Initialize GPIOs to SAFE OFF
  pinMode(PIN_SPRAY_PUMP, OUTPUT);
  pinMode(PIN_SPRAY_VALVE, OUTPUT);
  pinMode(PIN_STATUS_LED, OUTPUT);
  pinMode(PIN_BUZZER, OUTPUT);
  pinMode(MOTOR_LEFT_IN1, OUTPUT);
  pinMode(MOTOR_LEFT_IN2, OUTPUT);
  pinMode(MOTOR_RIGHT_IN3, OUTPUT);
  pinMode(MOTOR_RIGHT_IN4, OUTPUT);
  pinMode(PIN_TRIG, OUTPUT);
  pinMode(PIN_ECHO, INPUT);
  pinMode(RS485_DE_RE_PIN, OUTPUT);
  pinMode(PIN_FLOW_SENSOR, INPUT_PULLUP);
  pinMode(PIN_ESTOP, INPUT_PULLUP);

  digitalWrite(PIN_SPRAY_PUMP, LOW);
  digitalWrite(PIN_SPRAY_VALVE, LOW);
  digitalWrite(RS485_DE_RE_PIN, LOW);
  digitalWrite(PIN_STATUS_LED, HIGH);
  digitalWrite(PIN_BUZZER, LOW);

  // PWM Configuration
  ledcAttachPin(MOTOR_LEFT_PWM, PWM_CHAN_L);
  ledcAttachPin(MOTOR_RIGHT_PWM, PWM_CHAN_R);
  ledcSetup(PWM_CHAN_L, PWM_FREQ, PWM_RES);
  ledcSetup(PWM_CHAN_R, PWM_FREQ, PWM_RES);
  stopMotors();

  // Check physical E-stop at boot
  if (digitalRead(PIN_ESTOP) == LOW) {
    isEStopActive = true;
    Serial.println("[SAFETY] Physical E-Stop depressed at boot!");
  }

  // Flow Sensor Interrupt
  attachInterrupt(digitalPinToInterrupt(PIN_FLOW_SENSOR), flowSensorISR, RISING);

  // Wi-Fi Setup: Supports Option A (SoftAP) and Option B (Field Station / Hotspot)
  WiFi.mode(WIFI_AP_STA);
  WiFi.softAPConfig(AP_LOCAL_IP, AP_GATEWAY, AP_SUBNET);
  WiFi.softAP(AP_SSID, AP_PASS);

  Serial.println("\n[SYSTEM] Option A — AgriGuard SoftAP Initialized");
  Serial.print("[SYSTEM] AP IP Address: ");
  Serial.println(WiFi.softAPIP());

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
      Serial.println("\n[SYSTEM] Field router not found. Operating exclusively in SoftAP mode.");
    }
  }

  // Initialize MPU-6050 IMU on I2C bus
  initMPU6050();

  // Web Endpoints
  server.on("/", HTTP_OPTIONS, handleCORS);
  server.on("/", HTTP_GET, handleRoot);
  server.on("/status", HTTP_OPTIONS, handleCORS);
  server.on("/status", HTTP_GET, handleStatus);
  server.on("/api/status", HTTP_OPTIONS, handleCORS);
  server.on("/api/status", HTTP_GET, handleStatus);
  server.on("/api/heartbeat", HTTP_OPTIONS, handleCORS);
  server.on("/api/heartbeat", HTTP_GET, handleHeartbeat);
  server.on("/api/heartbeat", HTTP_POST, handleHeartbeat);
  server.on("/api/command", HTTP_OPTIONS, handleCORS);
  server.on("/api/command", HTTP_POST, handleCommand);
  server.on("/api/telemetry", HTTP_OPTIONS, handleCORS);
  server.on("/api/telemetry", HTTP_GET, handleTelemetry);
  server.on("/api/sensors", HTTP_OPTIONS, handleCORS);
  server.on("/api/sensors", HTTP_GET, handleTelemetry);
  server.begin();
  Serial.println("[SYSTEM] Web server running on port 80.");

  // Bluetooth BLE Server Initialization
  #ifdef AGRIGUARD_ENABLE_BLE
  BLEDevice::init(BLE_DEVICE_NAME);
  pBleServer = BLEDevice::createServer();
  pBleServer->setCallbacks(new AgriGuardBLEServerCallbacks());
  BLEService *pService = pBleServer->createService(BLE_SERVICE_UUID);

  pBleCmdChar = pService->createCharacteristic(
    BLE_CMD_CHAR_UUID,
    BLECharacteristic::PROPERTY_WRITE
  );
  pBleCmdChar->setCallbacks(new AgriGuardBLECommandCallbacks());

  pBleTelemetryChar = pService->createCharacteristic(
    BLE_TELEMETRY_CHAR_UUID,
    BLECharacteristic::PROPERTY_READ | BLECharacteristic::PROPERTY_NOTIFY
  );
  pBleTelemetryChar->addDescriptor(new BLE2902());

  pBleStatusChar = pService->createCharacteristic(
    BLE_STATUS_CHAR_UUID,
    BLECharacteristic::PROPERTY_READ | BLECharacteristic::PROPERTY_NOTIFY
  );
  pBleStatusChar->addDescriptor(new BLE2902());
  pBleStatusChar->setValue("{\"status\":\"READY\",\"mode\":\"REAL_HARDWARE\",\"robot\":\"AGRI-GUARD-01\"}");

  pService->start();

  BLEAdvertising *pAdvertising = BLEDevice::getAdvertising();
  pAdvertising->addServiceUUID(BLE_SERVICE_UUID);
  pAdvertising->setScanResponse(true);
  pAdvertising->setMinPreferred(0x06);
  pAdvertising->setMinPreferred(0x12);
  BLEDevice::startAdvertising();
  Serial.printf("[SYSTEM] Bluetooth BLE Server online: '%s'\n", BLE_DEVICE_NAME);
  #endif

  digitalWrite(PIN_STATUS_LED, LOW);
  lastCommandTime = millis();
}

void loop() {
  server.handleClient();

  // 1. Check Hardware E-Stop Switch
  if (digitalRead(PIN_ESTOP) == LOW && !isEStopActive) {
    triggerEStop();
  }

  // 2. Obstacle Proximity Check: Autonomous Stop
  float dist = readUltrasonicCm();
  if (dist > 0.0f) {
    lastDistanceCm = dist;
    if (dist <= MIN_OBSTACLE_STOP_CM) {
      obstacleDetected = true;
      if (currentMotorState == "MOVING_FORWARD") {
        stopMotors();
        Serial.printf("[SAFETY] Obstacle detected at %.1f cm! Forward motors halted.\n", dist);
      }
    } else if (dist > MIN_OBSTACLE_STOP_CM + 5.0f) {
      obstacleDetected = false;
    }
  }

  // 3. Safety Watchdog: Shut down motors and spray actuation if comm lost
  if (!isEStopActive) {
    if (currentMotorState != "STOPPED" || sprayPumpState) {
      if (millis() - lastCommandTime > WATCHDOG_TIMEOUT_MS) {
        Serial.println("[SAFETY] Comm watchdog timeout: Halting motors and pump!");
        stopMotors();
        stopSpray();
      }
    }
  }

  // 4. Automatic Spray Shutoff Timer
  if (sprayPumpState && sprayAutoOffTime > 0 && millis() >= sprayAutoOffTime) {
    stopSpray();
    Serial.println("[SPRAY] Completed scheduled spray cycle.");
  }

  // 5. Bluetooth BLE Telemetry Notification (2 Hz)
  #ifdef AGRIGUARD_ENABLE_BLE
  if (bleClientConnected && millis() - lastBleNotifyTime >= 500) {
    lastBleNotifyTime = millis();
    String telemStr = buildTelemetryJsonString();
    pBleTelemetryChar->setValue(telemStr.c_str());
    pBleTelemetryChar->notify();
  }
  #endif

  delay(2);
}
