# AGriGuard — AI-Powered Precision Farming Robot

> **Real Working Prototype System Specification, Digital Twin & Operator Manual**  
> *Target Architecture: Laptop Edge AI + External USB Camera + High-Clearance Straddle Platform (ESP32 / Arduino / Sensors)*

AGriGuard is an end-to-end, competition-ready precision farming robot that closes the loop between **real optical AI crop disease detection**, **real RS485 Modbus soil telemetry**, **verified agronomic decision guidance**, **closed-loop farmer approval**, **real chemical pulse spraying with liquid flow verification**, and a **Live 3D Digital Twin** mirroring the physical prototype in real time.

---

## 🚫 The Strict Anti-Simulation Rule

This is a **real working hardware project**:
- **Dual Operational Modes:**
  - `REAL HARDWARE` Mode: Strict physical connectivity over Wi-Fi (SoftAP `192.168.4.1` / Local LAN) or Web Bluetooth (BLE GATT). The dashboard **never** reports connected unless the physical ESP32 actively acknowledges ping heartbeats. If disconnected, telemetry values display honest offline indicators (`--`).
  - `SIMULATION` Mode: Safe bench sandbox for testing AI pathology, telemetry math, and visual twin kinematics without physical hardware powered.
- **No Fake Camera Feed:** Live frames are captured from the external USB camera via OpenCV with manual capture and AI scanning.
- **No Fake AI Predictions:** Real foliar segmentation and local PyTorch neural pathology inference run locally on the laptop.
- **No Unverified Sprays:** Pump and relay are commanded via verified protocols, with liquid delivery confirmed by real-time flow measurement.
- **Fail-Safe Watchdog:** 1500 ms communication watchdog halts all motor movement if connectivity is interrupted.

---

## 🌐 Live 3D Digital Twin (Physical Prototype Mirror)

AgriGuard features a live Three.js 3D Digital Twin built into the primary dashboard that faithfully reproduces the **actual physical rover prototype and components**:

```text
                             [ PHOTOVOLTAIC SOLAR PANEL ]
                                      ┌──────────┐
                     ┌────────────────┴──────────┴────────────────┐
                     │  OPEN WHITE FOAM-BOARD ELECTRONICS TRAY    │
                     │  • Solderless Breadboard & Dupont Ribbons  │
                     │  • ESP32 DevKit (Status Heartbeat LED)     │
                     │  • Arduino Mega / Uno Mainboard            │
                     │  • L298N Motor Driver (Finned Heatsink)    │
                     │  • 5V Songle Blue Relay Module             │
                     │  • 4-Cell Battery Pack & Rocker Switch     │
                     │  • MPU-6050 6-Axis Gyro & HC-05 Bluetooth  │
                     └────────────────┬──────────┬────────────────┘
                                      │          │
         ┌────────────────────────────┴──────────┴────────────────────────────┐
         │               HIGH-CLEARANCE WHITE PVC STRADDLE GANTRY              │
         │  • 4x Tall Vertical PVC Pipe Legs (Crop Row Clearance)             │
         │  • Heavy-Duty Black Zip-Tie Harnesses & Corner Mounts              │
         │  • Front-Facing HC-SR04 Ultrasonic Sensor (Center Lip)             │
         │  • Left-Facing HC-SR04 Ultrasonic Sensor (Left Frame Outward)      │
         │  • Right-Facing HC-SR04 Ultrasonic Sensor (Right Frame Outward)    │
         │  • Wall-Mounted DHT Microclimate Temperature & Humidity Sensor     │
         │  • Suspended Clear Spray Reservoir Bottle & Atomizing Mist Nozzle  │
         │  • 4x DC Geared Motors & Agricultural Rover Wheels (Base Elbows)   │
         └────────────────────────────────────────────────────────────────────┘
```

### Digital Twin Capabilities:
- **Exact Physical Geometry:** High-clearance white PVC tubular frame with 90° elbows and T-junctions, open white sunpack hopper tray, suspended clear reservoir bottle with vinyl tubing, brass atomizing spray nozzle, and rear-mounted solar panel.
- **Straight & Leveled Stance:** The digital rover stands straight, level, and firmly planted on its 4 agricultural wheels on the ground grid.
- **3-Way Multi-Directional Ultrasonic Radar:**
  - **Center Sensor:** Faces **FORWARD** (+Z) at the front bumper lip.
  - **Left Sensor:** Faces outward to the **LEFT** (-X) on the left frame to monitor left crop margins.
  - **Right Sensor:** Faces outward to the **RIGHT** (+X) on the right frame to monitor right crop margins.
  - **Dynamic Range Cones:** Dynamically change color based on proximity (Safe = Emerald Green `>60cm`, Warning = Amber `25–60cm`, Obstacle = Pulsing Red `<25cm`).
- **Kinematic Wheel Rotation:** Wheels smoothly spin forward, reverse, or counter-rotate for differential skid-steering in sync with live movement telemetry.
- **Dynamic Atomizing Spray Mist:** Triggers a 3D particle fountain when the pump and relay are energized.
- **Camera View Presets:**
  - `Isometric`: Complete 3D perspective of the tall straddle rover and crop clearance.
  - `Top (Deck)`: Direct overhead view looking into the tray at the breadboard, ESP32, Arduino, L298N, Songle relay, battery, and wires.
  - `Front (Gantry)`: Front view showcasing high crop clearance, PVC legs, and ultrasonic sensors.
  - `Side (Profile)`: Side profile displaying the wheelbase, suspended spray bottle, and frame geometry.
  - Full interactive **OrbitControls** (pan, tilt, zoom).

---

## 📐 System Architecture

```text
       EXTERNAL USB CAMERA
               │
               ▼
            LAPTOP
      ┌────────────────────────────────────────────────────────┐
      │ • OpenCV Hardware Camera Pipeline (MJPEG)              │
      │ • Real AI Disease Detection & Lesion Quantification    │
      │ • Plant Health Index & Stress Correlation Engine       │
      │ • ICAR/USDA Verified Treatment Decision Engine         │
      │ • Chemical Tank Inventory Management                   │
      │ • React + Three.js + Vite Precision Farming Dashboard  │
      │ • Dual-Transport Connectivity (Wi-Fi SoftAP / BLE)     │
      │ • SQLite Real-Time Event & Telemetry Logger            │
      └──────────────────────────┬─────────────────────────────┘
                                 │
                     Wi-Fi (REST / WS) or Web Bluetooth BLE
                                 │
                                 ▼
                     ESP32 REAL-TIME CONTROLLER
      ┌────────────────────────────────────────────────────────┐
      │ • L298N 4WD Motor Driver (PWM Mobility Control)        │
      │ • 3x HC-SR04 Ultrasonic Ranging (Left / Center / Right)│
      │ • RS485 Modbus RTU NPK Soil Probe Driver (Serial2)     │
      │ • Capacitive Soil Moisture ADC Driver                  │
      │ • DHT22 Microclimate Temperature & Humidity Driver     │
      │ • MPU6050 6-DOF IMU (I2C Inclinometer)                 │
      │ • 5V Relay & MOSFET Diaphragm Spray Pump Actuation     │
      │ • YF-S401 Liquid Flow Turbine Sensor Driver            │
      │ • 1500ms Watchdog & Hardware E-Stop Fail-Safes         │
      └────────────────────────────────────────────────────────┘
```

---

## 📁 Repository Structure

```text
Agriguard/
├── backend/                  # FastAPI real hardware backend
│   ├── ai/                   # OpenCV camera service & PyTorch pathology detector
│   ├── api/                  # Hardware diagnostics & REST routes
│   ├── communication/        # Dual-transport HTTP/BLE client & Pydantic protocols
│   ├── database/             # SQLite connection manager & schemas
│   ├── sensors/              # Telemetry validation & agronomic correlation
│   ├── services/             # Follow-up reinspection progression evaluator
│   ├── treatment/            # Verified database engine & tank inventory
│   └── main.py               # Master FastAPI application & WebSocket server
│
├── frontend/                 # React + Vite + TypeScript user interface
│   ├── src/
│   │   ├── components/       # CameraView, DiagnosisCard, TelemetryCard,
│   │   │                     # TreatmentCard, RobotControls, ConnectPanel, Header
│   │   ├── config/           # hardwareConfig.ts (Dual-transport IP/BLE UUIDs)
│   │   ├── digitalTwin/      # AgriGuardTwin.tsx, RobotGeometry.ts,
│   │   │                     # TwinScene.ts, types.ts (Three.js 3D Rover Twin)
│   │   ├── hooks/            # useTelemetry (Live WebSocket connection)
│   │   ├── pages/            # DiagnosticsPage (Hardware matrix)
│   │   ├── services/         # api.ts, connectionManager.ts, robotTransport.ts
│   │   ├── App.tsx           # Main application coordinator (Dashboard / Remote / Diagnostics)
│   │   ├── index.css         # Glassmorphic dark design tokens
│   │   └── types.ts          # TypeScript interfaces
│   └── dist/                 # Production pre-built assets
│
├── firmware/
│   ├── esp32/                # PlatformIO C++ ESP32 modular firmware
│   │   ├── include/          # wifi_manager.h, ble_manager.h, command_handler.h,
│   │   │                     # motor_controller.h, ultrasonic_manager.h, dht22_manager.h,
│   │   │                     # mpu6050_manager.h, soil_moisture.h, telemetry_manager.h
│   │   ├── src/              # Modular implementations & main.cpp
│   │   └── platformio.ini    # Board & library dependencies
│   └── agriguard_esp32/      # Arduino IDE compatible firmware sketch
│
├── config/
│   ├── hardware.yaml         # Centralized pin assignments, timeouts, PWM
│   ├── sensors.yaml          # Modbus NPK registers, ADC calibrations
│   └── treatment_database.yaml# ICAR/USDA verified disease prescriptions
│
├── docs/
│   ├── architecture.md       # Full hardware-software specifications
│   ├── commissioning.md      # 21-step physical bench bring-up checklist
│   ├── pinout.md             # Complete ESP32 GPIO allocation table
│   ├── protocol.md           # Command & telemetry JSON schemas
│   ├── setup.md              # Detailed toolchain installation guide
│   ├── troubleshooting.md    # Hardware failure modes & remedies
│   └── wiring.md             # Electrical schematic & power distribution
│
├── tests/                    # Level A (Software), Level B (HIL), Level C (E2E)
├── requirements.txt          # Python dependencies
└── run.py                    # Unified single-command launcher
```

---

## 🛠️ Step-by-Step Setup & Commissioning

### 1. Python Environment Setup
Ensure Python 3.11+ is installed. Activate the project virtual environment:
```powershell
# Windows PowerShell:
.\.venv\Scripts\Activate.ps1
```
Install requirements:
```powershell
uv pip install -r requirements.txt --python .venv\Scripts\python.exe
```

### 2. Node.js & Frontend Setup
Ensure Node.js 18+ is installed:
```powershell
cd frontend
npm install
npm run build
cd ..
```

### 3. ESP32 Firmware Build & Upload
Flash the firmware using PlatformIO Core CLI or VS Code:
```powershell
cd firmware/esp32
pio run --target upload
pio device monitor -b 115200
cd ../..
```
*Alternatively, load `firmware/agriguard_esp32/agriguard_esp32.ino` directly in the Arduino IDE.*

### 4. External USB Camera Setup
1. Plug the external USB camera into a high-speed USB 3.0/2.0 port.
2. Confirm the camera index (typically `0` or `1`) in [config/hardware.yaml](file:///c:/Users/swaya/OneDrive/Documents/Agriguard/config/hardware.yaml).
3. The camera pipeline auto-detects the video device and streams live frames at 1280x720 @ 25 FPS without synthetic fallbacks.

### 5. Start Unified Server
Run the single-command launcher:
```powershell
python run.py
```
This serves the production dashboard, initializes SQLite, starts the WebSocket telemetry broadcaster, and mounts the REST API on `http://localhost:8000`.

---

## 📱 Operating the Robot

1. **Dashboard Console (`http://localhost:8000`):**
   - **Robot Hardware Connectivity:** Toggle between `SIMULATION` (safe test sandbox) and `REAL HARDWARE` (Wi-Fi SoftAP `192.168.4.1` or Web Bluetooth BLE pairing).
   - **Live 3D Digital Twin:** View real-time rover kinematics, straight stance, directional ultrasonic radar cones (Left / Center / Right), and switch camera angles (`Isometric`, `Top (Deck)`, `Front (Gantry)`, `Side (Profile)`).
   - **Robot Sensor Status:** Real-time readings for Tri-Zone Ultrasonic Proximity, Capacitive Soil Moisture, DHT22 Microclimate, MPU6050 Orientation, and Spray Actuation status.
2. **Field Remote Console:**
   - Dedicated cockpit view featuring the **Live Camera Inspection View** and **Tactile Robot Controls** D-pad (Forward, Backward, Left, Right, Stop, Speed slider, Emergency STOP).
3. **Hardware Diagnostics Matrix:**
   - Inspect live connection states: ESP32 status, ping latency, camera pipeline, Modbus NPK probe, capacitive soil moisture ADC, microclimate DHT22, pump relay, and liquid flow confirmation.
4. **AI Pathology Scan & Farmer Approval Gate:**
   - Align camera over crop foliage and click **Capture & AI Scan**.
   - Review condition (e.g., *Tomato Early Blight*), confidence percentage, and transparent health score.
   - **Farmer Approval Safety Gate:** The robot will **never** spray unprompted. If an actionable pathogen is verified and chemical inventory is available, enter operator name and click **FARMER APPROVE & EXECUTE**. The backend issues a signed cryptographic token to trigger spray pulse actuation.

---

## 🛡️ Safety & Fail-Safe Mechanisms

1. **Watchdog Cutoff:** If communication drops for >1500ms during movement, the ESP32 immediately brakes all 4 motors.
2. **Maximum Spray Timeout:** Hardcoded hardware timer cuts off the pump after 6000ms regardless of software commands.
3. **Dry-Run Flow Fault:** If the pump is commanded ON but flow is <2.5 mL/s after 600ms, the system trips `FAULT_NO_FLOW` to prevent pump burnout.
4. **Hardware Emergency Stop:** Physical push-button on GPIO 32 triggers an instantaneous hardware interrupt, halting all PWM drives and relay gates.
5. **Drought Contraindication:** Soil moisture <20% automatically blocks chemical spraying to prevent chemical leaf burn.

---

## 📋 Competition Demonstration Checklist

| Feature | Implementation Status | Physical / Architectural Verification |
| :--- | :---: | :---: |
| High-Clearance Straddle Chassis | **Implemented** | White PVC tubular frame with crop row clearance |
| Open Foam-Board Tray & Electronics | **Implemented** | Sunpack tray with breadboard, ESP32, Arduino, L298N, Relay |
| Live 3D Digital Twin | **Implemented** | Three.js interactive twin with view presets & HUD |
| Directional Ultrasonic Radar | **Implemented** | Left (-X), Center (+Z), Right (+X) obstacle cones |
| Dual-Transport Hardware Connectivity | **Implemented** | Wi-Fi SoftAP (`192.168.4.1`) & Web Bluetooth BLE GATT |
| 4WD Physical Mobility | **Implemented** | L298N H-Bridge PWM drive with skid steering |
| Real USB Camera Video Stream | **Implemented** | Direct OpenCV hardware pipe |
| Real AI Crop Disease Inference | **Implemented** | Local PyTorch neural pathology pipeline |
| Transparent Plant Health Score | **Implemented** | Explainable 0–100 formula |
| Farmer Approval Safety Gate | **Implemented** | Cryptographic token gating before spraying |
| Tri-Zone Ultrasonic Proximity | **Implemented** | Front, Left, and Right obstacle collision avoidance |
| Microclimate DHT22 & Soil Moisture | **Implemented** | Hardware digital bus & calibrated ADC |
| RS485 Modbus RTU NPK Probe | **Implemented** | Hardware Serial2 driver |
| Section 27 Diagnostics Matrix | **Implemented** | Real-time honest polling across all subsystems |
