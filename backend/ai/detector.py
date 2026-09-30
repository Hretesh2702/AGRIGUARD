"""
AgriGuard — Real AI Crop Pathology Detector
Integrates the multi-stage AgriGuard Vision Pipeline (scene detector, leaf segmenter,
ROI validator, crop classifier, PlantVillage disease model, and spray safety gate).
Guarantees that disease classification NEVER runs on arbitrary non-leaf objects.
"""

import sys
import time
import logging
from pathlib import Path
from typing import Dict, Any, Optional, List
from datetime import datetime, timezone
import numpy as np

PROJECT_ROOT = Path(__file__).resolve().parent.parent.parent
if str(PROJECT_ROOT) not in sys.path:
    sys.path.insert(0, str(PROJECT_ROOT))

from vision.inference_pipeline import AgriGuardVisionPipeline, get_vision_pipeline

logger = logging.getLogger(__name__)


class RealCropDiseaseDetector:
    """
    Adapter interfacing the FastAPI backend with the multi-stage AgriGuardVisionPipeline.
    Ensures zero disease prediction on humans, tools, vehicles, soil, or background.
    """

    def __init__(
        self,
        weights_path: Optional[Path] = None,
        confidence_threshold: float = 0.60
    ):
        self.confidence_threshold = confidence_threshold
        self.models_dir = PROJECT_ROOT / "models"
        self.weights_path = weights_path or (self.models_dir / "agriguard_best.pth")
        self.pipeline: Optional[AgriGuardVisionPipeline] = None
        self._init_pipeline()

    def _init_pipeline(self):
        try:
            self.pipeline = get_vision_pipeline()
            self.model_loaded = self.pipeline.disease_classifier.model_loaded
        except Exception as e:
            logger.error(f"Failed to initialize vision pipeline: {e}")
            self.pipeline = None
            self.model_loaded = False

    def predict(
        self,
        frame: np.ndarray,
        plant_id: str = "PLANT-01",
        crop: str = "tomato"
    ) -> Dict[str, Any]:
        """
        Runs hierarchical vision pipeline on camera frame.
        Decoupled from camera FPS to ensure UI/video smoothness.
        """
        start_time = time.perf_counter()
        now_iso = datetime.now(timezone.utc).isoformat()

        if frame is None or frame.size == 0:
            return {
                "plant_id": plant_id,
                "crop": crop,
                "disease": "unknown",
                "display_name": "No Frame / Camera Offline",
                "confidence": 0.0,
                "severity": "none",
                "affected_area": 0.0,
                "plant_health_score": None,
                "status": "CAMERA_OFFLINE",
                "spray_eligible": False,
                "spray_allowed": False,
                "bounding_box": None,
                "objects": [],
                "plant_results": [],
                "visual_annotations": [],
                "inference_time_ms": 0.0,
                "timestamp": now_iso
            }

        if self.pipeline is None:
            self._init_pipeline()

        if self.pipeline is not None:
            result = self.pipeline.analyze_frame(
                frame=frame,
                crop_context=crop,
                plant_id=plant_id
            )
            result["timestamp"] = now_iso
            # Backward compatibility for database disease column
            if not result.get("disease"):
                if result.get("status") == "HEALTHY":
                    result["disease"] = "healthy"
                else:
                    result["disease"] = "unknown"

            return result

        # Fallback error structure if pipeline fails to load
        return {
            "plant_id": plant_id,
            "crop": crop,
            "disease": "unknown",
            "display_name": "Vision Subsystem Offline",
            "confidence": 0.0,
            "severity": "none",
            "affected_area": 0.0,
            "plant_health_score": None,
            "status": "SYSTEM_OFFLINE",
            "spray_eligible": False,
            "spray_allowed": False,
            "bounding_box": None,
            "objects": [],
            "plant_results": [],
            "visual_annotations": [],
            "inference_time_ms": round((time.perf_counter() - start_time) * 1000, 1),
            "timestamp": now_iso
        }
