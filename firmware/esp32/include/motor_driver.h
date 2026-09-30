#pragma once

#include <Arduino.h>
#include "config.h"

enum class MotorState {
    STOPPED,
    MOVING_FORWARD,
    MOVING_BACKWARD,
    TURNING_LEFT,
    TURNING_RIGHT,
    EMERGENCY_HALTED
};

class MotorDriver {
public:
    static void init();
    static void setSpeedAndDirection(int leftSpeed, bool leftFwd, int rightSpeed, bool rightFwd);
    static void moveForward(int speed);
    static void moveBackward(int speed);
    static void turnLeft(int speed);
    static void turnRight(int speed);
    static void stop();
    static void emergencyHalt();

    static MotorState getState();
    static const char* getStateString();
    static int getCurrentSpeed();

private:
    static MotorState currentState;
    static int currentSpeed;
};
