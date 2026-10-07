/**
 * AgriGuard Digital Twin — Type Definitions & Constants
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
  { id: 'chassis', label: 'Chassis & Frame', color: '#10b981', description: '4WD Aluminum & Composite Frame' },
  { id: 'camera', label: 'RGB Camera Mount', color: '#38bdf8', description: 'External Crop Pathology Inspection' },
  { id: 'ultrasonic', label: 'Ultrasonic Sensors', color: '#f59e0b', description: 'Left, Center, Right Proximity Ranging' },
  { id: 'sprayer', label: 'Precision Spray', color: '#06b6d4', description: 'Pump, Solenoid Valve & Atomizing Nozzle' },
  { id: 'power', label: 'Solar & Battery', color: '#818cf8', description: 'Photovoltaic Array & 12V LiPo Pack' },
  { id: 'sensors', label: 'Agronomic Sensors', color: '#ec4899', description: 'NPK RS485, Soil Moisture, DHT22 & MPU6050' },
];

export const SAFETY_THRESHOLDS = {
  OBSTACLE_CM: 25.0,
  WARNING_CM: 60.0,
  MAX_ULTRASONIC_RANGE_CM: 250.0,
} as const;
