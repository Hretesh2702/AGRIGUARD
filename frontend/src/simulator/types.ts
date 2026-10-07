/**
 * AgriGuard Digital Twin & 3D Farm Simulator — Type Definitions
 *
 * Provides:
 * - Plant and zone models
 * - Simulation telemetry (strictly aligned with AgriGuard TelemetryData)
 * - Environmental / Carbon impact calculation structures
 * - Scenario preset identifiers
 * - Event log schemas
 */

export type PlantHealthState = 'HEALTHY' | 'WARNING' | 'DISEASED' | 'TREATED';

export interface FarmPlant {
  id: string;
  row: number;
  col: number;
  position: { x: number; z: number };
  state: PlantHealthState;
  cropType: string;
  variety: string;
  healthScore: number; // 0 - 100
  disease?: {
    name: string;
    pathogen: string;
    confidence: number; // 0.0 - 1.0
    symptoms: string;
    recommendedTreatment: string;
    chemicalProduct: string;
    recommendedDoseMl: number;
    inventoryAvailable: boolean;
  };
  treatmentHistory?: {
    timestamp: string;
    action: string;
    dosageMl: number;
    operator: string;
    notes: string;
  }[];
}

export interface FieldZone {
  id: string;
  name: string;
  bounds: { minX: number; maxX: number; minZ: number; maxZ: number };
  soilMoisturePct: number;
  npk: { n: number; p: number; k: number };
  temperatureC: number;
  humidityPct: number;
  soilCondition: 'OPTIMAL' | 'DRY' | 'SATURATED' | 'COMPACTED';
}

export interface ObstacleObject {
  id: string;
  type: 'ROCK' | 'CRATE' | 'FENCE_POST' | 'IRRIGATION_BOX';
  position: { x: number; y: number; z: number };
  radius: number;
  height: number;
}

export type SimulationMovementCommand = 'FORWARD' | 'BACKWARD' | 'LEFT' | 'RIGHT' | 'STOP';

export interface SimulatorTelemetry {
  mode: 'SIMULATION';
  movement: SimulationMovementCommand;
  speedPwm: number;
  position: { x: number; z: number };
  headingDeg: number;
  ultrasonic: {
    left: number; // cm
    center: number; // cm
    right: number; // cm
  };
  safetyStopActive: boolean;
  buzzerState: 'OFF' | 'WARNING' | 'OBSTACLE';
  currentZone: FieldZone;
  soilMoisturePct: number;
  npk: { n: number; p: number; k: number };
  dht22: {
    temperature: number;
    humidity: number;
  };
  mpu6050: {
    accel_x: number;
    accel_y: number;
    accel_z: number;
    gyro_x: number;
    gyro_y: number;
    gyro_z: number;
    pitch_deg: number;
    roll_deg: number;
  };
  pumpState: 'OFF' | 'ON';
  relayState: 'OFF' | 'ON';
  sprayActive: boolean;
  sprayTargetPlantId: string | null;
  detectedPlant?: FarmPlant | null;
}

export interface CarbonImpactModel {
  // Configurable emission factors (transparent estimates)
  chemicalProductionEmissionFactorKgPerL: number; // kg CO2e / Liter of chemical
  applicationElectricityFactorKgPerKwh: number; // kg CO2e / kWh
  broadcastAreaDoseMlPerM2: number; // conventional blanket broadcast dose

  // Real-time calculated metrics
  conventionalBaselineMl: number;
  agriguardPrecisionMl: number;
  volumeSavedMl: number;
  percentageReduction: number;
  areaTreatedM2: number;
  robotEnergyKwh: number;
  plantsTreatedCount: number;
  nonTargetPlantsSparedCount: number;

  // CO2e Footprint estimates (Labeled SIMULATION / ESTIMATE)
  conventionalFootprintKgCO2e: number;
  agriguardFootprintKgCO2e: number;
  estimatedAvoidedCO2eKg: number;
}

export type ScenarioPresetId =
  | 'NORMAL_FIELD'
  | 'OBSTACLE_AHEAD'
  | 'DISEASED_ZONE'
  | 'DRY_SOIL_ZONE'
  | 'PRECISION_SPRAY'
  | 'FULL_DEMO';

export interface SimulatorLogEvent {
  id: string;
  timestamp: string;
  type: 'INFO' | 'NAV' | 'SAFETY' | 'DETECTION' | 'TREATMENT' | 'ALERT';
  message: string;
}
