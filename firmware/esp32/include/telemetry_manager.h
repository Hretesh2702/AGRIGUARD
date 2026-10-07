#pragma once
#if __has_include(<Arduino.h>)
  #include <Arduino.h>
  #include <ArduinoJson.h>
#elif __has_include("../../include/esp32_ide_stubs.h")
  #include "../../include/esp32_ide_stubs.h"
#endif

#include "config.h"

class TelemetryManager {
public:
    static void init();
    static float readBatteryVoltage();
    static void buildTelemetryDocument(StaticJsonDocument<1024>& doc);
    static String getTelemetryJSONString();
};
