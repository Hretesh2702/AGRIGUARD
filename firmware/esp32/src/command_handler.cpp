#if __has_include("command_handler.h")
  #include "command_handler.h"
#elif __has_include("../include/command_handler.h")
  #include "../include/command_handler.h"
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

#if __has_include("safety_manager.h")
  #include "safety_manager.h"
#elif __has_include("../include/safety_manager.h")
  #include "../include/safety_manager.h"
#endif

#if __has_include("ultrasonic_manager.h")
  #include "ultrasonic_manager.h"
#elif __has_include("../include/ultrasonic_manager.h")
  #include "../include/ultrasonic_manager.h"
#endif

void CommandHandler::execute(StaticJsonDocument<512>& doc, StaticJsonDocument<512>& resp, int& httpCode) {
    SafetyManager::feedWatchdog();

    String type = doc["type"] | "";
    String cmd = doc["command"] | "";
    String dir = doc["direction"] | doc["action"] | "";
    int speed = doc.containsKey("speed") ? doc["speed"].as<int>() : 120;
    speed = constrain(speed, 0, 255);

    resp["timestamp_ms"] = millis();

    // 1. EMERGENCY STOP
    if (type == "emergency_stop" || type == "estop" || cmd == "EMERGENCY_STOP") {
        SafetyManager::triggerSoftwareEStop();
        MotorDriver::emergencyHalt();
        SprayController::emergencyHalt();

        resp["type"] = "command_ack";
        resp["accepted"] = true;
        resp["executed"] = true;
        resp["message"] = "EMERGENCY STOP EXECUTED: All actuators disabled";
        httpCode = 200;
        return;
    }

    // 2. RESET EMERGENCY STOP
    if (type == "reset_estop" || (cmd == "STOP" && SafetyManager::isEStopActive())) {
        bool ok = SafetyManager::resetEStop();
        if (ok) MotorDriver::stop();

        resp["type"] = "command_ack";
        resp["accepted"] = ok;
        resp["executed"] = ok;
        resp["message"] = ok ? "Emergency stop reset. Actuators ready." : "Physical emergency stop switch is depressed.";
        httpCode = ok ? 200 : 403;
        return;
    }

    if (SafetyManager::isEStopActive()) {
        resp["type"] = "error";
        resp["code"] = "ESTOP_ENGAGED";
        resp["error"] = "Emergency Stop is currently active. Action rejected.";
        httpCode = 403;
        return;
    }

    // 3. MOVEMENT COMMANDS
    bool isMove = (type == "robot_command") || (type == "move") || (type == "stop");
    if (isMove) {
        String motion = cmd.length() > 0 ? cmd : dir;
        motion.toUpperCase();

        if (type == "stop") motion = "STOP";

        if (motion == "FORWARD" && SafetyManager::isObstacleDetected()) {
            resp["type"] = "safety_event";
            resp["event"] = "OBSTACLE_DETECTED";
            resp["distance"] = UltrasonicManager::getCenterCm();
            resp["error"] = "Obstacle detected (<25cm). Forward motion blocked.";
            httpCode = 409;
            return;
        }

        if (motion == "FORWARD") {
            MotorDriver::moveForward(speed);
        } else if (motion == "BACKWARD" || motion == "REVERSE") {
            MotorDriver::moveBackward(speed);
        } else if (motion == "LEFT") {
            MotorDriver::turnLeft(speed);
        } else if (motion == "RIGHT") {
            MotorDriver::turnRight(speed);
        } else if (motion == "STOP") {
            MotorDriver::stop();
        } else {
            resp["type"] = "error";
            resp["error"] = "Unknown movement command: " + motion;
            httpCode = 400;
            return;
        }

        resp["type"] = "command_ack";
        resp["accepted"] = true;
        resp["executed"] = true;
        resp["action"] = motion;
        resp["speed"] = speed;
        resp["motor_state"] = MotorDriver::getStateString();
        httpCode = 200;
        return;
    }

    // 4. SPRAY / PUMP / RELAY ACTUATION
    if (type == "spray_command" || type == "spray") {
        const char* token = doc["approval_token"] | "";
        unsigned long duration = doc["duration_ms"] | 2500UL;
        if (duration > MAX_SPRAY_DURATION_MS) duration = MAX_SPRAY_DURATION_MS;

        bool ok = SprayController::startSpray(duration, token);
        if (ok) {
            resp["type"] = "command_ack";
            resp["accepted"] = true;
            resp["executed"] = true;
            resp["message"] = "Spray actuation started (" + String(duration) + "ms)";
            httpCode = 200;
        } else {
            resp["type"] = "error";
            resp["error"] = "Spray rejected: Valid farmer approval token required or E-Stop active.";
            httpCode = 401;
        }
        return;
    }

    if (type == "spray_stop") {
        SprayController::stopSpray();
        resp["type"] = "command_ack";
        resp["accepted"] = true;
        resp["executed"] = true;
        resp["message"] = "Spray stopped";
        httpCode = 200;
        return;
    }

    // Direct Pump / Relay Toggle
    if (type == "pump" || type == "pump_toggle" || cmd == "PUMP_ON" || cmd == "PUMP_OFF") {
        bool pOn = (cmd == "PUMP_ON") ||
                   (doc.containsKey("state") && (doc["state"].as<String>() == "ON" || doc["state"].as<bool>())) ||
                   (doc.containsKey("active") && doc["active"].as<bool>());
        if (pOn) {
            SprayController::startSpray(10000, "OPERATOR_OVERRIDE");
            resp["type"] = "command_ack";
            resp["accepted"] = true;
            resp["executed"] = true;
            resp["message"] = "Water Pump & Relay engaged";
            httpCode = 200;
        } else {
            SprayController::stopSpray();
            resp["type"] = "command_ack";
            resp["accepted"] = true;
            resp["executed"] = true;
            resp["message"] = "Water Pump & Relay disengaged";
            httpCode = 200;
        }
        return;
    }

    // 5. HEARTBEAT
    if (type == "heartbeat") {
        resp["type"] = "heartbeat_ack";
        resp["ok"] = true;
        resp["timestamp_ms"] = millis();
        httpCode = 200;
        return;
    }

    resp["type"] = "error";
    resp["error"] = "Unrecognized command type: " + type;
    httpCode = 400;
}

String CommandHandler::executeRawJSON(const char* jsonInput) {
    StaticJsonDocument<512> doc;
    DeserializationError err = deserializeJson(doc, jsonInput);
    if (err) {
        StaticJsonDocument<128> errResp;
        errResp["type"] = "error";
        errResp["error"] = "Invalid JSON payload";
        String out;
        serializeJson(errResp, out);
        return out;
    }

    StaticJsonDocument<512> resp;
    int httpCode = 200;
    execute(doc, resp, httpCode);

    String out;
    serializeJson(resp, out);
    return out;
}
