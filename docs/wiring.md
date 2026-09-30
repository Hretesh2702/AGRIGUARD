# AgriGuard — Physical Wiring & Electrical Schematic Guide

This document provides complete connection diagrams and wiring instructions for connecting the ESP32, motor drivers, sensors, and spray actuation hardware.

---

## 1. Power Distribution Schematic

```text
 12V LiFePO4 / Lead-Acid Battery
       │
      [+] ────────────────[ 15A In-Line Fuse ]
       │                         │
       │                 [ Main Switch / E-STOP ]
       │                         │
       ├─────────────────────────┼─────────────────────────┐
       │ (12V High-Current)      │ (12V High-Current)      │ (12V Line)
       ▼                         ▼                         ▼
  L298N 12V VMS            12V Pump (+)             12V Solenoid (+)
  Motor Supply             Flyback Diode            Flyback Diode
       │                         │                         │
       │                         ▼                         ▼
       │                    [MOSFET Drain]            [MOSFET Drain]
       │                         │                         │
       │                         ▼                         ▼
       │                    MOSFET Source             MOSFET Source
       │                         │                         │
       │                         ▼                         ▼
       ├───────────────────[ COMMON GROUND ]───────────────┘
       │
       ▼
 [ DC-DC Buck Converter (12V -> 5V 3A) ]
       │
      [+5V] ───────────────┬───────────────────────────────┐
       │                   │                               │
       ▼                   ▼                               ▼
  ESP32 VIN Pin      HC-SR04 VCC Pin                 MAX485 VCC Pin
                           │
       [ 3.3V Rail (from ESP32 3V3 Pin) ]
       │                   │                               │
       ▼                   ▼                               ▼
  MPU6050 VCC        DHT22 VCC Pin            Capacitive Soil Moisture VCC
```

---

## 2. 4WD Motor Driver (L298N) Wiring

| L298N Terminal | Connected To | Wire Gauge / Color |
|---|---|---|
| **12V (Power IN)** | Switched 12V Battery Line (after fuse) | 16 AWG Red |
| **GND** | System Common Ground | 16 AWG Black |
| **5V (Logic IN)** | Connected to ESP32 VIN (+5V) if 5V jumper removed | 22 AWG Red |
| **ENA (Left PWM)** | ESP32 GPIO 13 | 24 AWG Yellow |
| **IN1 (Left Fwd)** | ESP32 GPIO 12 | 24 AWG Blue |
| **IN2 (Left Rev)** | ESP32 GPIO 14 | 24 AWG Green |
| **ENB (Right PWM)**| ESP32 GPIO 23 | 24 AWG Yellow |
| **IN3 (Right Fwd)**| ESP32 GPIO 19 | 24 AWG Orange |
| **IN4 (Right Rev)**| ESP32 GPIO 18 | 24 AWG Purple |
| **OUT1 & OUT2** | Left Side Geared DC Motors (Wired in parallel) | 18 AWG Pair |
| **OUT3 & OUT4** | Right Side Geared DC Motors (Wired in parallel) | 18 AWG Pair |

---

## 3. Precision Spray Actuation & Flow Sensor Wiring

### Pump & Solenoid Valve Driver Circuit (N-Channel Logic MOSFET IRLZ44N)

```text
               +12V Supply
                    │
           ┌────────┴────────┐
           │   12V DC Pump   │
           │   or Solenoid   │
           └────────┬────────┘
                    ├───[<| 1N4007 Diode ]───┐ (Cathode to +12V, Anode to Drain)
                    │                        │
             Drain  │                        │
       ESP32   ┌────┴───┐                    │
       GPIO ───┤ Gate   │ N-Channel MOSFET   │
       (25/26) │ Source │ (IRLZ44N)          │
               └────┬───┘                    │
                    │                        │
                    ├────────────────────────┘
                    │
                   GND (Common Ground)

* Gate Pulldown Resistor: Place a 10kΩ resistor between Gate and Source/GND
  to guarantee the MOSFET stays OFF when ESP32 powers up or reboots.
* Gate Resistor: Place a 220Ω resistor in series between ESP32 GPIO and Gate.
```

### Flow Sensor (YF-S401) Wiring

| YF-S401 Wire | Connection | Notes |
|---|---|---|
| **Red (VCC)** | +5V Rail | Power supply |
| **Black (GND)**| Common Ground | Ground return |
| **Yellow (Pulse Signal)** | ESP32 GPIO 27 | 10kΩ pullup to 3.3V or use 1kΩ/2kΩ divider if sensor outputs 5V pulses |

---

## 4. RS485 Modbus NPK Sensor & MAX485 Transceiver Wiring

```text
  NPK Sensor Cable (Industrial Modbus Probe):
  - Brown:  +12V Battery Power (Sensor requires 9V-24V DC)
  - Black:  GND (Common Ground)
  - Yellow: RS485 Line A (Differential Data +)
  - Blue:   RS485 Line B (Differential Data -)

  MAX485-to-TTL Module Connections:
  ┌────────────────────────────────────────────────────────┐
  │ MAX485 Module           Connected To                   │
  ├────────────────────────────────────────────────────────┤
  │ VCC                     +5V Rail                       │
  │ GND                     Common Ground                  │
  │ RO (Receiver Output)    ESP32 GPIO 16 (Serial2 RX)     │
  │ DI (Driver Input)       ESP32 GPIO 17 (Serial2 TX)     │
  │ DE (Driver Enable)   ─┐ Jumpered together and connected│
  │ !RE (Receiver Enable)─┘ to ESP32 GPIO 33 (Direction)   │
  │ A Terminal              NPK Probe Yellow Wire (A+)     │
  │ B Terminal              NPK Probe Blue Wire (B-)       │
  └────────────────────────────────────────────────────────┘

  * Place a 120Ω terminating resistor across A and B terminals if cable length > 5 meters.
```

---

## 5. HC-SR04 Ultrasonic Voltage Divider (Essential!)

The HC-SR04 Echo pin outputs 5.0V pulses, which exceed the ESP32 3.3V GPIO rating.
Use a two-resistor voltage divider on the Echo pin:

```text
  HC-SR04 Echo Pin (5V Pulse)
          │
        [ 1 kΩ ]
          │
          ├─── To ESP32 GPIO 5 (Safe 3.3V Signal)
          │
        [ 2 kΩ ]
          │
         GND
```
