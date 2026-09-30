"""
AgriGuard — Camera Capture & Synthetic Demonstration Stream
Supports physical external USB/RTSP camera and high-fidelity botanical generator for zero-hardware demos.
"""

import time
import cv2
import numpy as np
import threading
import logging
from typing import Optional, Tuple

logger = logging.getLogger(__name__)


class SyntheticPlantStream:
    """
    Renders realistic botanical plant leaf frames with dynamic lighting
    and authentic disease symptom patterns (Early Blight bullseye lesions,
    Bacterial Spot specks, or pristine healthy leaves).
    """

    def __init__(self, width: int = 640, height: int = 480):
        self.width = width
        self.height = height
        self.active_condition = "early_blight"
        self._frame_count = 0

    def set_condition(self, condition: str):
        self.active_condition = condition

    def get_frame(self) -> np.ndarray:
        self._frame_count += 1
        img = np.zeros((self.height, self.width, 3), dtype=np.uint8)

        # 1. Agricultural Soil / Greenhouse Background with texture
        bg_color = np.array([32, 42, 52], dtype=np.uint8)  # Deep rich soil brown
        img[:] = bg_color
        noise = np.random.normal(0, 8, (self.height, self.width, 3)).astype(np.int16)
        img = np.clip(img.astype(np.int16) + noise, 0, 255).astype(np.uint8)

        # Slight camera jitter / motion simulation
        sway_x = int(np.sin(self._frame_count * 0.05) * 6)
        sway_y = int(np.cos(self._frame_count * 0.04) * 4)

        cx, cy = (self.width // 2) + sway_x, (self.height // 2) + sway_y

        # 2. Draw Main Tomato Compound Leaf (Multiple Serrated Leaflets)
        stem_pts = np.array([
            [cx, self.height],
            [cx - 10, cy + 120],
            [cx + 5, cy + 30],
            [cx, cy - 80]
        ], np.int32)
        cv2.polylines(img, [stem_pts], False, (38, 92, 45), 8, cv2.LINE_AA)

        # Helper to draw a serrated botanical leaflet
        def draw_leaflet(lx, ly, angle_deg, scale_x, scale_y, is_diseased=False):
            rad = np.radians(angle_deg)
            cos_a, sin_a = np.cos(rad), np.sin(rad)

            # Base leaf contour points (egg/spear shape)
            t = np.linspace(-np.pi, np.pi, 60)
            leaf_x = scale_x * np.sin(t)
            leaf_y = -scale_y * (np.cos(t) + 0.3 * np.cos(2 * t))

            # Add serration noise along edges
            serration = np.sin(t * 14) * (scale_x * 0.08)
            leaf_x += serration * np.cos(t)

            rot_x = (leaf_x * cos_a - leaf_y * sin_a + lx).astype(np.int32)
            rot_y = (leaf_x * sin_a + leaf_y * cos_a + ly).astype(np.int32)
            pts = np.column_stack((rot_x, rot_y))

            # Base leaf color (lush green or chlorotic yellow-green)
            leaf_color = (42, 168, 58)  # Rich healthy green
            if is_diseased and self.active_condition == "early_blight":
                leaf_color = (38, 140, 72)
            elif is_diseased and self.active_condition == "bacterial_spot":
                leaf_color = (45, 155, 65)

            cv2.fillPoly(img, [pts], leaf_color)
            cv2.polylines(img, [pts], True, (28, 115, 38), 2, cv2.LINE_AA)

            # Central and lateral veins
            cv2.line(img, (lx, ly), (int(lx - sin_a * scale_y * 1.1), int(ly - cos_a * scale_y * 1.1)), (65, 185, 85), 2, cv2.LINE_AA)

            # 3. Add Lesions / Pathology Symptoms if Diseased
            if is_diseased:
                if self.active_condition == "early_blight":
                    # Bullseye concentric ring lesion
                    spot_cx = int(lx + cos_a * (scale_x * 0.2) - sin_a * (scale_y * 0.3))
                    spot_cy = int(ly + sin_a * (scale_x * 0.2) - cos_a * (scale_y * 0.3))

                    # Chlorotic yellow halo around lesion
                    cv2.circle(img, (spot_cx, spot_cy), 32, (30, 205, 235), -1, cv2.LINE_AA)
                    # Outer necrotic brown ring
                    cv2.circle(img, (spot_cx, spot_cy), 22, (20, 48, 85), -1, cv2.LINE_AA)
                    # Concentric lighter ring
                    cv2.circle(img, (spot_cx, spot_cy), 15, (25, 68, 115), 2, cv2.LINE_AA)
                    # Center dark core
                    cv2.circle(img, (spot_cx, spot_cy), 7, (15, 30, 55), -1, cv2.LINE_AA)

                    # Secondary smaller lesion
                    s2_x, s2_y = spot_cx + 35, spot_cy + 25
                    cv2.circle(img, (s2_x, s2_y), 16, (30, 190, 220), -1, cv2.LINE_AA)
                    cv2.circle(img, (s2_x, s2_y), 10, (20, 50, 90), -1, cv2.LINE_AA)

                elif self.active_condition == "late_blight":
                    # Water-soaked irregular grey-brown necrotic patch
                    patch_cx = int(lx - sin_a * (scale_y * 0.2))
                    patch_cy = int(ly - cos_a * (scale_y * 0.2))
                    cv2.ellipse(img, (patch_cx, patch_cy), (45, 28), angle_deg + 30, 0, 360, (40, 60, 75), -1, cv2.LINE_AA)
                    cv2.ellipse(img, (patch_cx, patch_cy), (35, 18), angle_deg + 30, 0, 360, (25, 45, 55), -1, cv2.LINE_AA)

                elif self.active_condition == "bacterial_spot":
                    # Numerous small dark specks with yellow margins
                    np.random.seed(42)
                    for _ in range(12):
                        sx = int(lx + np.random.uniform(-scale_x * 0.5, scale_x * 0.5))
                        sy = int(ly + np.random.uniform(-scale_y * 0.6, scale_y * 0.2))
                        cv2.circle(img, (sx, sy), 5, (20, 210, 230), -1, cv2.LINE_AA)
                        cv2.circle(img, (sx, sy), 3, (15, 25, 40), -1, cv2.LINE_AA)

        # Draw Terminal Leaflet (Center top)
        is_affected = (self.active_condition != "healthy")
        draw_leaflet(cx, cy - 40, 0, scale_x=70, scale_y=110, is_diseased=is_affected)

        # Draw Lateral Leaflets (Left & Right pairs)
        draw_leaflet(cx - 65, cy + 30, -38, scale_x=55, scale_y=85, is_diseased=is_affected)
        draw_leaflet(cx + 65, cy + 30, 38, scale_x=55, scale_y=85, is_diseased=False)
        draw_leaflet(cx - 75, cy + 110, -52, scale_x=50, scale_y=75, is_diseased=is_affected)
        draw_leaflet(cx + 75, cy + 110, 52, scale_x=50, scale_y=75, is_diseased=False)

        # 4. HUD Crosshair Overlay
        hud_color = (0, 255, 180)
        cv2.line(img, (cx - 20, cy), (cx + 20, cy), hud_color, 1)
        cv2.line(img, (cx, cy - 20), (cx, cy + 20), hud_color, 1)
        cv2.circle(img, (cx, cy), 12, hud_color, 1)

        # Timestamp & Status overlay
        now_str = time.strftime("%H:%M:%S")
        cv2.putText(img, f"AG-CAM 1080p | {now_str} | STREAM ACTIVE", (16, 28), cv2.FONT_HERSHEY_SIMPLEX, 0.55, (200, 255, 220), 1, cv2.LINE_AA)

        return img


class AgriGuardCamera:
    """Camera driver that handles real USB webcam or seamless synthetic fallback."""

    def __init__(self, camera_index: int = 0, preferred_width: int = 640, preferred_height: int = 480):
        self.camera_index = camera_index
        self.width = preferred_width
        self.height = preferred_height

        self.cap: Optional[cv2.VideoCapture] = None
        self.is_real_camera = False
        self.synthetic_stream = SyntheticPlantStream(self.width, self.height)
        self.lock = threading.Lock()

        self._init_camera()

    def _init_camera(self):
        try:
            cap = cv2.VideoCapture(self.camera_index, cv2.CAP_DSHOW if cv2.__file__ else cv2.CAP_ANY)
            if cap.isOpened():
                ret, frame = cap.read()
                if ret and frame is not None and frame.size > 0:
                    self.cap = cap
                    self.is_real_camera = True
                    self.cap.set(cv2.CAP_PROP_FRAME_WIDTH, self.width)
                    self.cap.set(cv2.CAP_PROP_FRAME_HEIGHT, self.height)
                    logger.info(f"Connected to physical camera index {self.camera_index}")
                    return
                cap.release()
        except Exception as e:
            logger.warning(f"Could not open physical camera: {e}")

        self.is_real_camera = False
        logger.info("Physical camera not detected. Utilizing high-fidelity botanical generator.")

    def set_simulation_condition(self, condition: str):
        self.synthetic_stream.set_condition(condition)

    def capture_frame(self) -> np.ndarray:
        """Captures a single BGR frame from webcam or generator."""
        with self.lock:
            if self.is_real_camera and self.cap:
                ret, frame = self.cap.read()
                if ret and frame is not None:
                    return frame
                else:
                    logger.warning("Frame read failed on physical camera. Falling back to synthetic.")

            return self.synthetic_stream.get_frame()

    def get_jpeg_bytes(self) -> bytes:
        frame = self.capture_frame()
        ret, jpeg = cv2.imencode(".jpg", frame, [cv2.IMWRITE_JPEG_QUALITY, 80])
        return jpeg.tobytes() if ret else b""

    def release(self):
        with self.lock:
            if self.cap:
                self.cap.release()
                self.cap = None
