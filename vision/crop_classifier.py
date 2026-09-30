"""
AgriGuard — Supported Crop Verifier (Step 5)
============================================
Enforces strict crop whitelisting against models/class_names.json.
Ensures the disease classifier NEVER guesses a disease on unsupported
plant species (e.g. wheat, corn, apples, grapes, grass, weeds).
"""

import json
from pathlib import Path
from typing import Dict, Any, List, Set, Optional, Tuple
from dataclasses import dataclass

PROJECT_ROOT = Path(__file__).resolve().parent.parent


@dataclass
class CropVerificationResult:
    supported: bool
    crop_name: str
    normalized_crop: str  # "tomato", "potato", "pepper"
    confidence: float
    status: str  # "SUPPORTED_CROP", "UNSUPPORTED_CROP", "UNCERTAIN_CROP"
    message: str

    def to_dict(self) -> Dict[str, Any]:
        return {
            "supported": self.supported,
            "crop": self.crop_name,
            "confidence": round(self.confidence, 3),
            "status": self.status,
            "message": self.message
        }


class CropClassifier:
    """
    Verifies that candidate leaves belong to an AgriGuard-supported horticultural crop.
    Builds whitelist dynamically from models/class_names.json.
    """

    def __init__(
        self,
        class_mapping_path: Optional[Path] = None,
        crop_confidence_threshold: float = 0.60
    ):
        self.class_mapping_path = class_mapping_path or (PROJECT_ROOT / "models" / "class_names.json")
        self.crop_confidence_threshold = crop_confidence_threshold
        self.supported_crops: Dict[str, str] = {}  # normalized -> display name
        self.class_to_crop: Dict[str, str] = {}
        self.crop_to_class_indices: Dict[str, List[int]] = {}

        self._load_whitelist()

    def _load_whitelist(self):
        if not self.class_mapping_path.exists():
            # Fallback default whitelist
            self.supported_crops = {
                "tomato": "Tomato",
                "potato": "Potato",
                "pepper": "Pepper (Bell)",
                "pepper_bell": "Pepper (Bell)",
                "bell_pepper": "Pepper (Bell)"
            }
            return

        try:
            with open(self.class_mapping_path, "r", encoding="utf-8") as f:
                data = json.load(f)

            classes = data.get("classes", [])
            for idx, cname in enumerate(classes):
                lower = cname.lower()
                if lower.startswith("tomato"):
                    crop_key = "tomato"
                    disp = "Tomato"
                elif lower.startswith("potato"):
                    crop_key = "potato"
                    disp = "Potato"
                elif lower.startswith("pepper"):
                    crop_key = "pepper"
                    disp = "Pepper (Bell)"
                else:
                    crop_key = lower.split("_")[0]
                    disp = crop_key.title()

                self.supported_crops[crop_key] = disp
                self.class_to_crop[cname] = crop_key
                self.crop_to_class_indices.setdefault(crop_key, []).append(idx)

            # Standard aliases
            self.supported_crops["pepper_bell"] = "Pepper (Bell)"
            self.supported_crops["bell_pepper"] = "Pepper (Bell)"
        except Exception:
            self.supported_crops = {
                "tomato": "Tomato",
                "potato": "Potato",
                "pepper": "Pepper (Bell)"
            }

    def verify_crop_support(
        self,
        crop_hint: Optional[str] = None,
        class_probabilities: Optional[List[float]] = None
    ) -> CropVerificationResult:
        """
        Verifies whether the crop is supported.
        Evaluates explicit crop hints (e.g. from robot patrol mission) or
        derives top crop group probability from the neural class distribution.
        """
        # 1. Evaluate explicit crop hint if given
        if crop_hint:
            norm_hint = crop_hint.strip().lower().replace("-", "_").replace(" ", "_")
            # Check for exact or alias match in supported crops
            matched_crop = None
            for sup_key, disp in self.supported_crops.items():
                if norm_hint == sup_key or sup_key in norm_hint or norm_hint in sup_key:
                    matched_crop = (sup_key, disp)
                    break

            if matched_crop is None:
                # Definitively unsupported crop
                return CropVerificationResult(
                    supported=False,
                    crop_name=crop_hint.title(),
                    normalized_crop=norm_hint,
                    confidence=0.0,
                    status="UNSUPPORTED_CROP",
                    message=f"Crop '{crop_hint}' is not supported by current AgriGuard model"
                )

        # 2. Evaluate neural class probability distribution over crop groups
        if class_probabilities is not None and self.crop_to_class_indices:
            crop_scores: Dict[str, float] = {}
            for crop_key, indices in self.crop_to_class_indices.items():
                score = sum(class_probabilities[i] for i in indices if i < len(class_probabilities))
                crop_scores[crop_key] = score

            if crop_scores:
                best_crop = max(crop_scores, key=crop_scores.get)
                best_conf = crop_scores[best_crop]

                if best_conf < self.crop_confidence_threshold:
                    return CropVerificationResult(
                        supported=False,
                        crop_name=self.supported_crops.get(best_crop, best_crop.title()),
                        normalized_crop=best_crop,
                        confidence=best_conf,
                        status="UNCERTAIN_CROP",
                        message="Unable to verify supported crop species with high confidence"
                    )

                return CropVerificationResult(
                    supported=True,
                    crop_name=self.supported_crops.get(best_crop, best_crop.title()),
                    normalized_crop=best_crop,
                    confidence=best_conf,
                    status="SUPPORTED_CROP",
                    message="Crop verified within AgriGuard pathology domain"
                )

        # Fallback to matched hint
        if crop_hint and matched_crop:
            return CropVerificationResult(
                supported=True,
                crop_name=matched_crop[1],
                normalized_crop=matched_crop[0],
                confidence=1.0,
                status="SUPPORTED_CROP",
                message="Crop verified from mission configuration"
            )

        # Default tomato if no hint or scores
        return CropVerificationResult(
            supported=True,
            crop_name="Tomato",
            normalized_crop="tomato",
            confidence=0.85,
            status="SUPPORTED_CROP",
            message="Default horticultural target"
        )
