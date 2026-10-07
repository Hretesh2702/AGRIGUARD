#pragma once
#if __has_include(<Arduino.h>)
  #include <Arduino.h>
  #include <ArduinoJson.h>
#elif __has_include("../../include/esp32_ide_stubs.h")
  #include "../../include/esp32_ide_stubs.h"
#endif

class CommandHandler {
public:
    static void execute(StaticJsonDocument<512>& doc, StaticJsonDocument<512>& resp, int& httpCode);
    static String executeRawJSON(const char* jsonInput);
};
