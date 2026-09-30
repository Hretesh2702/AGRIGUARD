# AgriGuard — Cursor Rules

These rules guide AI-assisted development for the AgriGuard prototype.

## 1. Project Context

AgriGuard is a competition prototype for an AI-powered precision farming robot.

Fixed prototype assumptions:

- Existing external camera is used for vision.
- Existing laptop performs AI inference and runs the dashboard.
- ESP32 is the robot hardware controller.
- Robot is remotely controlled; full autonomous navigation is future scope.
- NPK sensor is included through RS485/Modbus.
- Soil moisture and basic environment sensing are supporting inputs.
- Pump + solenoid valve + nozzle provide the spray mechanism.
- Farmer approval is required before spray actuation.

Do not silently replace these choices with Raspberry Pi, Jetson, LiDAR, or other hardware unless the user explicitly asks.

## 2. Coding Priorities

1. Make the prototype reliable before making it sophisticated.
2. Keep hardware control deterministic and simple.
3. Keep AI inference separated from ESP32 firmware.
4. Use clear interfaces between modules.
5. Prefer small, testable functions.
6. Avoid unnecessary dependencies.
7. Never add a feature that is not required by the current phase unless requested.

## 3. Repository Structure

```text
agriguard/
├── ai/
│   ├── inference.py
│   ├── preprocessing.py
│   └── model.py
├── dashboard/
│   ├── app.py
│   ├── templates/
│   └── static/
├── treatment/
│   ├── knowledge_base.json
│   ├── engine.py
│   └── inventory.py
├── robot_comm/
│   ├── client.py
│   └── protocol.py
├── data/
│   ├── database.py
│   └── schemas.py
├── firmware/
│   └── agriguard_esp32/
├── tests/
├── models/
├── scripts/
└── docs/
```

## 4. AI Code Rules

- Always expose model confidence.
- Implement a low-confidence/unknown path.
- Do not convert confidence into medical/agricultural certainty.
- Keep preprocessing identical between training and inference.
- Log model version with every detection.
- Store the image or a stable image reference for reproducibility when feasible.
- Keep disease labels in a central configuration rather than scattering strings through the code.

## 5. Treatment Rules

- Never let an LLM freely generate chemical dosing instructions.
- Treatment recommendations must come from a controlled, verified data source.
- The engine should check crop, disease, severity and any configured restrictions/requirements.
- Inventory availability is a separate check from diagnosis.
- The default action is **NO SPRAY** until the farmer approves.
- If treatment data is missing, return a safe “consult verified guidance / manual action” state.

## 6. ESP32 Rules

- Use explicit pin definitions in one configuration section.
- Never block the main control loop for long periods.
- Avoid uncontrolled motor loops.
- Define safe startup state: motors OFF, pump OFF, valve OFF.
- Define safe communication-loss behavior.
- Use debounced/validated inputs for safety-critical controls.
- Keep sensor drivers separate from motion control.
- Validate sensor values before publishing them.

## 7. Communication Rules

Commands should be structured and validated.

Example JSON:

```json
{
  "type": "move",
  "action": "forward",
  "speed": 120,
  "request_id": "abc123"
}
```

Responses should include status or error information.

```json
{
  "type": "status",
  "request_id": "abc123",
  "ok": true,
  "battery": 12.4
}
```

Reject unknown command types. Never execute malformed commands.

## 8. Dashboard Rules

Dashboard should prioritize:

- Live camera view
- Robot connection status
- Movement controls
- Disease result
- Confidence
- Severity
- NPK and soil/environment values
- Treatment recommendation
- Treatment availability
- Approve/Reject controls
- Spray state
- Event history

Use clear status messages. Avoid hiding safety-critical state behind animations.

## 9. Hardware Integration Rules

- Read the exact component datasheet before writing device-specific code.
- Do not assume NPK Modbus register addresses.
- Do not assume sensor voltage levels.
- Do not drive motors, pumps or valves directly from ESP32 GPIO when the load exceeds GPIO capability.
- Use properly rated driver/switch hardware.
- Separate motor/pump power from logic power as appropriate.
- Include common ground where required by the selected interfaces.

## 10. Testing Rules

Every feature should have a basic test before integration:

- Motor test
- Wi-Fi test
- Sensor test
- NPK communication test
- Camera test
- AI inference test
- Pump/valve test
- Dashboard command test
- Full end-to-end test

For the final demo, provide a repeatable scripted path and a backup video.

## 11. Style Rules

- Python: type hints, readable names, docstrings for non-obvious functions.
- C++/Arduino: clear pin constants, no magic numbers for safety-critical values.
- Keep functions short and single-purpose.
- Prefer explicit error handling over silent failure.
- Add comments for hardware assumptions and wiring dependencies.
- Do not hide important logic inside giant files.

## 12. AI Assistant Behavior in Cursor

When asked to modify code:

1. Inspect existing code before proposing replacements.
2. Preserve working behavior.
3. Change only the necessary files.
4. Explain hardware assumptions when they matter.
5. Flag uncertainty rather than inventing datasheet-specific values.
6. Prefer incremental patches over full rewrites.
7. Keep the competition deadline in mind: reliability first.
