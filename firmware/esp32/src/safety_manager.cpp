#if __has_include("safety_manager.h")
  #include "safety_manager.h"
#elif __has_include("../include/safety_manager.h")
  #include "../include/safety_manager.h"
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

unsigned long SafetyManager::_lastCommandTime = 0;
unsigned long SafetyManager::_watchdogTimeoutMs = COMM_WATCHDOG_TIMEOUT_MS;
bool SafetyManager::_estopLatched = false;
bool SafetyManager::_watchdogTripped = false;
bool SafetyManager::_obstacleDetected = false;
float SafetyManager::_lastObstacleDistance = -1.0f;
SafetyState SafetyManager::_currentState = SafetyState::NOMINAL;

void SafetyManager::init() {
    pinMode(PIN_ESTOP_SWITCH, INPUT_PULLUP);
    pinMode(PIN_BUZZER, OUTPUT);
    digitalWrite(PIN_BUZZER, LOW);

    _lastCommandTime = millis();
    _estopLatched = (digitalRead(PIN_ESTOP_SWITCH) == LOW);
    _watchdogTripped = false;
    _obstacleDetected = false;
    _currentState = _estopLatched ? SafetyState::ESTOP_ACTIVE : SafetyState::NOMINAL;

    if (_estopLatched) {
        Serial.println("[SAFETY] Physical E-Stop switch is DEPRESSED at startup!");
        executeHardwareShutdown("PHYSICAL_ESTOP_BOOT");
    } else {
        Serial.println("[SAFETY] Safety subsystem initialized. Watchdog timeout: 1500ms");
    }
}

void SafetyManager::executeHardwareShutdown(const char* reason) {
    MotorDriver::emergencyHalt();
    SprayController::emergencyHalt();

    // Short buzzer alert
    digitalWrite(PIN_BUZZER, HIGH);
    delay(80);
    digitalWrite(PIN_BUZZER, LOW);

    Serial.printf("[SAFETY HALT] Actuation disengaged. Reason: %s\n", reason);
}

void SafetyManager::feedWatchdog() {
    _lastCommandTime = millis();
    if (_watchdogTripped && !_estopLatched && !_obstacleDetected) {
        _watchdogTripped = false;
        _currentState = SafetyState::NOMINAL;
    }
}

void SafetyManager::triggerSoftwareEStop() {
    _estopLatched = true;
    _currentState = SafetyState::ESTOP_ACTIVE;
    executeHardwareShutdown("SOFTWARE_ESTOP");
}

bool SafetyManager::resetEStop() {
    // Physical safety constraint: Cannot reset if physical switch is still pressed to GND!
    if (digitalRead(PIN_ESTOP_SWITCH) == LOW) {
        Serial.println("[SAFETY REJECT] Cannot reset E-Stop while physical switch is depressed!");
        return false;
    }

    _estopLatched = false;
    _watchdogTripped = false;
    _obstacleDetected = false;
    _currentState = SafetyState::NOMINAL;
    _lastCommandTime = millis();

    MotorDriver::stop();
    SprayController::stopSpray();
    Serial.println("[SAFETY RESET] Emergency stop cleared. Robot in SAFE_STOPPED state.");
    return true;
}

bool SafetyManager::isEStopActive() {
    return _estopLatched || (digitalRead(PIN_ESTOP_SWITCH) == LOW);
}

bool SafetyManager::isPhysicalEStopDepressed() {
    return digitalRead(PIN_ESTOP_SWITCH) == LOW;
}

bool SafetyManager::isWatchdogTripped() {
    return _watchdogTripped;
}

unsigned long SafetyManager::getWatchdogTimeoutMs() {
    return _watchdogTimeoutMs;
}

void SafetyManager::setWatchdogTimeoutMs(unsigned long timeoutMs) {
    _watchdogTimeoutMs = (timeoutMs < 300) ? 300 : timeoutMs;
}

bool SafetyManager::isObstacleDetected() {
    return _obstacleDetected;
}

float SafetyManager::getLastObstacleDistance() {
    return _lastObstacleDistance;
}

SafetyState SafetyManager::getState() {
    return _currentState;
}

const char* SafetyManager::getStateString() {
    switch (_currentState) {
        case SafetyState::NOMINAL: return "NOMINAL";
        case SafetyState::OBSTACLE_HALTED: return "OBSTACLE_HALTED";
        case SafetyState::WATCHDOG_TIMEOUT: return "WATCHDOG_TIMEOUT";
        case SafetyState::ESTOP_ACTIVE: return "ESTOP_ACTIVE";
        default: return "UNKNOWN";
    }
}

void SafetyManager::update(float ultrasonicDistanceCm, bool isMovingForward) {
    unsigned long now = millis();

    // 1. Physical E-stop check (Hardware pin)
    if (digitalRead(PIN_ESTOP_SWITCH) == LOW && !_estopLatched) {
        _estopLatched = true;
        _currentState = SafetyState::ESTOP_ACTIVE;
        executeHardwareShutdown("PHYSICAL_ESTOP_ENGAGED");
        return;
    }

    // 2. Obstacle Braking: If moving forward and distance < threshold
    if (ultrasonicDistanceCm > 0.0f && ultrasonicDistanceCm <= MIN_OBSTACLE_STOP_CM) {
        _lastObstacleDistance = ultrasonicDistanceCm;
        _obstacleDetected = true;

        if (isMovingForward) {
            MotorDriver::stop();
            _currentState = SafetyState::OBSTACLE_HALTED;
            Serial.printf("[SAFETY OBSTACLE] Forward path blocked! Distance: %.1f cm. Motors halted.\n", ultrasonicDistanceCm);
        }
    } else {
        if (_obstacleDetected && ultrasonicDistanceCm > MIN_OBSTACLE_STOP_CM + 5.0f) {
            _obstacleDetected = false;
            if (_currentState == SafetyState::OBSTACLE_HALTED) {
                _currentState = SafetyState::NOMINAL;
            }
        }
    }

    // 3. Communications Watchdog Timeout Check
    if (!_estopLatched) {
        bool isActive = (MotorDriver::getState() != MotorState::STOPPED) || SprayController::isPumpActive();
        if (isActive && (now - _lastCommandTime > _watchdogTimeoutMs)) {
            _watchdogTripped = true;
            _currentState = SafetyState::WATCHDOG_TIMEOUT;
            executeHardwareShutdown("COMM_WATCHDOG_TIMEOUT");
        }
    }
}
