"""
AgriGuard — Plant Pathology Model Definition & Class Registry
Lightweight neural architecture and vision-based feature classification.
"""

try:
    import torch
    import torch.nn as nn
    import torch.nn.functional as F
    HAS_TORCH = True
except ImportError:
    torch = None
    nn = None
    F = None
    HAS_TORCH = False

import numpy as np
import cv2
from typing import Dict, List, Tuple, Optional, Any

# Centralized condition registry
DISEASE_CLASSES: List[str] = [
    "healthy",
    "early_blight",
    "late_blight",
    "bacterial_spot",
    "septoria_leaf_spot"
]

CLASS_DISPLAY_NAMES: Dict[str, str] = {
    "healthy": "Healthy Foliage",
    "early_blight": "Tomato Early Blight (Alternaria solani)",
    "late_blight": "Tomato Late Blight (Phytophthora infestans)",
    "bacterial_spot": "Bacterial Spot (Xanthomonas)",
    "septoria_leaf_spot": "Septoria Leaf Spot (Septoria lycopersici)",
    "unknown": "Uncertain / Low Confidence"
}

MODEL_VERSION = "AgriGuard-Net-v1.2.0-competition"


if HAS_TORCH:
    class AgriGuardNet(nn.Module):
        """
        Lightweight, low-latency Convolutional Network optimized for laptop
        and edge processor inference.
        """
        def __init__(self, num_classes: int = len(DISEASE_CLASSES)):
            super().__init__()
            # Depthwise separable & standard conv blocks
            self.features = nn.Sequential(
                nn.Conv2d(3, 32, kernel_size=3, stride=2, padding=1),  # 112x112
                nn.BatchNorm2d(32),
                nn.ReLU(inplace=True),

                nn.Conv2d(32, 64, kernel_size=3, stride=2, padding=1),  # 56x56
                nn.BatchNorm2d(64),
                nn.ReLU(inplace=True),

                nn.Conv2d(64, 128, kernel_size=3, stride=2, padding=1), # 28x28
                nn.BatchNorm2d(128),
                nn.ReLU(inplace=True),

                nn.Conv2d(128, 256, kernel_size=3, stride=2, padding=1), # 14x14
                nn.BatchNorm2d(256),
                nn.ReLU(inplace=True),

                nn.AdaptiveAvgPool2d((1, 1))
            )
            self.classifier = nn.Sequential(
                nn.Dropout(p=0.2),
                nn.Linear(256, 128),
                nn.ReLU(inplace=True),
                nn.Linear(128, num_classes)
            )

        def forward(self, x: torch.Tensor) -> torch.Tensor:
            feat = self.features(x)
            feat = torch.flatten(feat, 1)
            out = self.classifier(feat)
            return out
else:
    class AgriGuardNet:
        """Fallback lightweight representation when PyTorch is not installed."""
        def __init__(self, num_classes: int = len(DISEASE_CLASSES)):
            self.num_classes = num_classes

        def to(self, *args, **kwargs):
            return self

        def eval(self):
            return self


def analyze_leaf_features(image_bgr: np.ndarray) -> Dict[str, Any]:
    """
    Extracts computer vision color/texture metrics from leaf image:
    - chlorosis ratio (yellowing)
    - necrosis ratio (dark brown / black lesions)
    - healthy green ratio
    - spot count & clustering
    """
    hsv = cv2.cvtColor(image_bgr, cv2.COLOR_BGR2HSV)
    h, s, v = cv2.split(hsv)

    total_pixels = image_bgr.shape[0] * image_bgr.shape[1]

    # Green foliage mask
    green_mask = cv2.inRange(hsv, np.array([30, 40, 40]), np.array([85, 255, 255]))
    green_count = cv2.countNonZero(green_mask)

    # Yellowing / Chlorosis mask
    yellow_mask = cv2.inRange(hsv, np.array([18, 50, 60]), np.array([32, 255, 255]))
    yellow_count = cv2.countNonZero(yellow_mask)

    # Necrotic / Dark brown lesions
    brown_mask = cv2.inRange(hsv, np.array([5, 50, 20]), np.array([18, 255, 140]))
    brown_count = cv2.countNonZero(brown_mask)

    foliage_total = max(1, green_count + yellow_count + brown_count)
    green_ratio = green_count / foliage_total
    yellow_ratio = yellow_count / foliage_total
    necrosis_ratio = brown_count / foliage_total

    # Find lesion spots
    lesion_mask = cv2.bitwise_or(yellow_mask, brown_mask)
    contours, _ = cv2.findContours(lesion_mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    significant_spots = [c for c in contours if cv2.contourArea(c) > 30]

    return {
        "foliage_ratio": foliage_total / total_pixels,
        "green_ratio": float(green_ratio),
        "yellow_ratio": float(yellow_ratio),
        "necrosis_ratio": float(necrosis_ratio),
        "lesion_spot_count": len(significant_spots),
        "lesion_mask": lesion_mask
    }
