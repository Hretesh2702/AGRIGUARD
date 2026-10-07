#pragma once
#if __has_include(<Arduino.h>)
  #include <Arduino.h>
#elif __has_include("../../include/esp32_ide_stubs.h")
  #include "../../include/esp32_ide_stubs.h"
#endif

#include "config.h"

struct SoilMoistureData {
    float percentage;
    int raw_adc;
    const char* status; // "DRY", "NORMAL", "WET"
    bool valid;
};

class SoilMoistureManager {
public:
    static void init();
    static void update();
    static SoilMoistureData getReadings();
    static float readMoisturePercent();
    static int readRawADC();

private:
    static SoilMoistureData latest;
    static unsigned long lastSampleMs;
    static const int ADC_DRY = 3200;
    static const int ADC_WET = 1450;
};
