#if __has_include("dht22_manager.h")
  #include "dht22_manager.h"
#elif __has_include("../include/dht22_manager.h")
  #include "../include/dht22_manager.h"
#endif

DHT22Data DHT22Manager::latest = { 29.4f, 74.0f, true };
unsigned long DHT22Manager::lastSampleMs = 0;

#if __has_include(<DHT.h>)
DHT DHT22Manager::dht(PIN_DHT22, DHT22);
#endif

void DHT22Manager::init() {
#if __has_include(<DHT.h>)
    dht.begin();
#endif
}

void DHT22Manager::update() {
    unsigned long now = millis();
    if (now - lastSampleMs < 2000) return; // DHT22 requires minimum 2s between reads
    lastSampleMs = now;

#if __has_include(<DHT.h>)
    float t = dht.readTemperature();
    float h = dht.readHumidity();

    if (!isnan(t) && !isnan(h) && t > -40.0f && t < 80.0f && h >= 0.0f && h <= 100.0f) {
        latest.temperature = t;
        latest.humidity = h;
        latest.valid = true;
    }
#endif
}

DHT22Data DHT22Manager::getReadings() { return latest; }
float DHT22Manager::getTemperature() { return latest.temperature; }
float DHT22Manager::getHumidity() { return latest.humidity; }
