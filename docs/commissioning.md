# AgriGuard — Physical Hardware Commissioning Procedure

Follow this strict 21-step commissioning procedure sequentially before operating the AgriGuard robot with power.

---

## Pre-Power Safety Verifications

### 1. Power OFF Verification
- Confirm that the main battery toggle switch is in the **OFF** position.
- Disconnect the 12V battery terminal clip before touching any wiring.

### 2. Physical Inspection & Mechanical Clearance
- Verify that all four DC gear motors are mechanically bolted to the 4WD chassis.
- Ensure wheels rotate freely without mechanical rubbing against the frame.
- Check spray tank mounting straps: tank must not shift or vibrate loose during travel.
- Inspect liquid tubing: confirm clamps are tight at pump inlet, outlet, filter, and solenoid valve.

### 3. Common Ground & Polarities
- Measure resistance with a digital multimeter (continuity mode) between:
  - ESP32 GND
  - L298N GND
  - Buck Converter GND
  - Battery Negative (-)
  - MAX485 GND
- **Requirement:** Continuity must be zero ohms. A shared common ground is mandatory.

### 4. Supply Voltage & Polarity Check
- Connect a lab power supply or multimeter to the 12V battery line (switch still OFF).
- Verify +12V positive and GND negative polarities. **Reverse polarity will instantly destroy the L298N and buck converter!**

### 5. In-Line Fuse Check
- Inspect the in-line fuse holder on the positive 12V line: verify a **15A fast-blow fuse** is installed.

### 6. Emergency Stop Physical Switch
- Test the mechanical mushroom Emergency Stop pushbutton:
  - When pressed down (latched), resistance across switch terminals must be open circuit (or pulled to GND).
  - When twisted to release, contact closes.

---

## Power-Up & Electronic Bring-Up

### 7. Buck Converter Calibration (Prior to connecting ESP32)
- Power on the 12V switch *without* the ESP32 plugged in.
- Measure the output of the DC-DC Buck Converter with a multimeter.
- **Adjust potentiometer until output voltage is precisely 5.05V DC.**
- Power OFF, then seat the ESP32 in its socket with VIN connected to the calibrated 5V rail.

### 8. Boot ESP32 & Verify Wi-Fi Access Point
- Power ON the main switch.
- Verify the ESP32 onboard red power LED lights up.
- On your phone or laptop Wi-Fi settings, scan for networks:
  - Verify **AgriGuard-Robot** appears.
  - Connect with password `agri12345password`.
  - Open terminal and ping `192.168.4.1` to confirm sub-10ms ping response.

---

## Motor & Subsystem Step-by-Step Testing

### 9. Verify Motor Driver Isolation & Logic
- Verify that L298N 5V regulator jumper is removed if powering logic from external 5V.
- Ensure heat sink on L298N is cool to the touch.

### 10. Individual Motor Direction Validation
- Lift the robot chassis on a test stand so wheels do not touch the bench.
- In the dashboard, click **Forward** at low speed (PWM 100):
  - Verify all 4 wheels spin forward.
  - If a wheel spins in reverse, swap the two motor leads for that channel on the L298N terminal block.
- Click **STOP**: verify all wheels instantly stop within 50ms.

### 11. Test Ultrasonic Sensor (HC-SR04)
- Place an obstacle (book or cardboard box) 50 cm in front of the robot.
- Read telemetry output: verify distance registers 50 cm ± 2 cm.
- Move obstacle to 20 cm: verify distance updates and obstactle proximity flag trips.

### 12. Test IMU (MPU6050)
- Tilt the robot forward by 20 degrees: verify Pitch registers approximately +20°.
- Tilt left by 15 degrees: verify Roll registers approximately -15°.

### 13. Test Temperature & Humidity (DHT22)
- Observe ambient readings on the dashboard:
  - Temp: 20°C - 35°C (room ambient)
  - Humidity: 40% - 80%
- Blow gently across sensor: humidity should temporarily spike by 10-15%.

### 14. Test Capacitive Soil Moisture Sensor
- In open air (dry state): telemetry should display ~0% to 5% moisture.
- Dip sensor tip into a cup of tap water (up to white line, do NOT submerge electronics):
  - Telemetry should rise to 90% - 100%.

### 15. Test RS485 Modbus NPK Probe
- Insert probe into moist agricultural soil.
- Check telemetry:
  - Nitrogen: typically 20 - 100 mg/kg
  - Phosphorus: typically 15 - 60 mg/kg
  - Potassium: typically 30 - 120 mg/kg
- If status shows `NPK_TIMEOUT` or `COMM_ERROR`: check A/B differential wiring and ensure probe is receiving 12V DC power.

---

## Precision Spraying Bring-Up (TEST WITH CLEAN WATER ONLY!)

### 16. Fill Tank with Clean Water
- Pour 500 mL of clean distilled or filtered tap water into the robot tank.
- **NEVER use active agricultural chemicals during bench testing.**

### 17. Inspect Tubing for Leaks
- Check all hose barb connections and push-fit tube joints. No leaks should be present under gravity pressure.

### 18. Test Solenoid Valve Actuation
- Send a 500ms solenoid valve test pulse.
- Listen for audible click of the solenoid coil opening and closing.

### 19. Test Pump & Measure Flow Sensor Pulses
- In the dashboard, initiate an authorized 2000ms spray pulse with clean water.
- Verify:
  - 12V pump starts humming.
  - Solenoid valve opens.
  - Spray nozzle produces an even conical mist pattern.
  - Flow sensor outputs pulses; telemetry reports real flow rate (e.g. 14–18 mL/s).
  - After 2000ms, pump shuts OFF, valve closes, and flow drops to 0.0 mL/s.

### 20. Dry-Run / Blockage Fault Protection Test
- Empty water tank or pinch the intake hose.
- Trigger spray: pump will energize.
- Within 600ms, system must detect zero flow, shut off pump, and display **PUMP_DRY_RUN_FAULT**.

### 21. Complete Fail-Safe & Emergency Stop Verification
- Drive robot forward. While moving, physically hit the Emergency Stop mushroom switch:
  - All motors must instantly halt.
  - Pump/valve power must drop to 0V.
  - Dashboard must display **EMERGENCY_STOP_TRIPPED**.
