"""
AgriGuard — Pre-Training Sanity Check
===================================
Verifies data loading, tensor shapes, transforms, forward pass,
and confirms the model can overfit a tiny subset before committing to full training.
"""

import sys
import torch
import torch.nn as nn
from pathlib import Path

# Add project root to sys.path
PROJECT_ROOT = Path(__file__).resolve().parent.parent
if str(PROJECT_ROOT) not in sys.path:
    sys.path.insert(0, str(PROJECT_ROOT))

from ai.dataset import find_plantvillage_root, prepare_dataset_splits, get_dataloaders
from ai.model import build_model


def run_sanity_check():
    print("=" * 70)
    print("   AgriGuard — Machine Learning Pipeline Sanity Check")
    print("=" * 70)

    # 1. Dataset discovery
    dataset_root = find_plantvillage_root(PROJECT_ROOT)
    print(f"[1/5] Located dataset at: {dataset_root}")

    # 2. Build splits
    print("[2/5] Creating stratified splits & checking anti-leakage deduplication...")
    splits = prepare_dataset_splits(dataset_root, train_ratio=0.75, val_ratio=0.15, test_ratio=0.10, seed=42)
    print(f"      Classes: {len(splits['class_names'])}")
    print(f"      Train samples: {len(splits['train_samples'])}")
    print(f"      Val samples:   {len(splits['val_samples'])}")
    print(f"      Test samples:  {len(splits['test_samples'])}")
    print(f"      Deduplicated samples dropped: {splits['dropped_duplicates']}")

    # 3. Dataloader batch test
    print("\n[3/5] Testing DataLoader & transform pipeline...")
    train_loader, val_loader, test_loader = get_dataloaders(splits, batch_size=16, num_workers=0)
    batch_images, batch_labels, batch_paths = next(iter(train_loader))

    print(f"      Batch images tensor shape: {batch_images.shape} (Expected: [16, 3, 224, 224])")
    print(f"      Batch labels tensor shape: {batch_labels.shape} (Expected: [16])")
    print(f"      Labels min: {batch_labels.min().item()}, max: {batch_labels.max().item()}")
    assert batch_images.shape == (16, 3, 224, 224), f"Unexpected shape: {batch_images.shape}"
    assert len(batch_labels) == 16, f"Unexpected label length: {len(batch_labels)}"

    # 4. Model building & forward pass test
    print("\n[4/5] Initializing EfficientNet-B0 model & running forward pass...")
    device = torch.device("cpu")
    model = build_model(model_name="efficientnet_b0", num_classes=len(splits["class_names"]), pretrained=True)
    model.to(device)
    model.eval()

    with torch.no_grad():
        logits = model(batch_images)
    print(f"      Output logits shape: {logits.shape} (Expected: [16, {len(splits['class_names'])}])")
    assert logits.shape == (16, len(splits["class_names"])), f"Unexpected logits shape: {logits.shape}"

    # 5. Overfitting test on tiny batch (16 samples)
    print("\n[5/5] Running Overfitting Sanity Test (15 steps on single batch)...")
    model.train()
    optimizer = torch.optim.AdamW(model.parameters(), lr=1e-3, weight_decay=1e-4)
    criterion = nn.CrossEntropyLoss()

    initial_loss = None
    final_loss = None
    for step in range(1, 16):
        optimizer.zero_grad()
        outputs = model(batch_images)
        loss = criterion(outputs, batch_labels)
        loss.backward()
        optimizer.step()

        preds = outputs.argmax(dim=1)
        acc = (preds == batch_labels).float().mean().item() * 100

        if step == 1:
            initial_loss = loss.item()
        final_loss = loss.item()

        if step % 3 == 0 or step == 15:
            print(f"      Step {step:2d}/15 — Loss: {loss.item():.4f} — Accuracy: {acc:5.1f}%")

    print("-" * 70)
    print(f"[+] Initial Loss: {initial_loss:.4f} -> Final Loss: {final_loss:.4f}")
    assert final_loss < initial_loss, "Model failed to minimize loss on tiny batch!"
    print("[SUCCESS] All sanity checks passed! Pipeline is sound and ready for real training.")
    print("=" * 70)


if __name__ == "__main__":
    run_sanity_check()
