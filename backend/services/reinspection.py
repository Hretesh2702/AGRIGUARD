"""
AgriGuard — Real Follow-Up Reinspection & Progression Service
Compares previous observations against current evaluations on physical plants/zones.
Outputs: Improved, Progressing, Unchanged, Insufficient evidence.
"""

from typing import Dict, Any, Optional
import logging

logger = logging.getLogger(__name__)


class ReinspectionService:
    """
    Compares consecutive observations of the same zone.
    Does NOT fabricate percentage improvement. Evaluates real severity transitions.
    """

    SEVERITY_RANKS = {
        "none": 0,
        "mild": 1,
        "moderate": 2,
        "severe": 3
    }

    @classmethod
    def evaluate_progression(
        cls,
        previous_obs: Dict[str, Any],
        current_obs: Dict[str, Any]
    ) -> Dict[str, Any]:
        """
        Determines progression based on real AI severity and health scores.
        """
        if not previous_obs or not current_obs:
            return {
                "verdict": "Insufficient evidence",
                "reason": "Previous baseline observation unavailable for this zone.",
                "severity_delta": 0,
                "score_delta": 0
            }

        prev_disease = previous_obs.get("disease_detected", "unknown")
        curr_disease = current_obs.get("disease", "unknown")

        prev_sev = previous_obs.get("severity", "none").lower()
        curr_sev = current_obs.get("severity", "none").lower()

        prev_score = previous_obs.get("plant_health_score", 50)
        curr_score = current_obs.get("plant_health_score", 50)

        score_delta = curr_score - prev_score
        prev_rank = cls.SEVERITY_RANKS.get(prev_sev, 1)
        curr_rank = cls.SEVERITY_RANKS.get(curr_sev, 1)
        severity_delta = curr_rank - prev_rank

        # Determine verdict
        if curr_disease == "healthy" and prev_disease != "healthy":
            verdict = "Improved"
            reason = "Foliage transitioned to healthy state without visible necrotic lesions."
        elif severity_delta < 0 or score_delta >= 12:
            verdict = "Improved"
            reason = f"Severity reduced from {prev_sev.upper()} to {curr_sev.upper()} (Health score +{score_delta})."
        elif severity_delta > 0 or score_delta <= -12:
            verdict = "Progressing"
            reason = f"Pathology expanded: severity escalated from {prev_sev.upper()} to {curr_sev.upper()} (Health score {score_delta})."
        elif abs(score_delta) < 12 and severity_delta == 0:
            verdict = "Unchanged"
            reason = f"Condition stable: severity remains {curr_sev.upper()}."
        else:
            verdict = "Insufficient evidence"
            reason = "Variation within sensor noise margin."

        return {
            "verdict": verdict,
            "reason": reason,
            "previous_severity": prev_sev,
            "current_severity": curr_sev,
            "previous_health_score": prev_score,
            "current_health_score": curr_score,
            "score_delta": score_delta
        }
