#if __has_include("mpu6050_manager.h")
  #include "mpu6050_manager.h"
#elif __has_include("../include/mpu6050_manager.h")
  #include "../include/mpu6050_manager.h"
#endif

MPU6050Data MPU6050Manager::latest = { 0.03f, 0.12f, 0.98f, 1.2f, -0.8f, 0.5f, 1.2f, -0.8f, "LEVEL", false };
bool MPU6050Manager::available = false;
unsigned long MPU6050Manager::lastSampleMs = 0;

void MPU6050Manager::init() {
    Wire.begin(PIN_I2C_SDA, PIN_I2C_SCL);
    Wire.beginTransmission(MPU6050_I2C_ADDR);
    Wire.write(0x6B); // PWR_MGMT_1 register
    Wire.write(0x00); // Wake up MPU-6050
    if (Wire.endTransmission() == 0) {
        available = true;
        latest.valid = true;
        Serial.println("[MPU6050] Initialized successfully on I2C address 0x68.");
    } else {
        available = false;
        latest.valid = false;
        Serial.println("[MPU6050] Not detected on I2C bus.");
    }
}

void MPU6050Manager::update() {
    if (!available) return;

    unsigned long now = millis();
    if (now - lastSampleMs < 50) return; // 20 Hz IMU update
    lastSampleMs = now;

    Wire.beginTransmission(MPU6050_I2C_ADDR);
    Wire.write(0x3B); // Starting register for accelerometer readings
    if (Wire.endTransmission(false) != 0) return;

    Wire.requestFrom((uint16_t)MPU6050_I2C_ADDR, (size_t)14, true);
    if (Wire.available() >= 14) {
        int16_t ax = Wire.read() << 8 | Wire.read();
        int16_t ay = Wire.read() << 8 | Wire.read();
        int16_t az = Wire.read() << 8 | Wire.read();
        Wire.read(); Wire.read(); // Raw temp discard
        int16_t gx = Wire.read() << 8 | Wire.read();
        int16_t gy = Wire.read() << 8 | Wire.read();
        int16_t gz = Wire.read() << 8 | Wire.read();

        latest.accel_x = (float)ax / 16384.0f;
        latest.accel_y = (float)ay / 16384.0f;
        latest.accel_z = (float)az / 16384.0f;
        latest.gyro_x = (float)gx / 131.0f;
        latest.gyro_y = (float)gy / 131.0f;
        latest.gyro_z = (float)gz / 131.0f;

        float pitch = atan2(-latest.accel_x, sqrt(latest.accel_y * latest.accel_y + latest.accel_z * latest.accel_z)) * 57.2957795f;
        float roll = atan2(latest.accel_y, latest.accel_z) * 57.2957795f;

        latest.pitch_deg = pitch;
        latest.roll_deg = roll;
        latest.tilt_status = (abs(pitch) < 5.0f && abs(roll) < 5.0f) ? "LEVEL" : "TILTED";
        latest.valid = true;
    }
}

MPU6050Data MPU6050Manager::getReadings() { return latest; }
bool MPU6050Manager::isAvailable() { return available; }
