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

SprayState SprayController::currentState = SprayState::IDLE_OFF;
unsigned long SprayController::sprayStartTime = 0;
unsigned long SprayController::targetDurationMs = 0;
bool SprayController::pumpActive = false;
bool SprayController::valveOpen = false;
bool SprayController::flowVerified = false;
unsigned long SprayController::flowCheckStartTime = 0;

void SprayController::init() {
    pinMode(PIN_SPRAY_PUMP, OUTPUT);
    pinMode(PIN_SPRAY_VALVE, OUTPUT);
    pinMode(PIN_BUZZER, OUTPUT);

    // Initial safe state: Strictly OFF
    digitalWrite(PIN_SPRAY_PUMP, LOW);
    digitalWrite(PIN_SPRAY_VALVE, LOW);
    digitalWrite(PIN_BUZZER, LOW);

    pumpActive = false;
    valveOpen = false;
    currentState = SprayState::IDLE_OFF;
}

bool SprayController::startSpray(unsigned long durationMs, const char* approvalToken) {
    // 1. Safety validation: Require valid approval token
    if (!approvalToken || strlen(approvalToken) < 6) {
        Serial.println("[SprayController] REJECTED: Missing or invalid farmer approval token.");
        return false;
    }

    if (currentState == SprayState::EMERGENCY_HALTED) {
        Serial.println("[SprayController] REJECTED: Emergency Stop is active.");
        return false;
    }

    // 2. Clamp duration to hardware safe limits (500ms to 6000ms)
    targetDurationMs = constrain(durationMs, 500UL, (unsigned long)MAX_SPRAY_DURATION_MS);

    // 3. Actuate: Open solenoid valve first, then energize pump
    valveOpen = true;
    digitalWrite(PIN_SPRAY_VALVE, HIGH);
    delay(40); // 40ms valve opening transition

    pumpActive = true;
    digitalWrite(PIN_SPRAY_PUMP, HIGH);

    sprayStartTime = millis();
    flowCheckStartTime = millis();
    flowVerified = false;
    currentState = SprayState::ACTIVE_SPRAYING;

    // Audible confirmation beep
    digitalWrite(PIN_BUZZER, HIGH);
    delay(50);
    digitalWrite(PIN_BUZZER, LOW);

    Serial.printf("[SprayController] Precision spray ACTIVATED for %lu ms (Token: %s)\n", targetDurationMs, approvalToken);
    return true;
}

void SprayController::update() {
    if (currentState != SprayState::ACTIVE_SPRAYING) {
        return;
    }

    unsigned long elapsed = millis() - sprayStartTime;

    // 1. Check Flow Sensor Verification Delay
    if (!flowVerified && (millis() - flowCheckStartTime > FLOW_VERIFY_DELAY_MS)) {
        float flowRate = SensorManager::getFlowRateMlS();
        if (flowRate < MIN_REQUIRED_FLOW_ML_S) {
            // Fault: Pump is running but no liquid moving (empty tank, blockage, or air-lock)
            Serial.printf("[SprayController] FAULT: Zero flow detected (%.1f mL/s). Shutting down pump.\n", flowRate);
            stopSpray();
            currentState = SprayState::FAULT_NO_FLOW;

            // Alarm pattern: 3 warning beeps
            for (int i = 0; i < 3; i++) {
                digitalWrite(PIN_BUZZER, HIGH);
                delay(80);
                digitalWrite(PIN_BUZZER, LOW);
                delay(80);
            }
            return;
        } else {
            flowVerified = true;
            Serial.printf("[SprayController] Real flow verified: %.2f mL/s\n", flowRate);
        }
    }

    // 2. Check Target Duration Completion
    if (elapsed >= targetDurationMs) {
        Serial.printf("[SprayController] Spray pulse duration (%lu ms) reached.\n", targetDurationMs);
        stopSpray();
        currentState = SprayState::COMPLETED;
    }
}

void SprayController::stopSpray() {
    // Cut pump power first
    pumpActive = false;
    digitalWrite(PIN_SPRAY_PUMP, LOW);
    delay(30);

    // Close solenoid valve
    valveOpen = false;
    digitalWrite(PIN_SPRAY_VALVE, LOW);
    digitalWrite(PIN_BUZZER, LOW);

    if (currentState != SprayState::FAULT_NO_FLOW && currentState != SprayState::EMERGENCY_HALTED) {
        currentState = SprayState::IDLE_OFF;
    }
}

void SprayController::emergencyHalt() {
    stopSpray();
    currentState = SprayState::EMERGENCY_HALTED;
    Serial.println("[SprayController] EMERGENCY HALT EXECUTED.");
}

SprayState SprayController::getState() {
    return currentState;
}

const char* SprayController::getStateString() {
    switch (currentState) {
        case SprayState::IDLE_OFF: return "IDLE_OFF";
        case SprayState::ACTIVE_SPRAYING: return "ACTIVE_SPRAYING";
        case SprayState::COMPLETED: return "COMPLETED";
        case SprayState::FAULT_NO_FLOW: return "FAULT_NO_FLOW";
        case SprayState::FAULT_OVERTIME: return "FAULT_OVERTIME";
        case SprayState::EMERGENCY_HALTED: return "EMERGENCY_HALTED";
        default: return "UNKNOWN";
    }
}

bool SprayController::isPumpActive() {
    return pumpActive;
}

bool SprayController::isValveOpen() {
    return valveOpen;
}

unsigned long SprayController::getRemainingTimeMs() {
    if (currentState != SprayState::ACTIVE_SPRAYING) return 0;
    unsigned long elapsed = millis() - sprayStartTime;
    return (elapsed >= targetDurationMs) ? 0 : (targetDurationMs - elapsed);
}
