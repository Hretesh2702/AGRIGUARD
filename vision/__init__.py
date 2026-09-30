"""
AgriGuard Vision Subsystem
Multi-stage scene understanding, plant/leaf segmentation, crop verification,
and targeted leaf-disease classification pipeline.
"""

from .scene_detector import SceneDetector
from .plant_leaf_detector import PlantLeafDetector, LeafCandidate
from .roi_validator import ROIValidator, ValidationResult
from .crop_classifier import CropClassifier, CropVerificationResult
from .disease_classifier import DiseaseClassifier
from .confidence_gate import ConfidenceGate, GatedDecision
from .inference_pipeline import AgriGuardVisionPipeline, analyze_frame

__all__ = [
    "SceneDetector",
    "PlantLeafDetector",
    "LeafCandidate",
    "ROIValidator",
    "ValidationResult",
    "CropClassifier",
    "CropVerificationResult",
    "DiseaseClassifier",
    "ConfidenceGate",
    "GatedDecision",
    "AgriGuardVisionPipeline",
    "analyze_frame"
]
