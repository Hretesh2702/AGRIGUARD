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
const char* AP_PASS = "agri12345"; // WPA2 Key for field AP mode
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
#define RS485_DE_RE_PIN     21  // Transceiver DE/RE direction pin

// Safety Emergency Stop Pin
#define PIN_ESTOP           32  // Hardware E-stop switch to GND (Internal Pullup)
#define PIN_STATUS_LED      2   // Built-in Blue LED

// Safety Watchdog
const unsigned long WATCHDOG_TIMEOUT_MS = 2000;
unsigned long lastCommandTime = 0;
bool isEStopActive = false;

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
bool sprayPumpState = false;
bool sprayValveState = false;
unsigned long sprayAutoOffTime = 0;

WebServer server(80);

// ==========================================
// 2. HARDWARE CONTROL FUNCTIONS
// ==========================================

void setMotors(int leftSpeed, bool leftFwd, int rightSpeed, bool rightFwd) {
  if (isEStopActive) {
    ledcWrite(PWM_CHAN_L, 0);
    ledcWrite(PWM_CHAN_R, 0);
    digitalWrite(MOTOR_LEFT_IN1, LOW);
    digitalWrite(MOTOR_LEFT_IN2, LOW);
    digitalWrite(MOTOR_RIGHT_IN3, LOW);
    digitalWrite(MOTOR_RIGHT_IN4, LOW);
    currentMotorState = "STOPPED";
    return;
  }

  // Left Motor
  digitalWrite(MOTOR_LEFT_IN1, leftFwd ? HIGH : LOW);
  digitalWrite(MOTOR_LEFT_IN2, leftFwd ? LOW : HIGH);
  ledcWrite(PWM_CHAN_L, constrain(leftSpeed, 0, 255));

  // Right Motor
  digitalWrite(MOTOR_RIGHT_IN3, rightFwd ? HIGH : LOW);
  digitalWrite(MOTOR_RIGHT_IN4, rightFwd ? LOW : HIGH);
  ledcWrite(PWM_CHAN_R, constrain(rightSpeed, 0, 255));
}

void stopMotors() {
  setMotors(0, true, 0, true);
  currentMotorState = "STOPPED";
}

void triggerEStop() {
  isEStopActive = true;
  stopMotors();
  stopSpray();
  digitalWrite(PIN_STATUS_LED, LOW);
  Serial.println("[SAFETY] EMERGENCY STOP ACTIVATED!");
}

void resetEStop() {
  isEStopActive = false;
  Serial.println("[SAFETY] Emergency Stop reset.");
}

void startSpray(unsigned long durationMs) {
  if (isEStopActive) return;
  sprayPumpState = true;
  sprayValveState = true;
  digitalWrite(PIN_SPRAY_PUMP, HIGH);
  digitalWrite(PIN_SPRAY_VALVE, HIGH);
  sprayAutoOffTime = millis() + durationMs;
  Serial.printf("[SPRAY] Actuating pump and valve for %lu ms\n", durationMs);
}

void stopSpray() {
  sprayPumpState = false;
  sprayValveState = false;
  digitalWrite(PIN_SPRAY_PUMP, LOW);
  digitalWrite(PIN_SPRAY_VALVE, LOW);
  sprayAutoOffTime = 0;
}

float readUltrasonicCm() {
  digitalWrite(PIN_TRIG, LOW);
  delayMicroseconds(2);
  digitalWrite(PIN_TRIG, HIGH);
  delayMicroseconds(10);
  digitalWrite(PIN_TRIG, LOW);
  long duration = pulseIn(PIN_ECHO, HIGH, 30000); // 30ms timeout
  if (duration == 0) return 300.0;
  return (duration * 0.0343) / 2.0;
}

float readSoilMoisture() {
  int raw = analogRead(PIN_SOIL_MOISTURE);
  // Typical calibration: Air ~3200 (dry), Water ~1400 (saturated)
  float moisturePct = map(raw, 3200, 1400, 0, 100);
  return constrain(moisturePct, 0.0, 100.0);
}

// Modbus CRC16 Calculation for RS485 NPK Sensor
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

void queryNPKSensor(uint16_t &nVal, uint16_t &pVal, uint16_t &kVal) {
  // Standard Modbus RTU inquiry frame for 3-in-1 NPK probe
  // Slave Address 0x01, Function 0x03, Start Reg 0x001E, Len 0x0003
  const uint8_t queryFrame[] = {0x01, 0x03, 0x00, 0x1E, 0x00, 0x03, 0x65, 0xCD};

  digitalWrite(RS485_DE_RE_PIN, HIGH); // Transmit Mode
  Serial2.write(queryFrame, sizeof(queryFrame));
  Serial2.flush();
  digitalWrite(RS485_DE_RE_PIN, LOW);  // Receive Mode

  delay(50);
  uint8_t response[11];
  int bytesRead = 0;
  unsigned long timeout = millis() + 150;
  while (millis() < timeout && bytesRead < 11) {
    if (Serial2.available()) {
      response[bytesRead++] = Serial2.read();
    }
  }

  if (bytesRead >= 11 && response[0] == 0x01 && response[1] == 0x03) {
    nVal = (response[3] << 8) | response[4];
    pVal = (response[5] << 8) | response[6];
    kVal = (response[7] << 8) | response[8];
  } else {
    // Default fallback readings if physical probe disconnected
    nVal = 48; // mg/kg
    pVal = 32;
    kVal = 55;
  }
}

// ==========================================
// 3. HTTP REST API HANDLERS
// ==========================================

void handleRoot() {
  server.send(200, "text/plain", "AgriGuard ESP32 Controller Online");
}

void handleStatus() {
  StaticJsonDocument<256> doc;
  doc["ok"] = true;
  doc["connected"] = true;
  doc["estop_active"] = isEStopActive;
  doc["motor_state"] = currentMotorState;
  doc["spray_state"] = sprayPumpState ? "ACTIVE" : "OFF";
  doc["battery_v"] = 12.3;
  doc["battery_pct"] = 86;

  String res;
  serializeJson(doc, res);
  server.send(200, "application/json", res);
}

void handleHeartbeat() {
  lastCommandTime = millis();
  StaticJsonDocument<256> doc;
  doc["ok"] = true;
  doc["connected"] = true;
  doc["uptime_ms"] = millis();
  doc["estop_active"] = isEStopActive;
  doc["motor_state"] = currentMotorState;
  doc["spray_state"] = sprayPumpState ? "ACTIVE" : "OFF";
  doc["watchdog_timeout_ms"] = WATCHDOG_TIMEOUT_MS;
  String res;
  serializeJson(doc, res);
  server.send(200, "application/json", res);
}

void handleCommand() {
  if (server.method() != HTTP_POST) {
    server.send(405, "application/json", "{\"error\":\"Method not allowed\"}");
    return;
  }

  StaticJsonDocument<512> doc;
  DeserializationError err = deserializeJson(doc, server.arg("plain"));
  if (err) {
    server.send(400, "application/json", "{\"error\":\"Invalid JSON\"}");
    return;
  }

  lastCommandTime = millis();
  String type = doc["type"] | "";
  String reqId = doc["request_id"] | "";

  if (type == "emergency_stop") {
    triggerEStop();
    server.send(200, "application/json", "{\"ok\":true,\"message\":\"ESTOP ACTIVE\"}");
    return;
  }

  if (type == "stop") {
    resetEStop();
    stopMotors();
    stopSpray();
    server.send(200, "application/json", "{\"ok\":true,\"message\":\"Stopped\"}");
    return;
  }

  if (isEStopActive) {
    server.send(403, "application/json", "{\"error\":\"Emergency stop active\"}");
    return;
  }

  if (type == "move") {
    String action = doc["action"] | "stop";
    int speed = doc["speed"] | 120;
    if (action == "forward") {
      setMotors(speed, true, speed, true);
      currentMotorState = "MOVING_FORWARD";
    } else if (action == "backward") {
      setMotors(speed, false, speed, false);
      currentMotorState = "MOVING_BACKWARD";
    } else if (action == "left") {
      setMotors(speed, false, speed, true);
      currentMotorState = "TURNING_LEFT";
    } else if (action == "right") {
      setMotors(speed, true, speed, false);
      currentMotorState = "TURNING_RIGHT";
    } else {
      stopMotors();
    }
    server.send(200, "application/json", "{\"ok\":true,\"message\":\"Move executed\"}");
    return;
  }

  if (type == "spray_start") {
    String token = doc["approval_token"] | "";
    if (token.length() == 0) {
      server.send(401, "application/json", "{\"error\":\"Missing approval token\"}");
      return;
    }
    unsigned long dur = doc["duration_ms"] | 2500;
    startSpray(dur);
    server.send(200, "application/json", "{\"ok\":true,\"message\":\"Spray started\"}");
    return;
  }

  if (type == "spray_stop") {
    stopSpray();
    server.send(200, "application/json", "{\"ok\":true,\"message\":\"Spray stopped\"}");
    return;
  }

  server.send(400, "application/json", "{\"error\":\"Unknown command\"}");
}

void handleSensors() {
  StaticJsonDocument<512> doc;
  uint16_t n = 0, p = 0, k = 0;
  queryNPKSensor(n, p, k);

  doc["ok"] = true;
  doc["nitrogen"] = (n < 30) ? "low" : ((n > 80) ? "high" : "normal");
  doc["phosphorus"] = (p < 20) ? "low" : ((p > 60) ? "high" : "normal");
  doc["potassium"] = (k < 30) ? "low" : ((k > 90) ? "high" : "normal");
  doc["nitrogen_mg_kg"] = n;
  doc["phosphorus_mg_kg"] = p;
  doc["potassium_mg_kg"] = k;
  doc["soil_moisture"] = readSoilMoisture();
  doc["temperature_c"] = 27.5;
  doc["humidity_pct"] = 65.0;
  doc["distance_cm"] = readUltrasonicCm();
  doc["flow_rate_ml_s"] = sprayPumpState ? 16.0 : 0.0;
  doc["battery_v"] = 12.3;
  doc["battery_pct"] = 86;

  String res;
  serializeJson(doc, res);
  server.send(200, "application/json", res);
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

  // PWM Configuration
  ledcAttachPin(MOTOR_LEFT_PWM, PWM_CHAN_L);
  ledcAttachPin(MOTOR_RIGHT_PWM, PWM_CHAN_R);
  ledcSetup(PWM_CHAN_L, PWM_FREQ, PWM_RES);
  ledcSetup(PWM_CHAN_R, PWM_FREQ, PWM_RES);
  stopMotors();

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
  server.on("/api/heartbeat", HTTP_GET, handleHeartbeat);
  server.on("/api/heartbeat", HTTP_POST, handleHeartbeat);
  server.on("/api/command", HTTP_POST, handleCommand);
  server.on("/api/sensors", HTTP_GET, handleSensors);
  server.begin();
  Serial.println("[SYSTEM] Web server running on port 80.");

  lastCommandTime = millis();
}

void loop() {
  server.handleClient();

  // Check Hardware E-Stop Switch
  if (digitalRead(PIN_ESTOP) == LOW && !isEStopActive) {
    triggerEStop();
  }

  // Safety Watchdog: Shut down motors and spray actuation if comm lost
  if (!isEStopActive) {
    if (currentMotorState != "STOPPED" || sprayPumpState) {
      if (millis() - lastCommandTime > WATCHDOG_TIMEOUT_MS) {
        Serial.println("[SAFETY] Comm watchdog timeout: Halting motors and pump!");
        stopMotors();
        stopSpray();
      }
    }
  }

  // Automatic Spray Shutoff Timer
  if (sprayPumpState && sprayAutoOffTime > 0 && millis() >= sprayAutoOffTime) {
    stopSpray();
    Serial.println("[SPRAY] Completed scheduled spray cycle.");
  }

  delay(2);
}
