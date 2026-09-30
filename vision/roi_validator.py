"""
AgriGuard — Leaf ROI Quality Validator (Step 6)
==============================================
Validates that a segmented leaf candidate is sharp, well-lit, sufficiently sized,
and has adequate foliage density before allowing neural disease classification.
Rejects blurry, occluded, tiny, or badly-lit crops with actionable user guidance.
"""

import cv2
import numpy as np
from typing import Dict, Any, Tuple
from dataclasses import dataclass

from .plant_leaf_detector import LeafCandidate


@dataclass
class ValidationResult:
    is_valid: bool
    status: str  # "VALID_ROI" or "LOW_QUALITY"
    message: str
    sharpness: float
    brightness: float
    foliage_density: float
    dimensions: Tuple[int, int]  # (w, h)

    def to_dict(self) -> Dict[str, Any]:
        return {
            "is_valid": self.is_valid,
            "status": self.status,
            "message": self.message,
            "metrics": {
                "sharpness": round(self.sharpness, 1),
                "brightness": round(self.brightness, 1),
                "foliage_density": round(self.foliage_density, 3),
                "width": self.dimensions[0],
                "height": self.dimensions[1]
            }
        }


class ROIValidator:
    """
    Enforces quality standards on leaf ROI crops before disease classification.
    """

    def __init__(
        self,
        min_width: int = 56,
        min_height: int = 56,
        min_sharpness: float = 65.0,
        min_brightness: float = 35.0,
        max_brightness: float = 235.0,
        min_foliage_density: float = 0.22
    ):
        self.min_width = min_width
        self.min_height = min_height
        self.min_sharpness = min_sharpness
        self.min_brightness = min_brightness
        self.max_brightness = max_brightness
        self.min_foliage_density = min_foliage_density

    def validate_roi(self, candidate: LeafCandidate) -> ValidationResult:
        """
        Runs comprehensive multi-point quality check on a leaf candidate.
        """
        roi = candidate.cropped_roi
        if roi is None or roi.size == 0:
            return ValidationResult(
                is_valid=False,
                status="LOW_QUALITY",
                message="Leaf candidate matrix is empty",
                sharpness=0.0,
                brightness=0.0,
                foliage_density=0.0,
                dimensions=(0, 0)
            )

        h, w = roi.shape[:2]

        # 1. Size / Resolution Check
        if w < self.min_width or h < self.min_height:
            return ValidationResult(
                is_valid=False,
                status="LOW_QUALITY",
                message="Leaf region is too small – move camera closer to the leaf",
                sharpness=0.0,
                brightness=0.0,
                foliage_density=0.0,
                dimensions=(w, h)
            )

        # 2. Brightness / Illumination Check
        gray = cv2.cvtColor(roi, cv2.COLOR_BGR2GRAY)
        mean_brightness = float(np.mean(gray))

        if mean_brightness < self.min_brightness:
            return ValidationResult(
                is_valid=False,
                status="LOW_QUALITY",
                message="Insufficient lighting – low light condition",
                sharpness=0.0,
                brightness=mean_brightness,
                foliage_density=0.0,
                dimensions=(w, h)
            )

        if mean_brightness > self.max_brightness:
            return ValidationResult(
                is_valid=False,
                status="LOW_QUALITY",
                message="Overexposed frame – excessive glare / direct sunlight",
                sharpness=0.0,
                brightness=mean_brightness,
                foliage_density=0.0,
                dimensions=(w, h)
            )

        # 3. Focus & Motion Blur Check (Laplacian Variance)
        laplacian = cv2.Laplacian(gray, cv2.CV_64F)
        sharpness = float(np.var(laplacian))

        if sharpness < self.min_sharpness:
            return ValidationResult(
                is_valid=False,
                status="LOW_QUALITY",
                message="Image is too blurry – hold camera steady and refocus",
                sharpness=sharpness,
                brightness=mean_brightness,
                foliage_density=0.0,
                dimensions=(w, h)
            )

        # 4. Foliage Density within ROI (Background vs Leaf Content)
        if candidate.mask is not None and candidate.mask.size > 0:
            mask_h, mask_w = candidate.mask.shape[:2]
            if mask_h == h and mask_w == w:
                leaf_pixels = cv2.countNonZero(candidate.mask)
                density = float(leaf_pixels / max(1, h * w))
            else:
                density = 0.50
        else:
            density = 0.50

        if density < self.min_foliage_density:
            return ValidationResult(
                is_valid=False,
                status="LOW_QUALITY",
                message="ROI is mostly background – frame the leaf clearly",
                sharpness=sharpness,
                brightness=mean_brightness,
                foliage_density=density,
                dimensions=(w, h)
            )

        # All quality checks passed
        return ValidationResult(
            is_valid=True,
            status="VALID_ROI",
            message="Leaf ROI quality verified",
            sharpness=sharpness,
            brightness=mean_brightness,
            foliage_density=density,
            dimensions=(w, h)
        )
