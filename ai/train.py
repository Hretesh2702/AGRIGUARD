"""
AgriGuard — Crop Pathology Training Pipeline
===========================================
Trains transfer learning model (EfficientNet-B0 / ResNet18) on PlantVillage dataset.
Enforces class-weighted loss, AdamW optimization, cosine LR scheduling,
early stopping, and best-checkpoint persistence.
"""

import os
import sys
import time
import json
import argparse
from pathlib import Path
from typing import Dict, Any, Optional

import torch
import torch.nn as nn
from torch.optim import AdamW
from torch.optim.lr_scheduler import CosineAnnealingLR, ReduceLROnPlateau

PROJECT_ROOT = Path(__file__).resolve().parent.parent
if str(PROJECT_ROOT) not in sys.path:
    sys.path.insert(0, str(PROJECT_ROOT))

from ai.dataset import find_plantvillage_root, prepare_dataset_splits, get_dataloaders
from ai.model import build_model


def train_one_epoch(
    model: nn.Module,
    loader: torch.utils.data.DataLoader,
    criterion: nn.Module,
    optimizer: torch.optim.Optimizer,
    device: torch.device,
    epoch: int,
    total_epochs: int,
    print_freq: int = 40
) -> Dict[str, float]:
    """Executes a single training epoch with running loss and accuracy tracking."""
    model.train()
    running_loss = 0.0
    correct = 0
    total = 0
    start_time = time.time()

    total_batches = len(loader)
    for batch_idx, (images, labels, _) in enumerate(loader):
        images = images.to(device)
        labels = labels.to(device)

        optimizer.zero_grad()
        outputs = model(images)
        loss = criterion(outputs, labels)
        loss.backward()

        # Gradient clipping to prevent gradient explosion
        torch.nn.utils.clip_grad_norm_(model.parameters(), max_norm=2.0)
        optimizer.step()

        running_loss += loss.item() * images.size(0)
        _, preds = outputs.max(1)
        correct += preds.eq(labels).sum().item()
        total += labels.size(0)

        if (batch_idx + 1) % print_freq == 0 or (batch_idx + 1) == total_batches:
            curr_loss = running_loss / total
            curr_acc = 100.0 * correct / total
            elapsed = time.time() - start_time
            rate = total / elapsed if elapsed > 0 else 0
            print(f"  [Epoch {epoch}/{total_epochs}] Batch {batch_idx + 1:4d}/{total_batches} | "
                  f"Loss: {curr_loss:.4f} | Acc: {curr_acc:5.2f}% | Rate: {rate:4.1f} img/s", flush=True)

    epoch_loss = running_loss / total
    epoch_acc = 100.0 * correct / total
    epoch_time = time.time() - start_time

    return {
        "loss": epoch_loss,
        "accuracy": epoch_acc,
        "time_sec": epoch_time
    }


def evaluate_epoch(
    model: nn.Module,
    loader: torch.utils.data.DataLoader,
    criterion: nn.Module,
    device: torch.device
) -> Dict[str, float]:
    """Evaluates validation loss and top-1 accuracy."""
    model.eval()
    running_loss = 0.0
    correct = 0
    total = 0
    start_time = time.time()

    with torch.no_grad():
        for images, labels, _ in loader:
            images = images.to(device)
            labels = labels.to(device)

            outputs = model(images)
            loss = criterion(outputs, labels)

            running_loss += loss.item() * images.size(0)
            _, preds = outputs.max(1)
            correct += preds.eq(labels).sum().item()
            total += labels.size(0)

    val_loss = running_loss / max(1, total)
    val_acc = 100.0 * correct / max(1, total)

    return {
        "loss": val_loss,
        "accuracy": val_acc,
        "time_sec": time.time() - start_time
    }


def main():
    parser = argparse.ArgumentParser(description="AgriGuard Crop Pathology Training Pipeline")
    parser.add_argument("--dataset-dir", type=str, default=None, help="Path to PlantVillage root directory")
    parser.add_argument("--model-name", type=str, default="efficientnet_b0", choices=["efficientnet_b0", "resnet18"], help="Model architecture")
    parser.add_argument("--epochs", type=int, default=6, help="Total training epochs")
    parser.add_argument("--batch-size", type=int, default=32, help="DataLoader batch size")
    parser.add_argument("--lr", type=float, default=3e-4, help="Peak learning rate for AdamW")
    parser.add_argument("--weight-decay", type=float, default=1e-4, help="Weight decay for regularization")
    parser.add_argument("--image-size", type=int, default=224, help="Model input resolution")
    parser.add_argument("--num-workers", type=int, default=0, help="DataLoader worker processes (0 for Windows compatibility)")
    parser.add_argument("--seed", type=int, default=42, help="Random reproducibility seed")
    parser.add_argument("--early-stopping-patience", type=int, default=4, help="Epochs without improvement before early stopping")
    parser.add_argument("--device", type=str, default="auto", choices=["auto", "cpu", "cuda"], help="Compute device")
    parser.add_argument("--samples-per-class", type=int, default=350, help="Max training samples per class to mitigate class imbalance (default 350, 0 for all)")
    parser.add_argument("--max-train-samples", type=int, default=None, help="Optional sample cap for fast testing")
    parser.add_argument("--resume", type=str, default=None, help="Resume training from checkpoint path")

    args = parser.parse_args()

    # Reproducibility
    torch.manual_seed(args.seed)

    # Device selection
    if args.device == "auto":
        device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
    else:
        device = torch.device(args.device)

    print("=" * 70, flush=True)
    print("   AgriGuard — Crop Pathology AI Model Training", flush=True)
    print("=" * 70, flush=True)
    print(f"  Architecture:           {args.model_name}", flush=True)
    print(f"  Compute Device:         {device} (CUDA: {torch.cuda.is_available()})", flush=True)
    print(f"  Batch Size:             {args.batch_size}", flush=True)
    print(f"  Target Epochs:          {args.epochs}", flush=True)
    print(f"  Base Learning Rate:     {args.lr}", flush=True)
    print(f"  Image Size:             {args.image_size}x{args.image_size}", flush=True)
    print(f"  Random Seed:            {args.seed}", flush=True)
    print("=" * 70, flush=True)

    # 1. Discover dataset
    if args.dataset_dir:
        dataset_root = Path(args.dataset_dir)
    else:
        dataset_root = find_plantvillage_root(PROJECT_ROOT)
    print(f"[*] Dataset Root: {dataset_root.resolve()}", flush=True)

    # 2. Build stratified splits with anti-leakage deduplication
    print("[*] Preparing stratified splits (75% Train, 15% Val, 10% Test)...", flush=True)
    splits = prepare_dataset_splits(
        dataset_root,
        train_ratio=0.75,
        val_ratio=0.15,
        test_ratio=0.10,
        seed=args.seed
    )

    if args.samples_per_class and args.samples_per_class > 0:
        from collections import defaultdict
        import random
        by_class = defaultdict(list)
        for p, l in splits["train_samples"]:
            by_class[l].append((p, l))
        balanced_train = []
        rng = random.Random(args.seed)
        for l, items in sorted(by_class.items()):
            rng.shuffle(items)
            balanced_train.extend(items[:args.samples_per_class])
        rng.shuffle(balanced_train)
        print(f"[*] Balanced training classes (capped at {args.samples_per_class} per class): {len(splits['train_samples'])} -> {len(balanced_train)} images", flush=True)
        splits["train_samples"] = balanced_train

    if args.max_train_samples and args.max_train_samples < len(splits["train_samples"]):
        print(f"[*] Limiting train samples to {args.max_train_samples} as requested.", flush=True)
        splits["train_samples"] = splits["train_samples"][:args.max_train_samples]

    class_names = splits["class_names"]
    num_classes = len(class_names)
    print(f"[+] Discovered {num_classes} classes.", flush=True)
    print(f"    Train size: {len(splits['train_samples']):,}", flush=True)
    print(f"    Val size:   {len(splits['val_samples']):,}", flush=True)
    print(f"    Test size:  {len(splits['test_samples']):,}", flush=True)

    # 3. Save class mapping file immediately
    models_dir = PROJECT_ROOT / "models"
    models_dir.mkdir(parents=True, exist_ok=True)
    runs_dir = PROJECT_ROOT / "runs"
    runs_dir.mkdir(parents=True, exist_ok=True)

    class_mapping_path = models_dir / "class_names.json"
    with open(class_mapping_path, "w", encoding="utf-8") as f:
        json.dump({
            "num_classes": num_classes,
            "classes": class_names,
            "class_to_idx": splits["class_to_idx"],
            "idx_to_class": splits["idx_to_class"]
        }, f, indent=2)
    print(f"[+] Saved class mapping to: {class_mapping_path}")

    # Save test split manifest for independent evaluation
    test_manifest_path = runs_dir / "test_split.json"
    with open(test_manifest_path, "w", encoding="utf-8") as f:
        json.dump([
            {"path": str(p), "label": int(l), "class_name": class_names[l]}
            for p, l in splits["test_samples"]
        ], f, indent=2)
    print(f"[+] Preserved untouched test split manifest: {test_manifest_path}")

    # 4. DataLoaders
    train_loader, val_loader, test_loader = get_dataloaders(
        splits,
        batch_size=args.batch_size,
        num_workers=args.num_workers,
        image_size=args.image_size
    )

    # 5. Build Model
    print(f"\n[*] Building pretrained {args.model_name} with {num_classes} output heads...")
    model = build_model(
        model_name=args.model_name,
        num_classes=num_classes,
        pretrained=True,
        dropout_rate=0.3
    )
    model.to(device)

    # 6. Loss & Optimizer
    # Class weights tensor moved to device to mitigate ~21x imbalance
    class_weights = splits["class_weights"].to(device)
    criterion = nn.CrossEntropyLoss(weight=class_weights)

    optimizer = AdamW(model.parameters(), lr=args.lr, weight_decay=args.weight_decay)
    scheduler = CosineAnnealingLR(optimizer, T_max=args.epochs, eta_min=args.lr * 0.05)

    # Resuming support
    start_epoch = 1
    best_val_acc = 0.0
    best_val_loss = float("inf")
    patience_counter = 0

    if args.resume and Path(args.resume).exists():
        print(f"[*] Resuming from checkpoint: {args.resume}")
        chk = torch.load(args.resume, map_location=device)
        model.load_state_dict(chk["model_state_dict"])
        optimizer.load_state_dict(chk["optimizer_state_dict"])
        start_epoch = chk.get("epoch", 0) + 1
        best_val_acc = chk.get("val_acc", 0.0)
        best_val_loss = chk.get("val_loss", float("inf"))

    # 7. Training Loop
    history = []
    best_model_path = models_dir / "agriguard_best.pth"
    last_model_path = models_dir / "agriguard_last.pth"
    train_start_time = time.time()

    print("\n" + "=" * 70)
    print(f"Starting Training: {args.epochs} Epochs on {len(splits['train_samples']):,} images")
    print("=" * 70)

    for epoch in range(start_epoch, args.epochs + 1):
        epoch_start = time.time()

        # Train
        train_res = train_one_epoch(
            model=model,
            loader=train_loader,
            criterion=criterion,
            optimizer=optimizer,
            device=device,
            epoch=epoch,
            total_epochs=args.epochs
        )

        # Validate
        val_res = evaluate_epoch(
            model=model,
            loader=val_loader,
            criterion=criterion,
            device=device
        )

        scheduler.step()
        curr_lr = optimizer.param_groups[0]["lr"]

        print(f"\n>> Epoch {epoch:2d}/{args.epochs} Summary: "
              f"Train Loss: {train_res['loss']:.4f} | Train Acc: {train_res['accuracy']:5.2f}% | "
              f"Val Loss: {val_res['loss']:.4f} | Val Acc: {val_res['accuracy']:5.2f}% | "
              f"LR: {curr_lr:.6f} | Time: {time.time() - epoch_start:.1f}s", flush=True)

        epoch_record = {
            "epoch": epoch,
            "train_loss": round(train_res["loss"], 4),
            "train_acc": round(train_res["accuracy"], 2),
            "val_loss": round(val_res["loss"], 4),
            "val_acc": round(val_res["accuracy"], 2),
            "lr": round(curr_lr, 7),
            "epoch_time_sec": round(time.time() - epoch_start, 1)
        }
        history.append(epoch_record)

        # Checkpoint: Last model
        torch.save({
            "epoch": epoch,
            "model_name": args.model_name,
            "num_classes": num_classes,
            "class_names": class_names,
            "model_state_dict": model.state_dict(),
            "optimizer_state_dict": optimizer.state_dict(),
            "val_loss": val_res["loss"],
            "val_acc": val_res["accuracy"],
            "timestamp": time.strftime("%Y-%m-%d %H:%M:%S")
        }, last_model_path)

        # Checkpoint: Best model (selected based on validation accuracy & loss)
        is_best = val_res["accuracy"] > best_val_acc or (
            abs(val_res["accuracy"] - best_val_acc) < 0.2 and val_res["loss"] < best_val_loss
        )
        if is_best:
            best_val_acc = val_res["accuracy"]
            best_val_loss = val_res["loss"]
            patience_counter = 0

            torch.save({
                "epoch": epoch,
                "model_name": args.model_name,
                "num_classes": num_classes,
                "class_names": class_names,
                "model_state_dict": model.state_dict(),
                "val_loss": val_res["loss"],
                "val_acc": val_res["accuracy"],
                "timestamp": time.strftime("%Y-%m-%d %H:%M:%S")
            }, best_model_path)
            print(f"  [BEST] New highest validation performance! Saved -> {best_model_path}")
        else:
            patience_counter += 1
            print(f"  [*] Validation did not improve (Patience: {patience_counter}/{args.early_stopping_patience})")

        # Early Stopping
        if patience_counter >= args.early_stopping_patience:
            print(f"\n[!] Early stopping triggered at epoch {epoch} (No improvement for {args.early_stopping_patience} epochs).")
            break

    total_train_time = time.time() - train_start_time

    # Save training log to runs/
    run_log_file = runs_dir / "training_log.json"
    with open(run_log_file, "w", encoding="utf-8") as f:
        json.dump({
            "model_name": args.model_name,
            "device": str(device),
            "epochs_trained": len(history),
            "total_time_minutes": round(total_train_time / 60, 2),
            "best_val_accuracy": round(best_val_acc, 2),
            "best_val_loss": round(best_val_loss, 4),
            "history": history
        }, f, indent=2)

    print("\n" + "=" * 70)
    print("   Training Completed Successfully!")
    print("=" * 70)
    print(f"  Total Training Time:    {total_train_time / 60:.2f} minutes")
    print(f"  Best Validation Acc:    {best_val_acc:.2f}%")
    print(f"  Best Checkpoint:        {best_model_path}")
    print(f"  Last Checkpoint:        {last_model_path}")
    print(f"  Class Names:            {class_mapping_path}")
    print(f"  Training Run Log:       {run_log_file}")
    print("=" * 70)


if __name__ == "__main__":
    main()
