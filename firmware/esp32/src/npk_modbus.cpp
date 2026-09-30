#if __has_include("npk_modbus.h")
  #include "npk_modbus.h"
#elif __has_include("../include/npk_modbus.h")
  #include "../include/npk_modbus.h"
#endif

uint8_t NPKModbusDriver::_slaveId = NPK_DEFAULT_SLAVE_ID;
uint32_t NPKModbusDriver::_baudRate = NPK_DEFAULT_BAUD;
uint16_t NPKModbusDriver::_regStart = NPK_REG_START_ADDR;
uint16_t NPKModbusDriver::_regCount = NPK_REG_READ_COUNT;
NPKResult NPKModbusDriver::_latestResult = {false, 0, 0, 0, "Not initialized", 0};
bool NPKModbusDriver::_initialized = false;

void NPKModbusDriver::init(uint8_t slaveId, uint32_t baudRate, uint16_t regStart, uint16_t regCount) {
    _slaveId = slaveId;
    _baudRate = baudRate;
    _regStart = regStart;
    _regCount = regCount;

    pinMode(RS485_DE_RE_PIN, OUTPUT);
    digitalWrite(RS485_DE_RE_PIN, LOW); // Receive mode by default

    Serial2.begin(_baudRate, SERIAL_8N1, RS485_RX2_PIN, RS485_TX2_PIN);
    _initialized = true;

    Serial.printf("[NPK Modbus] Driver initialized: Slave=0x%02X, Baud=%u, Reg=0x%04X, Count=%u\n",
                  _slaveId, _baudRate, _regStart, _regCount);
}

void NPKModbusDriver::configureRegisters(uint8_t slaveId, uint16_t regStart, uint16_t regCount) {
    _slaveId = slaveId;
    _regStart = regStart;
    _regCount = regCount;
}

uint16_t NPKModbusDriver::calculateCRC16(const uint8_t *buf, int len) {
    uint16_t crc = 0xFFFF;
    for (int pos = 0; pos < len; pos++) {
        crc ^= (uint16_t)buf[pos];
        for (int i = 8; i != 0; i--) {
            if ((crc & 0x0001) != 0) {
                crc >>= 1;
                crc ^= 0xA001;
            } else {
                crc >>= 1;
            }
        }
    }
    return crc;
}

NPKResult NPKModbusDriver::read() {
    NPKResult result;
    result.valid = false;
    result.nitrogen_mg_kg = 0;
    result.phosphorus_mg_kg = 0;
    result.potassium_mg_kg = 0;
    result.last_read_time = millis();

    if (!_initialized) {
        result.error_message = "NPK driver not initialized";
        _latestResult = result;
        return result;
    }

    // Build Modbus RTU Read Holding Registers Frame (Function 0x03)
    uint8_t query[8];
    query[0] = _slaveId;
    query[1] = 0x03;                    // Function code: Read Holding Registers
    query[2] = (_regStart >> 8) & 0xFF; // Start address High
    query[3] = _regStart & 0xFF;        // Start address Low
    query[4] = (_regCount >> 8) & 0xFF; // Number of registers High
    query[5] = _regCount & 0xFF;        // Number of registers Low

    uint16_t crc = calculateCRC16(query, 6);
    query[6] = crc & 0xFF;              // CRC Low
    query[7] = (crc >> 8) & 0xFF;       // CRC High

    // Flush any stale buffer
    while (Serial2.available()) Serial2.read();

    // Enable RS485 Transmitter (DE/RE = HIGH)
    digitalWrite(RS485_DE_RE_PIN, HIGH);
    delayMicroseconds(60);
    Serial2.write(query, 8);
    Serial2.flush();
    digitalWrite(RS485_DE_RE_PIN, LOW); // Return to Receive mode

    // Expected response length: 5 + (2 * regCount) = 11 bytes for 3 registers
    int expectedBytes = 5 + (2 * _regCount);
    uint8_t response[32];
    int bytesReceived = 0;
    unsigned long timeout = millis() + 200;

    while (millis() < timeout && bytesReceived < expectedBytes) {
        if (Serial2.available()) {
            response[bytesReceived++] = Serial2.read();
        }
    }

    if (bytesReceived < expectedBytes) {
        result.valid = false;
        result.error_message = "RS485 Modbus timeout: Sensor did not reply";
        _latestResult = result;
        return result;
    }

    // Validate slave ID and function code
    if (response[0] != _slaveId || response[1] != 0x03 || response[2] != (_regCount * 2)) {
        result.valid = false;
        result.error_message = "Invalid Modbus response frame header";
        _latestResult = result;
        return result;
    }

    // Verify CRC
    uint16_t receivedCRC = response[expectedBytes - 2] | (response[expectedBytes - 1] << 8);
    uint16_t calculatedCRC = calculateCRC16(response, expectedBytes - 2);
    if (receivedCRC != calculatedCRC) {
        result.valid = false;
        result.error_message = "Modbus CRC16 checksum mismatch";
        _latestResult = result;
        return result;
    }

    // Parse registers (big-endian 16-bit)
    result.nitrogen_mg_kg = (response[3] << 8) | response[4];
    result.phosphorus_mg_kg = (response[5] << 8) | response[6];
    result.potassium_mg_kg = (response[7] << 8) | response[8];
    result.valid = true;
    result.error_message = nullptr;

    _latestResult = result;
    return result;
}

bool NPKModbusDriver::isAvailable() {
    return _latestResult.valid;
}
