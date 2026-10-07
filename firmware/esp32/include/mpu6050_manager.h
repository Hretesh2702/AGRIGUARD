#pragma once
#if __has_include(<Arduino.h>)
  #include <Arduino.h>
  #include <Wire.h>
#elif __has_include("../../include/esp32_ide_stubs.h")
  #include "../../include/esp32_ide_stubs.h"
#endif

#include "config.h"

struct MPU6050Data {
    float accel_x;
    float accel_y;
    float accel_z;
    float gyro_x;
    float gyro_y;
    float gyro_z;
    float pitch_deg;
    float roll_deg;
    const char* tilt_status; // "LEVEL" or "TILTED"
    bool valid;
};

class MPU6050Manager {
public:
    static void init();
    static void update();
    static MPU6050Data getReadings();
    static bool isAvailable();

private:
    static MPU6050Data latest;
    static bool available;
    static unsigned long lastSampleMs;
};
