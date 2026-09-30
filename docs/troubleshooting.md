# AgriGuard — Real Hardware Troubleshooting Guide

This guide details common electrical, firmware, and sensor issues encountered during physical prototype deployment and their exact diagnostic procedures.

---

## 1. RS485 Modbus NPK Sensor Issues

### Symptom: `NPK_DISCONNECTED` or Modbus Timeout Error
1. **Inverted Differential Lines (A & B):**
   - Swap the wires on the MAX485 `A` and `B` screw terminals. In Chinese Modbus probes, wire color labeling is frequently reversed (e.g. Yellow = B, Blue = A).
2. **Missing 12V Supply to Sensor:**
   - Industrial soil probes do **not** run on 3.3V or 5V. Measure between sensor Brown (+12V) and Black (GND) with a multimeter to verify ≥ 9.0V DC.
3. **Missing Common Ground:**
   - The sensor ground (Black wire) must be bonded directly to the ESP32 ground. If floating, the differential receiver cannot read data packets.
4. **Baud Rate or Slave Address Mismatch:**
   - Most probes ship with 9600 baud and Slave ID `1`. If your probe uses Slave ID `2` or 4800 baud, update `config/sensors.yaml` accordingly.

---

## 2. Motor Driver (L298N) Issues

### Symptom: ESP32 Resets When Motors Start
- **Cause:** Large inductive current surge from DC motors causes a voltage dip on the battery, triggering the ESP32 Brownout Detector.
- **Remedy:**
  1. Ensure a large electrolytic capacitor (1000 µF 25V) is installed across the L298N 12V and GND terminals.
  2. Separate the motor power supply path from the ESP32 buck converter path at the battery terminal.
  3. Avoid sudden accelerations by increasing PWM speed smoothly.

### Symptom: One Side Motors Do Not Spin
- Check the physical ENA / ENB jumpers on the L298N. If PWM control is used, the black jumpers **must be removed** and replaced with wires to ESP32 GPIO 13 and GPIO 23.
- Check direction pins with a multimeter: when moving forward, IN1 should read 3.3V and IN2 should read 0V.

---

## 3. Precision Spraying & Flow Sensor Issues

### Symptom: Pump Runs but Flow Sensor Reports 0 mL/s (`FLOW_FAULT`)
1. **Flow Sensor Orientation:**
   - The YF-S401 turbine has a directional arrow stamped on the plastic housing. Ensure flow enters the inlet and exits the outlet. Backflow will not spin the impeller.
2. **Air Lock in Tubing:**
   - Diaphragm mini-pumps struggle to self-prime against dry air. Disconnect nozzle tip and allow pump to run for 2 seconds until water fills the tube, then reconnect nozzle.
3. **Missing Pullup on Pulse Line:**
   - The yellow pulse output is an open-collector Hall effect sensor. Ensure GPIO 27 internal pullup is enabled or wire an external 4.7kΩ pullup resistor to 3.3V.

### Symptom: Solenoid Valve Stays Closed / Buzzes
- Verify the solenoid coil is rated for 12V DC, not 24V or 110V AC.
- Check voltage at the solenoid terminals during actuation: should be 11.5V–12.5V. If voltage drops below 9V, the battery is depleted or MOSFET gate drive is insufficient.

---

## 4. USB Camera & OpenCV Detection Issues

### Symptom: `Camera unavailable (Index 0 failed to open)`
1. On Windows, another application (e.g. Camera app, Zoom, or another Python script) may have locked camera device index 0. Close background camera apps.
2. If using multiple webcams (built-in laptop webcam + external USB crop camera), the external camera will be index `1` or `2`. Update `config/hardware.yaml`:
   ```yaml
   camera:
     device_index: 1
   ```
3. Test camera availability using:
   ```powershell
   python -c "import cv2; cap=cv2.VideoCapture(1); print('Open:', cap.isOpened()); cap.release()"
   ```
