"""
AgriGuard — Treatment Decision Engine
Evaluates AI diagnosis + sensor context, cross-references verified agronomic guidance,
checks tank inventory, and enforces farmer-in-the-loop approval.
"""

import json
import uuid
from pathlib import Path
from typing import Dict, Any, Optional, List
from dataclasses import dataclass, asdict, field

from treatment.inventory import TankInventoryManager


@dataclass
class TreatmentOption:
    treatment_id: str
    treatment_name: str
    category: str
    inventory_item_id: str
    configured_dose_reference: str
    application_method: str
    spray_duration_ms: int
    spray_volume_est_ml: float
    safety_notes: str
    source: str
    verified_by: str
    last_verified: str
    environmental_restrictions: Dict[str, Any] = field(default_factory=dict)


@dataclass
class TreatmentDecision:
    decision_id: str
    crop: str
    condition: str
    condition_display: str
    confidence: float
    severity: str
    health_score: int
    status: str  # ACTIONABLE, NO_ACTION_REQUIRED, LOW_CONFIDENCE_REVIEW, CONTRAINDICATED, INVENTORY_UNAVAILABLE, UNKNOWN_CONDITION
    primary_treatment: Optional[Dict[str, Any]]
    alternative_treatments: List[Dict[str, Any]]
    inventory_check: Dict[str, Any]
    approval_required: bool = True
    approved: bool = False
    approved_by: Optional[str] = None
    approval_timestamp: Optional[str] = None
    spray_permitted: bool = False
    context_warnings: List[str] = field(default_factory=list)
    action_guidance: str = ""

    def to_dict(self) -> Dict[str, Any]:
        return asdict(self)


class TreatmentDecisionEngine:
    """Core decision engine adhering to AgriGuard strict safety and verification rules."""

    MIN_CONFIDENCE_THRESHOLD = 0.60
    KNOWLEDGE_BASE_PATH = Path(__file__).parent / "knowledge_base.json"

    def __init__(self, inventory_manager: Optional[TankInventoryManager] = None, kb_path: Optional[Path] = None):
        self.inventory = inventory_manager or TankInventoryManager()
        self.kb_path = kb_path or self.KNOWLEDGE_BASE_PATH
        self.kb_data = self._load_knowledge_base()

    def _load_knowledge_base(self) -> Dict[str, Any]:
        if not self.kb_path.exists():
            return {"crops": {}, "sensor_context_rules": {}}
        try:
            with open(self.kb_path, "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception as e:
            return {"error": f"Failed to load knowledge base: {e}", "crops": {}}

    def evaluate(
        self,
        ai_detection: Dict[str, Any],
        sensor_context: Optional[Dict[str, Any]] = None
    ) -> TreatmentDecision:
        """
        Synthesizes visual detection result and sensor context into a verified decision.
        Enforces farmer approval gate and inventory verification.
        """
        crop = ai_detection.get("crop", "tomato").lower()
        condition = ai_detection.get("condition", "unknown").lower()
        confidence = float(ai_detection.get("confidence", 0.0))
        severity = ai_detection.get("severity", "moderate").lower()
        health_score = int(ai_detection.get("health_score", 70))
        sensor_context = sensor_context or {}

        decision_id = f"DEC-{uuid.uuid4().hex[:8].upper()}"
        context_warnings: List[str] = []

        # 1. Check Confidence
        if confidence < self.MIN_CONFIDENCE_THRESHOLD:
            return TreatmentDecision(
                decision_id=decision_id,
                crop=crop,
                condition=condition,
                condition_display=f"Uncertain ({condition.replace('_', ' ').title()})",
                confidence=confidence,
                severity=severity,
                health_score=health_score,
                status="LOW_CONFIDENCE_REVIEW",
                primary_treatment=None,
                alternative_treatments=[],
                inventory_check={"available": False, "reason": "No treatment allowed for low-confidence detections."},
                approval_required=False,
                approved=False,
                spray_permitted=False,
                context_warnings=["AI detection confidence is below 60%. Manual visual inspection required before any action."],
                action_guidance="Inspect plant manually. Do not apply chemicals."
            )

        # 2. Check Healthy State
        if condition in ("healthy", "tomato_healthy", "normal"):
            return TreatmentDecision(
                decision_id=decision_id,
                crop=crop,
                condition=condition,
                condition_display="Healthy Foliage",
                confidence=confidence,
                severity="none",
                health_score=max(85, health_score),
                status="NO_ACTION_REQUIRED",
                primary_treatment=None,
                alternative_treatments=[],
                inventory_check={"available": True, "reason": "Plant is healthy, no intervention required."},
                approval_required=False,
                approved=False,
                spray_permitted=False,
                context_warnings=[],
                action_guidance="No chemical or mechanical intervention needed. Continue regular monitoring."
            )

        # 3. Retrieve Crop & Condition from Knowledge Base
        crop_data = self.kb_data.get("crops", {}).get(crop, {})
        conditions = crop_data.get("conditions", {})
        cond_info = conditions.get(condition)

        # Try prefix matching if needed
        if not cond_info:
            for k, v in conditions.items():
                if k in condition or condition in k:
                    cond_info = v
                    break

        if not cond_info:
            return TreatmentDecision(
                decision_id=decision_id,
                crop=crop,
                condition=condition,
                condition_display=condition.replace("_", " ").title(),
                confidence=confidence,
                severity=severity,
                health_score=health_score,
                status="UNKNOWN_CONDITION",
                primary_treatment=None,
                alternative_treatments=[],
                inventory_check={"available": False, "reason": "No verified protocol found in knowledge base."},
                approval_required=False,
                approved=False,
                spray_permitted=False,
                context_warnings=[f"Condition '{condition}' is not documented in verified knowledge base."],
                action_guidance="Consult an agricultural extension specialist or reference ICAR/USDA publications."
            )

        # 4. Sensor Context Cross-Evaluation
        nitrogen = str(sensor_context.get("nitrogen", "normal")).lower()
        soil_moisture = float(sensor_context.get("soil_moisture", 45.0))
        temperature_c = float(sensor_context.get("temperature_c", 26.0))
        humidity_pct = float(sensor_context.get("humidity_pct", 65.0))

        # Check Nitrogen vs Blight false-positive context
        if nitrogen == "low" and condition == "early_blight" and confidence < 0.80:
            context_warnings.append(
                "NOTE: Soil Nitrogen is LOW. Lower leaf chlorosis may be driven by nutritional deficiency rather than pure fungal blight."
            )

        # Check Drought Stress
        contraindicated = False
        if soil_moisture < 20.0:
            context_warnings.append(
                "WARNING: Soil moisture is critically low (<20%). Chemical foliar spray during drought stress risks chemical leaf scorch. Irrigate before spraying."
            )
            contraindicated = True

        # Check Extreme Heat
        if temperature_c > 35.0:
            context_warnings.append(
                "CAUTION: Ambient temperature exceeds 35°C. High evaporation rate reduces fungicide efficacy and increases phytotoxicity risk."
            )

        # High humidity risk alert
        if humidity_pct > 85.0 and 18.0 <= temperature_c <= 28.0:
            context_warnings.append(
                "ALERT: Ambient microclimate (High humidity + moderate temp) favors rapid fungal sporulation."
            )

        # 5. Extract Treatments
        raw_treatments = cond_info.get("treatments", [])
        if not raw_treatments:
            return TreatmentDecision(
                decision_id=decision_id,
                crop=crop,
                condition=condition,
                condition_display=cond_info.get("display_name", condition),
                confidence=confidence,
                severity=severity,
                health_score=health_score,
                status="NO_TREATMENT_AVAILABLE",
                primary_treatment=None,
                alternative_treatments=[],
                inventory_check={"available": False, "reason": "No approved chemical formulation in protocol."},
                approval_required=False,
                approved=False,
                spray_permitted=False,
                context_warnings=context_warnings,
                action_guidance="Implement cultural sanitization and remove infected foliage."
            )

        primary_trt = raw_treatments[0]
        alt_trts = raw_treatments[1:] if len(raw_treatments) > 1 else []

        # 6. Check Inventory for Primary Treatment
        target_item_id = primary_trt.get("inventory_item_id", "")
        req_volume = primary_trt.get("spray_volume_est_ml", 40.0)
        inv_check = self.inventory.check_availability(target_item_id, required_ml=req_volume)

        # If primary not available, check if alternative is loaded
        active_treatment = primary_trt
        if not inv_check["available"] and alt_trts:
            alt_check = self.inventory.check_availability(alt_trts[0].get("inventory_item_id", ""), required_ml=alt_trts[0].get("spray_volume_est_ml", 40.0))
            if alt_check["available"]:
                context_warnings.append(f"Primary chemical ({primary_trt.get('treatment_name')}) unavailable. Switched to available alternative ({alt_trts[0].get('treatment_name')}).")
                active_treatment = alt_trts[0]
                alt_trts = [primary_trt] + alt_trts[1:]
                inv_check = alt_check

        # Determine overall actionable status
        if contraindicated:
            status = "CONTRAINDICATED"
            action_guidance = "Spray contraindicated due to environmental/soil conditions. Resolve root cause first."
        elif not inv_check["available"]:
            status = "INVENTORY_UNAVAILABLE"
            action_guidance = f"Treatment recommended ({active_treatment.get('treatment_name')}), but required tank chemical is low or missing."
        else:
            status = "ACTIONABLE"
            action_guidance = f"Targeted spray of {active_treatment.get('treatment_name')} ready for review. Awaiting farmer approval."

        return TreatmentDecision(
            decision_id=decision_id,
            crop=crop,
            condition=condition,
            condition_display=cond_info.get("display_name", condition),
            confidence=confidence,
            severity=severity,
            health_score=health_score,
            status=status,
            primary_treatment=active_treatment,
            alternative_treatments=alt_trts,
            inventory_check=inv_check,
            approval_required=True,
            approved=False,
            spray_permitted=False,  # Strictly False until farmer approves
            context_warnings=context_warnings,
            action_guidance=action_guidance
        )

    def approve_treatment(self, decision: TreatmentDecision, approved_by: str = "Farmer / Operator") -> TreatmentDecision:
        """
        Farmer explicitly reviews and approves the intervention.
        Only then can spray actuation be authorized.
        """
        import datetime
        if decision.status != "ACTIONABLE":
            raise ValueError(f"Cannot approve treatment with status '{decision.status}'. Intervention must be ACTIONABLE.")

        if not decision.inventory_check.get("available", False):
            raise ValueError("Cannot approve treatment: Required chemical inventory is not available.")

        decision.approved = True
        decision.approved_by = approved_by
        decision.approval_timestamp = datetime.datetime.now(datetime.timezone.utc).isoformat()
        decision.spray_permitted = True
        return decision
