#if __has_include("soil_moisture.h")
  #include "soil_moisture.h"
#elif __has_include("../include/soil_moisture.h")
  #include "../include/soil_moisture.h"
#endif

SoilMoistureData SoilMoistureManager::latest = { 42.0f, 2400, "NORMAL", true };
unsigned long SoilMoistureManager::lastSampleMs = 0;

void SoilMoistureManager::init() {
    pinMode(PIN_SOIL_ADC, INPUT);
}

int SoilMoistureManager::readRawADC() {
    int sum = 0;
    for (int i = 0; i < 8; i++) {
        sum += analogRead(PIN_SOIL_ADC);
        delayMicroseconds(40);
    }
    return sum / 8;
}

float SoilMoistureManager::readMoisturePercent() {
    int raw = readRawADC();
    float moisture = (float)(ADC_DRY - raw) / (float)(ADC_DRY - ADC_WET) * 100.0f;
    return constrain(moisture, 0.0f, 100.0f);
}

void SoilMoistureManager::update() {
    unsigned long now = millis();
    if (now - lastSampleMs < 500) return; // Sample at 2 Hz
    lastSampleMs = now;

    int raw = readRawADC();
    float pct = (float)(ADC_DRY - raw) / (float)(ADC_DRY - ADC_WET) * 100.0f;
    pct = constrain(pct, 0.0f, 100.0f);

    latest.percentage = pct;
    latest.raw_adc = raw;
    latest.valid = (raw > 500 && raw < 4000);

    if (pct >= 70.0f) {
        latest.status = "WET";
    } else if (pct >= 40.0f) {
        latest.status = "NORMAL";
    } else {
        latest.status = "DRY";
    }
}

SoilMoistureData SoilMoistureManager::getReadings() {
    return latest;
}
