# AgriGuard — Product & UX Design

## 1. Design Goal

AgriGuard should feel like a single integrated agricultural assistant rather than a collection of separate electronics. The user should be able to understand what the robot is seeing, what the AI thinks is happening, what treatment information is available, and what the robot is about to do.

## 2. Core User Journey

```text
Open Dashboard
      ↓
Connect Robot
      ↓
Drive / Inspect
      ↓
View Plant Image
      ↓
Receive AI Result
      ↓
Review Sensor Context
      ↓
Review Treatment Recommendation
      ↓
Approve / Reject
      ↓
Precision Spray
      ↓
Record Event
      ↓
Continue to Next Plant / Zone
```

## 3. Dashboard Design

### Main Screen

The main screen should contain five areas:

1. **Live Camera** — the largest area, because visual inspection is the primary input.
2. **Robot Control** — Forward, Reverse, Left, Right, Stop, and speed.
3. **Crop Health Card** — disease, confidence, severity, plant health score.
4. **Sensor Card** — N, P, K, soil moisture, temperature and humidity.
5. **Treatment Card** — recommendation, availability, approval status, spray state.

### Suggested Layout

```text
┌─────────────────────────────────────────────────────────────┐
│ AgriGuard                         Connected ●  Battery 78%   │
├───────────────────────────────┬─────────────────────────────┤
│                               │ CROP HEALTH                 │
│       LIVE CAMERA             │ Disease: Early Blight      │
│                               │ Confidence: 94%            │
│       [ Plant Image ]         │ Severity: Moderate         │
│                               │ Health Score: 72/100       │
├───────────────────────────────┼─────────────────────────────┤
│ ROBOT CONTROL                 │ SENSOR DATA                 │
│        ↑                      │ N: Low   P: Normal         │
│    ←   STOP   →               │ K: Normal                 │
│        ↓                      │ Moisture: 32%             │
│ Speed: ─────●────             │ Temp: 28°C  Hum: 68%       │
├───────────────────────────────┼─────────────────────────────┤
│ TREATMENT                     │ FIELD / HISTORY             │
│ Recommendation: Verified ...  │ Zone / plant records       │
│ Availability: Available       │ Heatmap / recent events    │
│ [APPROVE] [REJECT]            │                             │
└───────────────────────────────┴─────────────────────────────┘
```

## 4. Interaction Design

### Movement

Use large buttons that work on touch screens. `STOP` must be visually prominent.

### Spraying

The spray action should be a two-step confirmation:

1. AI result + treatment recommendation shown.
2. Farmer presses **Approve & Spray**.

There should be no automatic spray immediately after a model prediction.

### Alerts

Use plain-language status messages:

- `Robot connected`
- `Camera unavailable`
- `NPK sensor not responding`
- `Treatment unavailable`
- `Spray approved`
- `Spray completed`
- `Emergency stop active`
- `Low battery`

## 5. Data Visualization

### Plant Health Score

Example:

```text
Health Score: 72 / 100
Disease Probability: 94%
Severity: Moderate
```

The score is a prototype composite indicator, not a clinical/agronomic measurement standard.

### Heatmap

Use a simple grid for the competition prototype:

```text
┌─────────────────────────┐
│ 🟢 🟢 🟢 🟡 🟢 🟢      │
│ 🟢 🔴 🔴 🟡 🟢 🟢      │
│ 🟢 🟢 🟡 🟢 🟢 🟢      │
│ 🟢 🟢 🟢 🟢 🟢 🟢      │
└─────────────────────────┘
```

Legend:

- Green = Healthy
- Yellow = Monitor
- Red = High concern

The prototype can use predefined zone coordinates even without GPS.

## 6. Physical Design

### Robot

- Compact 4WD base
- Low center of gravity
- Tank mounted securely
- Electronics protected from splashes
- Camera mounted at a stable height/angle
- NPK probe kept accessible for manual insertion during prototype demonstrations

### Sensor Placement

- Ultrasonic sensors: front and/or front corners
- Camera: forward-facing with clear field of view
- NPK: removable soil probe
- Soil moisture: near the target plant/zone
- DHT22/BME280: exposed to ambient air but shielded from direct water spray
- IMU: fixed rigidly to the chassis

## 7. Physical Spray Design

```text
        Camera
           ↓
        [ Plant ]
           ↑
        Nozzle
           │
       Solenoid
           │
          Pump
           │
         Tank
```

The nozzle should be calibrated on the actual robot so that the spray cone reaches the intended target. For the prototype, use water for testing.

## 8. Accessibility & Clarity

- Use large labels.
- Avoid tiny text on the demo screen.
- Always show units for sensor measurements.
- Keep “detected” separate from “recommended.”
- Show whether a value is measured, predicted, or advisory.

## 9. Design for Demo Reliability

The competition interface should include:

- Manual reconnect button
- Sensor status indicators
- Clear AI confidence
- A manual `STOP` button
- A visible `Emergency Stop` state
- A reset/retry path for failed camera inference
- A preloaded demonstration scenario so the team is not dependent on an unpredictable field result

## 10. Future UX

Later versions can add:

- GPS/RTK field map
- Plant-level history
- Follow-up verification timeline
- Risk map
- Multi-field dashboard
- Offline sync
- Farmer-language support
- Voice guidance
