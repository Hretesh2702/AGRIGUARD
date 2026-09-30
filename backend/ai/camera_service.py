"""
AgriGuard — Real External USB Camera Service
Zero-latency capture pipeline from physical USB camera with dedicated grabber thread,
hardware ring-buffer drain, and honest disconnected state reporting.
"""

import cv2
import time
import threading
import logging
from typing import Optional, Tuple, Dict, Any, List

logger = logging.getLogger(__name__)


class CameraService:
    """
    Manages physical USB camera connection.
    Strictly captures real frames and reports honest error states when camera is unavailable.
    Uses a dedicated background reader thread to eliminate OpenCV buffer lag.
    """

    def __init__(self, camera_index: int = 0, width: int = 1280, height: int = 720, target_fps: int = 120):
        self.camera_index = camera_index
        self.width = width
        self.height = height
        self.target_fps = target_fps

        self.cap: Optional[cv2.VideoCapture] = None
        self.is_connected = False
        self.is_enabled = True
        self.is_running = False
        self.worker_thread: Optional[threading.Thread] = None

        self.latest_frame: Optional[Any] = None
        self.latest_jpeg: Optional[bytes] = None
        self.frame_id: int = 0
        self.last_frame_time: float = 0.0

        self.lock = threading.Lock()
        self.new_frame_event = threading.Event()

        self._start_camera()

    def start_camera(self) -> bool:
        """Powers ON the physical USB camera feed."""
        self.is_enabled = True
        logger.info("Physical camera power requested ON.")
        return self._start_camera()

    def stop_camera(self) -> bool:
        """Powers OFF the physical USB camera feed and releases hardware resource."""
        self.is_running = False
        if self.worker_thread and self.worker_thread.is_alive():
            self.worker_thread.join(timeout=0.5)
            self.worker_thread = None

        with self.lock:
            self.is_enabled = False
            self.is_connected = False
            self.hardware_yielded = False
            if self.cap is not None:
                self.cap.release()
                self.cap = None
            self.latest_frame = None
            self.latest_jpeg = None
            logger.info("Physical camera powered OFF and hardware resource released.")
            return True

    def yield_device(self) -> bool:
        """Yields OpenCV hardware capture handle to browser client while keeping camera subsystem ENABLED."""
        self.is_running = False
        if self.worker_thread and self.worker_thread.is_alive():
            self.worker_thread.join(timeout=0.4)
            self.worker_thread = None

        with self.lock:
            if self.cap is not None:
                self.cap.release()
                self.cap = None
            self.hardware_yielded = True
            logger.info("OpenCV hardware handle yielded to browser client; camera remains ENABLED.")
            return True

    def reclaim_device(self) -> bool:
        """Reclaims the hardware capture handle for backend capture/fallback streaming."""
        self.hardware_yielded = False
        if self.is_enabled:
            return self._start_camera()
        return False

    def toggle_camera(self, enabled: Optional[bool] = None) -> bool:
        """Toggles or sets the camera power state."""
        target_state = (not self.is_enabled) if enabled is None else enabled
        if target_state:
            return self.start_camera()
        else:
            return self.stop_camera()

    def _start_camera(self) -> bool:
        if not self.is_enabled:
            return False

        # Stop any existing worker thread first
        self.is_running = False
        if self.worker_thread and self.worker_thread.is_alive():
            self.worker_thread.join(timeout=0.5)
            self.worker_thread = None

        with self.lock:
            if self.cap is not None:
                self.cap.release()
                self.cap = None

            # Attempt to open real camera
            import sys
            if sys.platform == "win32":
                self.cap = cv2.VideoCapture(self.camera_index, cv2.CAP_DSHOW)
            else:
                self.cap = cv2.VideoCapture(self.camera_index)

            if self.cap.isOpened():
                # CRITICAL: Buffer size 1 to avoid OS/DirectShow multi-frame queue lag
                self.cap.set(cv2.CAP_PROP_BUFFERSIZE, 1)
                self.cap.set(cv2.CAP_PROP_FRAME_WIDTH, self.width)
                self.cap.set(cv2.CAP_PROP_FRAME_HEIGHT, self.height)
                self.cap.set(cv2.CAP_PROP_FPS, self.target_fps)

                ret, frame = self.cap.read()
                if ret and frame is not None and frame.size > 0:
                    self.latest_frame = frame
                    self.frame_id = 1
                    self.last_frame_time = time.time()
                    self.is_connected = True
                    self.is_running = True
                    self.worker_thread = threading.Thread(target=self._capture_worker, daemon=True)
                    self.worker_thread.start()
                    logger.info(f"Connected to physical USB camera index {self.camera_index} ({frame.shape[1]}x{frame.shape[0]}) with zero-lag worker")
                    return True

            self.is_connected = False
            self.latest_frame = None
            self.latest_jpeg = None
            logger.warning(f"Physical camera index {self.camera_index} unavailable.")
            return False

    def _capture_worker(self):
        """
        Dedicated background worker thread that drains camera frames continuously.
        Eliminates OpenCV internal driver queue lag by always keeping the latest frame available.
        """
        while self.is_running and self.is_enabled:
            if self.cap is None or not self.cap.isOpened():
                time.sleep(0.05)
                continue

            ret, frame = self.cap.read()
            if ret and frame is not None and frame.size > 0:
                with self.lock:
                    self.latest_frame = frame
                    self.frame_id += 1
                    self.last_frame_time = time.time()
                    self.latest_jpeg = None  # Invalidate cached JPEG
                    self.is_connected = True
                self.new_frame_event.set()
            else:
                with self.lock:
                    self.is_connected = False
                time.sleep(0.05)

    def get_status(self) -> Dict[str, Any]:
        is_online = self.is_enabled and (self.is_connected or getattr(self, "hardware_yielded", False))
        status_text = "OFF" if not self.is_enabled else ("ONLINE" if is_online else "CAMERA_UNAVAILABLE")
        return {
            "enabled": self.is_enabled,
            "connected": is_online,
            "camera_connected": is_online,
            "device_index": self.camera_index,
            "resolution": f"{self.width}x{self.height}",
            "target_fps": self.target_fps,
            "status": status_text,
            "hardware_yielded": getattr(self, "hardware_yielded", False),
            "zero_lag": True
        }

    def capture_frame(self) -> Tuple[bool, Optional[Any]]:
        """
        Captures a real single frame with zero latency.
        Returns:
            - success (bool)
            - frame (OpenCV BGR ndarray or None)
        """
        if not self.is_enabled:
            return False, None

        with self.lock:
            if self.is_connected and self.latest_frame is not None:
                return True, self.latest_frame.copy()

        # If yielded or not connected, attempt single capture
        if getattr(self, "hardware_yielded", False) or not self.is_connected:
            self.hardware_yielded = False
            if self._start_camera():
                with self.lock:
                    if self.latest_frame is not None:
                        return True, self.latest_frame.copy()

        return False, None

    def get_jpeg_bytes(self, quality: int = 75) -> Optional[bytes]:
        """Encodes real latest frame to JPEG for MJPEG streaming with caching."""
        if not self.is_enabled or not self.is_connected:
            return None

        with self.lock:
            if self.latest_jpeg is not None:
                return self.latest_jpeg
            if self.latest_frame is None:
                return None
            frame = self.latest_frame

        ret, jpeg = cv2.imencode(".jpg", frame, [cv2.IMWRITE_JPEG_QUALITY, quality])
        if ret:
            encoded = jpeg.tobytes()
            with self.lock:
                self.latest_jpeg = encoded
            return encoded
        return None

    def get_fresh_jpeg(self, last_seen_id: int, timeout: float = 0.05, quality: int = 75) -> Tuple[Optional[bytes], int]:
        """
        Wait for a newer frame than last_seen_id and return JPEG bytes and frame_id.
        Avoids redundant encoding and achieves instantaneous low-latency delivery.
        """
        if not self.is_enabled or not self.is_connected:
            return None, -1

        # Wait for a new frame event if we're already caught up
        if self.frame_id <= last_seen_id:
            self.new_frame_event.clear()
            self.new_frame_event.wait(timeout=timeout)

        with self.lock:
            fid = self.frame_id
            if self.latest_jpeg is not None and fid == last_seen_id:
                return self.latest_jpeg, fid
            if self.latest_frame is None:
                return None, -1
            frame = self.latest_frame

        ret, jpeg = cv2.imencode(".jpg", frame, [cv2.IMWRITE_JPEG_QUALITY, quality])
        if ret:
            encoded = jpeg.tobytes()
            with self.lock:
                self.latest_jpeg = encoded
            return encoded, fid
        return None, -1

    def switch_camera_index(self, new_index: int) -> bool:
        self.camera_index = new_index
        return self._start_camera()

    @staticmethod
    def detect_available_cameras(max_tested: int = 4) -> List[int]:
        """Scans for available video capture devices."""
        available = []
        for idx in range(max_tested):
            cap = cv2.VideoCapture(idx)
            if cap.isOpened():
                ret, _ = cap.read()
                if ret:
                    available.append(idx)
                cap.release()
        return available

    def release(self):
        self.stop_camera()
