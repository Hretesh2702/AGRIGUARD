/**
 * AgriGuard Simulator — Transparent Environmental & Carbon Impact Engine
 *
 * Compares:
 *   CONVENTIONAL BROADCAST APPROACH vs. AGRIGUARD TARGETED PRECISION APPROACH
 *
 * NOTE: All values produced are clearly designated as SIMULATION / ESTIMATE.
 * Emission factors and operational baselines are fully transparent, documented,
 * and user-configurable.
 */

import { CarbonImpactModel } from './types';

export interface EmissionFactorConfig {
  chemicalProductionKgCO2ePerLiter: number; // GHG intensity of agrochemical manufacturing
  tractorDieselKgCO2ePerLiter: number;     // Conventional diesel tractor fuel combustion
  gridElectricityKgCO2ePerKwh: number;     // Grid electricity for robot battery recharge
  conventionalBroadcastMlPerM2: number;    // Blanket field application rate
  totalFieldAreaM2: number;                // Virtual simulated field plot area
}

export const DEFAULT_EMISSION_CONFIG: EmissionFactorConfig = {
  // Reference: Typical LCA agrochemical synthesis estimate (configurable)
  chemicalProductionKgCO2ePerLiter: 10.5,
  tractorDieselKgCO2ePerLiter: 2.68,
  gridElectricityKgCO2ePerKwh: 0.475,
  conventionalBroadcastMlPerM2: 45.0,
  totalFieldAreaM2: 120.0, // 10m x 12m simulated plot
};

export class CarbonImpactCalculator {
  private config: EmissionFactorConfig;

  constructor(customConfig?: Partial<EmissionFactorConfig>) {
    this.config = { ...DEFAULT_EMISSION_CONFIG, ...customConfig };
  }

  public setConfig(updated: Partial<EmissionFactorConfig>) {
    this.config = { ...this.config, ...updated };
  }

  public getConfig(): EmissionFactorConfig {
    return { ...this.config };
  }

  /**
   * Calculates comprehensive comparative impact
   * @param totalTreatedPlants Number of diseased plants that received precision treatment
   * @param totalPlantsInField Total plant population in the field
   * @param precisionChemicalUsedMl Real precision volume applied in simulation
   * @param robotDriveDurationSec Total elapsed driving/actuation seconds
   */
  public calculate(
    totalTreatedPlants: number,
    totalPlantsInField: number,
    precisionChemicalUsedMl: number,
    robotDriveDurationSec: number
  ): CarbonImpactModel {
    const {
      chemicalProductionKgCO2ePerLiter,
      tractorDieselKgCO2ePerLiter,
      gridElectricityKgCO2ePerKwh,
      conventionalBroadcastMlPerM2,
      totalFieldAreaM2,
    } = this.config;

    // 1. Conventional Baseline: Blanket broadcast over entire field plot
    const conventionalBaselineMl = totalFieldAreaM2 * conventionalBroadcastMlPerM2;

    // 2. Precision AgriGuard Approach: Strictly the sum of targeted plant pulses
    const agriguardPrecisionMl = precisionChemicalUsedMl;

    // 3. Chemical Volume Saved
    const volumeSavedMl = Math.max(0, conventionalBaselineMl - agriguardPrecisionMl);
    const percentageReduction =
      conventionalBaselineMl > 0 ? ((volumeSavedMl / conventionalBaselineMl) * 100) : 0;

    // 4. Area & Plant Accounting
    // Each precision spray treats roughly a 0.25 m2 micro-canopy
    const areaTreatedM2 = Math.min(totalFieldAreaM2, totalTreatedPlants * 0.25);
    const nonTargetPlantsSparedCount = Math.max(0, totalPlantsInField - totalTreatedPlants);

    // 5. Robot Electrical Energy Consumption
    // Prototype 12V platform draws ~35W average while driving & spraying
    const robotKwAverage = 0.035;
    const robotHours = robotDriveDurationSec / 3600;
    const robotEnergyKwh = Number((robotKwAverage * robotHours).toFixed(4));

    // 6. Conventional Greenhouse Gas Emissions (Chemical + Tractor fuel)
    // Conventional tractor passes burn ~0.04L diesel for a 120m2 plot
    const conventionalDieselLiters = (totalFieldAreaM2 / 10000.0) * 4.2;
    const convChemicalEmissionsKg = (conventionalBaselineMl / 1000.0) * chemicalProductionKgCO2ePerLiter;
    const convTractorEmissionsKg = conventionalDieselLiters * tractorDieselKgCO2ePerLiter;
    const conventionalFootprintKgCO2e = Number((convChemicalEmissionsKg + convTractorEmissionsKg).toFixed(3));

    // 7. AgriGuard Precision Emissions (Targeted Chemical + Battery Recharging)
    const agriChemicalEmissionsKg = (agriguardPrecisionMl / 1000.0) * chemicalProductionKgCO2ePerLiter;
    const agriElectricityEmissionsKg = robotEnergyKwh * gridElectricityKgCO2ePerKwh;
    const agriguardFootprintKgCO2e = Number((agriChemicalEmissionsKg + agriElectricityEmissionsKg).toFixed(3));

    // 8. Estimated Avoided Emissions (CO2e)
    const estimatedAvoidedCO2eKg = Number(
      Math.max(0, conventionalFootprintKgCO2e - agriguardFootprintKgCO2e).toFixed(3)
    );

    return {
      chemicalProductionEmissionFactorKgPerL: chemicalProductionKgCO2ePerLiter,
      applicationElectricityFactorKgPerKwh: gridElectricityKgCO2ePerKwh,
      broadcastAreaDoseMlPerM2: conventionalBroadcastMlPerM2,
      conventionalBaselineMl: Math.round(conventionalBaselineMl),
      agriguardPrecisionMl: Math.round(agriguardPrecisionMl),
      volumeSavedMl: Math.round(volumeSavedMl),
      percentageReduction: Number(percentageReduction.toFixed(1)),
      areaTreatedM2: Number(areaTreatedM2.toFixed(1)),
      robotEnergyKwh,
      plantsTreatedCount: totalTreatedPlants,
      nonTargetPlantsSparedCount,
      conventionalFootprintKgCO2e,
      agriguardFootprintKgCO2e,
      estimatedAvoidedCO2eKg,
    };
  }
}

export const carbonCalculator = new CarbonImpactCalculator();
