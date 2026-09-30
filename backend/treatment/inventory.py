"""
AgriGuard — Onboard Tank Inventory Management
Tracks physical chemical stock, estimated usage from spray duration, and tank readiness.
"""

from typing import Dict, Any, Optional
from dataclasses import dataclass, asdict
import logging

logger = logging.getLogger(__name__)


@dataclass
class ChemicalTank:
    tank_id: str
    chemical_name: str
    target_category: str
    capacity_ml: float
    current_ml: float
    min_safe_level_ml: float = 60.0
    is_enabled: bool = True

    @property
    def level_pct(self) -> float:
        if self.capacity_ml <= 0:
            return 0.0
        return round(max(0.0, min(100.0, (self.current_ml / self.capacity_ml) * 100.0)), 1)

    @property
    def status(self) -> str:
        if not self.is_enabled:
            return "DISABLED"
        if self.current_ml <= 0:
            return "EMPTY"
        if self.current_ml < self.min_safe_level_ml:
            return "LOW"
        return "READY"

    def to_dict(self) -> Dict[str, Any]:
        d = asdict(self)
        d["level_pct"] = self.level_pct
        d["status"] = self.status
        return d


class TankInventoryService:
    def __init__(self):
        self.tanks: Dict[str, ChemicalTank] = {
            "TANK_COPPER_FUNGICIDE": ChemicalTank(
                tank_id="TANK_COPPER_FUNGICIDE",
                chemical_name="Copper Hydroxide 77% Solution",
                target_category="Inorganic Copper Fungicide (FRAC M01)",
                capacity_ml=1000.0,
                current_ml=800.0,
                min_safe_level_ml=80.0
            ),
            "TANK_NEEM_ORGANIC": ChemicalTank(
                tank_id="TANK_NEEM_ORGANIC",
                chemical_name="Cold-Pressed Bio-Neem Solution",
                target_category="Organic Bio-Pesticide",
                capacity_ml=800.0,
                current_ml=650.0,
                min_safe_level_ml=60.0
            ),
            "TANK_CLEAN_WATER": ChemicalTank(
                tank_id="TANK_CLEAN_WATER",
                chemical_name="Clean Rinsing & Test Liquid",
                target_category="Solvent / Bench Test Water",
                capacity_ml=1200.0,
                current_ml=1100.0,
                min_safe_level_ml=100.0
            )
        }

    def check_availability(self, tank_id: str, required_ml: float) -> Dict[str, Any]:
        """
        Verifies if the specified chemical tank exists and has adequate volume for the spray pulse.
        """
        tank = self.tanks.get(tank_id)
        if not tank:
            return {
                "available": False,
                "tank_id": tank_id,
                "chemical_name": "Unknown Chemical",
                "current_ml": 0.0,
                "status": "NOT_LOADED",
                "reason": f"Inventory slot '{tank_id}' not mounted on robot."
            }

        if not tank.is_enabled:
            return {
                "available": False,
                "tank_id": tank_id,
                "chemical_name": tank.chemical_name,
                "current_ml": tank.current_ml,
                "status": "DISABLED",
                "reason": f"Tank '{tank.chemical_name}' is disabled."
            }

        if tank.current_ml < required_ml:
            return {
                "available": False,
                "tank_id": tank_id,
                "chemical_name": tank.chemical_name,
                "current_ml": tank.current_ml,
                "status": tank.status,
                "reason": f"Insufficient chemical volume ({tank.current_ml} mL remaining, {required_ml} mL required). Refill required."
            }

        return {
            "available": True,
            "tank_id": tank_id,
            "chemical_name": tank.chemical_name,
            "current_ml": tank.current_ml,
            "level_pct": tank.level_pct,
            "status": tank.status,
            "reason": "Chemical tank is verified and ready for targeted application."
        }

    def deduct_consumption(self, tank_id: str, actual_ml: float) -> bool:
        tank = self.tanks.get(tank_id)
        if not tank:
            return False
        tank.current_ml = max(0.0, round(tank.current_ml - actual_ml, 1))
        logger.info(f"Deducted {actual_ml} mL from {tank_id}. Remaining: {tank.current_ml} mL ({tank.level_pct}%)")
        return True

    def refill(self, tank_id: str, amount_ml: Optional[float] = None) -> bool:
        tank = self.tanks.get(tank_id)
        if not tank:
            return False
        if amount_ml is None:
            tank.current_ml = tank.capacity_ml
        else:
            tank.current_ml = min(tank.capacity_ml, round(tank.current_ml + amount_ml, 1))
        return True

    def get_all(self) -> Dict[str, Dict[str, Any]]:
        return {tid: t.to_dict() for tid, t in self.tanks.items()}
