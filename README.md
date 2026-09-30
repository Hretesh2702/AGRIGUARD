# AGriGuard — AI-Powered Precision Farming Robot

> **Real Working Prototype System Specification & Operator Manual**  
> *Target Architecture: Laptop Edge AI + External USB Camera + ESP32 Actuation Platform*

AGriGuard is an end-to-end, competition-ready precision farming robot that closes the loop between **real optical AI crop disease detection**, **real RS485 Modbus soil telemetry**, **verified agronomic decision guidance**, **closed-loop farmer approval**, and **real chemical pulse spraying with liquid flow verification**.

---

## 🚫 The Strict Anti-Simulation Rule

This is a **real working hardware project**.
- **No Mock Sensor Data:** NPK, soil moisture, microclimate, ultrasonic distance, and IMU are polled directly from physical sensors.
- **No Fake Camera Feed:** Frames are streamed from an external USB camera via OpenCV.
- **No Fake AI Predictions:** Real HSV foliar segmentation and PyTorch neural inference runs locally on the laptop.
- **No Unverified Sprays:** Pump and solenoid are physically commanded over Wi-Fi and flow confirmation is measured in real-time by the YF-S401 turbine sensor.
- **Honest Disconnected Failures:** If a sensor or bus is unplugged, the system fails honestly (e.g. `"Sensor unavailable"`, `"Camera unavailable"`, `"ESP32 disconnected"`).

---

## 📐 System Architecture

```text
       EXTERNAL USB CAMERA
               │
               ▼
            LAPTOP
      ┌────────────────────────────────────────────────────────┐
      │ • OpenCV Hardware Camera Pipeline (MJPEG)              │
      │ • Real AI Disease Detection & Lesion Quantification     │
      │ • Plant Health Index & Stress Correlation Engine       │
      │ • ICAR/USDA Verified Treatment Decision Engine         │
      │ • Chemical Tank Inventory Management                   │
      │ • React + Vite Glassmorphic Dark-Mode Dashboard        │
      │ • SQLite Real-Time Event & Telemetry Logger            │
      └──────────────────────────┬─────────────────────────────┘
                                 │
                     Wi-Fi (REST & WebSockets)
                                 │
                                 ▼
                     ESP32 REAL-TIME CONTROLLER
      ┌────────────────────────────────────────────────────────┐
      │ • L298N LEDC PWM 4WD Motor Driver                      │
      │ • RS485 Modbus RTU NPK Probe Driver (Hardware Serial2) │
      │ • Capacitive Soil Moisture ADC Driver                  │
      │ • DHT22 Microclimate Temperature & Humidity Driver     │
      │ • HC-SR04 Ultrasonic Distance Sensor Driver           │
      │ • MPU6050 6-DOF IMU I2C Driver                         │
      │ • IRLZ44N MOSFET 12V Diaphragm Pump Actuator           │
      │ • IRLZ44N MOSFET 12V Solenoid Shutoff Valve Actuator   │
      │ • YF-S401 Interrupt-Driven Liquid Flow Sensor          │
      │ • Hardware E-Stop ISR + Comms Loss Watchdogs           │
      └────────────────────────────────────────────────────────┘
```

---

## 📁 Repository Structure

```text
Agriguard/
├── backend/                  # FastAPI real hardware backend
│   ├── ai/                   # OpenCV camera service & PyTorch pathology detector
│   ├── api/                  # Hardware diagnostics & REST routes
│   ├── communication/        # ESP32 HTTP client & Pydantic protocols
│   ├── database/             # SQLite connection manager & schemas
│   ├── sensors/              # Telemetry validation & agronomic correlation
│   ├── services/             # Follow-up reinspection progression evaluator
│   ├── treatment/            # Verified database engine & tank inventory
│   └── main.py               # Master FastAPI application & WebSocket server
│
├── frontend/                 # React + Vite + TypeScript user interface
│   ├── src/
│   │   ├── components/       # CameraView, DiagnosisCard, TelemetryCard,
│   │   │                     # TreatmentCard, RobotControls, FieldHeatmap
│   │   ├── hooks/            # useTelemetry (Live WebSocket connection)
│   │   ├── pages/            # DiagnosticsPage (Section 27 Matrix)
│   │   ├── services/         # api.ts (REST client to backend)
│   │   ├── App.tsx           # Main application coordinator
│   │   ├── index.css         # Glassmorphic dark design tokens
│   │   └── types.ts          # TypeScript interfaces
│   └── dist/                 # Production pre-built assets
│
├── firmware/
│   └── esp32/                # PlatformIO C++ ESP32 firmware
│       ├── include/          # config.h, pinout, drivers, watchdog
│       ├── src/              # motor, sensors, spray, main.cpp
│       └── platformio.ini    # Board & library dependencies
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
├── models/                   # Local PyTorch model weights storage
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

### 3. ESP32 Firmware Build & Upload (PlatformIO)
1. Install [VS Code with PlatformIO IDE](https://platformio.org/) or the PlatformIO Core CLI.
2. Connect your ESP32 board via USB to the laptop.
3. Open `firmware/esp32` and flash the firmware:
```powershell
cd firmware/esp32
pio run --target upload
pio device monitor -b 115200
cd ../..
```

### 4. External USB Camera Setup
1. Plug the external USB camera into a high-speed USB 3.0/2.0 port.
2. Confirm the camera index (typically `0` or `1`) in [config/hardware.yaml](file:///c:/Users/swaya/OneDrive/Documents/Agriguard/config/hardware.yaml).
3. The camera pipeline will auto-detect the video device and stream live frames at 1280x720 @ 25 FPS without synthetic fallbacks.

### 5. RS485 NPK Sensor Wiring & Configuration
1. Connect the NPK probe to the MAX485 TTL-to-RS485 converter:
   - **VCC:** 12V external battery (never power probe from 3.3V!)
   - **GND:** Common battery ground
   - **A (Yellow/Green):** MAX485 A terminal
   - **B (Blue/White):** MAX485 B terminal
2. Connect MAX485 TTL pins to ESP32:
   - **DI (Data In):** GPIO 17 (TX2)
   - **RO (Receiver Out):** GPIO 16 (RX2)
   - **DE & RE (Jumpered):** GPIO 4 (RS485 Flow Control)
   - **VCC:** 3.3V or 5V
   - **GND:** ESP32 GND
3. Set slave ID and register addresses in [config/sensors.yaml](file:///c:/Users/swaya/OneDrive/Documents/Agriguard/config/sensors.yaml).

### 6. Sensor Wiring Checklist
Refer to [docs/pinout.md](file:///c:/Users/swaya/OneDrive/Documents/Agriguard/docs/pinout.md) and [docs/wiring.md](file:///c:/Users/swaya/OneDrive/Documents/Agriguard/docs/wiring.md):
- **Motors (L298N):** IN1=GPIO 13, IN2=GPIO 14, IN3=GPIO 27, IN4=GPIO 26, ENA=GPIO 25, ENB=GPIO 33.
- **HC-SR04:** Trig=GPIO 5, Echo=GPIO 18 (via 1kΩ/2kΩ voltage divider to 3.3V).
- **MPU6050:** SDA=GPIO 21, SCL=GPIO 22.
- **Soil Moisture:** Signal=GPIO 34 (ADC1_CH6).
- **DHT22:** Data=GPIO 4 (with 4.7kΩ pullup).
- **Spray Pump:** MOSFET Gate=GPIO 25.
- **Solenoid Valve:** MOSFET Gate=GPIO 26.
- **Flow Sensor:** Pulse=GPIO 27 (Hardware Interrupt).
- **E-Stop Switch:** NC Contact=GPIO 32 (Internal Pullup).

### 7. Wi-Fi Configuration
The ESP32 broadcasts a private SoftAP network:
- **SSID:** `AgriGuard-Robot`
- **Password:** `AgriGuard2026`
- **Default ESP32 IP:** `192.168.4.1`

Connect the laptop or phone to `AgriGuard-Robot`.

### 8. Start Unified Server
Run the single-command launcher:
```powershell
python run.py
```
This serves the production dashboard, initializes SQLite, starts the WebSocket telemetry broadcaster, and mounts the REST API on `http://localhost:8000`.

---

## 📱 Operating the Robot

1. **Dashboard:** Open `http://localhost:8000` on your laptop or phone.
2. **Diagnostics Page:** Click **Hardware Diagnostics** to view the live Section 27 matrix:
   - ESP32: `CONNECTED / DISCONNECTED`
   - Camera: `CONNECTED / DISCONNECTED`
   - NPK: `CONNECTED / DISCONNECTED`
   - Soil Moisture: `OK / ERROR`
   - Microclimate: `OK / ERROR`
   - Pump: `OFF / ON`
   - Valve: `CLOSED / OPEN`
   - Flow: `0.0 mL/s (NO FLOW)` or live reading
3. **Teleoperation:** Use the tactile D-pad to drive forward, backward, left, or right. Adjust PWM speed (80 to 255).
4. **AI Pathology Scan:**
   - Align camera over crop foliage.
   - Click **Capture & AI Scan**.
   - Review condition (e.g. *Tomato Early Blight*), confidence percentage, and transparent health score.
5. **Farmer Approval Gate (Critical Safety Rule):**
   - The robot will **never** spray automatically.
   - If an actionable pathogen is verified and chemical inventory is available, the **Farmer Approval Gate** activates.
   - Enter operator name and click **FARMER APPROVE & EXECUTE**.
   - Backend issues a signed token (`AUTH-OPERATOR-DEC-TIMESTAMP`).
   - ESP32 opens valve, engages pump, verifies flow sensor pulses (>2.5 mL/s), and cuts off after prescribed duration.
   - Event is permanently recorded to SQLite and chemical volume deducted.

---

## 🧪 Automated Test Suite

AgriGuard includes a complete three-tier test suite:

```powershell
.\.venv\Scripts\pytest.exe tests/test_software_protocol.py tests/test_software_ai.py tests/test_software_treatment.py tests/test_software_database.py tests/test_software_api.py tests/test_hardware_hil.py -v
```

**Results:**
- `test_software_protocol.py`: Pydantic schemas, signed tokens, E-Stop models (4/4 PASSED).
- `test_software_ai.py`: Real leaf segmentation, confidence gating, offline handling (4/4 PASSED).
- `test_software_treatment.py`: Database prescriptions, drought contraindications, tank inventory (5/5 PASSED).
- `test_software_database.py`: SQLite observations, telemetry, spray events, zones (3/3 PASSED).
- `test_software_api.py`: Diagnostics matrix, mobility commands, camera status (5/5 PASSED).
- `test_hardware_hil.py`: ESP32 ping, camera capture, E-Stop trip, End-to-End integration (4/4 PASSED).
- **Total: 25 / 25 PASSED (100%)**

---

## 🛡️ Safety & Fail-Safe Mechanisms

1. **Watchdog Cutoff:** If Wi-Fi communication drops for >1500ms during movement, ESP32 immediately brakes all 4 motors to 0 PWM.
2. **Maximum Spray Timeout:** Hardcoded hardware timer cuts off pump and closes valve after 6000ms regardless of software commands.
3. **Dry-Run Flow Fault:** If pump is commanded ON but flow is <2.5 mL/s after 600ms, the ESP32 trips `FAULT_NO_FLOW` to prevent motor burnout and alert operator.
4. **Hardware E-Stop:** Physical push-button on GPIO 32 triggers an instantaneous hardware interrupt, cutting all PWM drives and MOSFET gates.
5. **Drought Contraindication:** Soil moisture <20% automatically blocks chemical spraying to prevent chemical leaf burn.

---

## 📋 Competition Demonstration Checklist

| Requirement | Implementation Status | Physical Verification |
| :--- | :---: | :---: |
| 4WD Physical Movement | **Implemented** | Bench Tested / Field Verified |
| Wi-Fi Remote Teleoperation | **Implemented** | Verified on Laptop & Phone |
| Real USB Camera Video Stream | **Implemented** | Direct OpenCV Pipe |
| Real AI Crop Disease Inference | **Implemented** | Local PyTorch Pipeline |
| Transparent Plant Health Score | **Implemented** | Explainable 0–100 Formula |
| Drought Contraindication Gate | **Implemented** | Blocks foliar spray if <20% |
| RS485 Modbus RTU NPK Probe | **Implemented** | Hardware Serial2 Driver |
| Capacitive Soil Moisture ADC | **Implemented** | Calibrated 12-bit ADC |
| Microclimate DHT22 Temp/Humidity | **Implemented** | Hardware Digital Bus |
| Ultrasonic Obstacle Detection | **Implemented** | Auto-Throttling <25cm |
| MPU6050 6-DOF IMU | **Implemented** | Pitch & Roll Inclinometer |
| Controlled Treatment Database | **Implemented** | ICAR/USDA Protocol |
| Tank Inventory Tracking | **Implemented** | Volume Accounting |
| Farmer Approval Safety Gate | **Implemented** | Cryptographic Token Gating |
| 12V Diaphragm Pump & Solenoid | **Implemented** | Dual MOSFET Actuation |
| Real YF-S401 Flow Verification | **Implemented** | Hardware Pulse Counter |
| SQLite Audit Logging | **Implemented** | Timestamps on all events |
| Field Heatmap & Zone History | **Implemented** | 24-Grid Visualizer |
| Reinspection Progression Engine | **Implemented** | 4-Tier Progression Matrix |
| Section 27 Diagnostics Matrix | **Implemented** | Live Honest Polling |
