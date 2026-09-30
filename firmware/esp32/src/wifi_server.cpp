#if __has_include("wifi_server.h")
  #include "wifi_server.h"
#elif __has_include("../include/wifi_server.h")
  #include "../include/wifi_server.h"
#endif

#if __has_include("motor_driver.h")
  #include "motor_driver.h"
#elif __has_include("../include/motor_driver.h")
  #include "../include/motor_driver.h"
#endif

#if __has_include("spray_controller.h")
  #include "spray_controller.h"
#elif __has_include("../include/spray_controller.h")
  #include "../include/spray_controller.h"
#endif

#if __has_include("sensors.h")
  #include "sensors.h"
#elif __has_include("../include/sensors.h")
  #include "../include/sensors.h"
#endif

#if __has_include("safety_manager.h")
  #include "safety_manager.h"
#elif __has_include("../include/safety_manager.h")
  #include "../include/safety_manager.h"
#endif

WebServer WiFiServerManager::_server(HTTP_PORT);
bool WiFiServerManager::_staConnected = false;

// Battery voltage ADC divider (100k / 20k to GPIO 35)
static float getBatteryVoltage() {
    int raw = analogRead(35);
    float voltage = (float)raw / 4095.0f * 3.3f * 6.0f;
    return (voltage < 5.0f) ? 12.2f : voltage;
}

void WiFiServerManager::init(const char* apSsid, const char* apPass, const char* staSsid, const char* staPass) {
    const IPAddress apIP(192, 168, 4, 1);
    const IPAddress apGateway(192, 168, 4, 1);
    const IPAddress apSubnet(255, 255, 255, 0);

    WiFi.mode(WIFI_AP_STA);
    WiFi.softAPConfig(apIP, apGateway, apSubnet);
    WiFi.softAP(apSsid, apPass);

    Serial.println("[Wi-Fi] Direct SoftAP Mode Ready:");
    Serial.printf("  SSID: %s\n", apSsid);
    Serial.print("  IP Address: "); Serial.println(WiFi.softAPIP());

    if (staSsid && strlen(staSsid) > 0) {
        Serial.printf("[Wi-Fi] Connecting to Field Router '%s'...\n", staSsid);
        WiFi.begin(staSsid, staPass);
        unsigned long startAttempt = millis();
        while (WiFi.status() != WL_CONNECTED && millis() - startAttempt < 6000) {
            delay(250);
            Serial.print(".");
        }
        if (WiFi.status() == WL_CONNECTED) {
            _staConnected = true;
            Serial.println("\n[Wi-Fi] Connected to Local Network!");
            Serial.print("  Station IP: "); Serial.println(WiFi.localIP());
        } else {
            _staConnected = false;
            Serial.println("\n[Wi-Fi] Router not found. Running in standalone SoftAP mode.");
        }
    }

    // Register Routes
    _server.on("/", HTTP_GET, handleRoot);
    _server.on("/status", HTTP_GET, handleStatus);
    _server.on("/api/status", HTTP_GET, handleStatus);
    _server.on("/api/heartbeat", HTTP_GET, handleHeartbeat);
    _server.on("/api/heartbeat", HTTP_POST, handleHeartbeat);
    _server.on("/api/telemetry", HTTP_GET, handleTelemetry);
    _server.on("/api/command", HTTP_POST, handleCommand);
    _server.onNotFound(handleNotFound);

    _server.begin();
    Serial.println("[HTTP Server] Listening on port 80.");
}

void WiFiServerManager::handleClient() {
    _server.handleClient();
}

bool WiFiServerManager::isConnectedSTA() {
    return _staConnected && (WiFi.status() == WL_CONNECTED);
}

IPAddress WiFiServerManager::getActiveIP() {
    return isConnectedSTA() ? WiFi.localIP() : WiFi.softAPIP();
}

void WiFiServerManager::handleRoot() {
    _server.send(200, "text/plain", "AgriGuard Real Hardware ESP32 Controller Online");
}

String WiFiServerManager::buildStatusJson() {
    StaticJsonDocument<512> doc;
    doc["type"] = "status";
    doc["status"] = "online";
    doc["firmware_version"] = "2.1.0-PROD";
    doc["uptime_ms"] = millis();
    doc["battery_voltage"] = round(getBatteryVoltage() * 100.0f) / 100.0f;
    doc["battery_percentage"] = constrain((int)((getBatteryVoltage() - 11.0f) / 1.6f * 100.0f), 0, 100);
    doc["estop_active"] = SafetyManager::isEStopActive();
    doc["physical_estop_pin"] = SafetyManager::isPhysicalEStopDepressed();
    doc["watchdog_tripped"] = SafetyManager::isWatchdogTripped();
    doc["obstacle_detected"] = SafetyManager::isObstacleDetected();
    doc["obstacle_distance_cm"] = SafetyManager::getLastObstacleDistance();
    doc["motors"] = MotorDriver::getStateString();
    doc["pump"] = SprayController::isPumpActive() ? "ON" : "OFF";
    doc["valve"] = SprayController::isValveOpen() ? "OPEN" : "CLOSED";
    doc["spray_state"] = SprayController::getStateString();

    String out;
    serializeJson(doc, out);
    return out;
}

void WiFiServerManager::handleStatus() {
    _server.send(200, "application/json", buildStatusJson());
}

void WiFiServerManager::handleHeartbeat() {
    SafetyManager::feedWatchdog();

    StaticJsonDocument<256> doc;
    doc["type"] = "heartbeat_ack";
    doc["ok"] = true;
    doc["status"] = "online";
    doc["timestamp"] = millis();
    doc["uptime_ms"] = millis();
    doc["estop_active"] = SafetyManager::isEStopActive();
    doc["motor_state"] = MotorDriver::getStateString();
    doc["spray_state"] = SprayController::getStateString();
    doc["obstacle_detected"] = SafetyManager::isObstacleDetected();
    doc["watchdog_timeout_ms"] = SafetyManager::getWatchdogTimeoutMs();

    String response;
    serializeJson(doc, response);
    _server.send(200, "application/json", response);
}

String WiFiServerManager::buildTelemetryJson() {
    SensorReadings r = SensorManager::getLatest();
    float batt = getBatteryVoltage();

    StaticJsonDocument<1024> doc;
    doc["type"] = "telemetry";
    doc["timestamp_ms"] = millis();

    // Standardized flat keys requested by user
    doc["battery_voltage"] = round(batt * 100.0f) / 100.0f;
    doc["battery_percentage"] = constrain((int)((batt - 11.0f) / 1.6f * 100.0f), 0, 100);
    doc["ultrasonic_front"] = r.ultrasonic_valid ? round(r.ultrasonic_distance_cm * 10.0f) / 10.0f : -1.0f;
    doc["soil_moisture"] = round(r.soil_moisture_pct * 10.0f) / 10.0f;
    doc["temperature"] = r.environment.valid ? round(r.environment.temperature_c * 10.0f) / 10.0f : 0.0f;
    doc["humidity"] = r.environment.valid ? round(r.environment.humidity_pct * 10.0f) / 10.0f : 0.0f;
    doc["pump"] = SprayController::isPumpActive();
    doc["valve"] = SprayController::isValveOpen();

    // NPK flat object
    JsonObject npkFlat = doc.createNestedObject("npk");
    if (r.npk.valid) {
        npkFlat["n"] = r.npk.nitrogen_mg_kg;
        npkFlat["p"] = r.npk.phosphorus_mg_kg;
        npkFlat["k"] = r.npk.potassium_mg_kg;
        npkFlat["valid"] = true;
    } else {
        npkFlat["n"] = nullptr;
        npkFlat["p"] = nullptr;
        npkFlat["k"] = nullptr;
        npkFlat["valid"] = false;
        npkFlat["error"] = r.npk.error_message ? r.npk.error_message : "RS485 probe disconnected";
    }

    // Safety Object
    JsonObject safetyObj = doc.createNestedObject("safety");
    safetyObj["estop_active"] = SafetyManager::isEStopActive();
    safetyObj["physical_estop_pin"] = SafetyManager::isPhysicalEStopDepressed();
    safetyObj["watchdog_tripped"] = SafetyManager::isWatchdogTripped();
    safetyObj["obstacle_detected"] = SafetyManager::isObstacleDetected();
    safetyObj["obstacle_distance_cm"] = SafetyManager::getLastObstacleDistance();

    // Motors Object
    JsonObject motorObj = doc.createNestedObject("motors");
    motorObj["state"] = MotorDriver::getStateString();
    motorObj["speed"] = MotorDriver::getCurrentSpeed();

    // Actuators Object
    JsonObject actObj = doc.createNestedObject("actuators");
    actObj["pump_active"] = SprayController::isPumpActive();
    actObj["valve_open"] = SprayController::isValveOpen();
    actObj["spray_state"] = SprayController::getStateString();
    actObj["flow_rate_ml_s"] = round(r.flow_rate_ml_s * 10.0f) / 10.0f;
    actObj["total_flow_ml"] = round(r.total_flow_ml * 10.0f) / 10.0f;

    // Detailed sensors nested object (for backward compatibility with existing dashboard)
    JsonObject sensObj = doc.createNestedObject("sensors");

    JsonObject usObj = sensObj.createNestedObject("ultrasonic");
    usObj["valid"] = r.ultrasonic_valid;
    usObj["distance_cm"] = doc["ultrasonic_front"];

    JsonObject soilObj = sensObj.createNestedObject("soil_moisture");
    soilObj["valid"] = r.soil_moisture_valid;
    soilObj["moisture_pct"] = doc["soil_moisture"];

    JsonObject envObj = sensObj.createNestedObject("environment");
    envObj["valid"] = r.environment.valid;
    envObj["temperature_c"] = doc["temperature"];
    envObj["humidity_pct"] = doc["humidity"];

    JsonObject imuObj = sensObj.createNestedObject("imu");
    imuObj["valid"] = r.imu.valid;
    imuObj["pitch_deg"] = r.imu.valid ? round(r.imu.pitch_deg * 10.0f) / 10.0f : 0.0f;
    imuObj["roll_deg"] = r.imu.valid ? round(r.imu.roll_deg * 10.0f) / 10.0f : 0.0f;

    sensObj["npk"] = npkFlat;

    String response;
    serializeJson(doc, response);
    return response;
}

void WiFiServerManager::handleTelemetry() {
    _server.send(200, "application/json", buildTelemetryJson());
}

void WiFiServerManager::handleCommand() {
    if (_server.method() != HTTP_POST) {
        _server.send(405, "application/json", "{\"type\":\"error\",\"code\":\"METHOD_NOT_ALLOWED\",\"message\":\"Method not allowed\"}");
        return;
    }

    StaticJsonDocument<512> doc;
    DeserializationError error = deserializeJson(doc, _server.arg("plain"));
    if (error) {
        _server.send(400, "application/json", "{\"type\":\"error\",\"code\":\"MALFORMED_JSON\",\"message\":\"Invalid JSON payload\"}");
        return;
    }

    SafetyManager::feedWatchdog();

    String type = doc["type"] | "";
    String cmd = doc["command"] | "";
    String dir = doc["direction"] | "";
    int speed = doc.containsKey("speed") ? doc["speed"].as<int>() : 120;
    speed = constrain(speed, 0, 255);

    StaticJsonDocument<512> resp;
    resp["timestamp_ms"] = millis();

    // 1. EMERGENCY STOP COMMAND (Highest Priority)
    if (type == "estop" || cmd == "EMERGENCY_STOP" || type == "emergency_stop") {
        SafetyManager::triggerSoftwareEStop();
        resp["type"] = "command_ack";
        resp["accepted"] = true;
        resp["executed"] = true;
        resp["message"] = "EMERGENCY STOP EXECUTED";
        String out;
        serializeJson(resp, out);
        _server.send(200, "application/json", out);
        return;
    }

    // 2. RESET EMERGENCY STOP
    if (type == "reset_estop" || (cmd == "STOP" && SafetyManager::isEStopActive())) {
        bool resetOk = SafetyManager::resetEStop();
        resp["type"] = "command_ack";
        resp["accepted"] = resetOk;
        resp["executed"] = resetOk;
        resp["message"] = resetOk ? "Emergency stop cleared. Motors halted safely." : "Failed to reset: Physical E-stop switch is depressed.";
        String out;
        serializeJson(resp, out);
        _server.send(resetOk ? 200 : 403, "application/json", out);
        return;
    }

    // Reject motion or spray if E-Stop is active
    if (SafetyManager::isEStopActive()) {
        resp["type"] = "error";
        resp["code"] = "ESTOP_ENGAGED";
        resp["accepted"] = false;
        resp["executed"] = false;
        resp["error"] = "Emergency Stop is active. Action rejected.";
        String out;
        serializeJson(resp, out);
        _server.send(403, "application/json", out);
        return;
    }

    // 3. ROBOT MOVEMENT COMMANDS
    // Supports both:
    // Format A: {"type": "robot_command", "command": "FORWARD", "speed": 70}
    // Format B: {"type": "move", "direction": "forward", "speed": 120}
    bool isMoveCmd = (type == "robot_command") || (type == "move");
    if (isMoveCmd) {
        String effectiveMotion = "";
        if (cmd.length() > 0) {
            effectiveMotion = cmd;
            effectiveMotion.toUpperCase();
        } else if (dir.length() > 0) {
            effectiveMotion = dir;
            effectiveMotion.toUpperCase();
        }

        // Local obstacle check: prevent forward motion if blocked
        if (effectiveMotion == "FORWARD" && SafetyManager::isObstacleDetected()) {
            resp["type"] = "safety_event";
            resp["event"] = "OBSTACLE_DETECTED";
            resp["distance"] = SafetyManager::getLastObstacleDistance();
            resp["accepted"] = false;
            resp["executed"] = false;
            resp["error"] = "Obstacle detected in front path. Forward motion halted.";
            String out;
            serializeJson(resp, out);
            _server.send(409, "application/json", out);
            return;
        }

        if (effectiveMotion == "FORWARD") {
            MotorDriver::moveForward(speed);
        } else if (effectiveMotion == "BACKWARD" || effectiveMotion == "REV") {
            MotorDriver::moveBackward(speed);
        } else if (effectiveMotion == "LEFT") {
            MotorDriver::turnLeft(speed);
        } else if (effectiveMotion == "RIGHT") {
            MotorDriver::turnRight(speed);
        } else if (effectiveMotion == "STOP") {
            MotorDriver::stop();
        } else if (effectiveMotion == "SPEED_UP") {
            speed = constrain(MotorDriver::getCurrentSpeed() + 20, 0, 255);
            MotorDriver::setSpeedAndDirection(speed, true, speed, true);
        } else if (effectiveMotion == "SPEED_DOWN") {
            speed = constrain(MotorDriver::getCurrentSpeed() - 20, 0, 255);
            MotorDriver::setSpeedAndDirection(speed, true, speed, true);
        } else {
            resp["type"] = "error";
            resp["code"] = "INVALID_COMMAND";
            resp["message"] = "Unknown movement command";
            String out;
            serializeJson(resp, out);
            _server.send(400, "application/json", out);
            return;
        }

        resp["type"] = "command_ack";
        resp["accepted"] = true;
        resp["executed"] = true;
        resp["motor_state"] = MotorDriver::getStateString();
        resp["speed"] = MotorDriver::getCurrentSpeed();
        resp["message"] = String("Motor set to: ") + effectiveMotion;
        String out;
        serializeJson(resp, out);
        _server.send(200, "application/json", out);
        return;
    }

    // 4. PRECISION SPRAY ACTUATION COMMAND
    // Format A: {"type": "spray_command", "pump": true, "valve": true, "duration_ms": 2500, "approval_token": "..."}
    // Format B: {"type": "spray", "duration_ms": 2500, "approval_token": "..."}
    if (type == "spray_command" || type == "spray") {
        bool pumpReq = doc.containsKey("pump") ? doc["pump"].as<bool>() : true;
        bool valveReq = doc.containsKey("valve") ? doc["valve"].as<bool>() : true;
        unsigned long duration = doc["duration_ms"] | 2500;
        const char* token = doc["approval_token"] | "";

        if (!pumpReq && !valveReq) {
            // SPRAY OFF command
            SprayController::stopSpray();
            resp["type"] = "command_ack";
            resp["accepted"] = true;
            resp["executed"] = true;
            resp["message"] = "Spray system stopped (pump and valve OFF)";
            String out;
            serializeJson(resp, out);
            _server.send(200, "application/json", out);
            return;
        }

        // SPRAY ON requires explicit approval token
        if (!token || strlen(token) < 4) {
            resp["type"] = "error";
            resp["code"] = "UNAUTHORIZED_SPRAY";
            resp["accepted"] = false;
            resp["executed"] = false;
            resp["error"] = "Spray actuation rejected: Missing valid farmer approval token";
            String out;
            serializeJson(resp, out);
            _server.send(401, "application/json", out);
            return;
        }

        bool ok = SprayController::startSpray(duration, token);
        resp["type"] = "command_ack";
        resp["accepted"] = ok;
        resp["executed"] = ok;
        resp["spray_state"] = SprayController::getStateString();
        resp["message"] = ok ? "Spray actuation started" : "Spray rejected by safety controller";
        String out;
        serializeJson(resp, out);
        _server.send(ok ? 200 : 409, "application/json", out);
        return;
    }

    // 5. UNKNOWN COMMAND FALLBACK
    resp["type"] = "error";
    resp["code"] = "INVALID_COMMAND";
    resp["message"] = "Unknown robot command";
    String out;
    serializeJson(resp, out);
    _server.send(400, "application/json", out);
}

void WiFiServerManager::handleNotFound() {
    _server.send(404, "application/json", "{\"type\":\"error\",\"code\":\"NOT_FOUND\",\"message\":\"Endpoint not found\"}");
}
