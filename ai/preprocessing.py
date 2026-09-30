"""
AgriGuard — AI Image Preprocessing & Leaf Segmentation
Handles image normalization, color space transformations, and foliage ROI extraction.
"""

import cv2
import numpy as np
import base64
from typing import Tuple, Dict, Any, Optional
from PIL import Image
import io


def base64_to_cv2(b64_string: str) -> np.ndarray:
    """Converts base64 encoded image string to OpenCV BGR numpy array."""
    if "," in b64_string:
        b64_string = b64_string.split(",", 1)[1]
    img_bytes = base64.b64decode(b64_string)
    nparr = np.frombuffer(img_bytes, np.uint8)
    img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
    if img is None:
        raise ValueError("Failed to decode base64 image data.")
    return img


def cv2_to_base64(img: np.ndarray, format_ext: str = ".jpg") -> str:
    """Encodes OpenCV image to base64 JPEG/PNG string."""
    _, buffer = cv2.imencode(format_ext, img)
    b64_bytes = base64.b64encode(buffer)
    return f"data:image/jpeg;base64,{b64_bytes.decode('utf-8')}"


def extract_leaf_roi(image: np.ndarray) -> Tuple[np.ndarray, Optional[Dict[str, int]], float]:
    """
    Extracts the primary leaf region using HSV foliage color filtering.
    Returns:
        - cropped or masked leaf ROI
        - bounding box dict (x, y, w, h)
        - leaf coverage ratio (foliage area / total area)
    """
    hsv = cv2.cvtColor(image, cv2.COLOR_BGR2HSV)

    # Broad green & yellow-green mask for foliage and chlorotic spots
    lower_foliage = np.array([20, 30, 30], dtype=np.uint8)
    upper_foliage = np.array([90, 255, 255], dtype=np.uint8)

    mask = cv2.inRange(hsv, lower_foliage, upper_foliage)

    # Morphological cleaning
    kernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (5, 5))
    mask = cv2.morphologyEx(mask, cv2.MORPH_OPEN, kernel, iterations=1)
    mask = cv2.morphologyEx(mask, cv2.MORPH_CLOSE, kernel, iterations=2)

    total_pixels = image.shape[0] * image.shape[1]
    leaf_pixels = cv2.countNonZero(mask)
    coverage = float(leaf_pixels / total_pixels) if total_pixels > 0 else 0.0

    contours, _ = cv2.findContours(mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    bbox = None

    if contours:
        # Find largest contour (main leaf)
        c = max(contours, key=cv2.contourArea)
        if cv2.contourArea(c) > (total_pixels * 0.05):
            x, y, w, h = cv2.boundingRect(c)
            bbox = {"x": int(x), "y": int(y), "w": int(w), "h": int(h)}

    masked_image = cv2.bitwise_and(image, image, mask=mask)
    return masked_image, bbox, coverage


def preprocess_for_inference(
    image: np.ndarray,
    target_size: Tuple[int, int] = (224, 224),
    normalize_imagenet: bool = True
) -> np.ndarray:
    """
    Resizes and standardizes image for neural network tensor input.
    Matches exact transforms used across training and inference.
    """
    rgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
    resized = cv2.resize(rgb, target_size, interpolation=cv2.INTER_AREA)
    norm = resized.astype(np.float32) / 255.0

    if normalize_imagenet:
        mean = np.array([0.485, 0.456, 0.406], dtype=np.float32)
        std = np.array([0.229, 0.224, 0.225], dtype=np.float32)
        norm = (norm - mean) / std

    # Channels first: (C, H, W)
    ch_first = np.transpose(norm, (2, 0, 1))
    return np.expand_dims(ch_first, axis=0)  # (1, C, H, W)
