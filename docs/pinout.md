# AgriGuard — ESP32 Physical Pinout & GPIO Allocation

This document specifies the exact physical GPIO mappings for the ESP32-WROOM-32 microcontroller on the AgriGuard robot platform.

## GPIO Allocation Table

| GPIO Pin | Signal Name | Device / Interface | Voltage Level | Direction | Hardware Notes & Strapping Pin Considerations |
|---|---|---|---|---|---|
| **GPIO 13** | `MOTOR_LEFT_PWM` | L298N Motor Driver ENA | 3.3V (LEDC PWM) | Output | Hardware LEDC Channel 0, 1 kHz PWM speed control |
| **GPIO 12** | `MOTOR_LEFT_IN1` | L298N Motor Driver IN1 | 3.3V Logic | Output | Direction control for left geared motors. *Strapping Pin:* Must not be pulled high during boot (boot voltage select). Safe with L298N logic input. |
| **GPIO 14** | `MOTOR_LEFT_IN2` | L298N Motor Driver IN2 | 3.3V Logic | Output | Direction control for left geared motors. |
| **GPIO 23** | `MOTOR_RIGHT_PWM`| L298N Motor Driver ENB | 3.3V (LEDC PWM) | Output | Hardware LEDC Channel 1, 1 kHz PWM speed control |
| **GPIO 19** | `MOTOR_RIGHT_IN3`| L298N Motor Driver IN3 | 3.3V Logic | Output | Direction control for right geared motors. |
| **GPIO 18** | `MOTOR_RIGHT_IN4`| L298N Motor Driver IN4 | 3.3V Logic | Output | Direction control for right geared motors. |
| **GPIO 25** | `PIN_SPRAY_PUMP` | 12V Pump MOSFET Gate | 3.3V Logic | Output | Active HIGH gates low-side N-Channel Logic MOSFET (e.g. IRLZ44N) or Optocoupled Relay. Defaults LOW on boot. |
| **GPIO 26** | `PIN_SPRAY_VALVE`| 12V Solenoid Valve Gate| 3.3V Logic | Output | Active HIGH gates Solenoid MOSFET/Relay. Defaults LOW on boot. Flyback diode (1N4007) across solenoid coil mandatory! |
| **GPIO 27** | `PIN_FLOW_SENSOR`| YF-S401 Flow Sensor | 3.3V Logic (Internal Pullup) | Input (Interrupt) | Pulse counter interrupt (`IRAM_ATTR`). Sensor VCC powered from 5V with 10k/20k voltage divider to protect GPIO. |
| **GPIO 4**  | `PIN_TRIG`       | HC-SR04 Ultrasonic | 3.3V Logic | Output | 10µs trigger pulse. |
| **GPIO 5**  | `PIN_ECHO`       | HC-SR04 Ultrasonic | 3.3V Logic (from 5V divider) | Input | Echo pulse width. **CRITICAL:** Use 1kΩ + 2kΩ voltage divider from HC-SR04 5V Echo pin to ESP32 3.3V pin. |
| **GPIO 34** | `PIN_SOIL_ADC`   | Capacitive Soil Moisture| 0 - 3.3V Analog | Input (ADC1 CH6) | Analog voltage representing volumetric moisture. GPIO 34 is an Input-Only pin with no internal pullup. |
| **GPIO 15** | `PIN_DHT22`      | DHT22 Temp / Humidity | 3.3V Logic | Bidirectional (One-Wire) | 4.7kΩ external pullup resistor to 3.3V required. |
| **GPIO 21** | `PIN_I2C_SDA`    | MPU6050 6-Axis IMU | 3.3V I2C Data | Bidirectional | Hardware I2C SDA (Wire). 4.7kΩ pullups to 3.3V. |
| **GPIO 22** | `PIN_I2C_SCL`    | MPU6050 6-Axis IMU | 3.3V I2C Clock | Output | Hardware I2C SCL (Wire). |
| **GPIO 16** | `RS485_RX2`      | MAX485 RO Pin | 3.3V Logic | Input | HardwareSerial(2) RX. Connected to MAX485 Receiver Output. |
| **GPIO 17** | `RS485_TX2`      | MAX485 DI Pin | 3.3V Logic | Output | HardwareSerial(2) TX. Connected to MAX485 Driver Input. |
| **GPIO 33** | `RS485_DE_RE`    | MAX485 DE & !RE Pins| 3.3V Logic | Output | Transceiver direction control: HIGH = Transmit mode, LOW = Receive mode. |
| **GPIO 32** | `PIN_ESTOP`      | Emergency Stop Switch | 3.3V (Internal Pullup) | Input (Active LOW) | Physical Mushroom E-stop switch tied to GND. When pressed, contact opens or pulls pin LOW, instantly tripping fail-safe. |
| **GPIO 2**  | `PIN_STATUS_LED` | Built-in Blue LED | 3.3V Logic | Output | Heartbeat blink and error flashing. *Strapping Pin:* Must not be pulled high by external circuitry during boot. |
| **GPIO 0**  | `PIN_BUZZER`     | Active 5V Buzzer Gate| 3.3V Logic | Output | Warning beeps on spray initiation and obstruction alerts. *Strapping Pin:* Connected to boot button; stays floating during operation. |

---

## Power Distribution & Common Ground Rule

1. **Common Ground (GND):**
   The ESP32 GND, 12V Battery GND, Buck Converter GND, L298N GND, and MAX485 GND **MUST ALL BE TIED TO A COMMON SYSTEM GROUND**. Failing to connect common ground will result in floating signals, erratic motor behavior, and Modbus communication errors.
2. **Logic Power:**
   The ESP32 is powered with regulated **5.0V** to its `VIN` pin from a high-efficiency DC-DC Buck Converter (12V -> 5V 3A).
3. **Actuator Power:**
   The 12V pump, 12V solenoid valve, and L298N motor supply run directly from the fused 12V main battery line.
