"""
AgriGuard — Onboard Treatment Inventory Management
Tracks tank levels, chemical types, capacity, and readiness status.
"""

from typing import Dict, Any, Optional
from dataclasses import dataclass, asdict
import json
import logging

logger = logging.getLogger(__name__)


@dataclass
class TankItem:
    item_id: str
    name: str
    category: str
    capacity_ml: float
    current_ml: float
    unit: str = "mL"
    min_threshold_ml: float = 50.0

    @property
    def level_pct(self) -> float:
        if self.capacity_ml <= 0:
            return 0.0
        return round(max(0.0, min(100.0, (self.current_ml / self.capacity_ml) * 100.0)), 1)

    @property
    def status(self) -> str:
        if self.current_ml <= 0:
            return "EMPTY"
        elif self.current_ml < self.min_threshold_ml:
            return "LOW"
        else:
            return "READY"

    def to_dict(self) -> Dict[str, Any]:
        d = asdict(self)
        d["level_pct"] = self.level_pct
        d["status"] = self.status
        return d


class TankInventoryManager:
    """Manages the robot's physical chemical and water tanks."""

    DEFAULT_TANKS = {
        "TANK_COPPER_FUNGICIDE": TankItem(
            item_id="TANK_COPPER_FUNGICIDE",
            name="Copper Hydroxide 77% Solution",
            category="Fungicide / Protectant",
            capacity_ml=1000.0,
            current_ml=750.0,
            min_threshold_ml=80.0
        ),
        "TANK_NEEM_ORGANIC": TankItem(
            item_id="TANK_NEEM_ORGANIC",
            name="Bio-Neem Oil Organic Formulation",
            category="Bio-Pesticide",
            capacity_ml=800.0,
            current_ml=600.0,
            min_threshold_ml=60.0
        ),
        "TANK_CLEAN_WATER": TankItem(
            item_id="TANK_CLEAN_WATER",
            name="Clean Rinsing Water / Test Fluid",
            category="Solvent / Test Liquid",
            capacity_ml=1200.0,
            current_ml=1100.0,
            min_threshold_ml=100.0
        )
    }

    def __init__(self, initial_tanks: Optional[Dict[str, TankItem]] = None):
        self.tanks: Dict[str, TankItem] = initial_tanks or {
            k: TankItem(**asdict(v)) for k, v in self.DEFAULT_TANKS.items()
        }

    def get_tank(self, item_id: str) -> Optional[TankItem]:
        return self.tanks.get(item_id)

    def check_availability(self, item_id: str, required_ml: float = 40.0) -> Dict[str, Any]:
        """
        Verifies if the required chemical exists and has enough volume for spraying.
        Returns detailed readiness report.
        """
        tank = self.tanks.get(item_id)
        if not tank:
            return {
                "available": False,
                "item_id": item_id,
                "name": "Unknown Chemical",
                "current_ml": 0.0,
                "level_pct": 0.0,
                "status": "NOT_LOADED",
                "reason": f"Inventory item '{item_id}' not found in onboard tank slots."
            }

        if tank.current_ml < required_ml:
            return {
                "available": False,
                "item_id": item_id,
                "name": tank.name,
                "current_ml": tank.current_ml,
                "level_pct": tank.level_pct,
                "status": tank.status,
                "reason": f"Insufficient fluid ({tank.current_ml}mL remaining, {required_ml}mL required). Refill needed."
            }

        return {
            "available": True,
            "item_id": item_id,
            "name": tank.name,
            "current_ml": tank.current_ml,
            "level_pct": tank.level_pct,
            "status": tank.status,
            "reason": "Chemical tank ready and verified."
        }

    def consume(self, item_id: str, amount_ml: float) -> bool:
        """Deducts volume after a physical spray actuation."""
        tank = self.tanks.get(item_id)
        if not tank or tank.current_ml < amount_ml:
            logger.warning(f"Cannot consume {amount_ml}mL from {item_id}: insufficient stock.")
            return False
        tank.current_ml = max(0.0, round(tank.current_ml - amount_ml, 1))
        logger.info(f"Consumed {amount_ml}mL from {item_id}. Remaining: {tank.current_ml}mL ({tank.level_pct}%)")
        return True

    def refill(self, item_id: str, amount_ml: Optional[float] = None) -> bool:
        """Refills tank to capacity or by specific amount."""
        tank = self.tanks.get(item_id)
        if not tank:
            return False
        if amount_ml is None:
            tank.current_ml = tank.capacity_ml
        else:
            tank.current_ml = min(tank.capacity_ml, round(tank.current_ml + amount_ml, 1))
        return True

    def get_all_tanks(self) -> Dict[str, Dict[str, Any]]:
        return {item_id: tank.to_dict() for item_id, tank in self.tanks.items()}
