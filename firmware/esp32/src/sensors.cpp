#if __has_include("sensors.h")
  #include "sensors.h"
#elif __has_include("../include/sensors.h")
  #include "../include/sensors.h"
#endif

SensorReadings SensorManager::latestReadings = {0};
DHT SensorManager::dht(PIN_DHT22, DHT22);
Adafruit_MPU6050 SensorManager::mpu;
bool SensorManager::mpuAvailable = false;

volatile unsigned long SensorManager::flowPulseCount = 0;
unsigned long SensorManager::lastFlowCalcTime = 0;
float SensorManager::currentFlowRateMlS = 0.0f;
float SensorManager::totalMilliliters = 0.0f;

void IRAM_ATTR SensorManager::onFlowSensorPulse() {
    flowPulseCount++;
}

void SensorManager::init() {
    // Ultrasonic GPIOs
    pinMode(PIN_TRIG, OUTPUT);
    pinMode(PIN_ECHO, INPUT);
    digitalWrite(PIN_TRIG, LOW);

    // Soil Moisture ADC
    pinMode(PIN_SOIL_ADC, INPUT);

    // Flow Sensor
    pinMode(PIN_FLOW_SENSOR, INPUT_PULLUP);
    attachInterrupt(digitalPinToInterrupt(PIN_FLOW_SENSOR), onFlowSensorPulse, RISING);

    // DHT22
    dht.begin();

    // MPU6050 I2C
    Wire.begin(PIN_I2C_SDA, PIN_I2C_SCL);
    if (mpu.begin(0x68, &Wire)) {
        mpu.setAccelerometerRange(MPU6050_RANGE_2_G);
        mpu.setGyroRange(MPU6050_RANGE_250_DEG);
        mpu.setFilterBandwidth(MPU6050_BAND_21_HZ);
        mpuAvailable = true;
    } else {
        mpuAvailable = false;
        Serial.println("[SensorManager] MPU6050 not detected on I2C bus (0x68).");
    }

    // RS485 Modbus Serial2
    pinMode(RS485_DE_RE_PIN, OUTPUT);
    digitalWrite(RS485_DE_RE_PIN, LOW); // Receive mode
    Serial2.begin(9600, SERIAL_8N1, RS485_RX2_PIN, RS485_TX2_PIN);

    lastFlowCalcTime = millis();
}

float SensorManager::readUltrasonic() {
    digitalWrite(PIN_TRIG, LOW);
    delayMicroseconds(2);
    digitalWrite(PIN_TRIG, HIGH);
    delayMicroseconds(10);
    digitalWrite(PIN_TRIG, LOW);

    // 25ms timeout corresponds to approx 4 meters
    long duration = pulseIn(PIN_ECHO, HIGH, 25000);
    if (duration <= 0) {
        return -1.0f; // Invalid / Out of range
    }
    // Speed of sound = 0.0343 cm/µs. Distance = (time * 0.0343) / 2
    return (float)duration * 0.0343f / 2.0f;
}

float SensorManager::readSoilMoisture() {
    // 10-sample ADC averaging for noise suppression
    int sum = 0;
    for (int i = 0; i < 10; i++) {
        sum += analogRead(PIN_SOIL_ADC);
        delayMicroseconds(50);
    }
    int raw = sum / 10;

    // Calibration: Air ~3200 ADC (Dry), Water ~1450 ADC (Wet)
    const int ADC_DRY = 3200;
    const int ADC_WET = 1450;
    float moisture = (float)(ADC_DRY - raw) / (float)(ADC_DRY - ADC_WET) * 100.0f;
    return constrain(moisture, 0.0f, 100.0f);
}

EnvironmentData SensorManager::readDHT22() {
    EnvironmentData env;
    float t = dht.readTemperature();
    float h = dht.readHumidity();

    if (isnan(t) || isnan(h)) {
        env.valid = false;
        env.temperature_c = 0.0f;
        env.humidity_pct = 0.0f;
    } else {
        env.valid = true;
        env.temperature_c = t;
        env.humidity_pct = h;
    }
    return env;
}

IMUData SensorManager::readIMU() {
    IMUData data = {0};
    if (!mpuAvailable) {
        data.valid = false;
        return data;
    }

    sensors_event_t a, g, temp;
    if (mpu.getEvent(&a, &g, &temp)) {
        data.valid = true;
        data.accel_x = a.acceleration.x;
        data.accel_y = a.acceleration.y;
        data.accel_z = a.acceleration.z;

        // Calculate pitch and roll angles in degrees
        data.pitch_deg = atan2(-a.acceleration.x, sqrt(a.acceleration.y * a.acceleration.y + a.acceleration.z * a.acceleration.z)) * 57.2957795f;
        data.roll_deg = atan2(a.acceleration.y, a.acceleration.z) * 57.2957795f;
    } else {
        data.valid = false;
    }
    return data;
}

uint16_t SensorManager::calculateCRC16(const uint8_t *buf, int len) {
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

NPKData SensorManager::queryModbusNPK() {
    NPKData result = {0};
    result.valid = false;

    // Modbus RTU Query: Slave 0x01, Function 0x03, Start 0x001E, 3 registers
    uint8_t query[8] = {0x01, 0x03, 0x00, 0x1E, 0x00, 0x03, 0x00, 0x00};
    uint16_t crc = calculateCRC16(query, 6);
    query[6] = crc & 0xFF;         // CRC Low
    query[7] = (crc >> 8) & 0xFF;  // CRC High

    // Clear any stale incoming bytes
    while (Serial2.available()) Serial2.read();

    // Enable RS485 Transmitter (DE/RE = HIGH)
    digitalWrite(RS485_DE_RE_PIN, HIGH);
    delayMicroseconds(50);
    Serial2.write(query, 8);
    Serial2.flush();
    digitalWrite(RS485_DE_RE_PIN, LOW); // Return to Receive mode

    // Wait for 11-byte Modbus response: [Addr, Func, ByteCount, N_H, N_L, P_H, P_L, K_H, K_L, CRC_L, CRC_H]
    uint8_t response[16];
    int bytesReceived = 0;
    unsigned long timeout = millis() + 150;

    while (millis() < timeout && bytesReceived < 11) {
        if (Serial2.available()) {
            response[bytesReceived++] = Serial2.read();
        }
    }

    if (bytesReceived < 11) {
        result.valid = false;
        result.error_message = "RS485 Modbus timeout: Sensor did not reply";
        return result;
    }

    // Verify Slave Address and Function Code
    if (response[0] != 0x01 || response[1] != 0x03 || response[2] != 0x06) {
        result.valid = false;
        result.error_message = "Invalid Modbus response header";
        return result;
    }

    // Verify CRC16
    uint16_t receivedCRC = response[9] | (response[10] << 8);
    uint16_t calculatedCRC = calculateCRC16(response, 9);
    if (receivedCRC != calculatedCRC) {
        result.valid = false;
        result.error_message = "Modbus CRC16 checksum failure";
        return result;
    }

    // Parse Nitrogen, Phosphorus, Potassium (mg/kg)
    result.nitrogen_mg_kg = (response[3] << 8) | response[4];
    result.phosphorus_mg_kg = (response[5] << 8) | response[6];
    result.potassium_mg_kg = (response[7] << 8) | response[8];
    result.valid = true;
    result.error_message = nullptr;
    return result;
}

void SensorManager::update() {
    unsigned long now = millis();
    unsigned long dt = now - lastFlowCalcTime;

    if (dt >= 200) { // Calculate flow rate every 200ms
        noInterrupts();
        unsigned long pulses = flowPulseCount;
        flowPulseCount = 0;
        interrupts();

        // YF-S401 calibration: 5880 pulses per liter = 5.88 pulses per mL
        float mL = (float)pulses / 5.88f;
        currentFlowRateMlS = (mL / (float)dt) * 1000.0f;
        totalMilliliters += mL;
        lastFlowCalcTime = now;
    }

    // Update aggregated readings
    latestReadings.ultrasonic_distance_cm = readUltrasonic();
    latestReadings.ultrasonic_valid = (latestReadings.ultrasonic_distance_cm > 0.0f);

    latestReadings.soil_moisture_pct = readSoilMoisture();
    latestReadings.soil_moisture_valid = true;

    latestReadings.environment = readDHT22();
    latestReadings.imu = readIMU();
    latestReadings.npk = queryModbusNPK();

    latestReadings.flow_rate_ml_s = currentFlowRateMlS;
    latestReadings.total_flow_ml = totalMilliliters;
}

SensorReadings SensorManager::getLatest() {
    return latestReadings;
}

float SensorManager::getFlowRateMlS() {
    return currentFlowRateMlS;
}

float SensorManager::getTotalFlowMl() {
    return totalMilliliters;
}

void SensorManager::resetFlowTotal() {
    totalMilliliters = 0.0f;
}
