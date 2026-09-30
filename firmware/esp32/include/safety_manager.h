#pragma once
#if __has_include(<Arduino.h>)
  #include <Arduino.h>
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

enum class SafetyState {
    NOMINAL,
    OBSTACLE_HALTED,
    WATCHDOG_TIMEOUT,
    ESTOP_ACTIVE
};

class SafetyManager {
public:
    static void init();
    static void update(float ultrasonicDistanceCm, bool isMovingForward);

    // Watchdog
    static void feedWatchdog();
    static bool isWatchdogTripped();
    static unsigned long getWatchdogTimeoutMs();
    static void setWatchdogTimeoutMs(unsigned long timeoutMs);

    // Emergency Stop
    static void triggerSoftwareEStop();
    static bool resetEStop();
    static bool isEStopActive();
    static bool isPhysicalEStopDepressed();

    // Obstacle Safety
    static bool isObstacleDetected();
    static float getLastObstacleDistance();

    // General Status
    static SafetyState getState();
    static const char* getStateString();

private:
    static unsigned long _lastCommandTime;
    static unsigned long _watchdogTimeoutMs;
    static bool _estopLatched;
    static bool _watchdogTripped;
    static bool _obstacleDetected;
    static float _lastObstacleDistance;
    static SafetyState _currentState;

    static void executeHardwareShutdown(const char* reason);
};
