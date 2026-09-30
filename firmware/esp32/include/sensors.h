#if __has_include(<Arduino.h>)
  #include <Arduino.h>
  #include <Wire.h>
  #include <DHT.h>
  #include <Adafruit_MPU6050.h>
  #include <Adafruit_Sensor.h>
#elif __has_include("../../include/esp32_ide_stubs.h")
  #include "../../include/esp32_ide_stubs.h"
#endif

#if __has_include("config.h")
  #include "config.h"
#elif __has_include("../include/config.h")
  #include "../include/config.h"
#endif

#if __has_include("npk_modbus.h")
  #include "npk_modbus.h"
#elif __has_include("../include/npk_modbus.h")
  #include "../include/npk_modbus.h"
#endif

struct NPKData {
    bool valid;
    uint16_t nitrogen_mg_kg;
    uint16_t phosphorus_mg_kg;
    uint16_t potassium_mg_kg;
    const char* error_message;
};

struct IMUData {
    bool valid;
    float accel_x;
    float accel_y;
    float accel_z;
    float pitch_deg;
    float roll_deg;
};

struct EnvironmentData {
    bool valid;
    float temperature_c;
    float humidity_pct;
};

struct SensorReadings {
    float ultrasonic_distance_cm;
    bool ultrasonic_valid;

    float soil_moisture_pct;
    bool soil_moisture_valid;

    EnvironmentData environment;
    IMUData imu;
    NPKData npk;

    float flow_rate_ml_s;
    float total_flow_ml;
};

class SensorManager {
public:
    static void init();
    static void update();
    static SensorReadings getLatest();

    // Individual sensor pollers
    static float readUltrasonic();
    static float readSoilMoisture();
    static EnvironmentData readDHT22();
    static IMUData readIMU();
    static NPKData queryModbusNPK();

    // Flow sensor pulse measurement
    static void IRAM_ATTR onFlowSensorPulse();
    static float getFlowRateMlS();
    static float getTotalFlowMl();
    static void resetFlowTotal();

private:
    static SensorReadings latestReadings;
    static DHT dht;
    static Adafruit_MPU6050 mpu;
    static bool mpuAvailable;

    // Flow measurement variables
    static volatile unsigned long flowPulseCount;
    static unsigned long lastFlowCalcTime;
    static float currentFlowRateMlS;
    static float totalMilliliters;

    // Modbus CRC16 Calculation
    static uint16_t calculateCRC16(const uint8_t *buf, int len);
};
