#if __has_include("motor_driver.h")
  #include "motor_driver.h"
#elif __has_include("../include/motor_driver.h")
  #include "../include/motor_driver.h"
#endif

MotorState MotorDriver::currentState = MotorState::STOPPED;
int MotorDriver::currentSpeed = 0;

void MotorDriver::init() {
    pinMode(PIN_MOTOR_LEFT_IN1, OUTPUT);
    pinMode(PIN_MOTOR_LEFT_IN2, OUTPUT);
    pinMode(PIN_MOTOR_RIGHT_IN3, OUTPUT);
    pinMode(PIN_MOTOR_RIGHT_IN4, OUTPUT);

    // Attach hardware PWM via LEDC
    ledcAttachPin(PIN_MOTOR_LEFT_PWM, PWM_CHANNEL_LEFT);
    ledcAttachPin(PIN_MOTOR_RIGHT_PWM, PWM_CHANNEL_RIGHT);
    ledcSetup(PWM_CHANNEL_LEFT, PWM_FREQUENCY_HZ, PWM_RESOLUTION_BITS);
    ledcSetup(PWM_CHANNEL_RIGHT, PWM_FREQUENCY_HZ, PWM_RESOLUTION_BITS);

    stop();
}

void MotorDriver::setSpeedAndDirection(int leftSpeed, bool leftFwd, int rightSpeed, bool rightFwd) {
    leftSpeed = constrain(leftSpeed, 0, 255);
    rightSpeed = constrain(rightSpeed, 0, 255);

    // Left Motors
    digitalWrite(PIN_MOTOR_LEFT_IN1, leftFwd ? HIGH : LOW);
    digitalWrite(PIN_MOTOR_LEFT_IN2, leftFwd ? LOW : HIGH);
    ledcWrite(PWM_CHANNEL_LEFT, leftSpeed);

    // Right Motors
    digitalWrite(PIN_MOTOR_RIGHT_IN3, rightFwd ? HIGH : LOW);
    digitalWrite(PIN_MOTOR_RIGHT_IN4, rightFwd ? LOW : HIGH);
    ledcWrite(PWM_CHANNEL_RIGHT, rightSpeed);

    currentSpeed = (leftSpeed + rightSpeed) / 2;
}

void MotorDriver::moveForward(int speed) {
    setSpeedAndDirection(speed, true, speed, true);
    currentState = MotorState::MOVING_FORWARD;
}

void MotorDriver::moveBackward(int speed) {
    setSpeedAndDirection(speed, false, speed, false);
    currentState = MotorState::MOVING_BACKWARD;
}

void MotorDriver::turnLeft(int speed) {
    // Skid-steer pivot: left reverse, right forward
    setSpeedAndDirection(speed, false, speed, true);
    currentState = MotorState::TURNING_LEFT;
}

void MotorDriver::turnRight(int speed) {
    // Skid-steer pivot: left forward, right reverse
    setSpeedAndDirection(speed, true, speed, false);
    currentState = MotorState::TURNING_RIGHT;
}

void MotorDriver::stop() {
    digitalWrite(PIN_MOTOR_LEFT_IN1, LOW);
    digitalWrite(PIN_MOTOR_LEFT_IN2, LOW);
    digitalWrite(PIN_MOTOR_RIGHT_IN3, LOW);
    digitalWrite(PIN_MOTOR_RIGHT_IN4, LOW);
    ledcWrite(PWM_CHANNEL_LEFT, 0);
    ledcWrite(PWM_CHANNEL_RIGHT, 0);
    currentSpeed = 0;
    currentState = MotorState::STOPPED;
}

void MotorDriver::emergencyHalt() {
    stop();
    currentState = MotorState::EMERGENCY_HALTED;
}

MotorState MotorDriver::getState() {
    return currentState;
}

const char* MotorDriver::getStateString() {
    switch (currentState) {
        case MotorState::STOPPED: return "STOPPED";
        case MotorState::MOVING_FORWARD: return "MOVING_FORWARD";
        case MotorState::MOVING_BACKWARD: return "MOVING_BACKWARD";
        case MotorState::TURNING_LEFT: return "TURNING_LEFT";
        case MotorState::TURNING_RIGHT: return "TURNING_RIGHT";
        case MotorState::EMERGENCY_HALTED: return "EMERGENCY_HALTED";
        default: return "UNKNOWN";
    }
}

int MotorDriver::getCurrentSpeed() {
    return currentSpeed;
}
