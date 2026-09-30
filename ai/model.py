"""
AgriGuard — Transfer Learning Model Architecture
================================================
Implements lightweight, efficient neural backbones (EfficientNet-B0 & ResNet18)
tailored for fast CPU edge inference on agricultural laptops with custom pathology classification heads.
"""

from typing import Optional
import torch
import torch.nn as nn
from torchvision import models


class AgriGuardClassifier(nn.Module):
    """
    AgriGuard Crop Pathology Classifier.
    Wraps a pretrained backbone (EfficientNet-B0 or ResNet18) with a fine-tuning classification head,
    dropout for regularization, and optional feature extraction.
    """

    def __init__(
        self,
        model_name: str = "efficientnet_b0",
        num_classes: int = 15,
        pretrained: bool = True,
        dropout_rate: float = 0.3
    ):
        super().__init__()
        self.model_name = model_name.lower()
        self.num_classes = num_classes

        if self.model_name == "efficientnet_b0":
            weights = models.EfficientNet_B0_Weights.DEFAULT if pretrained else None
            self.backbone = models.efficientnet_b0(weights=weights)
            in_features = self.backbone.classifier[1].in_features
            self.backbone.classifier = nn.Sequential(
                nn.Dropout(p=dropout_rate, inplace=True),
                nn.Linear(in_features, num_classes)
            )
        elif self.model_name == "resnet18":
            weights = models.ResNet18_Weights.DEFAULT if pretrained else None
            self.backbone = models.resnet18(weights=weights)
            in_features = self.backbone.fc.in_features
            self.backbone.fc = nn.Sequential(
                nn.Dropout(p=dropout_rate),
                nn.Linear(in_features, num_classes)
            )
        else:
            raise ValueError(f"Unsupported model architecture: '{model_name}'. Choose 'efficientnet_b0' or 'resnet18'.")

    def forward(self, x: torch.Tensor) -> torch.Tensor:
        return self.backbone(x)


def build_model(
    model_name: str = "efficientnet_b0",
    num_classes: int = 15,
    pretrained: bool = True,
    dropout_rate: float = 0.3
) -> AgriGuardClassifier:
    """Builds and returns the configured AgriGuard classifier."""
    return AgriGuardClassifier(
        model_name=model_name,
        num_classes=num_classes,
        pretrained=pretrained,
        dropout_rate=dropout_rate
    )
