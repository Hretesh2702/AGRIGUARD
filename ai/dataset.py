"""
AgriGuard — Dataset Loader & Stratified Anti-Leakage Splitter
===========================================================
Loads the PlantVillage dataset, extracts class names, applies exact-duplicate
deduplication to prevent data leakage, and provides reproducible stratified splits.
"""

import hashlib
import json
from pathlib import Path
from typing import Dict, List, Tuple, Optional, Any
from collections import Counter

import torch
from torch.utils.data import Dataset, DataLoader
from PIL import Image
from sklearn.model_selection import train_test_split
from torchvision import transforms

from ai.preprocessing import get_train_transforms, get_eval_transforms

IMAGE_EXTENSIONS = {".jpg", ".jpeg", ".png", ".bmp", ".webp"}


def find_plantvillage_root(search_root: Path) -> Path:
    """Discovers the root directory containing PlantVillage class subfolders."""
    direct = search_root / "PlantVillage"
    if direct.is_dir():
        # Check if direct has class subfolders
        subdirs = [d for d in direct.iterdir() if d.is_dir() and d.name != "PlantVillage"]
        if len(subdirs) >= 5:
            return direct

    # Search recursively
    for path in search_root.rglob("PlantVillage"):
        if path.is_dir():
            subdirs = [d for d in path.iterdir() if d.is_dir() and d.name != "PlantVillage"]
            if len(subdirs) >= 5:
                return path

    raise FileNotFoundError(f"PlantVillage dataset not found in {search_root}")


def compute_file_hash(path: Path) -> str:
    """Computes MD5 hash of a file for anti-leakage de-duplication."""
    hasher = hashlib.md5()
    with open(path, "rb") as f:
        while chunk := f.read(65536):
            hasher.update(chunk)
    return hasher.hexdigest()


class PlantVillageDataset(Dataset):
    """
    PyTorch Dataset for PlantVillage crop pathology images.
    Loads images on-demand with transform caching and RGB conversion.
    """

    def __init__(self, samples: List[Tuple[Path, int]], transform=None):
        self.samples = samples  # List of (path, class_idx)
        self.transform = transform

    def __len__(self) -> int:
        return len(self.samples)

    def __getitem__(self, idx: int) -> Tuple[torch.Tensor, int, str]:
        img_path, label = self.samples[idx]
        try:
            with Image.open(img_path) as img:
                img = img.convert("RGB")
                if self.transform:
                    tensor = self.transform(img)
                else:
                    tensor = transforms.ToTensor()(img)
                return tensor, label, str(img_path)
        except Exception as e:
            # Fallback to a blank image if corrupt to prevent crash
            blank = Image.new("RGB", (224, 224), (0, 0, 0))
            if self.transform:
                tensor = self.transform(blank)
            else:
                tensor = transforms.ToTensor()(blank)
            return tensor, label, str(img_path)


def prepare_dataset_splits(
    dataset_dir: Path,
    train_ratio: float = 0.75,
    val_ratio: float = 0.15,
    test_ratio: float = 0.10,
    seed: int = 42,
    deduplicate: bool = True
) -> Dict[str, Any]:
    """
    Scans the dataset directory, removes exact duplicate samples to prevent data leakage,
    and performs a stratified split into Train, Validation, and Test sets.
    """
    assert abs((train_ratio + val_ratio + test_ratio) - 1.0) < 1e-5, "Split ratios must sum to 1.0"

    # 1. Identify valid class subdirectories (excluding any nested duplicate directory)
    class_dirs = [d for d in dataset_dir.iterdir() if d.is_dir() and d.name != "PlantVillage"]
    class_dirs.sort(key=lambda d: d.name)
    class_names = [d.name for d in class_dirs]
    class_to_idx = {name: idx for idx, name in enumerate(class_names)}
    idx_to_class = {idx: name for idx, name in enumerate(class_names)}

    # Check if cached splits exist
    cache_file = dataset_dir.parent / "runs" / "cached_splits.json"
    if cache_file.exists():
        try:
            with open(cache_file, "r", encoding="utf-8") as f:
                cached = json.load(f)
            if cached.get("seed") == seed and cached.get("total_classes") == len(class_names):
                train_samples = [(Path(p), l) for p, l in cached["train_samples"]]
                val_samples = [(Path(p), l) for p, l in cached["val_samples"]]
                test_samples = [(Path(p), l) for p, l in cached["test_samples"]]
                weights = torch.tensor(cached["class_weights"], dtype=torch.float)
                return {
                    "class_names": class_names,
                    "class_to_idx": class_to_idx,
                    "idx_to_class": idx_to_class,
                    "train_samples": train_samples,
                    "val_samples": val_samples,
                    "test_samples": test_samples,
                    "class_weights": weights,
                    "dropped_duplicates": cached.get("dropped_duplicates", 0),
                    "total_unique_samples": len(train_samples) + len(val_samples) + len(test_samples)
                }
        except Exception:
            pass

    # 2. Collect all valid images with hashes to prevent train/test leakage
    seen_hashes = {}
    valid_samples = []
    dropped_duplicates = 0

    for c_dir in class_dirs:
        c_idx = class_to_idx[c_dir.name]
        for f in c_dir.iterdir():
            if f.is_file() and f.suffix.lower() in IMAGE_EXTENSIONS:
                if deduplicate:
                    h = compute_file_hash(f)
                    if h in seen_hashes:
                        dropped_duplicates += 1
                        continue
                    seen_hashes[h] = f
                valid_samples.append((f, c_idx))

    paths = [s[0] for s in valid_samples]
    labels = [s[1] for s in valid_samples]

    # 3. First split: Train vs Temp (Val + Test) stratified by class
    temp_ratio = val_ratio + test_ratio
    train_paths, temp_paths, train_labels, temp_labels = train_test_split(
        paths,
        labels,
        test_size=temp_ratio,
        random_state=seed,
        stratify=labels
    )

    # 4. Second split: Val vs Test stratified by class
    val_relative_ratio = val_ratio / temp_ratio
    val_paths, test_paths, val_labels, test_labels = train_test_split(
        temp_paths,
        temp_labels,
        test_size=(1.0 - val_relative_ratio),
        random_state=seed,
        stratify=temp_labels
    )

    train_samples = list(zip(train_paths, train_labels))
    val_samples = list(zip(val_paths, val_labels))
    test_samples = list(zip(test_paths, test_labels))

    # 5. Compute class weights to counteract the ~21x imbalance
    train_counts = Counter(train_labels)
    total_train = len(train_labels)
    n_classes = len(class_names)
    class_weights = []
    for i in range(n_classes):
        count = train_counts.get(i, 1)
        w = total_train / (n_classes * count)
        class_weights.append(w)
    class_weights_tensor = torch.tensor(class_weights, dtype=torch.float)

    # Cache splits for subsequent fast loading
    try:
        cache_file.parent.mkdir(parents=True, exist_ok=True)
        with open(cache_file, "w", encoding="utf-8") as f:
            json.dump({
                "seed": seed,
                "total_classes": len(class_names),
                "dropped_duplicates": dropped_duplicates,
                "class_weights": class_weights,
                "train_samples": [(str(p), l) for p, l in train_samples],
                "val_samples": [(str(p), l) for p, l in val_samples],
                "test_samples": [(str(p), l) for p, l in test_samples]
            }, f)
    except Exception:
        pass

    return {
        "class_names": class_names,
        "class_to_idx": class_to_idx,
        "idx_to_class": idx_to_class,
        "train_samples": train_samples,
        "val_samples": val_samples,
        "test_samples": test_samples,
        "class_weights": class_weights_tensor,
        "dropped_duplicates": dropped_duplicates,
        "total_unique_samples": len(valid_samples)
    }


def get_dataloaders(
    split_data: Dict[str, Any],
    batch_size: int = 32,
    num_workers: int = 2,
    image_size: int = 224
) -> Tuple[DataLoader, DataLoader, DataLoader]:
    """Builds PyTorch DataLoaders for train, validation, and testing."""
    train_tf = get_train_transforms(image_size)
    eval_tf = get_eval_transforms(image_size)

    train_ds = PlantVillageDataset(split_data["train_samples"], transform=train_tf)
    val_ds = PlantVillageDataset(split_data["val_samples"], transform=eval_tf)
    test_ds = PlantVillageDataset(split_data["test_samples"], transform=eval_tf)

    train_loader = DataLoader(
        train_ds,
        batch_size=batch_size,
        shuffle=True,
        num_workers=num_workers,
        pin_memory=False
    )
    val_loader = DataLoader(
        val_ds,
        batch_size=batch_size,
        shuffle=False,
        num_workers=num_workers,
        pin_memory=False
    )
    test_loader = DataLoader(
        test_ds,
        batch_size=batch_size,
        shuffle=False,
        num_workers=num_workers,
        pin_memory=False
    )

    return train_loader, val_loader, test_loader
