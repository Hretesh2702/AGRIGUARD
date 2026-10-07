"""
AgriGuard — Scene & Non-Target Object Detector (Step 3 & Step 9)
==============================================================
Identifies scene context and detects non-agricultural objects (people, tools,
vehicles, containers, robots, machinery) before any disease inference is allowed.
Enforces human safety lock: spray is strictly disabled if humans are present.
"""

import cv2
import numpy as np
import logging
from pathlib import Path
from typing import List, Dict, Any, Tuple, Optional
from dataclasses import dataclass

logger = logging.getLogger(__name__)
PROJECT_ROOT = Path(__file__).resolve().parent.parent

try:
    import torch
    import torchvision.models.detection as detection
    HAS_TORCH_DETECTION = True
except (ImportError, RuntimeError, AttributeError, Exception) as exc:
    logger.warning("torchvision detection model unavailable (%s). Falling back to heuristic scene filter.", exc)
    HAS_TORCH_DETECTION = False

# COCO categories of interest for rejection & safety
HUMAN_CLASSES = {"person"}
TOOL_MACHINE_CLASSES = {
    "bottle", "wine glass", "cup", "fork", "knife", "spoon", "bowl",
    "chair", "couch", "potted plant", "bed", "dining table", "toilet",
    "tv", "laptop", "mouse", "remote", "keyboard", "cell phone",
    "microwave", "oven", "toaster", "sink", "refrigerator", "book",
    "clock", "vase", "scissors", "teddy bear", "hair drier", "toothbrush",
    "backpack", "umbrella", "handbag", "tie", "suitcase"
}
VEHICLE_CLASSES = {
    "bicycle", "car", "motorcycle", "airplane", "bus", "train", "truck", "boat"
}
NON_TARGET_CLASSES = HUMAN_CLASSES | TOOL_MACHINE_CLASSES | VEHICLE_CLASSES


@dataclass
class DetectedSceneObject:
    object_type: str
    category: str  # "human", "vehicle", "tool", "machine", "background", "plant"
    confidence: float
    bbox: List[int]  # [x1, y1, x2, y2]
    is_agricultural_target: bool = False

    def to_dict(self) -> Dict[str, Any]:
        return {
            "type": self.object_type,
            "category": self.category,
            "confidence": round(self.confidence, 3),
            "bbox": self.bbox,
            "is_target": self.is_agricultural_target
        }


class SceneDetector:
    """
    Evaluates whole camera scenes for non-target objects and human presence.
    Runs a lightweight MobileNetV3 SSDLite detector on CPU.
    """

    def __init__(self, confidence_threshold: float = 0.40, device: str = "cpu"):
        self.confidence_threshold = confidence_threshold
        self.device = torch.device(device) if HAS_TORCH_DETECTION else "cpu"
        self.model = None
        self.categories = []
        self._init_detector()

        # Haar cascade fallback for ultra-fast human face detection (if supported by cv2 build)
        self.face_cascade = None
        if hasattr(cv2, "CascadeClassifier"):
            try:
                local_cascade = PROJECT_ROOT / "models" / "haarcascade_frontalface_default.xml"
                if local_cascade.exists():
                    self.face_cascade = cv2.CascadeClassifier(str(local_cascade))
                elif hasattr(cv2, "data") and hasattr(cv2.data, "haarcascades"):
                    cascade_path = cv2.data.haarcascades + "haarcascade_frontalface_default.xml"
                    self.face_cascade = cv2.CascadeClassifier(cascade_path)
            except Exception:
                self.face_cascade = None

    def _init_detector(self):
        if not HAS_TORCH_DETECTION:
            logger.warning("torchvision detection not available; running heuristic scene filter.")
            return

        try:
            weights = detection.SSDLite320_MobileNet_V3_Large_Weights.DEFAULT
            self.categories = weights.meta["categories"]
            self.model = detection.ssdlite320_mobilenet_v3_large(weights=weights)
            self.model.to(self.device)
            self.model.eval()
            logger.info("SceneDetector: SSDLite320 MobileNetV3 loaded successfully on CPU.")
        except Exception as e:
            logger.warning(f"Failed to load SSDLite detector: {e}")
            self.model = None

    def detect_objects(self, frame: np.ndarray) -> Tuple[List[DetectedSceneObject], bool]:
        """
        Scans frame for non-target objects (humans, tools, vehicles, machines).
        Returns:
            - objects (List[DetectedSceneObject])
            - has_human (bool)
        """
        if frame is None or frame.size == 0:
            return [], False

        h, w = frame.shape[:2]
        detected_objects: List[DetectedSceneObject] = []
        has_human = False

        # 1. Neural Scene Detection (SSDLite MobileNetV3)
        if self.model is not None and HAS_TORCH_DETECTION:
            try:
                # Preprocess: RGB format, normalized [0, 1] tensor
                rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
                # Resize to 320x320 for rapid CPU inference
                tensor_img = torch.from_numpy(rgb.transpose(2, 0, 1)).float() / 255.0
                tensor_img = tensor_img.to(self.device)

                with torch.no_grad():
                    predictions = self.model([tensor_img])[0]

                boxes = predictions["boxes"].cpu().numpy()
                scores = predictions["scores"].cpu().numpy()
                labels = predictions["labels"].cpu().numpy()

                for box, score, label_idx in zip(boxes, scores, labels):
                    if score < self.confidence_threshold:
                        continue

                    label_name = self.categories[label_idx] if label_idx < len(self.categories) else f"class_{label_idx}"
                    x1, y1, x2, y2 = [int(v) for v in box]
                    # Clamp to frame bounds
                    x1, y1 = max(0, x1), max(0, y1)
                    x2, y2 = min(w, x2), min(h, y2)

                    if label_name in HUMAN_CLASSES:
                        has_human = True
                        cat = "human"
                        is_target = False
                    elif label_name in VEHICLE_CLASSES:
                        cat = "vehicle"
                        is_target = False
                    elif label_name in TOOL_MACHINE_CLASSES:
                        cat = "tool_or_machine"
                        is_target = False
                    elif label_name == "potted plant":
                        cat = "plant"
                        is_target = True
                    else:
                        cat = "other_object"
                        is_target = False

                    detected_objects.append(DetectedSceneObject(
                        object_type=label_name,
                        category=cat,
                        confidence=float(score),
                        bbox=[x1, y1, x2, y2],
                        is_agricultural_target=is_target
                    ))
            except Exception as e:
                logger.warning(f"Error during neural scene detection: {e}")

        # 2. Haar Cascade Secondary Human Face / Person Verification
        if not has_human and self.face_cascade is not None:
            try:
                gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
                faces = self.face_cascade.detectMultiScale(gray, scaleFactor=1.15, minNeighbors=4, minSize=(40, 40))
                for (fx, fy, fw, fh) in faces:
                    has_human = True
                    detected_objects.append(DetectedSceneObject(
                        object_type="person",
                        category="human",
                        confidence=0.88,
                        bbox=[int(fx), int(fy), int(fx + fw), int(fy + fh)],
                        is_agricultural_target=False
                    ))
            except Exception:
                pass

        # 3. Non-Plant Surface Analysis (Soil, Concrete, Wall, Sky)
        # Check if frame is devoid of green organic matter
        hsv = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)
        # Foliage green in HSV
        green_mask = cv2.inRange(hsv, np.array([20, 35, 35]), np.array([88, 255, 255]))
        green_fraction = cv2.countNonZero(green_mask) / (h * w)

        if green_fraction < 0.02 and not detected_objects:
            # Analyze dominant background color
            # Soil / Earth: H in [5, 20], S in [40, 180], V in [30, 150]
            brown_mask = cv2.inRange(hsv, np.array([5, 40, 30]), np.array([20, 180, 150]))
            brown_fraction = cv2.countNonZero(brown_mask) / (h * w)

            if brown_fraction > 0.40:
                detected_objects.append(DetectedSceneObject(
                    object_type="soil",
                    category="environment",
                    confidence=0.92,
                    bbox=[0, 0, w, h],
                    is_agricultural_target=False
                ))
            else:
                detected_objects.append(DetectedSceneObject(
                    object_type="non_plant_background",
                    category="environment",
                    confidence=0.85,
                    bbox=[0, 0, w, h],
                    is_agricultural_target=False
                ))

        return detected_objects, has_human
