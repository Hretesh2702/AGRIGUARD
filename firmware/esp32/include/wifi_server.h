#pragma once
#if __has_include(<Arduino.h>)
  #include <Arduino.h>
  #include <WiFi.h>
  #include <WebServer.h>
  #include <ArduinoJson.h>
#elif __has_include("../../include/esp32_ide_stubs.h")
  #include "../../include/esp32_ide_stubs.h"
#elif __has_include("../include/esp32_ide_stubs.h")
  #include "../include/esp32_ide_stubs.h"
#elif __has_include("esp32_ide_stubs.h")
  #include "esp32_ide_stubs.h"
#endif

#if __has_include("config.h")
  #include "config.h"
#elif __has_include("../include/config.h")
  #include "../include/config.h"
#endif

class WiFiServerManager {
public:
    static void init(
        const char* apSsid = "AgriGuard-Robot",
        const char* apPass = "agri12345password",
        const char* staSsid = "",
        const char* staPass = ""
    );

    static void handleClient();
    static String buildTelemetryJson();
    static String buildStatusJson();
    static bool isConnectedSTA();
    static IPAddress getActiveIP();

private:
    static WebServer _server;
    static bool _staConnected;

    // Route Handlers
    static void handleRoot();
    static void handleStatus();
    static void handleHeartbeat();
    static void handleTelemetry();
    static void handleCommand();
    static void handleNotFound();
};
