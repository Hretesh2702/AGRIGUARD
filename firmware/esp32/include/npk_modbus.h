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

struct NPKResult {
    bool valid;
    uint16_t nitrogen_mg_kg;
    uint16_t phosphorus_mg_kg;
    uint16_t potassium_mg_kg;
    const char* error_message;
    unsigned long last_read_time;
};

class NPKModbusDriver {
public:
    static void init(
        uint8_t slaveId = NPK_DEFAULT_SLAVE_ID,
        uint32_t baudRate = NPK_DEFAULT_BAUD,
        uint16_t regStart = NPK_REG_START_ADDR,
        uint16_t regCount = NPK_REG_READ_COUNT
    );

    static NPKResult read();
    static uint16_t calculateCRC16(const uint8_t *buf, int len);
    static void configureRegisters(uint8_t slaveId, uint16_t regStart, uint16_t regCount);
    static bool isAvailable();

private:
    static uint8_t _slaveId;
    static uint32_t _baudRate;
    static uint16_t _regStart;
    static uint16_t _regCount;
    static NPKResult _latestResult;
    static bool _initialized;
};
