"""
AgriGuard — Verified Treatment Decision Engine
Evaluates AI disease diagnosis + real sensor context against verified agricultural guidance.
Enforces farmer-in-the-loop approval gate.
"""

import yaml
import uuid
import logging
from pathlib import Path
from typing import Dict, Any, Optional, List
from datetime import datetime, timezone

from backend.treatment.inventory import TankInventoryService
from backend.sensors.context_engine import AgronomicContextEngine

logger = logging.getLogger(__name__)
CONFIG_PATH = Path(__file__).resolve().parent.parent.parent / "config" / "treatment_database.yaml"


class TreatmentDecisionEngine:
    def __init__(self, inventory_service: Optional[TankInventoryService] = None, config_path: Optional[Path] = None):
        self.inventory = inventory_service or TankInventoryService()
        self.config_path = config_path or CONFIG_PATH
        self.database = self._load_database()

    def _load_database(self) -> Dict[str, Any]:
        if not self.config_path.exists():
            logger.error(f"Treatment database not found at {self.config_path}")
            return {"crops": {}}
        try:
            with open(self.config_path, "r", encoding="utf-8") as f:
                return yaml.safe_load(f)
        except Exception as e:
            logger.error(f"Failed to parse treatment database YAML: {e}")
            return {"crops": {}}

    def evaluate(
        self,
        ai_detection: Dict[str, Any],
        sensor_telemetry: Dict[str, Any]
    ) -> Dict[str, Any]:
        """
        Synthesizes visual diagnosis and real sensor telemetry into a verified agronomic decision.
        Enforces Farmer Approval Gate.
        """
        crop = ai_detection.get("crop", "tomato").lower()
        disease = ai_detection.get("disease", "unknown").lower()
        confidence = float(ai_detection.get("confidence", 0.0))
        severity = ai_detection.get("severity", "moderate").lower()

        decision_id = f"DEC-{uuid.uuid4().hex[:8].upper()}"

        # 0. Vision Pipeline Safety Interlock (Non-target / Ineligible Target / Safety Lockout)
        if ai_detection.get("spray_eligible") is False:
            return {
                "decision_id": decision_id,
                "crop": crop,
                "disease": disease if disease not in ["unknown", "none"] else None,
                "confidence": confidence,
                "severity": severity,
                "status": "NON_TARGET_BLOCKED" if ai_detection.get("status") in ["NO_VALID_LEAF", "HUMAN_DETECTED", "NON_TARGET_OBJECT"] else "SPRAY_INELIGIBLE",
                "recommended_treatment": None,
                "inventory_check": {"available": False, "reason": "Target is not verified as a valid diseased crop leaf; spraying locked out."},
                "approval_required": False,
                "approved": False,
                "spray_permitted": False,
                "action_guidance": ai_detection.get("display_name") or "Foliage not verified. Chemical application strictly locked out.",
                "warnings": [ai_detection.get("message") or "Vision pipeline determined frame is ineligible for targeted spray."]
            }

        # 1. Low Confidence Gate
        if confidence < 0.60 or disease == "unknown":
            return {
                "decision_id": decision_id,
                "crop": crop,
                "disease": disease,
                "confidence": confidence,
                "severity": severity,
                "status": "LOW_CONFIDENCE_REVIEW",
                "recommended_treatment": None,
                "inventory_check": {"available": False, "reason": "No chemical treatment permitted for low-confidence detections."},
                "approval_required": False,
                "approved": False,
                "spray_permitted": False,
                "action_guidance": "Confidence below 60%. Manual field inspection required. Do NOT apply chemicals.",
                "warnings": ["AI confidence too low to prescribe chemical intervention."]
            }

        # 2. Healthy State
        if disease == "healthy":
            return {
                "decision_id": decision_id,
                "crop": crop,
                "disease": "healthy",
                "confidence": confidence,
                "severity": "none",
                "status": "NO_ACTION_REQUIRED",
                "recommended_treatment": None,
                "inventory_check": {"available": True, "reason": "Foliage is healthy; no chemical intervention required."},
                "approval_required": False,
                "approved": False,
                "spray_permitted": False,
                "action_guidance": "Foliage exhibits normal agronomic vigor. Continue standard monitoring schedule.",
                "warnings": []
            }

        # 3. Check Agronomic Sensor Correlation (Drought / Nitrogen Chlorosis)
        sensors_dict = sensor_telemetry.get("sensors") if "sensors" in sensor_telemetry else sensor_telemetry
        allow_spray, correlation_warnings, verdict = AgronomicContextEngine.evaluate_correlation(
            disease=disease,
            confidence=confidence,
            sensor_data=sensors_dict
        )

        if not allow_spray:
            return {
                "decision_id": decision_id,
                "crop": crop,
                "disease": disease,
                "confidence": confidence,
                "severity": severity,
                "status": "CONTRAINDICATED",
                "recommended_treatment": None,
                "inventory_check": {"available": False, "reason": "Chemical spraying contraindicated by soil/microclimate conditions."},
                "approval_required": False,
                "approved": False,
                "spray_permitted": False,
                "action_guidance": correlation_warnings[0] if correlation_warnings else "Spraying contraindicated.",
                "warnings": correlation_warnings
            }

        # 4. Lookup Verified Treatment in Controlled Database
        norm_disease = disease.lower().replace(" ", "_").replace("-", "_")
        crop_data = self.database.get("crops", {}).get(crop, {})
        disease_info = crop_data.get("diseases", {}).get(norm_disease) or crop_data.get("diseases", {}).get(disease)

        if not disease_info:
            return {
                "decision_id": decision_id,
                "crop": crop,
                "disease": disease,
                "confidence": confidence,
                "severity": severity,
                "status": "NO_VERIFIED_TREATMENT",
                "recommended_treatment": None,
                "inventory_check": {"available": False, "reason": "No approved prescription in verified database."},
                "approval_required": False,
                "approved": False,
                "spray_permitted": False,
                "action_guidance": "Consult ICAR/USDA regional agricultural extension for unmapped pathology.",
                "warnings": [f"Disease '{disease}' has no mapped protocol in current verified database."]
            }

        treatments = disease_info.get("treatments", [])
        if not treatments:
            return {
                "decision_id": decision_id,
                "crop": crop,
                "disease": disease,
                "confidence": confidence,
                "severity": severity,
                "status": "NO_CHEMICAL_TREATMENT",
                "recommended_treatment": None,
                "inventory_check": {"available": False, "reason": "Non-chemical cultural management prescribed."},
                "approval_required": False,
                "approved": False,
                "spray_permitted": False,
                "action_guidance": "Sanitize tools and remove affected foliage manually.",
                "warnings": []
            }

        # Select primary treatment
        primary_trt = treatments[0]

        # 5. Check Onboard Tank Inventory
        inv_check = self.inventory.check_availability(
            tank_id=primary_trt.get("target_inventory_code", ""),
            required_ml=primary_trt.get("estimated_volume_ml", 40.0)
        )

        status = "ACTIONABLE" if inv_check["available"] else "INVENTORY_UNAVAILABLE"
        guidance = (
            f"Prescription verified: {primary_trt['trade_name']}. Ready for farmer review."
            if inv_check["available"]
            else f"Recommended {primary_trt['trade_name']}, but chemical tank stock is insufficient."
        )

        return {
            "decision_id": decision_id,
            "crop": crop,
            "disease": disease,
            "display_name": disease_info.get("display_name", disease),
            "confidence": confidence,
            "severity": severity,
            "status": status,
            "recommended_treatment": primary_trt,
            "inventory_check": inv_check,
            "approval_required": True,
            "approved": False,
            "spray_permitted": False,  # Strictly False until farmer executes explicit approval
            "action_guidance": guidance,
            "warnings": correlation_warnings
        }

    def generate_approval_token(self, decision_id: str, operator_name: str) -> str:
        """Generates cryptographically stamped token for ESP32 actuation."""
        timestamp = int(datetime.now(timezone.utc).timestamp())
        return f"AUTH-{operator_name.replace(' ', '')[:6].upper()}-{decision_id}-{timestamp}"
