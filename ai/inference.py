"""
AgriGuard — Unified Crop Pathology Inference Engine
===================================================
Executes real neural inference using models/agriguard_best.pth and models/class_names.json.
Enforces confidence threshold gating (UNKNOWN handling), prototype severity estimation,
and prototype plant health score (0-100) calculation.
"""

import sys
import time
import json
from pathlib import Path
from typing import Dict, Any, Union, Optional, Tuple

import torch
import numpy as np
from PIL import Image

try:
    import cv2
    HAS_CV2 = True
except ImportError:
    HAS_CV2 = False

PROJECT_ROOT = Path(__file__).resolve().parent.parent
if str(PROJECT_ROOT) not in sys.path:
    sys.path.insert(0, str(PROJECT_ROOT))

from ai.model import build_model
from ai.preprocessing import get_eval_transforms


def parse_class_metadata(class_name: str) -> Tuple[str, str, str, bool]:
    """
    Parses PlantVillage class names into human-readable Crop, Disease, condition key, and is_healthy flag.
    Example:
      'Tomato_Early_blight' -> ('Tomato', 'Early Blight', 'early_blight', False)
      'Pepper__bell___healthy' -> ('Pepper Bell', 'Healthy', 'healthy', True)
      'Potato___Late_blight' -> ('Potato', 'Late Blight', 'late_blight', False)
    """
    is_healthy = "healthy" in class_name.lower()
    clean = class_name.replace("___", "_").replace("__", "_")
    parts = clean.split("_")

    if class_name.startswith("Pepper"):
        crop = "Pepper (Bell)"
        disease_parts = parts[2:] if len(parts) > 2 else ["Healthy"]
    elif class_name.startswith("Potato"):
        crop = "Potato"
        disease_parts = parts[1:]
    elif class_name.startswith("Tomato"):
        crop = "Tomato"
        disease_parts = parts[1:]
    else:
        crop = parts[0].title()
        disease_parts = parts[1:]

    disease = " ".join(p.capitalize() for p in disease_parts if p)
    if not disease:
        disease = "Healthy" if is_healthy else "Unknown Condition"

    # Normalized condition key for treatment lookup
    if is_healthy:
        cond_key = "healthy"
    elif "early_blight" in clean.lower():
        cond_key = "early_blight"
    elif "late_blight" in clean.lower():
        cond_key = "late_blight"
    elif "bacterial_spot" in clean.lower():
        cond_key = "bacterial_spot"
    elif "septoria" in clean.lower():
        cond_key = "septoria_leaf_spot"
    elif "spider_mite" in clean.lower():
        cond_key = "spider_mites"
    elif "mosaic_virus" in clean.lower():
        cond_key = "mosaic_virus"
    elif "yellowleaf" in clean.lower() or "curl_virus" in clean.lower():
        cond_key = "yellow_leaf_curl_virus"
    elif "target_spot" in clean.lower():
        cond_key = "target_spot"
    elif "leaf_mold" in clean.lower():
        cond_key = "leaf_mold"
    else:
        cond_key = clean.lower()

    return crop, disease, cond_key, is_healthy


def estimate_prototype_severity(
    image_np: np.ndarray,
    is_healthy: bool,
    confidence: float
) -> Tuple[str, float]:
    """
    Computes transparent prototype severity from foliage lesion ratio.
    DISCLAIMER: This is a prototype estimate based on visual necrotic/chlorotic ratios,
    not a medically/scientifically certified diagnostic severity rating.
    Returns: (severity_label, lesion_ratio)
    """
    if is_healthy:
        return "None (Healthy Tissue)", 0.0

    if not HAS_CV2 or image_np is None or image_np.size == 0:
        return "Severity: Requires visual assessment", 0.0

    try:
        # Image is RGB
        hsv = cv2.cvtColor(image_np, cv2.COLOR_RGB2HSV)
        foliage_mask = cv2.inRange(hsv, np.array([20, 35, 35]), np.array([88, 255, 255]))
        leaf_pixels = cv2.countNonZero(foliage_mask)
        total_pixels = image_np.shape[0] * image_np.shape[1]

        if leaf_pixels < total_pixels * 0.03:
            return "Severity: Requires visual assessment (Low foliage in view)", 0.0

        yellow_mask = cv2.inRange(hsv, np.array([16, 45, 50]), np.array([32, 255, 255]))
        brown_mask = cv2.inRange(hsv, np.array([4, 45, 20]), np.array([18, 255, 140]))
        lesion_mask = cv2.bitwise_or(yellow_mask, brown_mask)

        lesion_pixels = cv2.countNonZero(lesion_mask)
        lesion_ratio = float(lesion_pixels / max(1, leaf_pixels))

        if lesion_ratio < 0.08:
            return "Mild (Prototype Estimated Severity)", round(lesion_ratio, 3)
        elif lesion_ratio < 0.22:
            return "Moderate (Prototype Estimated Severity)", round(lesion_ratio, 3)
        else:
            return "Severe (Prototype Estimated Severity)", round(lesion_ratio, 3)
    except Exception:
        return "Severity: Requires visual assessment", 0.0


def calculate_plant_health_score(
    is_healthy: bool,
    confidence: float,
    lesion_ratio: float,
    condition_key: str
) -> int:
    """
    Computes prototype Plant Health Score from 0 to 100.
    FORMULA:
      - Healthy plants: 100 - (1.0 - confidence)*20 -> (85 to 100)
      - Diseased plants: 70 * (1.0 - lesion_ratio * 2.0) - penalty_by_disease
    Clearly labeled as an algorithmic prototype score.
    """
    if is_healthy:
        base = int(85 + (confidence * 15))
        return min(100, max(85, base))

    # Severe systemic viruses reduce ceiling further
    systemic_penalty = 15 if "virus" in condition_key else 0
    calculated = int(75.0 - (lesion_ratio * 120.0) - systemic_penalty)
    return min(80, max(15, calculated))


class AgriGuardInferenceEngine:
    """
    Thread-safe standalone crop pathology inference engine.
    Loads models/agriguard_best.pth and models/class_names.json.
    """

    def __init__(
        self,
        model_path: Optional[Path] = None,
        class_mapping_path: Optional[Path] = None,
        confidence_threshold: float = 0.60,
        device: str = "auto"
    ):
        self.confidence_threshold = confidence_threshold
        self.model_path = model_path or (PROJECT_ROOT / "models" / "agriguard_best.pth")
        self.class_mapping_path = class_mapping_path or (PROJECT_ROOT / "models" / "class_names.json")

        if device == "auto":
            self.device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
        else:
            self.device = torch.device(device)

        self.transform = get_eval_transforms(image_size=224)
        self.model_loaded = False
        self.class_names = []
        self._load_engine()

    def _load_engine(self):
        if not self.class_mapping_path.exists():
            return

        try:
            with open(self.class_mapping_path, "r", encoding="utf-8") as f:
                data = json.load(f)
            self.class_names = data["classes"]
            num_classes = len(self.class_names)

            if self.model_path.exists():
                chk = torch.load(self.model_path, map_location=self.device)
                model_name = chk.get("model_name", "efficientnet_b0")
                self.model = build_model(model_name=model_name, num_classes=num_classes, pretrained=False)

                if "model_state_dict" in chk:
                    self.model.load_state_dict(chk["model_state_dict"])
                else:
                    self.model.load_state_dict(chk)

                self.model.to(self.device)
                self.model.eval()
                self.model_loaded = True
        except Exception as e:
            self.model_loaded = False

    def predict(
        self,
        image_input: Union[Path, str, Image.Image, np.ndarray],
        crop_hint: Optional[str] = None
    ) -> Dict[str, Any]:
        """
        Runs complete crop disease prediction, confidence gating, severity, and health score.
        Accepts: filepath string/Path, PIL Image, or NumPy ndarray (BGR or RGB).
        Returns clean structured dictionary.
        """
        t0 = time.perf_counter()

        # 1. Parse Image Input
        pil_img = None
        np_img = None

        try:
            if isinstance(image_input, (str, Path)):
                p = Path(image_input)
                if not p.exists():
                    return self._error_response("Image file does not exist")
                pil_img = Image.open(p).convert("RGB")
                np_img = np.array(pil_img)
            elif isinstance(image_input, Image.Image):
                pil_img = image_input.convert("RGB")
                np_img = np.array(pil_img)
            elif isinstance(image_input, np.ndarray):
                if image_input.size == 0:
                    return self._error_response("Input image matrix is empty")
                # Detect if BGR (OpenCV default) or RGB
                if len(image_input.shape) == 3 and image_input.shape[2] == 3:
                    # Treat as RGB if not specified, or convert
                    np_img = image_input
                    pil_img = Image.fromarray(image_input)
                else:
                    return self._error_response("Unsupported ndarray shape")
            else:
                return self._error_response("Unsupported image input type")
        except Exception as e:
            return self._error_response(f"Image decoding failed: {e}")

        if not self.model_loaded:
            return self._error_response("Neural model weights not yet loaded")

        # 2. Preprocess & Forward Pass
        tensor = self.transform(pil_img).unsqueeze(0).to(self.device)

        with torch.no_grad():
            outputs = self.model(tensor)
            probs = torch.softmax(outputs, dim=1)[0]
            top_prob, top_idx = torch.max(probs, dim=0)

        confidence = float(top_prob.item())
        class_idx = int(top_idx.item())
        raw_class = self.class_names[class_idx]
        crop, disease, condition_key, is_healthy = parse_class_metadata(raw_class)

        # 3. Confidence Threshold Gating
        if confidence < self.confidence_threshold:
            latency_ms = round((time.perf_counter() - t0) * 1000, 1)
            return {
                "status": "UNKNOWN",
                "message": "Unknown / Low Confidence – Please Inspect Manually",
                "confidence": round(confidence, 3),
                "threshold": self.confidence_threshold,
                "crop": crop,
                "tentative_prediction": disease,
                "severity": "Requires visual assessment",
                "health_score": None,
                "inference_time_ms": latency_ms
            }

        # 4. Severity & Health Score Estimation
        severity_label, lesion_ratio = estimate_prototype_severity(np_img, is_healthy, confidence)
        health_score = calculate_plant_health_score(is_healthy, confidence, lesion_ratio, condition_key)
        latency_ms = round((time.perf_counter() - t0) * 1000, 1)

        return {
            "status": "DETECTED" if not is_healthy else "HEALTHY",
            "crop": crop,
            "disease": disease,
            "condition_key": condition_key,
            "raw_class": raw_class,
            "confidence": round(confidence, 3),
            "severity": severity_label,
            "lesion_coverage_ratio": lesion_ratio,
            "health_score": health_score,
            "is_healthy": is_healthy,
            "inference_time_ms": latency_ms
        }

    def _error_response(self, msg: str) -> Dict[str, Any]:
        return {
            "status": "ERROR",
            "message": msg,
            "confidence": 0.0,
            "crop": "Unknown",
            "disease": "Unknown",
            "severity": "Unknown",
            "health_score": None
        }


# Global inference engine instance
_engine_instance = None

def get_engine() -> AgriGuardInferenceEngine:
    global _engine_instance
    if _engine_instance is None:
        _engine_instance = AgriGuardInferenceEngine()
    return _engine_instance

def predict(image) -> Dict[str, Any]:
    """Top-level convenience prediction function."""
    engine = get_engine()
    return engine.predict(image)
