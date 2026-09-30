# AgriGuard — Development Phases

## 1. Delivery Strategy

The project is optimized for a **10-day competition prototype window**. Work is organized around proving the end-to-end loop first, then adding smart features only after the base system is stable.

Target effort:

- Hardware: about 5–6 focused hours/day
- Whole team: about 8–10 focused hours/day
- Expected total team effort: roughly 80–100 productive hours, depending on team size and component readiness

## 2. Phase 0 — Procurement & Workspace

**Goal:** Everything needed to build is available.

Tasks:

- Confirm exact NPK sensor model and datasheet.
- Confirm motor voltage/current.
- Confirm pump/valve ratings.
- Check battery and charger compatibility.
- Prepare soldering, tools, wire, connectors and test liquid.

**Exit criteria:** no critical hardware dependency is unknown.

## 3. Phase 1 — Mechanical Base

**Goal:** Stable robot platform.

Tasks:

- Assemble 4WD chassis.
- Mount motors and wheels.
- Mount battery.
- Plan locations for electronics and tank.
- Add camera mount.

**Exit criteria:** robot can be safely moved by hand and all major hardware has a secure mounting position.

## 4. Phase 2 — ESP32 Movement

**Goal:** Reliable robot motion.

Tasks:

- Connect ESP32 and motor driver.
- Implement forward/reverse/left/right/stop.
- Implement simple speed control.
- Validate actual motor voltage/current.
- Add emergency stop behavior.

**Exit criteria:** robot can complete a repeatable movement test without overheating or losing control.

## 5. Phase 3 — Wireless Control

**Goal:** Phone/laptop control without an extra RF remote.

Tasks:

- Configure ESP32 Wi-Fi.
- Build simple web-control endpoint.
- Add directional buttons and STOP.
- Add connection state.

**Exit criteria:** phone/laptop can reliably control the robot over local Wi-Fi.

## 6. Phase 4 — Sensors

**Goal:** Stable sensor readings.

Order:

1. Ultrasonic
2. MPU6050
3. DHT22/BME280
4. Soil moisture
5. NPK + RS485

The NPK sensor should be integrated early enough to leave time for Modbus debugging.

**Exit criteria:** sensor dashboard shows valid readings and clearly indicates missing/invalid data.

## 7. Phase 5 — Spraying Hardware

**Goal:** Safe and repeatable spray actuation.

Tasks:

- Mount tank.
- Connect pump.
- Connect solenoid valve.
- Install tubing, filter and nozzle.
- Add MOSFET/relay interface.
- Add flow sensor if used.
- Test with water.

**Exit criteria:** approved command produces stable spray and the system has no leaks.

## 8. Phase 6 — Camera & AI

**Goal:** Plant image → disease result.

Tasks:

- Capture frames from existing camera.
- Build preprocessing pipeline.
- Use a suitable pretrained/fine-tuned crop-disease model.
- Implement confidence threshold.
- Add severity estimate.
- Add plant-health score.
- Add unknown/low-confidence state.

**Exit criteria:** the selected competition disease scenario can be demonstrated repeatedly with reliable results.

## 9. Phase 7 — Treatment Decision Engine

**Goal:** Disease result → verified treatment guidance.

Tasks:

- Define crop/disease records.
- Add treatment entries from verified references.
- Add severity/context fields.
- Check inventory availability.
- Return “unavailable/manual action” when needed.

**Exit criteria:** no spray command is produced before farmer approval.

## 10. Phase 8 — Dashboard Integration

**Goal:** One interface for the whole prototype.

Dashboard includes:

- Camera
- Robot controls
- AI result
- Health score
- NPK/soil/environment values
- Treatment recommendation
- Inventory status
- Approval buttons
- Spray status
- Event history

**Exit criteria:** one screen can demonstrate the full concept.

## 11. Phase 9 — End-to-End Integration

**Goal:** Close the loop.

```text
Camera
 ↓
AI detection
 ↓
Sensor context
 ↓
Treatment engine
 ↓
Inventory check
 ↓
Farmer approval
 ↓
ESP32
 ↓
Pump + Valve
 ↓
Target spray
 ↓
Record
```

**Exit criteria:** complete demonstration works from start to finish.

## 12. Phase 10 — Smart Features

Only after the core workflow works:

- Disease heatmap
- Digital plant/zone history
- Basic risk estimation
- Follow-up verification concept

For the competition, use simple and explainable implementations.

## 13. Phase 11 — Hardening & Demo

Tasks:

- Repeat the demo 15–20 times.
- Fix loose wires.
- Label connectors.
- Check battery state.
- Prepare backup power/data.
- Record a backup demonstration video.
- Prepare slides with architecture and innovation.
- Prepare a 3–5 minute demo script.

## 14. 10-Day Suggested Schedule

| Day | Main Goal | Priority |
|---|---|---|
| 1 | Chassis + mechanical assembly | Critical |
| 2 | ESP32 + motor driver + movement | Critical |
| 3 | Wi-Fi remote control | Critical |
| 4 | Basic sensors | Critical |
| 5 | NPK + RS485 | Critical |
| 6 | Pump + valve + nozzle | Critical |
| 7 | Camera + AI | Critical |
| 8 | Treatment engine + dashboard | Critical |
| 9 | Full integration + testing | Critical |
| 10 | Demo hardening + presentation | Critical |

## 15. Scope Freeze

Do **not** add these to the competition MVP unless the core system is already stable:

- Thermal camera
- Multispectral camera
- LiDAR
- Full autonomous navigation
- Real disease-spread ML prediction
- Yield prediction
- Multi-chemical industrial spraying
- Onboard edge AI replacement

These belong in future scope.
