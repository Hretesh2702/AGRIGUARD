"""
AgriGuard — PlantVillage Leaf Disease Classifier (Step 7 & Step 13)
==================================================================
Runs neural pathology classification STRICTLY on validated leaf ROIs.
Never receives full camera frames, persons, background, or non-target objects.
Loads weights from models/agriguard_best.pth and maps outputs via models/class_names.json.
"""

import sys
import json
import logging
from pathlib import Path
from typing import Dict, Any, List, Tuple, Optional
import numpy as np
from PIL import Image

PROJECT_ROOT = Path(__file__).resolve().parent.parent
if str(PROJECT_ROOT) not in sys.path:
    sys.path.insert(0, str(PROJECT_ROOT))

try:
    import torch
    HAS_TORCH = True
except ImportError:
    torch = None
    HAS_TORCH = False

from ai.model import build_model
from ai.preprocessing import get_eval_transforms
from ai.inference import parse_class_metadata

logger = logging.getLogger(__name__)


class DiseaseClassifier:
    """
    Dedicated leaf pathology classifier.
    Operates strictly on cropped leaf ROIs passed from the segmentation stage.
    """

    def __init__(
        self,
        model_path: Optional[Path] = None,
        class_mapping_path: Optional[Path] = None,
        device: str = "cpu"
    ):
        self.model_path = model_path or (PROJECT_ROOT / "models" / "agriguard_best.pth")
        self.class_mapping_path = class_mapping_path or (PROJECT_ROOT / "models" / "class_names.json")
        self.device = torch.device("cuda" if (HAS_TORCH and torch.cuda.is_available() and device == "cuda") else "cpu")
        self.transform = get_eval_transforms(image_size=224)

        self.model = None
        self.class_names: List[str] = []
        self.model_loaded = False

        self._load_model()

    def _load_model(self):
        if not HAS_TORCH or not self.class_mapping_path.exists() or not self.model_path.exists():
            logger.warning(f"DiseaseClassifier: Model or mapping file not found at {self.model_path}")
            return

        try:
            with open(self.class_mapping_path, "r", encoding="utf-8") as f:
                meta = json.load(f)
            self.class_names = meta.get("classes", [])
            num_classes = len(self.class_names)

            checkpoint = torch.load(str(self.model_path), map_location=self.device)
            model_name = checkpoint.get("model_name", "efficientnet_b0")

            self.model = build_model(model_name=model_name, num_classes=num_classes, pretrained=False)
            if "model_state_dict" in checkpoint:
                self.model.load_state_dict(checkpoint["model_state_dict"])
            else:
                self.model.load_state_dict(checkpoint)

            self.model.to(self.device)
            self.model.eval()
            self.model_loaded = True
            logger.info(f"DiseaseClassifier: Loaded {model_name} with {num_classes} classes on {self.device}.")
        except Exception as e:
            logger.error(f"Failed to load DiseaseClassifier: {e}")
            self.model_loaded = False

    def classify_leaf_roi(self, leaf_roi_bgr: np.ndarray) -> Dict[str, Any]:
        """
        Classifies a single cropped leaf ROI.
        Enforces strict architectural guarantee: Must be a cropped leaf image.
        """
        if not self.model_loaded or self.model is None:
            return {
                "error": "Model not loaded",
                "confidence": 0.0,
                "disease": "unknown"
            }

        if leaf_roi_bgr is None or leaf_roi_bgr.size == 0:
            return {
                "error": "Empty leaf ROI",
                "confidence": 0.0,
                "disease": "unknown"
            }

        # Convert BGR ROI to RGB PIL Image
        rgb = cv2_to_rgb(leaf_roi_bgr)
        pil_img = Image.fromarray(rgb)

        # Standard deterministic eval transforms
        tensor = self.transform(pil_img).unsqueeze(0).to(self.device)

        with torch.no_grad():
            logits = self.model(tensor)
            probs = torch.softmax(logits, dim=1)[0].cpu().numpy()

        top_idx = int(np.argmax(probs))
        top_prob = float(probs[top_idx])
        raw_class = self.class_names[top_idx]

        crop, disease, cond_key, is_healthy = parse_class_metadata(raw_class)

        return {
            "status": "DISEASE_RESULT",
            "raw_class": raw_class,
            "crop": crop,
            "disease": disease,
            "condition_key": cond_key,
            "is_healthy": is_healthy,
            "confidence": round(top_prob, 4),
            "all_probabilities": [round(float(p), 4) for p in probs]
        }


def cv2_to_rgb(img_bgr: np.ndarray) -> np.ndarray:
    """Converts OpenCV BGR image to RGB format."""
    if len(img_bgr.shape) == 3 and img_bgr.shape[2] == 3:
        return img_bgr[:, :, ::-1].copy()
    return img_bgr
