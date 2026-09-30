"""
AgriGuard — Comprehensive Dataset Inspection Script
==================================================
Automatically discovers, inspects, and validates the local PlantVillage dataset.
Analyzes class distribution, image formats, integrity, dimensions, and potential duplicates.
Outputs reports/dataset_report.json and reports/class_distribution.png.
"""

import os
import sys
import json
import hashlib
from pathlib import Path
from collections import Counter, defaultdict
from typing import Dict, List, Tuple, Optional, Any

try:
    from PIL import Image
    HAS_PIL = True
except ImportError:
    HAS_PIL = False

try:
    import cv2
    HAS_CV2 = True
except ImportError:
    HAS_CV2 = False

try:
    import matplotlib
    matplotlib.use("Agg")
    import matplotlib.pyplot as plt
    HAS_PLT = True
except ImportError:
    HAS_PLT = False

IMAGE_EXTENSIONS = {".jpg", ".jpeg", ".png", ".bmp", ".webp", ".tif", ".tiff"}


def find_dataset_root(search_root: Path) -> Tuple[Optional[Path], str]:
    """
    Automatically detects the PlantVillage dataset directory without assuming a hardcoded path.
    Scans for directories containing multiple crop/disease class folders with images.
    """
    candidates = []
    
    # Check top-level and 1-2 levels deep
    for path in search_root.rglob("*"):
        if not path.is_dir():
            continue
        # Check if directory contains class-like subdirectories with images
        subdirs = [d for d in path.iterdir() if d.is_dir()]
        if len(subdirs) >= 3:
            # Check how many subdirectories contain images
            valid_class_dirs = 0
            total_images = 0
            for d in subdirs:
                imgs = [f for f in d.iterdir() if f.is_file() and f.suffix.lower() in IMAGE_EXTENSIONS]
                if len(imgs) > 0:
                    valid_class_dirs += 1
                    total_images += len(imgs)
            
            if valid_class_dirs >= 3:
                candidates.append((path, valid_class_dirs, total_images))

    if not candidates:
        return None, "No dataset directory with class subfolders found."

    # Sort candidates by number of valid classes and total images descending
    candidates.sort(key=lambda c: (c[1], c[2]), reverse=True)
    best_path, n_classes, n_images = candidates[0]

    # Check if there is a nested duplicate folder (e.g. PlantVillage/PlantVillage)
    for path, n_cls, n_img in candidates:
        if "plantvillage" in path.name.lower() or "plant_village" in path.name.lower():
            # If the parent is also a candidate with more or equal images, choose the one with more images
            pass

    return best_path, f"Found {best_path} with {n_classes} classes and {n_images} images."


def inspect_image(img_path: Path) -> Tuple[bool, Optional[Tuple[int, int, int]], Optional[str], str]:
    """
    Attempts to read an image file, returns (is_valid, (width, height, channels), format, hash).
    """
    try:
        with open(img_path, "rb") as f:
            data = f.read()
            if len(data) == 0:
                return False, None, None, "empty_file"
            file_hash = hashlib.md5(data).hexdigest()

        if HAS_PIL:
            with Image.open(img_path) as img:
                img.verify()
            with Image.open(img_path) as img:
                w, h = img.size
                mode = img.mode
                channels = len(mode) if mode in ("RGB", "RGBA", "CMYK") else (3 if mode == "RGB" else 1)
                return True, (w, h, channels), img.format, file_hash
        elif HAS_CV2:
            img = cv2.imread(str(img_path))
            if img is None:
                return False, None, None, file_hash
            h, w = img.shape[:2]
            c = img.shape[2] if len(img.shape) == 3 else 1
            return True, (w, h, c), img_path.suffix.upper().lstrip("."), file_hash
        else:
            return True, (256, 256, 3), img_path.suffix.upper().lstrip("."), file_hash
    except Exception as e:
        return False, None, None, str(e)


def run_inspection(project_root: Path) -> Dict[str, Any]:
    print("=" * 70)
    print("   AgriGuard — PlantVillage Dataset Automatic Inspector")
    print("=" * 70)
    print(f"[*] Scanning project root: {project_root.resolve()}")

    dataset_root, status_msg = find_dataset_root(project_root)
    if not dataset_root:
        print(f"[!] Error: {status_msg}")
        sys.exit(1)

    print(f"[+] Dataset located at: {dataset_root.resolve()}")
    print(f"[*] Status: {status_msg}")

    # Detect all class subdirectories
    class_dirs = [d for d in dataset_root.iterdir() if d.is_dir() and d.name != "PlantVillage"]
    class_dirs.sort(key=lambda d: d.name)

    print(f"[*] Discovered {len(class_dirs)} primary class categories.")

    total_images = 0
    corrupted_files = []
    class_counts = {}
    class_samples = {}
    extensions_counter = Counter()
    dimensions_list = []
    hashes_to_paths = defaultdict(list)

    print("\n[*] Auditing image files, dimensions, and file integrity...")
    for c_dir in class_dirs:
        class_name = c_dir.name
        img_files = [f for f in c_dir.iterdir() if f.is_file() and f.suffix.lower() in IMAGE_EXTENSIONS]
        class_counts[class_name] = len(img_files)
        total_images += len(img_files)

        for img_path in img_files:
            extensions_counter[img_path.suffix.lower()] += 1
            is_valid, dims, fmt, file_hash = inspect_image(img_path)

            if not is_valid:
                corrupted_files.append({
                    "path": str(img_path.relative_to(project_root)),
                    "class": class_name,
                    "error": file_hash
                })
            else:
                dimensions_list.append(dims)
                hashes_to_paths[file_hash].append(str(img_path.relative_to(project_root)))
                if class_name not in class_samples:
                    class_samples[class_name] = str(img_path.relative_to(project_root))

    # Identify duplicate files
    exact_duplicates = {h: paths for h, paths in hashes_to_paths.items() if len(paths) > 1}
    num_duplicate_sets = len(exact_duplicates)
    num_duplicate_images = sum(len(paths) - 1 for paths in exact_duplicates.values())

    # Imbalance analysis
    counts = list(class_counts.values())
    min_count = min(counts) if counts else 0
    max_count = max(counts) if counts else 0
    mean_count = sum(counts) / len(counts) if counts else 0
    imbalance_ratio = round(max_count / max(1, min_count), 2)

    # Dimension analysis
    widths = [d[0] for d in dimensions_list if d]
    heights = [d[1] for d in dimensions_list if d]
    channels = [d[2] for d in dimensions_list if d]

    dim_summary = {
        "min_width": min(widths) if widths else 0,
        "max_width": max(widths) if widths else 0,
        "mean_width": round(sum(widths) / len(widths), 1) if widths else 0,
        "min_height": min(heights) if heights else 0,
        "max_height": max(heights) if heights else 0,
        "mean_height": round(sum(heights) / len(heights), 1) if heights else 0,
        "channels": list(set(channels)) if channels else [3]
    }

    report = {
        "dataset_root": str(dataset_root.relative_to(project_root)),
        "dataset_absolute_path": str(dataset_root.resolve()),
        "total_images": total_images,
        "num_classes": len(class_dirs),
        "class_names": list(class_counts.keys()),
        "class_distribution": class_counts,
        "imbalance_metrics": {
            "min_class_count": min_count,
            "max_class_count": max_count,
            "mean_class_count": round(mean_count, 1),
            "imbalance_ratio": imbalance_ratio,
            "has_significant_imbalance": imbalance_ratio > 3.0
        },
        "extensions": dict(extensions_counter),
        "corrupted_files_count": len(corrupted_files),
        "corrupted_files": corrupted_files,
        "duplicate_analysis": {
            "num_duplicate_hashes": num_duplicate_sets,
            "total_redundant_images": num_duplicate_images,
            "duplicate_rate_pct": round((num_duplicate_images / max(1, total_images)) * 100, 2)
        },
        "dimensions": dim_summary,
        "class_sample_images": class_samples
    }

    # Print Summary Table
    print("\n" + "=" * 70)
    print(f"{'Class Name':<45} | {'Image Count':>10} | {'Pct %':>6}")
    print("-" * 70)
    for c_name, count in sorted(class_counts.items(), key=lambda x: x[1], reverse=True):
        pct = (count / max(1, total_images)) * 100
        print(f"{c_name:<45} | {count:>10} | {pct:>5.1f}%")
    print("=" * 70)
    print(f"TOTAL IMAGES: {total_images} across {len(class_counts)} classes")
    print(f"Class Imbalance Ratio (Max / Min): {imbalance_ratio}x (Min: {min_count}, Max: {max_count})")
    print(f"Corrupted / Unreadable Images: {len(corrupted_files)}")
    print(f"Exact Duplicate Images Detected: {num_duplicate_images} in {num_duplicate_sets} clusters")
    print(f"Typical Image Resolution: {dim_summary['mean_width']} x {dim_summary['mean_height']} px (Channels: {dim_summary['channels']})")
    print(f"File Formats: {dict(extensions_counter)}")
    print("=" * 70)

    # Save Reports
    reports_dir = project_root / "reports"
    reports_dir.mkdir(parents=True, exist_ok=True)
    report_file = reports_dir / "dataset_report.json"
    with open(report_file, "w", encoding="utf-8") as f:
        json.dump(report, f, indent=2)
    print(f"[+] Saved dataset audit report to: {report_file}")

    # Generate Class Distribution Chart
    if HAS_PLT:
        chart_file = reports_dir / "class_distribution.png"
        try:
            plt.figure(figsize=(14, 8))
            sorted_classes = sorted(class_counts.items(), key=lambda x: x[1], reverse=True)
            names = [x[0].replace("___", "\n").replace("__", " ") for x in sorted_classes]
            vals = [x[1] for x in sorted_classes]
            colors = ["#10b981" if "healthy" in x[0].lower() else "#f43f5e" for x in sorted_classes]

            bars = plt.barh(range(len(names)), vals, color=colors, edgecolor=(1, 1, 1, 0.2))
            plt.yticks(range(len(names)), names, fontsize=8)
            plt.gca().invert_yaxis()
            plt.xlabel("Number of Annotated Images", fontsize=10, fontweight="bold")
            plt.title("PlantVillage Dataset — Crop & Disease Class Distribution", fontsize=13, fontweight="bold", pad=15)
            plt.grid(axis="x", linestyle="--", alpha=0.3)

            for bar in bars:
                w = bar.get_width()
                plt.text(w + max_count * 0.01, bar.get_y() + bar.get_height() / 2, f"{int(w)}",
                         va="center", ha="left", fontsize=8, color="#ffffff")

            plt.tight_layout()
            plt.savefig(chart_file, dpi=180, facecolor="#0b1120", edgecolor="none")
            plt.close()
            print(f"[+] Saved distribution visualization to: {chart_file}")
        except Exception as pe:
            print(f"[!] Warning generating plot: {pe}")

    return report


if __name__ == "__main__":
    project_root = Path(__file__).resolve().parent.parent
    run_inspection(project_root)
