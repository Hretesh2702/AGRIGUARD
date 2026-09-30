# AgriGuard — System Architecture

## 1. Purpose

AgriGuard is a competition-focused prototype of an AI-powered precision farming robot. It inspects crops with an external camera, combines visual information with soil/environment readings, detects likely crop problems, recommends a verified treatment, keeps the farmer in the approval loop, and can activate a targeted spraying mechanism.

The prototype deliberately keeps heavy AI processing on an existing laptop and uses an ESP32 as the real-time hardware controller. This keeps the prototype inexpensive and achievable without changing the core product concept.

## 2. Architecture Principles

1. **Laptop for intelligence, ESP32 for real-time control.**
2. **Farmer approval before chemical-actuation commands.**
3. **AI diagnosis is advisory, not a substitute for verified agricultural guidance.**
4. **Prototype first: reliable end-to-end workflow beats advanced but unstable features.**
5. **Every module must be testable independently.**
6. **The architecture should be expandable toward autonomous navigation and edge AI later.**

## 3. High-Level Architecture

```text
                        ┌─────────────────────────┐
                        │     Farmer / User       │
                        │ Phone or Laptop Browser  │
                        └────────────┬────────────┘
                                     │ Wi-Fi
                                     ▼
┌──────────────────────┐     ┌──────────────────────────┐
│ External RGB Camera  │────►│ Laptop / AI + Software   │
│ Existing Camera      │ USB │                          │
└──────────────────────┘     │ Image Processing         │
                             │ Disease Detection        │
┌──────────────────────┐     │ Severity / Health Score  │
│ Soil / Field Sensors │────►│ Treatment Decision       │
│ NPK, Moisture, Temp, │     │ Inventory Check          │
│ Humidity, IMU/US     │     │ Dashboard + Records      │
└──────────┬───────────┘     └────────────┬─────────────┘
           │                              │ Wi-Fi Commands / Status
           ▼                              ▼
                 ┌─────────────────────────────────┐
                 │             ESP32               │
                 │      Hardware Control Layer     │
                 │                                 │
                 │ Sensors → Motors → Pump/Valve  │
                 └───────┬──────────────┬──────────┘
                         │              │
                  Motor Driver      Spray Control
                         │              │
                         ▼              ▼
                    4WD Drive      Pump → Valve → Nozzle
```

## 4. Hardware Layers

### 4.1 Mobility

- 4WD chassis
- Four geared DC motors
- Four wheels
- Motor driver (L298N class for small prototype motors, or a suitably rated alternative)

The motor driver isolates the ESP32 GPIO from motor current and provides direction control.

### 4.2 Main Controller

**ESP32** is responsible for:

- Wi-Fi communication
- Motor-control commands
- Reading simple sensors
- NPK RS485 communication
- Pump switching
- Solenoid-valve switching
- Flow-sensor input
- Safety/status outputs

### 4.3 Crop/Soil Sensing

- External RGB camera — image input to laptop
- NPK soil sensor — N/P/K contextual readings
- Capacitive soil-moisture sensor — relative soil moisture
- DHT22 or BME280 — temperature/humidity (and pressure with BME280)
- MPU6050 — motion/orientation information
- HC-SR04 — basic obstacle-distance detection

### 4.4 Spraying

```text
Tank → Pump → Filter/Tube → Solenoid Valve → Nozzle
```

The ESP32 controls the pump and valve through a suitably rated MOSFET/driver or relay interface. A flow sensor may be used to detect whether liquid is actually moving.

### 4.5 Power

Prototype power architecture:

```text
Battery
  ↓
Fuse
  ↓
Main Switch / Emergency Stop
  ├── Motor supply (according to actual motor rating)
  ├── Pump/Valve supply (according to actual ratings)
  └── Buck Converter → 5V/3.3V electronics
```

Never assume every component can be connected directly to the battery. Verify voltage/current requirements for the exact purchased parts.

## 5. Software Architecture

### 5.1 AI Layer

```text
Camera Frame
   ↓
Image Preprocessing
   ↓
Crop/Plant ROI
   ↓
Disease / Stress Model
   ↓
Class + Confidence + Severity
   ↓
Plant Health Score
```

The model should support an **unknown / low-confidence** response so that uncertain images do not automatically trigger treatment recommendations.

### 5.2 Sensor Fusion Layer

```text
Disease Vision Result
          +
NPK
          +
Soil Moisture
          +
Temperature / Humidity
          ↓
Crop Health / Context Engine
```

The sensor data is supporting context. It should not be treated as laboratory-grade soil analysis unless the exact sensor and calibration process justify that claim.

### 5.3 Treatment Decision Layer

```text
Crop + Disease + Severity + Context
                 ↓
Verified Treatment Knowledge Base
                 ↓
Treatment Options
                 ↓
Inventory Availability Check
                 ↓
Farmer Approval
                 ↓
Spray Command
```

The treatment engine must use predefined/verified agricultural guidance. A generic language model should not invent pesticide instructions.

### 5.4 Robot Command Layer

Suggested command categories:

- `MOVE_FORWARD`
- `MOVE_BACKWARD`
- `TURN_LEFT`
- `TURN_RIGHT`
- `STOP`
- `SET_SPEED`
- `SPRAY_START`
- `SPRAY_STOP`
- `READ_STATUS`
- `READ_SENSOR`
- `EMERGENCY_STOP`

### 5.5 Data Layer

For the prototype, SQLite or JSON is sufficient.

Recommended entities:

- `plants`
- `observations`
- `sensor_readings`
- `disease_results`
- `treatments`
- `inventory`
- `spray_events`
- `robot_events`

## 6. Communication Architecture

### Prototype choice

Use **Wi-Fi** because the ESP32 already supports it and no additional radio transmitter is required.

```text
Phone/Laptop Browser
        ↕ HTTP/WebSocket
      Laptop App
        ↕ Wi-Fi
       ESP32
        ↕ GPIO/UART/I2C
     Hardware
```

For very early testing, the dashboard can also send commands directly to an ESP32 web server.

## 7. NPK Communication

For a common RS485 NPK sensor:

```text
NPK Sensor
   │ RS485 / Modbus RTU
   ▼
RS485-to-TTL Transceiver
   │ UART
   ▼
ESP32
   │ Wi-Fi
   ▼
Laptop
```

The exact baud rate, slave address, register map, supply voltage, and transceiver wiring must be taken from the exact sensor datasheet.

## 8. Safety Architecture

The system should fail safe:

- Emergency stop must physically/locally stop robot motion and hazardous actuation.
- Loss of Wi-Fi should cause the robot to stop or enter a defined safe state.
- Spray should default to **OFF**.
- A spray command must require an explicit approved action.
- Pump and valve status should be visible.
- Development testing should use water or another safe test liquid.

## 9. Future Architecture

The laptop can later be replaced by an edge AI computer without changing the overall logical flow:

```text
Prototype: Camera → Laptop → ESP32 → Robot

Future:    Camera → Edge AI Computer → ESP32 → Robot
```

Future additions can include autonomous navigation, GPS/RTK mapping, thermal/multispectral sensing, predictive risk mapping, follow-up verification, and field-scale analytics.
