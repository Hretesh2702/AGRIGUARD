# AgriGuard — Complete Setup & Installation Guide

This guide covers setting up the development laptop, building and flashing the ESP32 firmware via PlatformIO, configuring sensors, and starting the full production software stack.

---

## 1. Prerequisites

- **Laptop Operating System:** Windows 10/11, Ubuntu 22.04+, or macOS
- **Python:** 3.10+ (Python 3.13 recommended)
- **Node.js:** v18+ (Node v22 installed)
- **PlatformIO CLI / VSCode Extension:** For building ESP32 firmware
- **External Hardware:** USB Camera plugged into laptop; ESP32 connected via Micro-USB/USB-C for initial flashing.

---

## 2. Python Backend Setup

In the project root directory:

```powershell
# 1. Activate the dedicated virtual environment
.venv\Scripts\activate

# 2. Install all core dependencies
uv pip install -r requirements.txt
# or standard pip:
pip install -r requirements.txt
```

---

## 3. PlatformIO ESP32 Firmware Flashing

Navigate to the firmware directory:

```powershell
cd firmware\esp32

# 1. Build the firmware binary
platformio run

# 2. Connect ESP32 via USB and flash
platformio run --target upload

# 3. Monitor Serial logs at 115200 baud
platformio device monitor -b 115200
```

*Note: Once flashed, the ESP32 creates the Wi-Fi network `AgriGuard-Robot` (password: `agri12345password`). Subsequent communication occurs over Wi-Fi without needing the USB cable.*

---

## 4. Frontend React Setup

```powershell
cd frontend

# Install Node dependencies
npm install

# Build production bundle or run dev server
npm run dev
```

---

## 5. Starting the Complete Platform

From the project root:

```powershell
# In Terminal 1 (Backend API & Camera/AI Service):
.venv\Scripts\activate
python -m backend.main

# In Terminal 2 (React Frontend Dashboard):
cd frontend
npm run dev
```

Open your browser to:
- **Dashboard:** `http://localhost:5173` (or phone browser at `http://<laptop-ip>:5173`)
- **Backend API & Swagger Docs:** `http://localhost:8000/docs`
