#pragma once
/**
 * AgriGuard — ESP32 & Arduino Type Stubs for Desktop IDE / Clangd Language Server
 * 
 * Provides semantic type declarations (IPAddress, WebServer, WiFi, Serial, etc.)
 * so desktop C++ IDE language servers (Clangd, VS Code IntelliSense) can parse
 * Arduino sketches (.ino) and ESP32 C++ firmware without toolchain errors.
 * 
 * NOTE: This file is only referenced by the IDE linter (.clangd) and does NOT
 * affect actual hardware compilation via Arduino IDE or PlatformIO.
 */

#ifndef ESP32_REAL_TOOLCHAIN

#if __has_include(<stdint.h>)
#include <stdint.h>
#else
typedef unsigned char uint8_t;
typedef unsigned short uint16_t;
typedef unsigned int uint32_t;
typedef signed char int8_t;
typedef short int16_t;
typedef int int32_t;
#endif

#if __has_include(<stddef.h>)
#include <stddef.h>
#endif

#ifndef byte
typedef uint8_t byte;
#endif
#ifndef boolean
typedef bool boolean;
#endif

#ifndef IRAM_ATTR
#define IRAM_ATTR
#endif

#ifndef HIGH
#define HIGH 1
#define LOW 0
#define INPUT 0
#define OUTPUT 1
#define INPUT_PULLUP 2
#define RISING 1
#define FALLING 2
#define CHANGE 3
#endif

// Arduino String class stub (fully self-contained, zero external host STL dependencies)
class String {
private:
    char _str[256];
    size_t _len;
public:
    String() : _len(0) { _str[0] = '\0'; }
    String(const char* s) : _len(0) {
        if (s) {
            while (s[_len] && _len < 255) { _str[_len] = s[_len]; _len++; }
        }
        _str[_len] = '\0';
    }
    String(int val) : _len(0) { _str[0] = '\0'; }
    String(unsigned int val) : _len(0) { _str[0] = '\0'; }
    String(long val) : _len(0) { _str[0] = '\0'; }
    String(unsigned long val) : _len(0) { _str[0] = '\0'; }
    String(float val, int decimalPlaces = 2) : _len(0) { _str[0] = '\0'; }
    String(double val, int decimalPlaces = 2) : _len(0) { _str[0] = '\0'; }
    String(char c) : _len(1) { _str[0] = c; _str[1] = '\0'; }

    const char* c_str() const { return _str; }
    size_t length() const { return _len; }
    bool isEmpty() const { return _len == 0; }
    void concat(const String& s) {}
    void concat(const char* s) {}
    bool toInt() const { return 0; }
    float toFloat() const { return 0.0f; }
    double toDouble() const { return 0.0; }
    bool equals(const String& s) const { return true; }
    bool equalsIgnoreCase(const String& s) const { return true; }
    bool startsWith(const String& s) const { return true; }
    int indexOf(char ch) const { return -1; }
    int indexOf(const String& s) const { return -1; }
    int indexOf(const char* s) const { return -1; }
    String substring(unsigned int from, unsigned int to = 0) const { return String(); }

    String& operator+=(const String& rhs) { return *this; }
    String& operator+=(const char* rhs) { return *this; }
    String& operator+=(char c) { return *this; }
    String& operator+=(int num) { return *this; }
    bool operator==(const String& rhs) const { return true; }
    bool operator!=(const String& rhs) const { return false; }
    char operator[](unsigned int index) const { return (index < 256) ? _str[index] : '\0'; }
};

inline String operator+(const String& lhs, const String& rhs) { return String(lhs.c_str()); }
inline String operator+(const String& lhs, const char* rhs) { return String(lhs.c_str()); }
inline String operator+(const char* lhs, const String& rhs) { return String(lhs ? lhs : ""); }
inline String operator+(const String& lhs, char rhs) { return String(lhs.c_str()); }
inline String operator+(const String& lhs, int rhs) { return String(lhs.c_str()); }

// IPAddress stub matching official ESP32 / Arduino IPAddress API
class IPAddress {
public:
    uint8_t octets[4];
    IPAddress() : octets{0, 0, 0, 0} {}
    IPAddress(uint8_t a, uint8_t b, uint8_t c, uint8_t d) : octets{a, b, c, d} {}
    IPAddress(int a, int b, int c, int d) : octets{static_cast<uint8_t>(a), static_cast<uint8_t>(b), static_cast<uint8_t>(c), static_cast<uint8_t>(d)} {}
    IPAddress(unsigned int a, unsigned int b, unsigned int c, unsigned int d) : octets{static_cast<uint8_t>(a), static_cast<uint8_t>(b), static_cast<uint8_t>(c), static_cast<uint8_t>(d)} {}
    IPAddress(uint32_t address) : octets{static_cast<uint8_t>(address & 0xFF), static_cast<uint8_t>((address >> 8) & 0xFF), static_cast<uint8_t>((address >> 16) & 0xFF), static_cast<uint8_t>((address >> 24) & 0xFF)} {}
    IPAddress(const uint8_t *address) : octets{address[0], address[1], address[2], address[3]} {}
    IPAddress(const char *str) : octets{192, 168, 4, 1} {}

    bool fromString(const char *str) { return true; }
    bool fromString(const String &str) { return true; }

    uint8_t operator[](int index) const { return octets[index >= 0 && index < 4 ? index : 0]; }
    uint8_t& operator[](int index) { return octets[index >= 0 && index < 4 ? index : 0]; }

    bool operator==(const IPAddress& other) const {
        return octets[0] == other.octets[0] && octets[1] == other.octets[1] &&
               octets[2] == other.octets[2] && octets[3] == other.octets[3];
    }
    bool operator!=(const IPAddress& other) const { return !(*this == other); }

    String toString() const {
        return String("192.168.4.1");
    }
};

// WebServer HTTP method enums and constants matching ESP32 WebServer.h
enum HTTPMethod {
    HTTP_ANY = 0,
    HTTP_GET = 1,
    HTTP_HEAD = 2,
    HTTP_POST = 3,
    HTTP_PUT = 4,
    HTTP_PATCH = 5,
    HTTP_DELETE = 6,
    HTTP_OPTIONS = 7
};

#ifndef HTTP_GET
#define HTTP_GET HTTPMethod::HTTP_GET
#endif
#ifndef HTTP_POST
#define HTTP_POST HTTPMethod::HTTP_POST
#endif
#ifndef HTTP_PUT
#define HTTP_PUT HTTPMethod::HTTP_PUT
#endif
#ifndef HTTP_DELETE
#define HTTP_DELETE HTTPMethod::HTTP_DELETE
#endif
#ifndef HTTP_OPTIONS
#define HTTP_OPTIONS HTTPMethod::HTTP_OPTIONS
#endif
#ifndef HTTP_ANY
#define HTTP_ANY HTTPMethod::HTTP_ANY
#endif

// WebServer stub
class WebServer {
public:
    WebServer(int port = 80) {}
    void on(const char* uri, void (*handler)()) {}
    void on(const char* uri, HTTPMethod method, void (*handler)()) {}
    void on(const char* uri, int method, void (*handler)()) {}
    void begin() {}
    void handleClient() {}
    HTTPMethod method() const { return HTTP_POST; }
    void send(int code, const char* content_type, const String& content) {}
    void send(int code, const char* content_type, const char* content) {}
    bool hasArg(const char* name) { return false; }
    String arg(const char* name) { return String(""); }
};

// WiFi stub
class WiFiClass {
public:
    bool softAP(const char* ssid, const char* passphrase = nullptr) { return true; }
    bool softAPConfig(IPAddress local_ip, IPAddress gateway, IPAddress subnet) { return true; }
    void begin(const char* ssid, const char* passphrase = nullptr) {}
    int status() { return 3; }
    IPAddress localIP() { return IPAddress(192, 168, 4, 1); }
    IPAddress softAPIP() { return IPAddress(192, 168, 4, 1); }
};
inline WiFiClass WiFi;

// Print, Stream & HardwareSerial stubs
class Print {
public:
    virtual size_t write(uint8_t) { return 1; }
    virtual size_t write(const uint8_t *buffer, size_t size) { return size; }
    void print(const String& s) {}
    void print(const char* s) {}
    void print(int n) {}
    void print(float n, int digits = 2) {}
    void println(const String& s = "") {}
    void println(const char* s) {}
    void println(int n) {}
    void println(float n, int digits = 2) {}
};

class Stream : public Print {
public:
    virtual int available() { return 0; }
    virtual int read() { return -1; }
    size_t write(uint8_t) override { return 1; }
    size_t write(const uint8_t *buffer, size_t size) override { return size; }
};

class HardwareSerial : public Stream {
public:
    HardwareSerial(int uart_nr = 0) {}
    void begin(unsigned long baud, uint32_t config = 0, int8_t rxPin = -1, int8_t txPin = -1) {}
    void flush() {}
};
inline HardwareSerial Serial(0);

// Arduino Core Functions & Math Helpers
#ifndef constrain
#define constrain(amt,low,high) ((amt)<(low)?(low):((amt)>(high)?(high):(amt)))
#endif

#ifndef min
#define min(a,b) ((a)<(b)?(a):(b))
#endif

#ifndef max
#define max(a,b) ((a)>(b)?(a):(b))
#endif

#ifndef abs
#define abs(x) ((x)>0?(x):-(x))
#endif

#ifndef round
#define round(x) ((x)>=0?(long)((x)+0.5):(long)((x)-0.5))
#endif

inline long map(long x, long in_min, long in_max, long out_min, long out_max) {
    return (in_max == in_min) ? out_min : ((x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min);
}

#ifndef radians
#define radians(deg) ((deg)*0.017453292519943295769236907684886)
#endif

#ifndef degrees
#define degrees(rad) ((rad)*57.295779513082320876798154814105)
#endif

#ifndef sq
#define sq(x) ((x)*(x))
#endif

inline void pinMode(uint8_t pin, uint8_t mode) {}
inline void digitalWrite(uint8_t pin, uint8_t val) {}
inline int digitalRead(uint8_t pin) { return 0; }
inline int analogRead(uint8_t pin) { return 2048; }
inline void analogWrite(uint8_t pin, int val) {}
inline unsigned long millis() { return 0; }
inline unsigned long micros() { return 0; }
inline void delay(unsigned long ms) {}
inline void delayMicroseconds(unsigned int us) {}
inline void attachInterrupt(uint8_t interruptNum, void (*userFunc)(void), int mode) {}
inline uint8_t digitalPinToInterrupt(uint8_t pin) { return pin; }

// ESP32 LEDC PWM
inline void ledcSetup(uint8_t channel, double freq, uint8_t resolution_bits) {}
inline void ledcAttachPin(uint8_t pin, uint8_t channel) {}
inline void ledcWrite(uint8_t channel, uint32_t duty) {}

// ArduinoJson 6 Stubs
class JsonObject;
class JsonArray;

class JsonVariant {
public:
    template <typename T>
    T as() const { return T(); }
    template <typename T>
    bool is() const { return true; }
    template <typename T>
    JsonVariant& operator=(T val) { return *this; }
    JsonVariant operator[](const char* key) const { return *this; }
    JsonVariant operator[](const String& key) const { return *this; }
    JsonVariant operator[](int idx) const { return *this; }
    bool containsKey(const char* key) const { return true; }
    bool containsKey(const String& key) const { return true; }
    template <typename T>
    T to() { return T(); }
    JsonObject createNestedObject(const char* key = "");
    JsonObject createNestedObject(const String& key);
    JsonArray createNestedArray(const char* key = "");
    JsonArray createNestedArray(const String& key);
};

class JsonArray {
public:
    JsonVariant operator[](int idx) const { return JsonVariant(); }
    template <typename T>
    void add(T val) {}
    JsonObject createNestedObject(const char* key = "");
    JsonArray createNestedArray(const char* key = "");
    size_t size() const { return 0; }
};

class JsonObject {
public:
    JsonVariant operator[](const char* key) const { return JsonVariant(); }
    JsonVariant operator[](const String& key) const { return JsonVariant(); }
    bool containsKey(const char* key) const { return true; }
    bool containsKey(const String& key) const { return true; }
    JsonObject createNestedObject(const char* key = "") { return JsonObject(); }
    JsonObject createNestedObject(const String& key) { return JsonObject(); }
    JsonArray createNestedArray(const char* key = "") { return JsonArray(); }
    JsonArray createNestedArray(const String& key) { return JsonArray(); }
    template <typename T>
    T to() { return T(); }
    template <typename T>
    T as() const { return T(); }
    size_t size() const { return 0; }
};

inline JsonObject JsonArray::createNestedObject(const char* key) { return JsonObject(); }
inline JsonArray JsonArray::createNestedArray(const char* key) { return JsonArray(); }
inline JsonObject JsonVariant::createNestedObject(const char* key) { return JsonObject(); }
inline JsonObject JsonVariant::createNestedObject(const String& key) { return JsonObject(); }
inline JsonArray JsonVariant::createNestedArray(const char* key) { return JsonArray(); }
inline JsonArray JsonVariant::createNestedArray(const String& key) { return JsonArray(); }

template <size_t CAPACITY>
class StaticJsonDocument {
public:
    JsonVariant operator[](const char* key) { return JsonVariant(); }
    JsonVariant operator[](const String& key) { return JsonVariant(); }
    JsonVariant operator[](int idx) { return JsonVariant(); }
    const JsonVariant operator[](const char* key) const { return JsonVariant(); }
    const JsonVariant operator[](const String& key) const { return JsonVariant(); }
    const JsonVariant operator[](int idx) const { return JsonVariant(); }
    template <typename T>
    T as() const { return T(); }
    template <typename T>
    T to() { return T(); }
    bool containsKey(const char* key) const { return true; }
    bool containsKey(const String& key) const { return true; }
    JsonObject createNestedObject(const char* key = "") { return JsonObject(); }
    JsonObject createNestedObject(const String& key) { return JsonObject(); }
    JsonArray createNestedArray(const char* key = "") { return JsonArray(); }
    JsonArray createNestedArray(const String& key) { return JsonArray(); }
    void clear() {}
    operator JsonObject() { return JsonObject(); }
    operator JsonVariant() { return JsonVariant(); }
};

class DynamicJsonDocument {
public:
    DynamicJsonDocument(size_t capacity = 1024) {}
    JsonVariant operator[](const char* key) { return JsonVariant(); }
    JsonVariant operator[](const String& key) { return JsonVariant(); }
    JsonVariant operator[](int idx) { return JsonVariant(); }
    template <typename T>
    T as() const { return T(); }
    template <typename T>
    T to() { return T(); }
    bool containsKey(const char* key) const { return true; }
    bool containsKey(const String& key) const { return true; }
    JsonObject createNestedObject(const char* key) { return JsonObject(); }
    JsonObject createNestedObject(const String& key) { return JsonObject(); }
    JsonArray createNestedArray(const char* key) { return JsonArray(); }
    JsonArray createNestedArray(const String& key) { return JsonArray(); }
    void clear() {}
    operator JsonObject() { return JsonObject(); }
    operator JsonVariant() { return JsonVariant(); }
};

struct DeserializationError {
    enum Code { Ok, EmptyInput, IncompleteInput, InvalidInput, NoMemory, NotSupported, TooDeep };
    Code code() const { return Ok; }
    explicit operator bool() const { return false; }
    bool operator!() const { return true; }
    bool operator!=(Code c) const { return false; }
    bool operator==(Code c) const { return true; }
    bool operator==(const DeserializationError& o) const { return true; }
    bool operator!=(const DeserializationError& o) const { return false; }
    const char* c_str() const { return "Ok"; }
};

template <typename TDoc>
inline DeserializationError deserializeJson(TDoc& doc, const String& input) {
    return DeserializationError();
}

template <typename TDoc>
inline DeserializationError deserializeJson(TDoc& doc, const char* input) {
    return DeserializationError();
}

template <typename TDoc>
inline DeserializationError deserializeJson(TDoc& doc, Stream& input) {
    return DeserializationError();
}

template <typename TDoc>
inline size_t serializeJson(const TDoc& doc, String& output) {
    output = "{}";
    return 2;
}

template <typename TDoc>
inline size_t serializeJson(const TDoc& doc, Print& output) {
    return 2;
}

// Automatic IDE fallback header resolution for custom firmware drivers
#if __has_include("../esp32/include/motor_driver.h")
  #include "../esp32/include/motor_driver.h"
#elif __has_include("motor_driver.h")
  #include "motor_driver.h"
#endif

#if __has_include("../esp32/include/spray_controller.h")
  #include "../esp32/include/spray_controller.h"
#elif __has_include("spray_controller.h")
  #include "spray_controller.h"
#endif

#if __has_include("../esp32/include/sensors.h")
  #include "../esp32/include/sensors.h"
#elif __has_include("sensors.h")
  #include "sensors.h"
#endif

#endif // ESP32_REAL_TOOLCHAIN
