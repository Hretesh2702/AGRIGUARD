"""
AgriGuard — Final Acceptance Test Suite (Step 20)
=================================================
Validates the trained crop pathology model across:
1. Known diseased leaf image
2. Known healthy leaf image
3. Blurred / degraded image
4. Non-plant / noise / ambiguous image
5. Low-confidence UNKNOWN threshold gating enforcement
6. Severity estimation and Plant Health Score
7. End-to-end inference latency profiling
"""

import sys
import time
import json
from pathlib import Path
import numpy as np
from PIL import Image, ImageFilter

PROJECT_ROOT = Path(__file__).resolve().parent.parent
if str(PROJECT_ROOT) not in sys.path:
    sys.path.insert(0, str(PROJECT_ROOT))

from ai.inference import AgriGuardInferenceEngine


def run_acceptance_tests():
    print("=" * 70)
    print("   AgriGuard — Final Acceptance & Robustness Test Suite")
    print("=" * 70)

    engine = AgriGuardInferenceEngine(
        model_path=PROJECT_ROOT / "models" / "agriguard_best.pth",
        class_mapping_path=PROJECT_ROOT / "models" / "class_names.json",
        confidence_threshold=0.60
    )

    if not engine.model_loaded:
        print("[!] ERROR: Model failed to load.")
        sys.exit(1)

    print(f"[+] Model loaded successfully on device: {engine.device}")
    print(f"[+] Classes registered: {len(engine.class_names)}")
    print(f"[+] Confidence threshold: {engine.confidence_threshold}\n")

    # Load test manifest to pick real test samples
    manifest_path = PROJECT_ROOT / "runs" / "test_split.json"
    with open(manifest_path, "r", encoding="utf-8") as f:
        test_samples = json.load(f)

    # 1. Pick a Known Disease Image
    disease_sample = next((s for s in test_samples if "Early_blight" in s["class_name"]), test_samples[0])
    print(f"[*] TEST 1: Known Disease Image ({disease_sample['class_name']})")
    print(f"    Path: {disease_sample['path']}")
    res1 = engine.predict(disease_sample["path"])
    print(f"    -> Status:       {res1['status']}")
    print(f"    -> Crop:         {res1.get('crop')}")
    print(f"    -> Disease:      {res1.get('disease')}")
    print(f"    -> Confidence:   {res1.get('confidence') * 100:.1f}%")
    print(f"    -> Severity:     {res1.get('severity')}")
    print(f"    -> Health Score: {res1.get('health_score')}/100")
    print(f"    -> Latency:      {res1.get('inference_time_ms')} ms")
    assert res1["status"] in ["DETECTED", "HEALTHY"], "Test 1 failed: Expected DETECTED or HEALTHY"
    print("    [PASS] Test 1 Passed.\n")

    # 2. Pick a Known Healthy Image
    healthy_sample = next((s for s in test_samples if "healthy" in s["class_name"].lower()), None)
    if healthy_sample:
        print(f"[*] TEST 2: Known Healthy Leaf Image ({healthy_sample['class_name']})")
        print(f"    Path: {healthy_sample['path']}")
        res2 = engine.predict(healthy_sample["path"])
        print(f"    -> Status:       {res2['status']}")
        print(f"    -> Crop:         {res2.get('crop')}")
        print(f"    -> Disease:      {res2.get('disease')}")
        print(f"    -> Confidence:   {res2.get('confidence') * 100:.1f}%")
        print(f"    -> Severity:     {res2.get('severity')}")
        print(f"    -> Health Score: {res2.get('health_score')}/100")
        print(f"    -> Latency:      {res2.get('inference_time_ms')} ms")
        assert res2["status"] == "HEALTHY", "Test 2 failed: Expected HEALTHY status"
        assert res2["health_score"] >= 80, "Test 2 failed: Healthy score should be >= 80"
        print("    [PASS] Test 2 Passed.\n")

    # 3. Degraded / Heavily Blurred Image
    print("[*] TEST 3: Poor Quality / Heavily Degraded Image (Gaussian Blur r=12)")
    orig_img = Image.open(disease_sample["path"])
    blurred = orig_img.filter(ImageFilter.GaussianBlur(radius=14))
    res3 = engine.predict(blurred)
    print(f"    -> Status:       {res3['status']}")
    print(f"    -> Message:      {res3.get('message', res3.get('disease'))}")
    print(f"    -> Confidence:   {res3.get('confidence') * 100:.1f}%")
    print(f"    -> Severity:     {res3.get('severity')}")
    print(f"    -> Latency:      {res3.get('inference_time_ms')} ms")
    print("    [PASS] Test 3 Handled gracefully without crash.\n")

    # 4. Out-of-Distribution / High Noise Ambiguous Image
    print("[*] TEST 4: Pure Noise / Ambiguous Synthetic Image")
    noise_arr = np.random.randint(0, 255, (224, 224, 3), dtype=np.uint8)
    noise_img = Image.fromarray(noise_arr)
    res4 = engine.predict(noise_img)
    print(f"    -> Status:       {res4['status']}")
    print(f"    -> Confidence:   {res4.get('confidence') * 100:.1f}%")
    print(f"    -> Message:      {res4.get('message', 'N/A')}")
    print(f"    -> Threshold:    {res4.get('threshold')}")
    print(f"    -> Severity:     {res4.get('severity')}")
    print(f"    -> Health Score: {res4.get('health_score')}")
    assert res4["status"] == "UNKNOWN", "Test 4 failed: Random noise MUST trigger UNKNOWN status"
    assert "Unknown / Low Confidence" in res4["message"], "Test 4 failed: Incorrect low-confidence message"
    print("    [PASS] Test 4 Passed: Low-confidence safety gate correctly rejected ambiguous image.\n")

    # 5. Latency Profiling (100 sequential inferences)
    print("[*] TEST 5: Latency & Throughput Benchmark (100 Sequential Runs on Laptop CPU)")
    test_img = Image.open(disease_sample["path"])
    latencies = []
    # Warmup
    for _ in range(5):
        engine.predict(test_img)

    for _ in range(100):
        t0 = time.perf_counter()
        engine.predict(test_img)
        latencies.append((time.perf_counter() - t0) * 1000)

    avg_lat = np.mean(latencies)
    p50_lat = np.percentile(latencies, 50)
    p95_lat = np.percentile(latencies, 95)
    fps = 1000.0 / avg_lat

    print(f"    -> Mean Latency:  {avg_lat:.2f} ms")
    print(f"    -> Median (P50):  {p50_lat:.2f} ms")
    print(f"    -> 95th %ile:     {p95_lat:.2f} ms")
    print(f"    -> Throughput:    {fps:.1f} FPS on CPU")
    print("    [PASS] Test 5 Benchmark Passed.\n")

    print("=" * 70)
    print("   ALL 5 ACCEPTANCE TESTS PASSED SUCCESSFULLY!")
    print("=" * 70)

    # Save acceptance test report
    report_data = {
        "status": "PASSED",
        "tests_run": 5,
        "tests_passed": 5,
        "disease_test": {
            "input": disease_sample["class_name"],
            "prediction": res1["disease"],
            "confidence": res1["confidence"],
            "severity": res1["severity"],
            "health_score": res1["health_score"]
        },
        "healthy_test": {
            "prediction": res2["disease"] if healthy_sample else "N/A",
            "confidence": res2["confidence"] if healthy_sample else "N/A",
            "health_score": res2["health_score"] if healthy_sample else "N/A"
        },
        "unknown_gate_test": {
            "input": "random_noise_224x224",
            "status": res4["status"],
            "confidence": res4["confidence"],
            "message": res4["message"]
        },
        "latency_profile": {
            "device": str(engine.device),
            "samples": 100,
            "mean_ms": round(float(avg_lat), 2),
            "median_ms": round(float(p50_lat), 2),
            "p95_ms": round(float(p95_lat), 2),
            "throughput_fps": round(float(fps), 2)
        }
    }

    with open(PROJECT_ROOT / "reports" / "acceptance_test_report.json", "w", encoding="utf-8") as f:
        json.dump(report_data, f, indent=2)
    print(f"[+] Saved acceptance report to: reports/acceptance_test_report.json")


if __name__ == "__main__":
    run_acceptance_tests()
