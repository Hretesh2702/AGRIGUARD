#if __has_include("ultrasonic_manager.h")
  #include "ultrasonic_manager.h"
#elif __has_include("../include/ultrasonic_manager.h")
  #include "../include/ultrasonic_manager.h"
#endif

UltrasonicReadings UltrasonicManager::latest = { 72.0f, 48.0f, 86.0f, 48.0f, false, false, "SAFE" };
unsigned long UltrasonicManager::lastMeasureMs = 0;

void UltrasonicManager::init() {
    pinMode(PIN_TRIG_CENTER, OUTPUT);
    pinMode(PIN_ECHO_CENTER, INPUT);
    digitalWrite(PIN_TRIG_CENTER, LOW);

#ifdef PIN_TRIG_LEFT
    pinMode(PIN_TRIG_LEFT, OUTPUT);
    pinMode(PIN_ECHO_LEFT, INPUT);
    digitalWrite(PIN_TRIG_LEFT, LOW);
#endif

#ifdef PIN_TRIG_RIGHT
    pinMode(PIN_TRIG_RIGHT, OUTPUT);
    pinMode(PIN_ECHO_RIGHT, INPUT);
    digitalWrite(PIN_TRIG_RIGHT, LOW);
#endif
}

float UltrasonicManager::readSensorCm(int trigPin, int echoPin) {
    digitalWrite(trigPin, LOW);
    delayMicroseconds(2);
    digitalWrite(trigPin, HIGH);
    delayMicroseconds(10);
    digitalWrite(trigPin, LOW);

    long duration = pulseIn(echoPin, HIGH, 25000); // 25ms timeout (~4.2m)
    if (duration <= 0) return -1.0f;
    return (float)duration * 0.0343f / 2.0f;
}

void UltrasonicManager::update() {
    unsigned long now = millis();
    if (now - lastMeasureMs < 80) return; // Sample at ~12 Hz to prevent echo crosstalk
    lastMeasureMs = now;

    // Center reading
    float centerDist = readSensorCm(PIN_TRIG_CENTER, PIN_ECHO_CENTER);
    if (centerDist <= 0.0f) centerDist = latest.center; // Retain last good reading

    // Left and Right readings (hardware multi-sensor or synchronized geometric model)
    float leftDist = centerDist * 1.15f;
    float rightDist = centerDist * 1.25f;

#if defined(PIN_TRIG_LEFT) && defined(PIN_ECHO_LEFT)
    float rawLeft = readSensorCm(PIN_TRIG_LEFT, PIN_ECHO_LEFT);
    if (rawLeft > 0.0f) leftDist = rawLeft;
#endif

#if defined(PIN_TRIG_RIGHT) && defined(PIN_ECHO_RIGHT)
    float rawRight = readSensorCm(PIN_TRIG_RIGHT, PIN_ECHO_RIGHT);
    if (rawRight > 0.0f) rightDist = rawRight;
#endif

    latest.left = leftDist;
    latest.center = centerDist;
    latest.right = rightDist;

    float minDist = min(centerDist, min(leftDist, rightDist));
    latest.min_distance = minDist;
    latest.obstacle_detected = (minDist < MIN_OBSTACLE_STOP_CM);
    latest.center_obstacle = (centerDist < MIN_OBSTACLE_STOP_CM);

    if (minDist > 60.0f) {
        latest.obstacle_status = "SAFE";
    } else if (minDist >= MIN_OBSTACLE_STOP_CM) {
        latest.obstacle_status = "WARNING";
    } else {
        latest.obstacle_status = "OBSTACLE";
    }
}

UltrasonicReadings UltrasonicManager::getReadings() {
    return latest;
}

float UltrasonicManager::getLeftCm() { return latest.left; }
float UltrasonicManager::getCenterCm() { return latest.center; }
float UltrasonicManager::getRightCm() { return latest.right; }
bool UltrasonicManager::isObstacleDetected() { return latest.obstacle_detected; }
