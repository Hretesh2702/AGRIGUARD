/**
 * AgriGuard Digital Twin — Type Definitions & Constants
 * Faithfully matches the physical prototype construction (White PVC Straddle Frame,
 * White Foam-Board Tray, Breadboard, ESP32, Arduino, L298N, Songle Relay, Solar Panel, etc.)
 */

export type CameraViewPreset = 'isometric' | 'top' | 'front' | 'side';

export type TwinOperationalState =
  | 'IDLE'
  | 'FORWARD'
  | 'BACKWARD'
  | 'LEFT'
  | 'RIGHT'
  | 'STOP'
  | 'OBSTACLE'
  | 'PUMP_ACTIVE'
  | 'DISCONNECTED'
  | 'SIMULATION';

export interface LegendItem {
  id: string;
  label: string;
  color: string;
  description: string;
}

export const TWIN_LEGEND: LegendItem[] = [
  { id: 'pvc_frame', label: 'PVC Straddle Chassis', color: '#f8fafc', description: 'High-clearance white PVC tubular frame with elbows and T-couplings' },
  { id: 'hopper_bed', label: 'Foam-Board Tray', color: '#94a3b8', description: 'White sunpack open electronics deck secured with black zip-ties' },
  { id: 'esp32_arduino', label: 'ESP32 & Arduino', color: '#38bdf8', description: 'ESP32 on breadboard + Arduino Mega/Uno mainboard' },
  { id: 'l298n_driver', label: 'L298N Motor Driver', color: '#ef4444', description: 'Dual H-bridge driver with black extruded finned heatsink' },
  { id: 'relay_spray', label: 'Relay & Spray Bottle', color: '#2563eb', description: '5V Songle relay switching mini pump with clear reservoir bottle' },
  { id: 'ultrasonic', label: 'HC-SR04 Ultrasonics', color: '#f59e0b', description: 'Mounted on front PVC leg & under-chassis with black zip-ties' },
  { id: 'sensors_imu', label: 'DHT & MPU-6050', color: '#10b981', description: 'Wall-mounted DHT sensor & 6-axis gyro/accelerometer' },
  { id: 'solar_battery', label: 'Solar & Battery', color: '#b45309', description: 'Rear bracket photovoltaic panel & 4-cell power pack' },
];

export const SAFETY_THRESHOLDS = {
  OBSTACLE_CM: 25.0,
  WARNING_CM: 60.0,
  MAX_ULTRASONIC_RANGE_CM: 250.0,
} as const;
