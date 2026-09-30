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

// ==========================================
// 1. PIN DEFINITIONS (Matching docs/pinout.md)
// ==========================================

// L298N Motor Driver Pins
#define PIN_MOTOR_LEFT_PWM      13  // ENA (Hardware LEDC PWM)
#define PIN_MOTOR_LEFT_IN1      12  // IN1
#define PIN_MOTOR_LEFT_IN2      14  // IN2
#define PIN_MOTOR_RIGHT_PWM     23  // ENB (Hardware LEDC PWM)
#define PIN_MOTOR_RIGHT_IN3     19  // IN3
#define PIN_MOTOR_RIGHT_IN4     18  // IN4

// Precision Spray Actuation
#define PIN_SPRAY_PUMP          25  // Low-side N-Channel MOSFET Gate (12V Pump)
#define PIN_SPRAY_VALVE         26  // Low-side N-Channel MOSFET Gate (12V Solenoid Valve)
#define PIN_FLOW_SENSOR         27  // YF-S401 Turbine Pulse Input (Interrupt)

// Environmental & Obstacle Sensors
#define PIN_TRIG                4   // HC-SR04 Ultrasonic Trigger
#define PIN_ECHO                5   // HC-SR04 Ultrasonic Echo (Via 5V->3.3V divider!)
#define PIN_SOIL_ADC            34  // Capacitive Soil Moisture Sensor (ADC1 CH6, Input only)
#define PIN_DHT22               15  // DHT22 One-Wire Data Pin

// I2C Bus for MPU6050 6-Axis IMU
#define PIN_I2C_SDA             21  // MPU6050 SDA
#define PIN_I2C_SCL             22  // MPU6050 SCL

// RS485 Modbus RTU NPK Interface (HardwareSerial 2)
#define RS485_RX2_PIN           16  // ESP32 RX2 <- MAX485 RO Pin
#define RS485_TX2_PIN           17  // ESP32 TX2 -> MAX485 DI Pin
#define RS485_DE_RE_PIN         33  // MAX485 DE & !RE direction pin

// Safety & User Interface
#define PIN_ESTOP_SWITCH        32  // Physical E-stop switch to GND (Active LOW, Internal Pullup)
#define PIN_STATUS_LED          2   // Onboard Blue Status LED
#define PIN_BUZZER              0   // Active Piezo Warning Buzzer

// ==========================================
// 2. TIMING & SAFETY WATCHDOG CONSTANTS
// ==========================================

#define COMM_WATCHDOG_TIMEOUT_MS    1500    // Halts motors if no command within 1500ms
#define MAX_SPRAY_DURATION_MS       6000    // Hard max spray duration limit
#define FLOW_VERIFY_DELAY_MS        600     // Milliseconds after pump start to verify flow
#define MIN_REQUIRED_FLOW_ML_S      2.5f    // Fault if flow < 2.5 mL/s during spray
#define FLOW_PULSES_PER_LITER       5880.0f // YF-S401 calibration factor
#define MIN_OBSTACLE_STOP_CM        25.0f   // Autonomous emergency stop if obstacle closer than 25cm

// Network & WebServer Constants
#define HTTP_PORT                   80
#define WEBSOCKET_PORT              81

// RS485 Modbus NPK Sensor Default Mapping
#define NPK_DEFAULT_SLAVE_ID        0x01
#define NPK_DEFAULT_BAUD            9600
#define NPK_REG_START_ADDR          0x001E  // Holding register 30 (0x001E)
#define NPK_REG_READ_COUNT          3       // Reads Nitrogen, Phosphorus, Potassium

// PWM Parameters for Motor Control
#define PWM_FREQUENCY_HZ            1000
#define PWM_RESOLUTION_BITS         8       // 0 to 255
#define PWM_CHANNEL_LEFT            0
#define PWM_CHANNEL_RIGHT           1
