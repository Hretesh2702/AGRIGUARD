import { DiagnosticsReport, AIDetection, TreatmentDecision, ZoneData, TankInventory, FieldHeatmapResponse, NetworkStatus } from '../types';

const API_BASE = ''; // Uses Vite proxy to http://127.0.0.1:8000

export async function fetchDiagnostics(): Promise<DiagnosticsReport> {
  const res = await fetch(`${API_BASE}/api/diagnostics`);
  if (!res.ok) {
    throw new Error(`Diagnostics fetch failed with status ${res.status}`);
  }
  return res.json();
}

export async function fetchZones(): Promise<ZoneData[]> {
  const res = await fetch(`${API_BASE}/api/zones`);
  if (!res.ok) return [];
  const data = await res.json();
  return data.zones || [];
}

export async function selectZone(zoneId: string): Promise<boolean> {
  const res = await fetch(`${API_BASE}/api/zones/select`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ zone_id: zoneId })
  });
  return res.ok;
}

export async function fetchInventory(): Promise<Record<string, TankInventory>> {
  const res = await fetch(`${API_BASE}/api/inventory`);
  if (!res.ok) return {};
  const data = await res.json();
  return data.tanks || {};
}

export async function refillTank(tankId: string, amountMl: number): Promise<boolean> {
  const res = await fetch(`${API_BASE}/api/inventory/refill`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ tank_id: tankId, amount_ml: amountMl })
  });
  return res.ok;
}

export async function sendRobotMove(direction: string, speed: number = 130, durationMs: number = 0): Promise<any> {
  const res = await fetch(`${API_BASE}/api/robot/move`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ direction, speed, duration_ms: durationMs })
  });
  return res.json();
}

export async function sendRobotStop(): Promise<any> {
  const res = await fetch(`${API_BASE}/api/robot/stop`, {
    method: 'POST'
  });
  return res.json();
}

export async function sendEmergencyStop(): Promise<any> {
  const res = await fetch(`${API_BASE}/api/robot/estop`, {
    method: 'POST'
  });
  return res.json();
}

export async function runCropScan(imageBase64?: string): Promise<{
  observation_id: number;
  recommendation_id?: number | null;
  detection: AIDetection;
  decision: TreatmentDecision;
  telemetry_context: any;
}> {
  const res = await fetch(`${API_BASE}/api/ai/scan`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(imageBase64 ? { image_base64: imageBase64 } : {})
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ detail: 'Camera or scan failure' }));
    throw new Error(err.detail || 'Failed to capture frame or run AI inference');
  }
  return res.json();
}

export async function releaseCamera(): Promise<any> {
  try {
    const res = await fetch(`${API_BASE}/api/camera/release`, { method: 'POST' });
    return await res.json();
  } catch (e) {
    return { ok: false };
  }
}

export async function reclaimCamera(): Promise<any> {
  try {
    const res = await fetch(`${API_BASE}/api/camera/reclaim`, { method: 'POST' });
    return await res.json();
  } catch (e) {
    return { ok: false };
  }
}

export async function approveTreatment(
  decisionId: string,
  approved: boolean,
  operatorName: string = 'Field Operator'
): Promise<any> {
  const res = await fetch(`${API_BASE}/api/treatment/approve`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      decision_id: decisionId,
      approved,
      operator_name: operatorName
    })
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ detail: 'Spray approval rejected' }));
    throw new Error(err.detail || 'Approval request failed');
  }
  return res.json();
}

export async function fetchReinspection(zoneId: string): Promise<any> {
  const res = await fetch(`${API_BASE}/api/reinspection/${zoneId}`);
  if (!res.ok) return null;
  return res.json();
}

export async function setCameraPower(enabled?: boolean): Promise<any> {
  const res = await fetch(`${API_BASE}/api/camera/power`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ enabled })
  });
  if (!res.ok) {
    throw new Error('Failed to toggle camera power');
  }
  return res.json();
}

export async function fetchFieldHeatmap(): Promise<FieldHeatmapResponse> {
  const res = await fetch(`${API_BASE}/api/field/heatmap`);
  if (!res.ok) {
    throw new Error(`Failed to fetch field heatmap data: status ${res.status}`);
  }
  return res.json();
}

export async function setRobotPosition(x?: number, y?: number, zoneId?: string): Promise<any> {
  const res = await fetch(`${API_BASE}/api/robot/position`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ x, y, zone_id: zoneId })
  });
  if (!res.ok) {
    throw new Error(`Failed to update robot position: status ${res.status}`);
  }
  return res.json();
}

export async function sendRobotHeartbeat(): Promise<any> {
  const res = await fetch(`${API_BASE}/api/robot/heartbeat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ client_time: Date.now() })
  });
  if (!res.ok) {
    return { ok: false, connected: false };
  }
  return res.json();
}

export async function fetchNetworkStatus(): Promise<NetworkStatus> {
  const res = await fetch(`${API_BASE}/api/network/status`);
  if (!res.ok) {
    throw new Error(`Failed to fetch network status: ${res.status}`);
  }
  return res.json();
}

export async function updateNetworkConfig(esp32Ip: string, esp32Port: number = 80): Promise<any> {
  const res = await fetch(`${API_BASE}/api/network/config`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ esp32_ip: esp32Ip, esp32_port: esp32Port })
  });
  if (!res.ok) {
    throw new Error(`Failed to update network config: ${res.status}`);
  }
  return res.json();
}

