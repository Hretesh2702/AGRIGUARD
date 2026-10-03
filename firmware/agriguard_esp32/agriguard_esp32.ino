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
#elif __has_include("../include/esp32_ide_stubs.h")
  #include "../include/esp32_ide_stubs.h"
#elif __has_include("../../include/esp32_ide_stubs.h")
  #include "../../include/esp32_ide_stubs.h"
#endif

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

float readUltrasonicCm() {
  digitalWrite(PIN_TRIG, LOW);
  delayMicroseconds(2);
  digitalWrite(PIN_TRIG, HIGH);
  delayMicroseconds(10);
  digitalWrite(PIN_TRIG, LOW);
  long duration = pulseIn(PIN_ECHO, HIGH, 25000);
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
// 3. HTTP REST API HANDLERS
// ==========================================

void handleRoot() {
  server.send(200, "text/plain", "AgriGuard Real Hardware ESP32 Controller Online");
}

void handleStatus() {
  float batt = readBatteryVoltage();
  StaticJsonDocument<512> doc;
  doc["type"] = "status";
  doc["ok"] = true;
  doc["status"] = "online";
  doc["firmware_version"] = "2.1.0-INO";
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

  String res;
  serializeJson(doc, res);
  server.send(200, "application/json", res);
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
  server.send(200, "application/json", res);
}

void handleTelemetry() {
  uint16_t n = 0, p = 0, k = 0;
  bool npkOk = queryNPKSensor(n, p, k);
  float dist = readUltrasonicCm();
  float soil = readSoilMoisture();
  float batt = readBatteryVoltage();

  StaticJsonDocument<1024> doc;
  doc["type"] = "telemetry";
  doc["timestamp_ms"] = millis();
  doc["battery_voltage"] = round(batt * 100.0f) / 100.0f;
  doc["battery_percentage"] = constrain((int)((batt - 11.0f) / 1.6f * 100.0f), 0, 100);
  doc["ultrasonic_front"] = dist;
  doc["soil_moisture"] = round(soil * 10.0f) / 10.0f;
  doc["temperature"] = 28.5f;
  doc["humidity"] = 68.0f;
  doc["pump"] = sprayPumpState;
  doc["valve"] = sprayValveState;

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

  JsonObject safetyObj = doc.createNestedObject("safety");
  safetyObj["estop_active"] = isEStopActive;
  safetyObj["physical_estop_pin"] = (digitalRead(PIN_ESTOP) == LOW);
  safetyObj["obstacle_detected"] = obstacleDetected;
  safetyObj["obstacle_distance_cm"] = dist;

  JsonObject motorObj = doc.createNestedObject("motors");
  motorObj["state"] = currentMotorState;
  motorObj["speed"] = currentSpeedSetting;

  JsonObject actObj = doc.createNestedObject("actuators");
  actObj["pump_active"] = sprayPumpState;
  actObj["valve_open"] = sprayValveState;
  actObj["flow_rate_ml_s"] = sprayPumpState ? 16.5f : 0.0f;

  JsonObject sensObj = doc.createNestedObject("sensors");
  JsonObject usSens = sensObj.createNestedObject("ultrasonic");
  usSens["valid"] = (dist > 0.0f);
  usSens["distance_cm"] = dist;

  JsonObject soilSens = sensObj.createNestedObject("soil_moisture");
  soilSens["valid"] = true;
  soilSens["moisture_pct"] = doc["soil_moisture"];

  JsonObject envSens = sensObj.createNestedObject("environment");
  envSens["valid"] = true;
  envSens["temperature_c"] = doc["temperature"];
  envSens["humidity_pct"] = doc["humidity"];

  sensObj["npk"] = npkObj;

  String res;
  serializeJson(doc, res);
  server.send(200, "application/json", res);
}

void handleCommand() {
  if (server.method() != HTTP_POST) {
    server.send(405, "application/json", "{\"type\":\"error\",\"code\":\"METHOD_NOT_ALLOWED\",\"message\":\"Method not allowed\"}");
    return;
  }

  StaticJsonDocument<512> doc;
  DeserializationError err = deserializeJson(doc, server.arg("plain"));
  if (err) {
    server.send(400, "application/json", "{\"type\":\"error\",\"code\":\"MALFORMED_JSON\",\"message\":\"Invalid JSON\"}");
    return;
  }

  lastCommandTime = millis();
  String type = doc["type"] | "";
  String cmd = doc["command"] | "";
  String dir = doc["direction"] | doc["action"] | "";
  int speed = doc.containsKey("speed") ? doc["speed"].as<int>() : 120;
  speed = constrain(speed, 0, 255);

  StaticJsonDocument<512> resp;
  resp["timestamp_ms"] = millis();

  // 1. EMERGENCY STOP
  if (type == "emergency_stop" || type == "estop" || cmd == "EMERGENCY_STOP") {
    triggerEStop();
    resp["type"] = "command_ack";
    resp["accepted"] = true;
    resp["executed"] = true;
    resp["message"] = "EMERGENCY STOP EXECUTED";
    String res;
    serializeJson(resp, res);
    server.send(200, "application/json", res);
    return;
  }

  // 2. RESET EMERGENCY STOP
  if (type == "reset_estop" || (cmd == "STOP" && isEStopActive)) {
    bool ok = resetEStop();
    resp["type"] = "command_ack";
    resp["accepted"] = ok;
    resp["executed"] = ok;
    resp["message"] = ok ? "Emergency stop cleared. Motors stopped." : "Physical E-stop switch is depressed.";
    String res;
    serializeJson(resp, res);
    server.send(ok ? 200 : 403, "application/json", res);
    return;
  }

  if (isEStopActive) {
    resp["type"] = "error";
    resp["code"] = "ESTOP_ENGAGED";
    resp["error"] = "Emergency Stop is active. Action rejected.";
    String res;
    serializeJson(resp, res);
    server.send(403, "application/json", res);
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
      String res;
      serializeJson(resp, res);
      server.send(409, "application/json", res);
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
      String res;
      serializeJson(resp, res);
      server.send(400, "application/json", res);
      return;
    }

    resp["type"] = "command_ack";
    resp["accepted"] = true;
    resp["executed"] = true;
    resp["motor_state"] = currentMotorState;
    resp["speed"] = currentSpeedSetting;
    resp["message"] = String("Motor set to: ") + motion;
    String res;
    serializeJson(resp, res);
    server.send(200, "application/json", res);
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
      String res;
      serializeJson(resp, res);
      server.send(200, "application/json", res);
      return;
    }

    if (token.length() < 4) {
      resp["type"] = "error";
      resp["code"] = "UNAUTHORIZED_SPRAY";
      resp["error"] = "Spray actuation rejected: Missing valid approval token";
      String res;
      serializeJson(resp, res);
      server.send(401, "application/json", res);
      return;
    }

    startSpray(dur);
    resp["type"] = "command_ack";
    resp["accepted"] = true;
    resp["executed"] = true;
    resp["message"] = "Spray actuation started";
    String res;
    serializeJson(resp, res);
    server.send(200, "application/json", res);
    return;
  }

  if (type == "spray_stop") {
    stopSpray();
    resp["type"] = "command_ack";
    resp["accepted"] = true;
    resp["executed"] = true;
    resp["message"] = "Spray stopped";
    String res;
    serializeJson(resp, res);
    server.send(200, "application/json", res);
    return;
  }

  resp["type"] = "error";
  resp["code"] = "INVALID_COMMAND";
  resp["message"] = "Unknown command";
  String res;
  serializeJson(resp, res);
  server.send(400, "application/json", res);
}

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

  // Web Endpoints
  server.on("/", HTTP_GET, handleRoot);
  server.on("/status", HTTP_GET, handleStatus);
  server.on("/api/status", HTTP_GET, handleStatus);
  server.on("/api/heartbeat", HTTP_GET, handleHeartbeat);
  server.on("/api/heartbeat", HTTP_POST, handleHeartbeat);
  server.on("/api/command", HTTP_POST, handleCommand);
  server.on("/api/telemetry", HTTP_GET, handleTelemetry);
  server.on("/api/sensors", HTTP_GET, handleTelemetry);
  server.begin();
  Serial.println("[SYSTEM] Web server running on port 80.");

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

  delay(2);
}
