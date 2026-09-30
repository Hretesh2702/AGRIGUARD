"""
Unit Tests for AgriGuard AI Vision & Inference Pipeline
"""

import pytest
import numpy as np
from ai.preprocessing import extract_leaf_roi, preprocess_for_inference
from ai.model import AgriGuardNet, analyze_leaf_features, DISEASE_CLASSES
from ai.inference import CropHealthDetector


def test_preprocessing_and_roi():
    # Create synthetic test green image
    img = np.zeros((300, 300, 3), dtype=np.uint8)
    img[50:250, 50:250] = [40, 160, 50]  # Lush green BGR

    masked, bbox, coverage = extract_leaf_roi(img)
    assert coverage > 0.3
    assert bbox is not None
    assert bbox["w"] > 100
    assert bbox["h"] > 100

    # Tensor preprocessing
    tensor = preprocess_for_inference(img, target_size=(224, 224))
    assert tensor.shape == (1, 3, 224, 224)
    assert tensor.dtype == np.float32


def test_leaf_features():
    img = np.zeros((200, 200, 3), dtype=np.uint8)
    img[:, :] = [35, 150, 45]  # Green
    # Add a yellow-brown lesion
    img[60:140, 60:140] = [20, 180, 220]

    features = analyze_leaf_features(img)
    assert features["foliage_ratio"] > 0.8
    assert features["green_ratio"] > 0.5
    assert features["yellow_ratio"] > 0.05


def test_crop_health_detector_healthy():
    detector = CropHealthDetector()
    img = np.zeros((300, 300, 3), dtype=np.uint8)
    img[40:260, 40:260] = [45, 175, 55]  # Healthy green

    result = detector.predict(img)
    assert result["condition"] in DISEASE_CLASSES
    assert result["confidence"] >= 0.60
    assert result["health_score"] >= 80
    assert "bounding_box" in result
    assert result["latency_ms"] > 0


def test_crop_health_detector_forced_scenario():
    detector = CropHealthDetector()
    img = np.zeros((300, 300, 3), dtype=np.uint8)
    img[40:260, 40:260] = [45, 175, 55]

    result = detector.predict(img, force_scenario="early_blight")
    assert result["condition"] == "early_blight"
    assert result["severity"] in ("mild", "moderate", "severe")
    assert result["status"] == "actionable"
    assert result["confidence"] > 0.85


def test_low_confidence_gate():
    # High threshold forces unknown state
    detector = CropHealthDetector(confidence_threshold=0.999)
    img = np.zeros((300, 300, 3), dtype=np.uint8)
    img[40:260, 40:260] = [45, 175, 55]

    result = detector.predict(img)
    assert result["condition"] == "unknown"
    assert result["status"] == "low_confidence_requires_review"
