#pragma once
#if __has_include(<Arduino.h>)
  #include <Arduino.h>
  #include <DHT.h>
#elif __has_include("../../include/esp32_ide_stubs.h")
  #include "../../include/esp32_ide_stubs.h"
#endif

#include "config.h"

struct DHT22Data {
    float temperature;
    float humidity;
    bool valid;
};

class DHT22Manager {
public:
    static void init();
    static void update();
    static DHT22Data getReadings();
    static float getTemperature();
    static float getHumidity();

private:
    static DHT22Data latest;
    static unsigned long lastSampleMs;
#if __has_include(<DHT.h>)
    static DHT dht;
#endif
};
