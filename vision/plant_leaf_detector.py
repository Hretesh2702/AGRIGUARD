"""
AgriGuard — Plant & Leaf Segmentation Subsystem (Step 4 & Step 10)
================================================================
Detects and segments individual leaves and plant foliage from the camera frame.
Crops individual leaf ROIs so the disease classifier NEVER receives arbitrary full frames.
Handles multiple leaves within a single camera capture.
"""

import cv2
import numpy as np
from typing import List, Dict, Any, Tuple, Optional
from dataclasses import dataclass


@dataclass
class LeafCandidate:
    leaf_id: int
    bbox: List[int]  # [x1, y1, x2, y2]
    confidence: float
    cropped_roi: np.ndarray  # BGR cropped sub-image
    mask: np.ndarray  # Binary mask of leaf within ROI
    area_pixels: int
    solidity: float
    aspect_ratio: float

    def to_dict(self) -> Dict[str, Any]:
        return {
            "leaf_id": self.leaf_id,
            "object": "leaf",
            "confidence": round(self.confidence, 3),
            "bbox": self.bbox,
            "area_pixels": self.area_pixels,
            "solidity": round(self.solidity, 3),
            "aspect_ratio": round(self.aspect_ratio, 3)
        }


class PlantLeafDetector:
    """
    Multi-space foliage segmentation and multi-leaf candidate extractor.
    Combines Excess Green Index (ExG), HSV chlorophyll tuning, and morphological
    contour analysis to segment valid leaf ROIs with bounding boxes and masks.
    """

    def __init__(
        self,
        min_leaf_area: int = 1500,
        min_solidity: float = 0.35,
        padding_ratio: float = 0.08,
        max_leaves_per_frame: int = 4
    ):
        self.min_leaf_area = min_leaf_area
        self.min_solidity = min_solidity
        self.padding_ratio = padding_ratio
        self.max_leaves_per_frame = max_leaves_per_frame

    def detect_leaves(self, frame: np.ndarray) -> List[LeafCandidate]:
        """
        Extracts all valid leaf candidate ROIs from a full camera frame.
        Returns empty list if no valid leaf foliage is detected.
        """
        if frame is None or frame.size == 0:
            return []

        h, w = frame.shape[:2]
        total_frame_pixels = h * w

        # 1. Multi-space Foliage Segmentation
        # (a) HSV Chlorophyll Mask
        # (a) HSV Chlorophyll Mask (Foliage green hues: 28 to 88, sat >= 38)
        hsv = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)
        hsv_mask = cv2.inRange(hsv, np.array([28, 38, 30]), np.array([88, 255, 255]))

        # (b) Excess Green Index (ExG = 2G - R - B)
        b, g, r = cv2.split(frame.astype(np.float32))
        exg = 2.0 * g - r - b
        exg_norm = np.clip((exg + 255.0) / 2.0, 0, 255).astype(np.uint8)
        _, exg_mask = cv2.threshold(exg_norm, 140, 255, cv2.THRESH_BINARY)

        # (c) LAB Color Space a* channel (Green is negative a*)
        lab = cv2.cvtColor(frame, cv2.COLOR_BGR2LAB)
        _, a_ch, _ = cv2.split(lab)
        lab_mask = cv2.inRange(a_ch, 0, 122)  # Negative a* in OpenCV LAB maps below ~128

        # Combine masks with consensus voting
        foliage_mask = cv2.bitwise_and(hsv_mask, exg_mask)
        foliage_mask = cv2.bitwise_or(foliage_mask, cv2.bitwise_and(hsv_mask, lab_mask))

        # Morphological operations to bridge leaf venation and remove sensor noise
        kernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (5, 5))
        foliage_mask = cv2.morphologyEx(foliage_mask, cv2.MORPH_OPEN, kernel, iterations=1)
        foliage_mask = cv2.morphologyEx(foliage_mask, cv2.MORPH_CLOSE, kernel, iterations=2)

        total_leaf_pixels = cv2.countNonZero(foliage_mask)
        if total_leaf_pixels < (total_frame_pixels * 0.025):
            # Insufficient foliage in the entire frame
            return []

        # 2. Extract Connected Foliage Contours
        contours, _ = cv2.findContours(foliage_mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
        if not contours:
            return []

        # Filter contours by area and sort descending
        valid_contours = [c for c in contours if cv2.contourArea(c) >= self.min_leaf_area]
        valid_contours.sort(key=cv2.contourArea, reverse=True)

        candidates: List[LeafCandidate] = []
        leaf_idx = 1

        for cnt in valid_contours[:self.max_leaves_per_frame]:
            area = cv2.contourArea(cnt)
            # Area must be at least 1.5% of total frame area or 2,500 pixels
            if area < max(2500, total_frame_pixels * 0.015):
                continue

            hull = cv2.convexHull(cnt)
            hull_area = cv2.contourArea(hull)
            solidity = float(area / max(1.0, hull_area))
            if solidity < self.min_solidity:
                continue

            bx, by, bw, bh = cv2.boundingRect(cnt)
            aspect_ratio = float(bw / max(1.0, bh))
            if aspect_ratio < 0.15 or aspect_ratio > 6.5:
                # Extreme non-leaf aspect ratio (e.g. thin wire or edge artifact)
                continue

            # Add context padding around leaf bounding box
            pad_w = int(bw * self.padding_ratio)
            pad_h = int(bh * self.padding_ratio)
            x1 = max(0, bx - pad_w)
            y1 = max(0, by - pad_h)
            x2 = min(w, bx + bw + pad_w)
            y2 = min(h, by + bh + pad_h)

            cropped_roi = frame[y1:y2, x1:x2].copy()
            if cropped_roi.size == 0 or cropped_roi.shape[0] < 32 or cropped_roi.shape[1] < 32:
                continue

            # Extract local mask for this leaf inside the cropped ROI
            local_mask = np.zeros((y2 - y1, x2 - x1), dtype=np.uint8)
            shifted_cnt = cnt - np.array([x1, y1])
            cv2.drawContours(local_mask, [shifted_cnt], -1, 255, -1)

            # Compute leaf detection confidence
            # Factors: foliage density inside contour, solidity, chlorophyll score
            density = float(area / max(1.0, bw * bh))
            leaf_conf = float(np.clip(
                0.55 + (solidity * 0.25) + (density * 0.15) + min(0.08, area / (total_frame_pixels * 0.5)),
                0.50,
                0.98
            ))

            candidates.append(LeafCandidate(
                leaf_id=leaf_idx,
                bbox=[int(x1), int(y1), int(x2), int(y2)],
                confidence=leaf_conf,
                cropped_roi=cropped_roi,
                mask=local_mask,
                area_pixels=int(area),
                solidity=solidity,
                aspect_ratio=aspect_ratio
            ))
            leaf_idx += 1

        return candidates
