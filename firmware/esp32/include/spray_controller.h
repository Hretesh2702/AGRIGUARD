#pragma once

#include <Arduino.h>
#include "config.h"

enum class SprayState {
    IDLE_OFF,
    ACTIVE_SPRAYING,
    COMPLETED,
    FAULT_NO_FLOW,
    FAULT_OVERTIME,
    EMERGENCY_HALTED
};

class SprayController {
public:
    static void init();
    static void update();
    static bool startSpray(unsigned long durationMs, const char* approvalToken);
    static void stopSpray();
    static void emergencyHalt();

    static SprayState getState();
    static const char* getStateString();
    static bool isPumpActive();
    static bool isValveOpen();
    static unsigned long getRemainingTimeMs();

private:
    static SprayState currentState;
    static unsigned long sprayStartTime;
    static unsigned long targetDurationMs;
    static bool pumpActive;
    static bool valveOpen;
    static bool flowVerified;
    static unsigned long flowCheckStartTime;
};
