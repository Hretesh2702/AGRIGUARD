"""
AgriGuard — Real AI Crop Pathology Tests (Level A: Software Tests)
Tests camera frame handling, leaf ROI extraction, confidence gating, and severity estimation.
"""

import pytest
import numpy as np
from backend.ai.detector import RealCropDiseaseDetector

def test_ai_handles_offline_camera():
    detector = RealCropDiseaseDetector(confidence_threshold=0.60)
    # None or empty frame
    res_none = detector.predict(None, plant_id="P-01", crop="tomato")
    assert res_none["status"] == "CAMERA_OFFLINE"
    assert res_none["disease"] == "unknown"
    assert res_none["confidence"] == 0.0

    empty_frame = np.zeros((0, 0, 3), dtype=np.uint8)
    res_empty = detector.predict(empty_frame, plant_id="P-01", crop="tomato")
    assert res_empty["status"] == "CAMERA_OFFLINE"

def test_ai_no_foliage_detected():
    detector = RealCropDiseaseDetector(confidence_threshold=0.60)
    # Black/dark background with no green foliage
    dark_frame = np.zeros((480, 640, 3), dtype=np.uint8)
    res = detector.predict(dark_frame, plant_id="P-01", crop="tomato")
    assert res["status"] == "NO_FOLIAGE_DETECTED"
    assert res["disease"] == "unknown"

def test_ai_healthy_foliage():
    detector = RealCropDiseaseDetector(confidence_threshold=0.60)
    # Frame with healthy green leaf color (BGR: [45, 175, 55])
    frame = np.zeros((480, 640, 3), dtype=np.uint8)
    frame[100:380, 150:490] = [45, 175, 55]

    res = detector.predict(frame, plant_id="P-01", crop="tomato")
    assert res["disease"] == "healthy"
    assert res["confidence"] >= 0.60
    assert res["severity"] == "none"
    assert res["affected_area"] < 0.05
    assert res["bounding_box"] is not None

def test_ai_low_confidence_gate():
    # Setting threshold to 0.999 should force unknown / low confidence state
    strict_detector = RealCropDiseaseDetector(confidence_threshold=0.999)
    frame = np.zeros((480, 640, 3), dtype=np.uint8)
    frame[100:380, 150:490] = [45, 175, 55]

    res = strict_detector.predict(frame, plant_id="P-01", crop="tomato")
    assert res["status"] == "LOW_CONFIDENCE_REVIEW"
    assert res["disease"] == "unknown"
    assert "Low confidence" in res["display_name"]
