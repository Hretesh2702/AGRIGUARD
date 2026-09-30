import time
import sys
from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parent.parent
if str(PROJECT_ROOT) not in sys.path:
    sys.path.insert(0, str(PROJECT_ROOT))

from ai.dataset import find_plantvillage_root, prepare_dataset_splits, get_dataloaders
from ai.model import build_model
import torch

print("[*] Starting loader benchmark...", flush=True)
t0 = time.time()
dataset_root = find_plantvillage_root(PROJECT_ROOT)
splits = prepare_dataset_splits(dataset_root, seed=42)
print(f"[+] Loaded splits in {time.time() - t0:.2f}s", flush=True)

train_loader, val_loader, test_loader = get_dataloaders(splits, batch_size=32, num_workers=0)
print(f"[+] Built loaders in {time.time() - t0:.2f}s", flush=True)

model = build_model("efficientnet_b0", num_classes=15, pretrained=False)
model.eval()

t1 = time.time()
print("[*] Fetching first batch...", flush=True)
for i, (images, labels, _) in enumerate(train_loader):
    print(f"    Batch {i+1} loaded in {time.time() - t1:.2f}s, images: {images.shape}", flush=True)
    t_fwd = time.time()
    with torch.no_grad():
        out = model(images)
    print(f"    Forward pass took {time.time() - t_fwd:.3f}s", flush=True)
    if i >= 4:
        break
    t1 = time.time()

print("[+] Benchmark completed successfully!", flush=True)
