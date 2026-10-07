/*
  AgriGuard — Bluetooth BLE GATT Server
  ──────────────────────────────────────
  Provides a parallel BLE interface alongside the existing Wi-Fi REST API.
  The laptop dashboard (via bleak) can connect when Wi-Fi is unavailable.

  BLE Service:  AgriGuard-Robot (Service UUID: 12345678-1234-1234-1234-123456789abc)
  ├── Command Char  (UUID: …ab1)  — WRITE — Receives JSON motor/spray/estop commands
  └── Telemetry Char (UUID: …ab2) — READ + NOTIFY — Sends JSON sensor snapshot

  Matches UUIDs defined in backend/communication/transport.py (BluetoothTransport).
*/

#pragma once

#if __has_include(<BLEDevice.h>)
#include <BLEDevice.h>
#include <BLEServer.h>
#include <BLEUtils.h>
#include <BLE2902.h>
#include <ArduinoJson.h>

// ── UUIDs (must match Python transport.py) ────────────────────────────────────
#define AGRIGUARD_BLE_SERVICE_UUID    "12345678-1234-1234-1234-123456789abc"
#define AGRIGUARD_CMD_CHAR_UUID       "12345678-1234-1234-1234-123456789ab1"
#define AGRIGUARD_TELEMETRY_CHAR_UUID "12345678-1234-1234-1234-123456789ab2"
#define AGRIGUARD_BLE_DEVICE_NAME     "AgriGuard-Robot"

// External references to motor/spray state (defined in main sketch)
extern void handleBLECommand(const char* jsonCmd);
extern String buildTelemetryJSON();

// ─────────────────────────────────────────────────────────────────────────────
// BLE Server Callbacks (connection lifecycle)
// ─────────────────────────────────────────────────────────────────────────────

class AgriGuardServerCallbacks : public BLEServerCallbacks {
public:
    static bool clientConnected;

    void onConnect(BLEServer* pServer) override {
        clientConnected = true;
        Serial.println("[BLE] Dashboard client connected.");
    }

    void onDisconnect(BLEServer* pServer) override {
        clientConnected = false;
        Serial.println("[BLE] Dashboard client disconnected. Restarting advertising.");
        BLEDevice::startAdvertising();
    }
};

bool AgriGuardServerCallbacks::clientConnected = false;

// ─────────────────────────────────────────────────────────────────────────────
// Command Characteristic Callback (receive commands from laptop)
// ─────────────────────────────────────────────────────────────────────────────

class AgriGuardCommandCallbacks : public BLECharacteristicCallbacks {
public:
    void onWrite(BLECharacteristic* pChar) override {
        std::string raw = pChar->getValue();
        if (!raw.empty()) {
            Serial.printf("[BLE CMD] Received: %s\n", raw.c_str());
            handleBLECommand(raw.c_str());
        }
    }
};

// ─────────────────────────────────────────────────────────────────────────────
// BLEServerManager — static class mirroring WiFiServerManager pattern
// ─────────────────────────────────────────────────────────────────────────────

class BLEServerManager {
private:
    static BLEServer*         _pServer;
    static BLECharacteristic* _pCmdChar;
    static BLECharacteristic* _pTelemetryChar;
    static unsigned long      _lastNotifyMs;

public:
    static void init() {
        BLEDevice::init(AGRIGUARD_BLE_DEVICE_NAME);

        _pServer = BLEDevice::createServer();
        _pServer->setCallbacks(new AgriGuardServerCallbacks());

        BLEService* pService = _pServer->createService(AGRIGUARD_BLE_SERVICE_UUID);

        // ── Command characteristic (Write) ─────────────────────────────────────
        _pCmdChar = pService->createCharacteristic(
            AGRIGUARD_CMD_CHAR_UUID,
            BLECharacteristic::PROPERTY_WRITE
        );
        _pCmdChar->setCallbacks(new AgriGuardCommandCallbacks());

        // ── Telemetry characteristic (Read + Notify) ───────────────────────────
        _pTelemetryChar = pService->createCharacteristic(
            AGRIGUARD_TELEMETRY_CHAR_UUID,
            BLECharacteristic::PROPERTY_READ | BLECharacteristic::PROPERTY_NOTIFY
        );
        // Add Client Characteristic Configuration Descriptor for NOTIFY
        _pTelemetryChar->addDescriptor(new BLE2902());

        // ── Status characteristic (Read + Notify) ─────────────────────────────
        _pStatusChar = pService->createCharacteristic(
            AGRIGUARD_STATUS_CHAR_UUID,
            BLECharacteristic::PROPERTY_READ | BLECharacteristic::PROPERTY_NOTIFY
        );
        _pStatusChar->addDescriptor(new BLE2902());
        _pStatusChar->setValue("STANDBY");

        pService->start();

        // ── Advertising ────────────────────────────────────────────────────────
        BLEAdvertising* pAdv = BLEDevice::getAdvertising();
        pAdv->addServiceUUID(AGRIGUARD_BLE_SERVICE_UUID);
        pAdv->setScanResponse(true);
        pAdv->setMinPreferred(0x06);
        pAdv->setMinPreferred(0x12);
        BLEDevice::startAdvertising();

        Serial.printf("[BLE] Server ready. Device: '%s'\n", AGRIGUARD_BLE_DEVICE_NAME);
        Serial.printf("[BLE] Service UUID: %s\n", AGRIGUARD_BLE_SERVICE_UUID);
    }

    /**
     * Call from loop() to push live telemetry JSON to connected BLE client.
     * Notifies at ~2 Hz to avoid BLE congestion.
     */
    static void update() {
        if (!AgriGuardServerCallbacks::clientConnected) return;

        unsigned long now = millis();
        if (now - _lastNotifyMs < 500) return;  // 2 Hz notify rate
        _lastNotifyMs = now;

        String json = buildTelemetryJSON();
        _pTelemetryChar->setValue(json.c_str());
        _pTelemetryChar->notify();
    }

    static void notifyStatus(const char* status) {
        if (_pStatusChar && AgriGuardServerCallbacks::clientConnected) {
            _pStatusChar->setValue(status);
            _pStatusChar->notify();
        }
    }

    static bool isClientConnected() {
        return AgriGuardServerCallbacks::clientConnected;
    }
};

BLEServer*         BLEServerManager::_pServer         = nullptr;
BLECharacteristic* BLEServerManager::_pCmdChar        = nullptr;
BLECharacteristic* BLEServerManager::_pTelemetryChar  = nullptr;
BLECharacteristic* BLEServerManager::_pStatusChar     = nullptr;
unsigned long      BLEServerManager::_lastNotifyMs     = 0;

#else
// ── Stub for desktop IDE / clangd without BLE headers ────────────────────────
class BLEServerManager {
public:
    static void init()   {}
    static void update() {}
    static bool isClientConnected() { return false; }
};
#endif // BLEDevice.h
