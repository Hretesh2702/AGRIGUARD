# AgriGuard: AI Crop Pathology Model & Vision Pipeline Report
**Project:** AGRI GUARD – AI-POWERED PRECISION FARMING ROBOT  
**Document:** Agricultural Pathology Machine Learning System Report  
**Date:** September 2026  
**Environment:** Local Laptop (Intel Core Processor, Iris Xe Graphics, 16 GB RAM, PyTorch 2.14.0+cpu, Windows 11)

---

## 1. Executive Summary

The AgriGuard crop pathology AI subsystem detects, classifies, and estimates the severity of foliar plant diseases from RGB leaf imagery captured by the robot's onboard inspection camera. Running completely locally on the laptop without external cloud dependencies, Jetson, or Raspberry Pi requirements, the pipeline links disease classification with an agronomic sensor context engine (soil moisture, temperature, humidity, NPK) and a verified treatment decision engine requiring farmer approval before any physical spraying can occur.

```
+---------------------------------------------------------------------------------------+
|                                    AGRIGUARD AI PIPELINE                              |
|                                                                                       |
|   CAMERA CAPTURE (1080p/720p)                                                         |
|         │                                                                             |
|         ├───> Smooth Live Web Preview (Dedicated MJPEG Thread @ 30+ FPS)              |
|         │                                                                             |
|         └───> Frame Sampler (On-demand / 2-5 Hz Decoupled Inference)                 |
|                     │                                                                 |
|                     ▼                                                                 |
|             PREPROCESSING PIPELINE (224x224 RGB, ImageNet Norm)                       |
|                     │                                                                 |
|                     ▼                                                                 |
|         EFFICIENTNET-B0 NEURAL CLASSIFIER (Transfer Learning, 15 Classes)             |
|                     │                                                                 |
|         ┌───────────┴───────────────────────────────┐                                 |
|         ▼                                           ▼                                 |
|   CONFIDENCE >= 0.60                         CONFIDENCE < 0.60                        |
|   Crop + Disease Identification              "Unknown / Low Confidence"               |
|         │                                    (Manual Inspection Required)             |
|         ▼                                           │                                 |
|   PROTOTYPE SEVERITY ESTIMATION                     │                                 |
|   (HSV Foliage Lesion Area Analysis)                │                                 |
|         │                                           │                                 |
|         ▼                                           ▼                                 |
|   PLANT HEALTH SCORE (0-100) <───────── TELEMETRY (Soil Moisture, NPK, Temp, RH)      |
|         │                                                                             |
|         ▼                                                                             |
|   VERIFIED TREATMENT ENGINE (ICAR / USDA Knowledge Base)                              |
|         │                                                                             |
|         ▼                                                                             |
|   FARMER-IN-THE-LOOP APPROVAL GATE ──> Precision Target Spray Pulse                   |
+---------------------------------------------------------------------------------------+
```

---

## 2. Dataset Audit & Characteristics

### 2.1 Dataset Location
The PlantVillage dataset was automatically discovered at:
`C:\Users\swaya\OneDrive\Documents\Agriguard\PlantVillage`

### 2.2 Volume & Classes
- **Total Images:** 20,638 images
- **Number of Classes:** 15 distinct crop pathology classes
- **Image Resolution:** 256x256 pixels
- **File Formats:** 20,636 JPEG (`.JPG`), 1 PNG (`.png`), 1 JPEG (`.jpeg`)
- **Corrupted / Unreadable Files:** 0 (all 20,638 files passed checksum and decoding verification)

### 2.3 Class Breakdown & Distribution
The dataset encompasses three major horticultural crops (Pepper Bell, Potato, and Tomato):

| Class Index | Class Identifier | Crop | Condition | Image Count | % of Dataset |
|:---:|:---|:---|:---|:---:|:---:|
| 0 | `Pepper__bell___Bacterial_spot` | Pepper Bell | Bacterial Spot (*Xanthomonas*) | 997 | 4.83% |
| 1 | `Pepper__bell___healthy` | Pepper Bell | Healthy Foliage | 1,478 | 7.16% |
| 2 | `Potato___Early_blight` | Potato | Early Blight (*Alternaria solani*) | 1,000 | 4.85% |
| 3 | `Potato___Late_blight` | Potato | Late Blight (*Phytophthora infestans*) | 1,000 | 4.85% |
| 4 | `Potato___healthy` | Potato | Healthy Foliage | 152 | 0.74% |
| 5 | `Tomato_Bacterial_spot` | Tomato | Bacterial Spot (*Xanthomonas perforans*) | 2,127 | 10.31% |
| 6 | `Tomato_Early_blight` | Tomato | Early Blight (*Alternaria solani*) | 1,000 | 4.85% |
| 7 | `Tomato_Late_blight` | Tomato | Late Blight (*Phytophthora infestans*) | 1,909 | 9.25% |
| 8 | `Tomato_Leaf_Mold` | Tomato | Leaf Mold (*Passalora fulva*) | 952 | 4.61% |
| 9 | `Tomato_Septoria_leaf_spot` | Tomato | Septoria Leaf Spot (*Septoria lycopersici*) | 1,771 | 8.58% |
| 10 | `Tomato_Spider_mites_Two_spotted_spider_mite` | Tomato | Two-Spotted Spider Mite (*Tetranychus urticae*) | 1,676 | 8.12% |
| 11 | `Tomato__Target_Spot` | Tomato | Target Spot (*Corynespora cassiicola*) | 1,404 | 6.80% |
| 12 | `Tomato__Tomato_YellowLeaf__Curl_Virus` | Tomato | Yellow Leaf Curl Virus (TYLCV) | 3,208 | 15.54% |
| 13 | `Tomato__Tomato_mosaic_virus` | Tomato | Tomato Mosaic Virus (ToMV) | 373 | 1.81% |
| 14 | `Tomato_healthy` | Tomato | Healthy Foliage | 1,591 | 7.71% |

### 2.4 Class Imbalance & Mitigation Strategy
- **Max Class:** `Tomato__Tomato_YellowLeaf__Curl_Virus` (3,208 samples)
- **Min Class:** `Potato___healthy` (152 samples)
- **Imbalance Ratio:** **21.11x**

To ensure balanced representation across all 15 classes without letting dominant classes overpower rare classes (such as `Potato___healthy` or `Tomato__Tomato_mosaic_virus`), two strategies were combined:
1. **Sample Capping:** Training set instances were capped at 350 samples per class during training, yielding a balanced 4,944-sample training distribution.
2. **Inverse Class Frequency Weighting:** Loss computation uses inverse-frequency class weights in Cross-Entropy Loss to penalize misclassifications of minority classes.

### 2.5 Data Leakage Prevention (Exact & Near Duplicate Filtering)
- All 20,638 image files were scanned using MD5 cryptographic checksums.
- 14 exact duplicate image files were detected and purged from training candidate pools.
- Stratified 75% / 15% / 10% splitting was computed once with fixed seed (`42`), preserving class ratios across all splits.
- The 10% test split (2,063 images) was cached to `runs/test_split.json` and kept strictly untouched throughout model training and hyperparameter selection.

---

## 3. Machine Learning Architecture & Model Selection

### 3.1 Model Architecture: EfficientNet-B0
Transfer learning using **EfficientNet-B0** was selected over training from scratch and heavier architectures (ResNet-50, ViT) for the following reasons:
1. **Compound Scaling:** Balanced depth, width, and resolution using neural architecture search (NAS) optimized Mobile Inverted Bottleneck convolutions (MBConv).
2. **Parameter Efficiency:** ~5.3 million parameters total, compared to 25.6M for ResNet50 or 86M for ViT-B/16.
3. **CPU Inference Latency:** EfficientNet-B0 achieves ~45–55 ms per forward pass on modern laptop CPUs, enabling 15–20 FPS throughput without requiring discrete GPU acceleration.
4. **Pretrained Feature Quality:** Weights pretrained on ImageNet-1K (`DEFAULT` / `IMAGENET1K_V1`) provide robust low-level filters (edges, textures, color gradients) that rapidly adapt to leaf venation, chlorosis, and necrotic lesion patterns.

### 3.2 Custom Classification Head
The original 1000-class linear projection head was replaced with:
```python
nn.Sequential(
    nn.Dropout(p=0.30, inplace=True),
    nn.Linear(in_features=1280, out_features=15)
)
```

---

## 4. Preprocessing & Data Augmentation

### 4.1 Training Augmentations (Domain-Safe)
Foliar diseases exhibit specific visual morphology that must not be destroyed by aggressive augmentations. The training pipeline applies:
- `RandomResizedCrop(224, scale=(0.85, 1.0), ratio=(0.9, 1.1))` (simulates varying camera distances)
- `RandomHorizontalFlip(p=0.5)`
- `RandomRotation(degrees=15)` (simulates robot approach angles)
- `ColorJitter(brightness=0.15, contrast=0.15, saturation=0.10, hue=0.04)` (simulates outdoor sunlight and cloud cover changes)
- `Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225])`

### 4.2 Validation and Test Transforms (Deterministic)
- `Resize(256)`
- `CenterCrop(224)`
- `ToTensor()`
- `Normalize(ImageNet Mean/Std)`
- Strictly **zero random augmentation** to ensure deterministic, reproducible benchmarking.

---

## 5. Confidence Gating & Out-of-Distribution Safety

### 5.1 The Unknown / Low-Confidence Principle
Neural networks trained on closed-set multi-class classification tend to output overconfident predictions even on ambiguous, blurry, or non-plant inputs. 

AgriGuard enforces an explicit confidence gate:
$$\text{Status} = \begin{cases} 
\text{DETECTED / HEALTHY}, & \text{if } \max_c P(y=c|x) \ge \tau \\
\text{UNKNOWN / LOW\_CONFIDENCE}, & \text{if } \max_c P(y=c|x) < \tau 
\end{cases}$$

- **Configured Threshold ($\tau$):** Default `0.60` (configurable via `--threshold` flag or API parameters).
- When confidence $< 0.60$:
  - Diagnosis returns `"status": "UNKNOWN"`
  - Display label: `"Unknown / Low Confidence – Please Inspect Manually"`
  - Chemical treatments are strictly disabled (`spray_permitted: false`)
  - A recommendation for physical visual inspection is queued.

---

## 6. Severity & Plant Health Scoring

### 6.1 Prototype Severity Estimation
PlantVillage provides category-level annotations rather than pixel-level lesion masks. To avoid falsely claiming scientific severity validation, AgriGuard implements a transparent visual heuristic:
1. **Foliage Isolation:** Extracts the green plant canopy using HSV thresholding ($H \in [20, 88]$).
2. **Necrotic & Chlorotic Area:** Measures yellow chlorotic ($H \in [16, 32]$) and brown necrotic ($H \in [4, 18]$) pixels within the foliage mask.
3. **Lesion Ratio ($R$):**
   $$R = \frac{\text{Lesion Pixels}}{\max(1, \text{Foliage Pixels})}$$
4. **Classification:**
   - $R < 0.08$: **Mild (Prototype Estimated Severity)**
   - $0.08 \le R < 0.22$: **Moderate (Prototype Estimated Severity)**
   - $R \ge 0.22$: **Severe (Prototype Estimated Severity)**
   - Healthy tissue: **None (Healthy Foliage)**

*Note: Labeled explicitly as a prototype estimate in all UI and API responses.*

### 6.2 Plant Health Score (0–100)
A holistic health score combining visual pathology with real-time agronomic telemetry:

$$\text{Health Score} = \text{Base}(\text{Disease, Severity}) - \Delta_{\text{Water}} - \Delta_{\text{Nitrogen}}$$

- **Base Score:**
  - Healthy Foliage: $95$
  - Mild Disease: $82 - (\text{Confidence} \times 12) \approx 70\text{--}75$
  - Moderate Disease: $65 - (\text{Confidence} \times 15) \approx 50\text{--}55$
  - Severe Disease: $45 - (\text{Confidence} \times 20) \approx 25\text{--}35$
- **Water Stress Adjustment:**
  - Soil Moisture $< 20\%$: $-15$ (Drought Stress)
  - Soil Moisture $> 85\%$: $-8$ (Waterlogging Risk)
- **Nitrogen Imbalance Adjustment:**
  - Soil N $< 30 \text{ mg/kg}$: $-10$ (Chlorotic Deficiency)
- **Score Range:** Clamped between $5$ and $100$.

---

## 7. Verified Treatment Decision Engine

Chemical treatments are decoupled from the ML classifier and stored in structured knowledge bases:
- `treatment/treatment_database.json`
- `config/treatment_database.yaml`

### 7.1 Grounded Agricultural Guidance (No LLM Hallucinations)
All treatments originate from published **ICAR (Indian Council of Agricultural Research)** and **USDA-ARS Vegetable Crop Pathology** guidelines:
- **Copper Hydroxide 77% WP:** Protectant contact fungicide for Early Blight, Leaf Mold, Target Spot, and Septoria.
- **Cymoxanil + Mancozeb:** Translaminar systemic oomyceticide for Late Blight emergency intervention.
- **Cold-Pressed Bio-Neem Oil (Azadirachtin):** Organic miticide / vector suppressor for Spider Mites and TYLCV whitefly vectors.
- **Biosecurity Roguing & Sanitation:** Cultural mechanical barriers for systemic viruses (TYLCV, ToMV).

### 7.2 Safety Contraindications & Farmer Approval
- **Drought Rule:** Spraying is prohibited if soil moisture $< 20\%$ to prevent chemical phytotoxicity (leaf scorch).
- **Nutrient Rule:** If low nitrogen ($N < 35 \text{ mg/kg}$) is detected with marginal confidence, fungicide is blocked and fertilizer fertigation is recommended.
- **Approval Gate:** The physical spray valve cannot open until the farmer clicks "Approve Spray" on the dashboard.

---

## 8. Software Architecture & Camera Integration

```
   Physical USB Camera (1280x720)
                │
                ▼
   CameraService (Threaded Frame Grabber)
        │                      │
        ▼                      ▼
  MJPEG Web Stream         /api/ai/scan
  (Smooth Preview)         (On-demand / Periodic)
                               │
                               ▼
                    RealCropDiseaseDetector
                               │
                    AgriGuardInferenceEngine
                    (models/agriguard_best.pth)
                               │
                               ▼
                    AgronomicContextEngine
                               │
                               ▼
                    TreatmentDecisionEngine
                               │
                               ▼
                   Dashboard Telemetry & DB
```

The camera capture runs on a dedicated background grabber thread (`backend/ai/camera_service.py`), ensuring that AI neural forward passes never stutter, pause, or block the video stream, robot motion control, or emergency stop listeners.

---

## 9. Real-World Limitations & Deployment Roadmap

1. **Controlled vs. Field Lighting:** PlantVillage images were photographed on plain gray/black backgrounds with uniform illumination. Real field images feature soil, shadows, overlapping weeds, and wind motion.
2. **Camera Angle:** PlantVillage consists of detached single leaves. In the field, top-down canopy scans may capture multiple leaves at once.
3. **Future Fine-Tuning:** The architecture supports active learning: field images captured during robot patrols can be labeled and used to fine-tune `models/agriguard_best.pth` without altering the inference pipeline.
