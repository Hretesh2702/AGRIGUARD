"""
AgriGuard — Data Preprocessing & Augmentation Pipeline
====================================================
Provides deterministic transforms for validation/testing/inference,
and domain-specific, symptom-preserving augmentations for training.
"""

from typing import Tuple
from torchvision import transforms
from PIL import Image

# ImageNet normalization standard (expected by torchvision pretrained models)
IMAGENET_MEAN = [0.485, 0.456, 0.406]
IMAGENET_STD = [0.229, 0.224, 0.225]


class SafeRGBConvert:
    """Safely converts PIL image to RGB handling RGBA, grayscale, or palette images."""
    def __call__(self, img: Image.Image) -> Image.Image:
        if img.mode != "RGB":
            return img.convert("RGB")
        return img


def get_train_transforms(image_size: int = 224) -> transforms.Compose:
    """
    Returns training transform pipeline with mild, symptom-preserving augmentations.
    Preserves lesion patterns while providing rotational and color invariance.
    """
    return transforms.Compose([
        SafeRGBConvert(),
        transforms.RandomResizedCrop(
            size=image_size,
            scale=(0.85, 1.0),
            ratio=(0.9, 1.1)
        ),
        transforms.RandomHorizontalFlip(p=0.5),
        transforms.RandomVerticalFlip(p=0.3),
        transforms.RandomRotation(degrees=15),
        transforms.ColorJitter(
            brightness=0.12,
            contrast=0.12,
            saturation=0.10,
            hue=0.03
        ),
        transforms.ToTensor(),
        transforms.Normalize(mean=IMAGENET_MEAN, std=IMAGENET_STD),
    ])


def get_eval_transforms(image_size: int = 224) -> transforms.Compose:
    """
    Returns deterministic evaluation transform pipeline (no random augmentations).
    Used for validation, untouched testing, and live camera inference.
    """
    return transforms.Compose([
        SafeRGBConvert(),
        transforms.Resize((image_size, image_size)),
        transforms.ToTensor(),
        transforms.Normalize(mean=IMAGENET_MEAN, std=IMAGENET_STD),
    ])
