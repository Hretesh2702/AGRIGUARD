# AgriGuard — Product Requirements Document (PRD)

## 1. Product Overview

**Product:** AgriGuard — AI-Powered Precision Farming Robot

**Product type:** Competition prototype / proof of concept

**Primary theme:** NET ZERO AI Architecture

**Core idea:** A mobile agricultural robot that inspects crops, combines visual and soil/environment information, identifies potential crop problems, recommends verified treatment guidance, gets farmer approval, applies targeted treatment, and records the event.

## 2. Vision

> **A mobile AI crop doctor that can find the problem, locate it, recommend an appropriate intervention, and help the farmer precisely execute the treatment.**

## 3. Problem Statement

Farmers often rely on manual crop inspection. This is difficult to scale, can delay the discovery of early symptoms, and requires significant time and labor. Broad pesticide application may also treat healthy areas unnecessarily. Farmers need faster crop-health information and a structured path from detection to action.

## 4. Goals

### Prototype Goals

1. Demonstrate remote robot movement.
2. Capture plant images using an existing external camera.
3. Run AI disease detection on an existing laptop.
4. Read NPK and supporting soil/environment sensors.
5. Provide treatment guidance from a controlled/verified knowledge base.
6. Check treatment availability.
7. Require farmer approval.
8. Activate a targeted spray mechanism.
9. Store a basic record of observations and actions.

### Product Direction Goals

- Reduce unnecessary broad treatment.
- Support earlier crop-health awareness.
- Make precision intervention accessible through modular hardware.
- Create a platform that can later support predictive crop-health monitoring.

## 5. Non-Goals for the Competition Prototype

The MVP does not need:

- Full autonomous field navigation
- Commercial-grade weatherproofing
- Multispectral or thermal sensing
- Yield prediction
- Fully autonomous chemical decision-making
- Industrial-scale spraying
- Perfect diagnosis across all crops and diseases

## 6. Target Users

### Primary

Small/medium-scale farmers and student/research demonstration users.

### Secondary

Agricultural researchers, agri-tech developers, educators, and competition evaluators.

## 7. User Stories

### Farmer

- As a farmer, I want to remotely move the robot so I can inspect a field section without physically walking through every area.
- As a farmer, I want to see the plant image and AI result so I understand what the system detected.
- As a farmer, I want sensor context such as NPK and soil moisture so a visible plant problem is not treated as disease automatically.
- As a farmer, I want to review the treatment recommendation before spraying.
- As a farmer, I want the system to tell me whether the required treatment is available.
- As a farmer, I want the system to remember which plant/zone was inspected and treated.

### Developer/Operator

- As an operator, I want each subsystem to be testable independently.
- As an operator, I want the robot to default to safe states when communication fails.
- As an operator, I want sensor errors to be visible rather than silently ignored.

## 8. Functional Requirements

### FR-01 — Remote Movement

The system shall support:

- Forward
- Reverse
- Left
- Right
- Stop
- Basic speed control

### FR-02 — Camera Capture

The system shall capture live or near-live plant images from the existing external camera.

### FR-03 — AI Detection

The system shall return:

- Disease/condition label
- Confidence
- Basic severity
- Plant health score
- Low-confidence/unknown state

### FR-04 — Sensor Readings

The system should display:

- N
- P
- K
- Soil moisture
- Temperature
- Humidity
- Basic robot/obstacle status

### FR-05 — Treatment Decision

The system shall map the selected crop + detected condition + configured severity/context to a verified treatment record.

### FR-06 — Inventory Check

The system shall indicate whether the required treatment is available on the robot.

### FR-07 — Farmer Approval

The system shall require explicit user approval before initiating spraying.

### FR-08 — Precision Spray

The ESP32 shall activate the pump and solenoid valve for an approved spray event.

### FR-09 — Event Logging

The system shall record, at minimum:

- Timestamp
- Plant/zone identifier
- AI result
- Confidence
- Treatment recommendation
- Approval state
- Spray event state

### FR-10 — Basic Heatmap/History

The system should be able to visualize previous plant/zone observations using a simple grid or map.

## 9. Non-Functional Requirements

### Reliability

The competition demo should be repeatable. The complete flow should work in repeated runs, not just a single successful test.

### Safety

- Emergency stop available.
- Spray defaults OFF.
- Motors default OFF at startup.
- Communication loss has a defined safe behavior.
- Test with water during development.

### Maintainability

Hardware, firmware, AI, dashboard, and treatment logic should be separated.

### Usability

A first-time evaluator should understand the system within one dashboard view and a 3–5 minute demonstration.

### Performance

For the prototype, perceived real-time behavior is sufficient; exact production latency targets are future work. Camera and AI processing should be fast enough to support a smooth demo.

## 10. Key Innovation

The innovation is the **closed-loop connection between AI diagnosis and farmer-approved physical intervention**:

```text
Observe
  ↓
Detect
  ↓
Diagnose
  ↓
Decide
  ↓
Approve
  ↓
Treat
  ↓
Record
```

Signature innovation points:

1. Plant-level precision treatment.
2. AI + treatment decision engine.
3. Onboard treatment inventory awareness.
4. Farmer-in-the-loop spraying.
5. Continuous crop-health mapping/history.
6. Combination of visual and soil/environmental context.

## 11. Success Criteria

A competition MVP is successful when all of the following can be demonstrated:

- Robot moves remotely.
- Camera captures a plant.
- AI detects the intended demonstration disease/condition.
- Sensor readings are displayed.
- Treatment recommendation appears.
- Inventory availability is checked.
- Farmer approves the spray.
- Robot activates the spray mechanism.
- Event is recorded.
- The same demonstration can be repeated reliably.

## 12. Suggested Metrics

These are prototype evaluation metrics rather than guaranteed field outcomes:

- Disease detection accuracy / F1 / precision / recall
- Inference latency
- NPK read success rate
- Remote command response time
- Spray activation reliability
- Flow/no-flow fault detection
- Robot battery runtime
- Targeting alignment accuracy
- End-to-end successful demo rate

## 13. Data & AI Strategy

### Image Dataset

For the competition prototype, select a narrow scope:

- One crop
- One or a few clearly defined disease classes
- Healthy class

This improves reliability within the short development window.

### Model Output

```json
{
  "crop": "tomato",
  "condition": "early_blight",
  "confidence": 0.94,
  "severity": "moderate",
  "health_score": 72,
  "status": "actionable"
}
```

### Sensor Output

```json
{
  "nitrogen": "low",
  "phosphorus": "normal",
  "potassium": "normal",
  "soil_moisture": 32,
  "temperature_c": 28.0,
  "humidity_pct": 68
}
```

## 14. Treatment Data Model

Each treatment record should include fields such as:

```text
crop
condition
treatment_name
application_method
configured_dose_reference
availability_required
safety_notes
source/reference
last_verified
```

The project team must populate this data from appropriate agricultural guidance for the chosen competition crop. The application should never invent missing values.

## 15. Inventory Data Model

```text
item_id
name
quantity_or_level
unit
status
last_updated
```

Example UI state:

```text
Required treatment: AVAILABLE
Tank status: READY
Farmer approval: PENDING
```

## 16. Error Handling Requirements

| Condition | Required response |
|---|---|
| Camera unavailable | Show camera error; no automatic treatment |
| AI confidence too low | Mark unknown; request manual review |
| NPK sensor unavailable | Show sensor offline; do not fabricate reading |
| Treatment unavailable | Do not spray; show next action/manual guidance |
| Wi-Fi lost | Stop or enter safe state |
| Pump ON but no flow | Stop spray; show fault |
| Emergency stop | Stop motion and spray outputs |
| Battery low | Warn and optionally stop non-critical functions |

## 17. Future Scope

- Autonomous row following
- GPS/RTK disease mapping
- Predictive disease-risk modeling
- Multi-modal RGB + depth + thermal/multispectral sensing
- Follow-up verification after treatment
- Digital plant health history
- Yield estimation
- Larger multi-tank treatment systems
- Onboard edge AI
- Offline-first operation with sync

## 18. Competition Demo Script

1. Connect phone/laptop to AgriGuard.
2. Start robot.
3. Drive into the crop demonstration area.
4. Show live camera.
5. Inspect target plant.
6. AI displays disease + confidence + severity.
7. Show NPK/soil/environment context.
8. Show treatment recommendation and availability.
9. Farmer presses **Approve & Spray**.
10. ESP32 activates pump + valve.
11. Target plant/zone is sprayed with safe test liquid.
12. Save the event and show it in history/heatmap.

## 19. Product Positioning

AgriGuard should be presented as a **low-cost, modular, farmer-controlled precision crop-health and intervention platform** rather than simply as a spraying robot.
