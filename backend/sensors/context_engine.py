"""
AgriGuard — Agronomic Context & Plant Health Score Engine
Synthesizes visual pathology with real NPK and microclimate telemetry.
Differentiates nutritional deficiency from fungal blights and flags drought contraindications.
"""

from typing import Dict, Any, Tuple, List
import logging

logger = logging.getLogger(__name__)


class AgronomicContextEngine:
    """
    Evaluates real sensor context to provide decision support.
    Never assumes every yellow/weak leaf is diseased.
    """

    @staticmethod
    def calculate_health_score(
        disease: str,
        confidence: float,
        severity: str,
        sensor_data: Dict[str, Any]
    ) -> Tuple[int, Dict[str, str]]:
        """
        Computes a transparent, explainable 0–100 plant health score.
        Healthy baseline = 100. Deductions are made for disease severity,
        drought stress, and nutrient imbalance.
        """
        breakdown = {
            "disease_impact": "None",
            "water_stress": "Normal",
            "nitrogen_status": "Normal"
        }

        # 1. Base Score from Disease
        if disease == "healthy":
            base_score = 95
        elif severity == "mild":
            base_score = int(82 - (confidence * 12))  # ~70-75
            breakdown["disease_impact"] = f"Mild {disease} (Conf: {int(confidence*100)}%)"
        elif severity == "moderate":
            base_score = int(65 - (confidence * 15))  # ~50-55
            breakdown["disease_impact"] = f"Moderate {disease} (Conf: {int(confidence*100)}%)"
        else: # severe
            base_score = int(45 - (confidence * 20))  # ~25-35
            breakdown["disease_impact"] = f"Severe {disease} defoliation"

        # 2. Water Stress Adjustment (Real Soil Moisture)
        sm = sensor_data.get("soil_moisture", {}).get("moisture_pct")
        if sm is not None:
            if sm < 20.0:
                base_score -= 15
                breakdown["water_stress"] = f"Severe Drought ({sm}% moisture)"
            elif sm < 30.0:
                base_score -= 5
                breakdown["water_stress"] = f"Mild Dehydration ({sm}% moisture)"
            elif sm > 85.0:
                base_score -= 8
                breakdown["water_stress"] = f"Waterlogged Rootzone ({sm}% moisture)"

        # 3. Nitrogen Deficiency Adjustment
        npk = sensor_data.get("npk", {})
        n = npk.get("nitrogen_mg_kg")
        if n is not None:
            if n < 30:
                base_score -= 10
                breakdown["nitrogen_status"] = f"Deficient ({n} mg/kg)"
            elif n < 40:
                base_score -= 4
                breakdown["nitrogen_status"] = f"Low ({n} mg/kg)"

        final_score = max(5, min(100, base_score))
        return final_score, breakdown

    @staticmethod
    def evaluate_correlation(
        disease: str,
        confidence: float,
        sensor_data: Dict[str, Any]
    ) -> Tuple[bool, List[str], str]:
        """
        Cross-checks disease detection against real NPK and moisture.
        Returns:
            - allow_spray (bool)
            - warnings (List[str])
            - diagnostic_verdict (str)
        """
        warnings = []
        allow_spray = True
        verdict = "ACTIONABLE_DISEASE"

        # Check Drought Stress Contraindication
        sm = sensor_data.get("soil_moisture", {}).get("moisture_pct")
        if sm is not None and sm < 20.0:
            allow_spray = False
            verdict = "CONTRAINDICATED_DROUGHT"
            warnings.append(
                f"CONTRAINDICATION: Drought stress detected. Soil volumetric moisture is critically low ({sm}% < 20%). "
                "Applying chemical foliar sprays during severe water stress causes chemical leaf scorch. "
                "Irrigation required before spraying."
            )

        # Check Nitrogen Chlorosis vs Early Blight
        n = sensor_data.get("npk", {}).get("nitrogen_mg_kg")
        if n is not None and n < 35 and disease in ("early_blight", "bacterial_spot") and confidence < 0.75:
            allow_spray = False
            verdict = "SUSPECTED_NUTRIENT_DEFICIENCY"
            warnings.append(
                f"DECISION SUPPORT: Foliar chlorosis strongly correlates with critically low soil Nitrogen ({n} mg/kg). "
                f"Disease confidence ({int(confidence*100)}%) is below definitive threshold. "
                "Chemical fungicide is CONTRAINDICATED. Recommend soil fertigation."
            )

        # Check High Ambient Temperature Phytotoxicity Risk
        temp = sensor_data.get("environment", {}).get("temperature_c")
        if temp is not None and temp > 33.0:
            warnings.append(
                f"CAUTION: Ambient temperature ({temp}°C) exceeds 33°C. High evaporation rate increases phytotoxicity risk."
            )

        # Microclimate sporulation alert
        hum = sensor_data.get("environment", {}).get("humidity_pct")
        if hum is not None and temp is not None and hum > 85.0 and 18.0 <= temp <= 28.0:
            warnings.append(
                f"MICROCLIMATE ALERT: High relative humidity ({hum}%) and moderate temperature ({temp}°C) "
                "favor rapid fungal sporulation."
            )

        return allow_spray, warnings, verdict
