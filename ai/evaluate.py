"""
AgriGuard — Model Evaluation & Diagnostic Analysis
=================================================
Evaluates trained checkpoint on untouched test set.
Computes overall accuracy, balanced accuracy, macro/weighted precision, recall, F1,
generates a normalized confusion matrix plot, and extracts qualitative sample predictions.
"""

import sys
import json
import argparse
from pathlib import Path
from typing import Dict, List, Any, Tuple

import torch
import torch.nn as nn
import numpy as np
from PIL import Image

import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.metrics import (
    accuracy_score,
    balanced_accuracy_score,
    precision_recall_fscore_support,
    classification_report,
    confusion_matrix
)

PROJECT_ROOT = Path(__file__).resolve().parent.parent
if str(PROJECT_ROOT) not in sys.path:
    sys.path.insert(0, str(PROJECT_ROOT))

from ai.model import build_model
from ai.preprocessing import get_eval_transforms
from ai.dataset import PlantVillageDataset


def run_evaluation(
    model_path: Path,
    class_mapping_path: Path,
    test_manifest_path: Path,
    reports_dir: Path,
    device_str: str = "auto",
    batch_size: int = 32
) -> Dict[str, Any]:
    print("=" * 70)
    print("   AgriGuard — Model Evaluation on Untouched Test Set")
    print("=" * 70)

    # 1. Device
    if device_str == "auto":
        device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
    else:
        device = torch.device(device_str)
    print(f"[*] Compute Device: {device}")

    # 2. Load Class Mapping
    with open(class_mapping_path, "r", encoding="utf-8") as f:
        class_meta = json.load(f)
    class_names = class_meta["classes"]
    num_classes = len(class_names)
    print(f"[*] Loaded {num_classes} classes from: {class_mapping_path}")

    # 3. Load Checkpoint
    print(f"[*] Loading model weights: {model_path}")
    checkpoint = torch.load(model_path, map_location=device)
    model_name = checkpoint.get("model_name", "efficientnet_b0")

    model = build_model(model_name=model_name, num_classes=num_classes, pretrained=False)
    if "model_state_dict" in checkpoint:
        model.load_state_dict(checkpoint["model_state_dict"])
    else:
        model.load_state_dict(checkpoint)
    model.to(device)
    model.eval()

    # 4. Load Test Manifest
    print(f"[*] Loading untouched test split manifest: {test_manifest_path}")
    with open(test_manifest_path, "r", encoding="utf-8") as f:
        test_entries = json.load(f)

    test_samples = [(Path(e["path"]), e["label"]) for e in test_entries]
    print(f"[+] Total Untouched Test Samples: {len(test_samples):,}")

    eval_tf = get_eval_transforms(image_size=224)
    test_dataset = PlantVillageDataset(test_samples, transform=eval_tf)
    test_loader = torch.utils.data.DataLoader(
        test_dataset,
        batch_size=batch_size,
        shuffle=False,
        num_workers=0
    )

    # 5. Run Test Inference
    print("[*] Running inference across entire test set...")
    all_preds = []
    all_targets = []
    all_probs = []
    all_paths = []

    with torch.no_grad():
        for images, labels, paths in test_loader:
            images = images.to(device)
            outputs = model(images)
            probs = torch.softmax(outputs, dim=1)

            max_probs, preds = torch.max(probs, dim=1)

            all_preds.extend(preds.cpu().numpy().tolist())
            all_targets.extend(labels.numpy().tolist())
            all_probs.extend(max_probs.cpu().numpy().tolist())
            all_paths.extend(paths)

    all_preds = np.array(all_preds)
    all_targets = np.array(all_targets)
    all_probs = np.array(all_probs)

    # 6. Compute Comprehensive Metrics
    overall_acc = accuracy_score(all_targets, all_preds)
    balanced_acc = balanced_accuracy_score(all_targets, all_preds)

    macro_p, macro_r, macro_f1, _ = precision_recall_fscore_support(
        all_targets, all_preds, average="macro", zero_division=0
    )
    weighted_p, weighted_r, weighted_f1, _ = precision_recall_fscore_support(
        all_targets, all_preds, average="weighted", zero_division=0
    )

    class_rep = classification_report(
        all_targets, all_preds,
        target_names=class_names,
        output_dict=True,
        zero_division=0
    )

    # Confusion Matrix
    cm = confusion_matrix(all_targets, all_preds, labels=list(range(num_classes)))

    # Identify Top Confused Pairs (Off-diagonal)
    confused_pairs = []
    for i in range(num_classes):
        for j in range(num_classes):
            if i != j and cm[i, j] > 0:
                confused_pairs.append({
                    "actual": class_names[i],
                    "predicted": class_names[j],
                    "count": int(cm[i, j])
                })
    confused_pairs.sort(key=lambda x: x["count"], reverse=True)

    # 7. Print Results Table
    print("\n" + "=" * 70)
    print(f"  AGRIGUARD AI MODEL — FINAL TEST EVALUATION")
    print("=" * 70)
    print(f"  Overall Top-1 Accuracy:     {overall_acc * 100:.2f}%")
    print(f"  Balanced Accuracy:          {balanced_acc * 100:.2f}%")
    print(f"  Macro Precision:            {macro_p * 100:.2f}%")
    print(f"  Macro Recall:               {macro_r * 100:.2f}%")
    print(f"  Macro F1-Score:             {macro_f1 * 100:.2f}%")
    print(f"  Weighted F1-Score:          {weighted_f1 * 100:.2f}%")
    print("=" * 70)

    print("\nTop 5 Most Confused Disease Pairs:")
    for idx, cp in enumerate(confused_pairs[:5], 1):
        print(f"  {idx}. Actual: {cp['actual']} -> Predicted: {cp['predicted']} ({cp['count']} errors)")

    # 8. Save Metrics JSON Reports
    reports_dir.mkdir(parents=True, exist_ok=True)
    test_metrics = {
        "model_path": str(model_path.relative_to(PROJECT_ROOT)),
        "test_samples_count": len(test_samples),
        "overall_accuracy": round(float(overall_acc), 4),
        "balanced_accuracy": round(float(balanced_acc), 4),
        "macro_precision": round(float(macro_p), 4),
        "macro_recall": round(float(macro_r), 4),
        "macro_f1": round(float(macro_f1), 4),
        "weighted_precision": round(float(weighted_p), 4),
        "weighted_recall": round(float(weighted_r), 4),
        "weighted_f1": round(float(weighted_f1), 4),
        "top_confused_pairs": confused_pairs[:10]
    }

    metrics_file = reports_dir / "test_metrics.json"
    with open(metrics_file, "w", encoding="utf-8") as f:
        json.dump(test_metrics, f, indent=2)
    print(f"\n[+] Saved test metrics to: {metrics_file}")

    class_report_file = reports_dir / "classification_report.json"
    with open(class_report_file, "w", encoding="utf-8") as f:
        json.dump(class_rep, f, indent=2)
    print(f"[+] Saved per-class report to: {class_report_file}")

    # 9. Generate Normalized Confusion Matrix Plot
    cm_plot_file = reports_dir / "confusion_matrix.png"
    try:
        plt.figure(figsize=(15, 13))
        cm_norm = cm.astype("float") / np.maximum(cm.sum(axis=1)[:, np.newaxis], 1)
        short_names = [n.replace("Tomato__", "").replace("Tomato_", "Tom_").replace("Pepper__bell___", "Pep_").replace("Potato___", "Pot_") for n in class_names]

        sns.heatmap(
            cm_norm,
            annot=True,
            fmt=".2f",
            cmap="mako",
            xticklabels=short_names,
            yticklabels=short_names,
            cbar_kws={"label": "Normalized Recall"}
        )
        plt.title(f"AgriGuard Crop Pathology — Test Confusion Matrix (Overall Acc: {overall_acc*100:.1f}%)", fontsize=13, pad=15)
        plt.xlabel("Predicted Class", fontsize=11, fontweight="bold")
        plt.ylabel("True Ground-Truth Class", fontsize=11, fontweight="bold")
        plt.xticks(rotation=45, ha="right", fontsize=9)
        plt.yticks(rotation=0, fontsize=9)
        plt.tight_layout()
        plt.savefig(cm_plot_file, dpi=180)
        plt.close()
        print(f"[+] Saved confusion matrix to: {cm_plot_file}")
    except Exception as e:
        print(f"[!] Warning generating confusion matrix: {e}")

    # 10. Generate Qualitative Example Visualizations (Step 9)
    examples_dir = reports_dir / "examples"
    examples_dir.mkdir(parents=True, exist_ok=True)

    correct_indices = np.where(all_preds == all_targets)[0]
    incorrect_indices = np.where(all_preds != all_targets)[0]

    np.random.seed(42)
    selected_correct = np.random.choice(correct_indices, min(6, len(correct_indices)), replace=False) if len(correct_indices) > 0 else []
    selected_incorrect = np.random.choice(incorrect_indices, min(6, len(incorrect_indices)), replace=False) if len(incorrect_indices) > 0 else []

    examples_meta = []
    for idx_type, idx_list in [("correct", selected_correct), ("incorrect", selected_incorrect)]:
        for i, idx in enumerate(idx_list):
            p = all_paths[idx]
            true_cls = class_names[all_targets[idx]]
            pred_cls = class_names[all_preds[idx]]
            conf = float(all_probs[idx])

            # Copy image or create visualization
            try:
                img = Image.open(p).convert("RGB")
                fig, ax = plt.subplots(figsize=(4, 4))
                ax.imshow(img)
                ax.axis("off")
                color = "#10b981" if idx_type == "correct" else "#ef4444"
                ax.set_title(
                    f"True: {true_cls}\nPred: {pred_cls} ({conf*100:.1f}%)",
                    fontsize=8,
                    fontweight="bold",
                    color=color
                )
                out_path = examples_dir / f"{idx_type}_{i+1}.png"
                fig.savefig(out_path, dpi=120, bbox_inches="tight")
                plt.close(fig)

                examples_meta.append({
                    "type": idx_type,
                    "image_path": str(Path(p).relative_to(PROJECT_ROOT)),
                    "true_class": true_cls,
                    "predicted_class": pred_cls,
                    "confidence": round(conf, 4),
                    "saved_file": str(out_path.relative_to(PROJECT_ROOT))
                })
            except Exception as e:
                pass

    with open(examples_dir / "examples_meta.json", "w", encoding="utf-8") as f:
        json.dump(examples_meta, f, indent=2)
    print(f"[+] Saved {len(examples_meta)} qualitative sample inspection images to: {examples_dir}")

    return test_metrics


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="AgriGuard Model Test Evaluation")
    parser.add_argument("--model-path", type=str, default=str(PROJECT_ROOT / "models" / "agriguard_best.pth"))
    parser.add_argument("--class-mapping", type=str, default=str(PROJECT_ROOT / "models" / "class_names.json"))
    parser.add_argument("--test-manifest", type=str, default=str(PROJECT_ROOT / "runs" / "test_split.json"))
    parser.add_argument("--device", type=str, default="auto")
    args = parser.parse_args()

    run_evaluation(
        model_path=Path(args.model_path),
        class_mapping_path=Path(args.class_mapping),
        test_manifest_path=Path(args.test_manifest),
        reports_dir=PROJECT_ROOT / "reports",
        device_str=args.device
    )
