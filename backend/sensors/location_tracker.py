"""
AgriGuard — Robot Field Location & Odometry Tracker
Maintains deterministic field-grid coordinates derived from robot movements and zone transitions.
Labels prototype coordinates as "Prototype Estimated Position" (Section: ROBOT LOCATION).
"""

from typing import Dict, Any, Optional
from datetime import datetime, timezone
import logging

logger = logging.getLogger(__name__)


class RobotLocationTracker:
    """
    Tracks robot location in the field.
    Uses commanded 4WD movements and zone transitions to maintain
    deterministic (x, y) field-grid coordinates.
    """

    def __init__(self, field_width: int = 6, field_height: int = 4, initial_x: int = 1, initial_y: int = 1):
        self.field_width = max(2, field_width)
        self.field_height = max(2, field_height)
        self.x = max(1, min(self.field_width, initial_x))
        self.y = max(1, min(self.field_height, initial_y))
        self.mode = "Prototype Estimated Position"
        self.latitude: Optional[float] = None
        self.longitude: Optional[float] = None
        self.last_movement_direction: Optional[str] = None
        self.last_moved_timestamp: Optional[str] = None
        self.total_movement_commands: int = 0

    @property
    def zone_id(self) -> str:
        return f"ZONE-R{self.y}C{self.x}"

    @property
    def zone_display(self) -> str:
        # Convert row to letter (Row 1 -> A, Row 2 -> B)
        row_letter = chr(64 + self.y) if 1 <= self.y <= 26 else f"R{self.y}"
        return f"{row_letter}{self.x}"

    def update_from_movement(self, direction: str, speed: int = 120, duration_ms: int = 0) -> Dict[str, Any]:
        """
        Updates deterministic coordinates on physical motor movement:
        - Forward moves robot up the field (+y)
        - Backward/Reverse moves robot down the field (-y)
        - Right moves robot east (+x)
        - Left moves robot west (-x)
        """
        dir_norm = direction.lower().strip()
        now_iso = datetime.now(timezone.utc).isoformat()

        prev_x, prev_y = self.x, self.y

        if dir_norm in ("forward", "fwd"):
            self.y = min(self.field_height, self.y + 1)
        elif dir_norm in ("backward", "reverse", "rev", "back"):
            self.y = max(1, self.y - 1)
        elif dir_norm == "right":
            self.x = min(self.field_width, self.x + 1)
        elif dir_norm == "left":
            self.x = max(1, self.x - 1)

        self.last_movement_direction = dir_norm
        self.last_moved_timestamp = now_iso
        self.total_movement_commands += 1

        if (self.x != prev_x) or (self.y != prev_y):
            logger.info(f"Robot location updated: ({prev_x}, {prev_y}) -> ({self.x}, {self.y}) [{self.zone_id}]")

        return self.get_location()

    def set_position(self, x: int, y: int) -> Dict[str, Any]:
        """Manually sets field coordinates within field boundaries."""
        self.x = max(1, min(self.field_width, int(x)))
        self.y = max(1, min(self.field_height, int(y)))
        self.last_moved_timestamp = datetime.now(timezone.utc).isoformat()
        return self.get_location()

    def set_zone(self, zone_id_str: str) -> Dict[str, Any]:
        """
        Parses zone identifiers such as 'ZONE-R2C3', 'R2C3', or 'B3'
        and synchronizes grid position.
        """
        cleaned = zone_id_str.upper().replace("ZONE-", "").strip()

        # Format 1: R{row}C{col} (e.g. R2C3)
        if "R" in cleaned and "C" in cleaned:
            try:
                parts = cleaned.split("C")
                row_val = int(parts[0].replace("R", ""))
                col_val = int(parts[1])
                return self.set_position(x=col_val, y=row_val)
            except Exception:
                pass

        # Format 2: Letter + Number (e.g. B2, A1)
        if len(cleaned) >= 2 and cleaned[0].isalpha() and cleaned[1:].isdigit():
            try:
                row_val = ord(cleaned[0]) - 64  # A -> 1, B -> 2
                col_val = int(cleaned[1:])
                return self.set_position(x=col_val, y=row_val)
            except Exception:
                pass

        return self.get_location()

    def set_gps(self, latitude: float, longitude: float) -> Dict[str, Any]:
        """Updates real GPS coordinates if GPS module is present."""
        self.latitude = latitude
        self.longitude = longitude
        self.mode = "Physical GPS Fix"
        return self.get_location()

    def get_location(self) -> Dict[str, Any]:
        """Returns the full location payload for telemetry, observations, and heatmap."""
        return {
            "x": self.x,
            "y": self.y,
            "zone_id": self.zone_id,
            "zone": self.zone_display,
            "mode": self.mode,
            "latitude": self.latitude,
            "longitude": self.longitude,
            "last_movement": self.last_movement_direction,
            "last_moved_at": self.last_moved_timestamp,
            "total_moves": self.total_movement_commands
        }
