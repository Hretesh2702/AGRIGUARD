#pragma once
#if __has_include(<Arduino.h>)
  #include <Arduino.h>
#elif __has_include("../../include/esp32_ide_stubs.h")
  #include "../../include/esp32_ide_stubs.h"
#endif

#include "config.h"

struct UltrasonicReadings {
    float left;
    float center;
    float right;
    float min_distance;
    bool obstacle_detected;
    bool center_obstacle;
    const char* obstacle_status; // "SAFE", "WARNING", "OBSTACLE"
};

class UltrasonicManager {
public:
    static void init();
    static void update();
    static UltrasonicReadings getReadings();
    static float readSensorCm(int trigPin, int echoPin);

    static float getLeftCm();
    static float getCenterCm();
    static float getRightCm();
    static bool isObstacleDetected();

private:
    static UltrasonicReadings latest;
    static unsigned long lastMeasureMs;
};
