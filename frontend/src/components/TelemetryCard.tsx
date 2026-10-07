import React, { useState } from 'react';
import { Droplet, Thermometer, Compass, Move, Disc, Droplets, Power, ShieldAlert, AlertTriangle } from 'lucide-react';
import { TelemetryData } from '../types';

interface TelemetryCardProps {
  telemetry: TelemetryData | null;
}

export const TelemetryCard: React.FC<TelemetryCardProps> = ({ telemetry }) => {
  const [isTogglingPump, setIsTogglingPump] = useState<boolean>(false);

  const isRealHardware = (telemetry?.mode === 'REAL_HARDWARE' || telemetry?.hardware_mode === 'REAL_HARDWARE');
  const isEsp32Connected = Boolean(telemetry?.esp32_connected);
  const isSimulation = !isRealHardware;
  const isDisconnected = isRealHardware && !isEsp32Connected;

  // 1. Ultrasonic values (Left, Center, Right in cm)
  const us = telemetry?.ultrasonic;
  let usLeftDisplay = '--';
  let usCenterDisplay = '--';
  let usRightDisplay = '--';
  let obstacleStatus: 'SAFE' | 'WARNING' | 'OBSTACLE' | 'OFFLINE' = 'OFFLINE';
  let robotStatus = 'ROBOT: DISCONNECTED';
  let isCenterObstacle = false;

  if (isSimulation) {
    const usLeft = us?.left ?? (us?.distance_cm != null ? Math.round(us.distance_cm * 1.05 * 10) / 10 : 72.0);
    const usCenter = us?.center ?? us?.distance_cm ?? 48.0;
    const usRight = us?.right ?? (us?.distance_cm != null ? Math.round(us.distance_cm * 1.15 * 10) / 10 : 86.0);

    const minDistance = Math.min(usLeft, usCenter, usRight);
    if (minDistance < 25) {
      obstacleStatus = 'OBSTACLE';
    } else if (minDistance <= 60) {
      obstacleStatus = 'WARNING';
    } else {
      obstacleStatus = 'SAFE';
    }

    isCenterObstacle = usCenter < 25;
    robotStatus = isCenterObstacle ? 'OBSTACLE AHEAD' : obstacleStatus;
    usLeftDisplay = `${usLeft.toFixed(1)} cm`;
    usCenterDisplay = `${usCenter.toFixed(1)} cm`;
    usRightDisplay = `${usRight.toFixed(1)} cm`;
  } else if (isEsp32Connected) {
    const usLeft = us?.left;
    const usCenter = us?.center ?? us?.distance_cm;
    const usRight = us?.right;

    if (usLeft != null) usLeftDisplay = `${Number(usLeft).toFixed(1)} cm`;
    if (usCenter != null) usCenterDisplay = `${Number(usCenter).toFixed(1)} cm`;
    if (usRight != null) usRightDisplay = `${Number(usRight).toFixed(1)} cm`;

    const cVal = usCenter != null ? Number(usCenter) : 999;
    const lVal = usLeft != null ? Number(usLeft) : 999;
    const rVal = usRight != null ? Number(usRight) : 999;
    const minD = Math.min(cVal, lVal, rVal);

    if (minD < 25) {
      obstacleStatus = 'OBSTACLE';
    } else if (minD <= 60) {
      obstacleStatus = 'WARNING';
    } else {
      obstacleStatus = 'SAFE';
    }

    isCenterObstacle = cVal < 25;
    robotStatus = isCenterObstacle ? 'OBSTACLE AHEAD' : obstacleStatus;
  }

  // 2. Soil Moisture
  let soilDisplay = '--';
  let soilStatus: 'WET' | 'NORMAL' | 'DRY' | 'OFFLINE' = 'OFFLINE';

  if (isSimulation) {
    let soilPct = 42.0;
    if (typeof telemetry?.soil_moisture === 'number') {
      soilPct = telemetry.soil_moisture;
    } else if (telemetry?.soil_moisture?.moisture_pct != null) {
      soilPct = telemetry.soil_moisture.moisture_pct;
    } else if (telemetry?.soil_moisture?.percentage != null) {
      soilPct = telemetry.soil_moisture.percentage;
    }

    if (soilPct >= 70) soilStatus = 'WET';
    else if (soilPct >= 40) soilStatus = 'NORMAL';
    else soilStatus = 'DRY';

    soilDisplay = `${soilPct.toFixed(1)}%`;
  } else if (isEsp32Connected) {
    let rawSm: any = telemetry?.soil_moisture;
    let smVal: number | null = null;
    if (typeof rawSm === 'number') smVal = rawSm;
    else if (rawSm?.moisture_pct != null) smVal = rawSm.moisture_pct;
    else if (rawSm?.percentage != null) smVal = rawSm.percentage;

    if (smVal != null) {
      soilDisplay = `${Number(smVal).toFixed(1)}%`;
      if (smVal >= 70) soilStatus = 'WET';
      else if (smVal >= 40) soilStatus = 'NORMAL';
      else soilStatus = 'DRY';
    }
  }

  // 3. DHT22 (Temperature & Humidity)
  let tempDisplay = '--';
  let humDisplay = '--';
  let dhtStatus = 'OFFLINE';

  if (isSimulation) {
    const tempC = telemetry?.dht22?.temperature ?? telemetry?.environment?.temperature_c ?? 29.4;
    const humidityPct = telemetry?.dht22?.humidity ?? telemetry?.environment?.humidity_pct ?? 74.0;
    tempDisplay = `${tempC.toFixed(1)} °C`;
    humDisplay = `${humidityPct.toFixed(1)} %`;
    dhtStatus = 'ACTIVE';
  } else if (isEsp32Connected) {
    const t = telemetry?.dht22?.temperature ?? telemetry?.environment?.temperature_c;
    const h = telemetry?.dht22?.humidity ?? telemetry?.environment?.humidity_pct;
    if (t != null) tempDisplay = `${Number(t).toFixed(1)} °C`;
    if (h != null) humDisplay = `${Number(h).toFixed(1)} %`;
    if (t != null && h != null) dhtStatus = 'ACTIVE';
  }

  // 4. MPU6050 (Accelerometer & Gyroscope)
  let accelXDisplay = '--';
  let accelYDisplay = '--';
  let accelZDisplay = '--';
  let gyroXDisplay = '--';
  let gyroYDisplay = '--';
  let gyroZDisplay = '--';
  let tiltDisplay = '--';
  let tiltStatus = 'OFFLINE';

  if (isSimulation) {
    const ax = telemetry?.mpu6050?.accel_x ?? telemetry?.imu?.ax ?? 0.03;
    const ay = telemetry?.mpu6050?.accel_y ?? telemetry?.imu?.ay ?? 0.12;
    const az = telemetry?.mpu6050?.accel_z ?? telemetry?.imu?.az ?? 0.98;
    const gx = telemetry?.mpu6050?.gyro_x ?? telemetry?.imu?.gx ?? 1.2;
    const gy = telemetry?.mpu6050?.gyro_y ?? telemetry?.imu?.gy ?? -0.8;
    const gz = telemetry?.mpu6050?.gyro_z ?? telemetry?.imu?.gz ?? 0.5;
    const pDeg = telemetry?.mpu6050?.pitch_deg ?? telemetry?.imu?.pitch_deg ?? 1.2;
    const rDeg = telemetry?.mpu6050?.roll_deg ?? telemetry?.imu?.roll_deg ?? -0.8;

    accelXDisplay = `${ax.toFixed(3)}g`;
    accelYDisplay = `${ay.toFixed(3)}g`;
    accelZDisplay = `${az.toFixed(3)}g`;
    gyroXDisplay = `${gx.toFixed(1)}°/s`;
    gyroYDisplay = `${gy.toFixed(1)}°/s`;
    gyroZDisplay = `${gz.toFixed(1)}°/s`;
    tiltDisplay = `Pitch ${pDeg.toFixed(1)}° | Roll ${rDeg.toFixed(1)}°`;
    tiltStatus = telemetry?.mpu6050?.tilt_status ?? (Math.abs(pDeg) < 5 && Math.abs(rDeg) < 5 ? 'LEVEL' : 'TILTED');
  } else if (isEsp32Connected) {
    const mpu = telemetry?.mpu6050;
    const imu = telemetry?.imu;
    const ax = mpu?.accel_x ?? imu?.ax;
    const ay = mpu?.accel_y ?? imu?.ay;
    const az = mpu?.accel_z ?? imu?.az;
    const gx = mpu?.gyro_x ?? imu?.gx;
    const gy = mpu?.gyro_y ?? imu?.gy;
    const gz = mpu?.gyro_z ?? imu?.gz;
    const pDeg = mpu?.pitch_deg ?? imu?.pitch_deg;
    const rDeg = mpu?.roll_deg ?? imu?.roll_deg;

    if (ax != null) accelXDisplay = `${Number(ax).toFixed(3)}g`;
    if (ay != null) accelYDisplay = `${Number(ay).toFixed(3)}g`;
    if (az != null) accelZDisplay = `${Number(az).toFixed(3)}g`;
    if (gx != null) gyroXDisplay = `${Number(gx).toFixed(1)}°/s`;
    if (gy != null) gyroYDisplay = `${Number(gy).toFixed(1)}°/s`;
    if (gz != null) gyroZDisplay = `${Number(gz).toFixed(1)}°/s`;
    if (pDeg != null && rDeg != null) {
      tiltDisplay = `Pitch ${Number(pDeg).toFixed(1)}° | Roll ${Number(rDeg).toFixed(1)}°`;
      tiltStatus = mpu?.tilt_status ?? (Math.abs(Number(pDeg)) < 5 && Math.abs(Number(rDeg)) < 5 ? 'LEVEL' : 'TILTED');
    }
  }

  // 5. Water Pump + Relay
  let pumpState = 'OFF';
  let relayState = 'OFF';
  let sprayStatus = isDisconnected ? 'OFFLINE' : 'READY';
  const isPumpOn = (telemetry?.pump?.state === 'ON' || telemetry?.actuators?.pump_active === true);

  if (isSimulation) {
    pumpState = telemetry?.pump?.state ?? (telemetry?.actuators?.pump_active ? 'ON' : 'OFF');
    relayState = telemetry?.pump?.relay ?? pumpState;
    sprayStatus = telemetry?.pump?.spray_status ?? (isPumpOn ? 'ACTIVE' : 'READY');
  } else if (isEsp32Connected) {
    pumpState = telemetry?.pump?.state ?? (telemetry?.actuators?.pump_active ? 'ON' : 'OFF');
    relayState = telemetry?.pump?.relay ?? pumpState;
    sprayStatus = telemetry?.pump?.spray_status ?? (isPumpOn ? 'ACTIVE' : 'READY');
  }

  const handlePumpToggle = async (targetOn: boolean) => {
    try {
      setIsTogglingPump(true);
      await fetch('/api/simulation/pump', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ state: targetOn ? 'ON' : 'OFF', active: targetOn })
      });
    } catch (err) {
      console.error('Failed to toggle simulated pump:', err);
    } finally {
      setIsTogglingPump(false);
    }
  };

  return (
    <div className="glass-panel" style={{ padding: '1.25rem' }}>
      {/* Header with explicit Simulation / Hardware indicator */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Compass size={18} color="var(--sky-400)" />
          <h2 style={{ fontSize: '1.05rem', fontWeight: 700, margin: 0 }}>Robot Sensor Status</h2>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          {isSimulation ? (
            <>
              <span className="status-pill" style={{
                background: 'rgba(56, 189, 248, 0.15)',
                color: 'var(--sky-400)',
                border: '1px solid rgba(56, 189, 248, 0.3)',
                fontSize: '0.68rem',
                fontWeight: 700,
                letterSpacing: '0.04em'
              }}>
                ● HARDWARE MODE: SIMULATION
              </span>
              <span className="status-pill status-warning" style={{ fontSize: '0.68rem', fontWeight: 700 }}>
                DATA SOURCE: SIMULATION
              </span>
            </>
          ) : (
            <span className={`status-pill ${isEsp32Connected ? 'status-online' : 'status-offline'}`} style={{ fontSize: '0.68rem', fontWeight: 700 }}>
              {isEsp32Connected ? '● REAL HARDWARE: CONNECTED' : '● ROBOT: DISCONNECTED'}
            </span>
          )}
        </div>
      </div>

      {/* Disconnected Notice Banner in Real Hardware Mode */}
      {isDisconnected && (
        <div style={{
          marginBottom: '1rem',
          padding: '0.65rem 0.9rem',
          background: 'rgba(244, 63, 94, 0.1)',
          border: '1px solid rgba(244, 63, 94, 0.3)',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
          fontSize: '0.75rem',
          color: 'var(--rose-400)'
        }}>
          <AlertTriangle size={16} color="var(--rose-400)" style={{ flexShrink: 0 }} />
          <span>
            <strong>ROBOT: DISCONNECTED</strong> — Physical ESP32 hardware is offline. No fake sensor data is generated.
          </span>
        </div>
      )}

      {/* Grid of 5 Standard Telemetry Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>

        {/* 1. ROBOT SENSOR STATUS: ULTRASONIC */}
        <div style={{
          background: 'rgba(0,0,0,0.35)',
          padding: '0.85rem 1rem',
          borderRadius: 'var(--radius-sm)',
          border: isCenterObstacle ? '1px solid var(--rose-500)' : '1px solid var(--border-subtle)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          transition: 'border-color 0.2s ease'
        }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.45rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 700 }}>
                <Move size={13} color="var(--sky-400)" />
                <span>ULTRASONIC PROXIMITY</span>
              </div>
              <span className={`status-pill ${
                obstacleStatus === 'SAFE' ? 'status-online' : obstacleStatus === 'WARNING' ? 'status-warning' : 'status-offline'
              }`} style={{ fontSize: '0.62rem', padding: '0.15rem 0.45rem', fontWeight: 800 }}>
                {robotStatus}
              </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem', marginTop: '0.35rem' }}>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.45rem 0.6rem', borderRadius: '6px' }}>
                <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', marginBottom: '0.15rem' }}>Left Sensor</div>
                <div className="mono" style={{ fontWeight: 800, fontSize: '1.05rem', color: '#fff' }}>{usLeftDisplay}</div>
              </div>
              <div style={{
                background: isCenterObstacle ? 'rgba(244, 63, 94, 0.2)' : 'rgba(255,255,255,0.03)',
                padding: '0.45rem 0.6rem',
                borderRadius: '6px',
                border: isCenterObstacle ? '1px solid var(--rose-500)' : '1px solid transparent'
              }}>
                <div style={{ fontSize: '0.65rem', color: isCenterObstacle ? 'var(--rose-500)' : 'var(--text-muted)', fontWeight: isCenterObstacle ? 700 : 400, marginBottom: '0.15rem' }}>
                  Center Sensor
                </div>
                <div className="mono" style={{ fontWeight: 800, fontSize: '1.05rem', color: isCenterObstacle ? 'var(--rose-500)' : 'var(--amber-400)' }}>
                  {usCenterDisplay}
                </div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.45rem 0.6rem', borderRadius: '6px' }}>
                <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', marginBottom: '0.15rem' }}>Right Sensor</div>
                <div className="mono" style={{ fontWeight: 800, fontSize: '1.05rem', color: '#fff' }}>{usRightDisplay}</div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '0.55rem', paddingTop: '0.4rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.68rem' }}>
            <span style={{ color: 'var(--text-dim)' }}>Obstacle Status:</span>
            <strong style={{
              color: obstacleStatus === 'SAFE' ? 'var(--emerald-400)' : obstacleStatus === 'WARNING' ? 'var(--amber-400)' : 'var(--rose-500)'
            }}>
              {obstacleStatus} {isCenterObstacle ? '(OBSTACLE AHEAD)' : ''}
            </strong>
          </div>
        </div>

        {/* 2. SOIL MOISTURE */}
        <div style={{
          background: 'rgba(0,0,0,0.35)',
          padding: '0.85rem',
          borderRadius: 'var(--radius-sm)',
          border: '1px solid var(--border-subtle)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 700 }}>
                <Droplet size={13} color="var(--sky-400)" />
                <span>SOIL MOISTURE</span>
              </div>
              <span className="status-pill" style={{
                fontSize: '0.62rem',
                padding: '0.15rem 0.45rem',
                fontWeight: 800,
                background: soilStatus === 'NORMAL' ? 'rgba(16, 185, 129, 0.2)' : soilStatus === 'WET' ? 'rgba(56, 189, 248, 0.2)' : soilStatus === 'DRY' ? 'rgba(245, 158, 11, 0.2)' : 'rgba(244, 63, 94, 0.2)',
                color: soilStatus === 'NORMAL' ? 'var(--emerald-400)' : soilStatus === 'WET' ? 'var(--sky-400)' : soilStatus === 'DRY' ? 'var(--amber-400)' : 'var(--rose-400)',
                border: `1px solid ${soilStatus === 'NORMAL' ? 'rgba(16, 185, 129, 0.35)' : soilStatus === 'WET' ? 'rgba(56, 189, 248, 0.35)' : soilStatus === 'DRY' ? 'rgba(245, 158, 11, 0.35)' : 'rgba(244, 63, 94, 0.35)'}`
              }}>
                {soilStatus}
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.35rem', margin: '0.35rem 0 0.15rem 0' }}>
              <div className="mono" style={{ fontSize: '1.65rem', fontWeight: 800, color: 'var(--sky-400)', lineHeight: 1 }}>
                {soilDisplay}
              </div>
            </div>
            <div style={{ fontSize: '0.68rem', color: 'var(--text-dim)' }}>
              Range: 0–100% (Capacitive sensor)
            </div>
          </div>

          <div style={{ marginTop: '0.65rem', paddingTop: '0.45rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.68rem' }}>
            <span style={{ color: 'var(--text-dim)' }}>Condition:</span>
            <strong style={{ color: soilStatus === 'NORMAL' ? 'var(--emerald-400)' : soilStatus === 'WET' ? 'var(--sky-400)' : soilStatus === 'DRY' ? 'var(--amber-400)' : 'var(--rose-400)' }}>
              {soilStatus}
            </strong>
          </div>
        </div>

        {/* 3. ENVIRONMENT: DHT22 */}
        <div style={{
          background: 'rgba(0,0,0,0.35)',
          padding: '0.85rem',
          borderRadius: 'var(--radius-sm)',
          border: '1px solid var(--border-subtle)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 700 }}>
                <Thermometer size={13} color="var(--amber-400)" />
                <span>DHT22</span>
              </div>
              <span className={`status-pill ${dhtStatus === 'ACTIVE' ? 'status-online' : 'status-offline'}`} style={{ fontSize: '0.62rem', padding: '0.15rem 0.45rem', fontWeight: 800 }}>
                {dhtStatus}
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', marginTop: '0.2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Temperature:</span>
                <span className="mono" style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--amber-400)' }}>
                  {tempDisplay}
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Humidity:</span>
                <span className="mono" style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--emerald-400)' }}>
                  {humDisplay}
                </span>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '0.65rem', paddingTop: '0.45rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.68rem' }}>
            <span style={{ color: 'var(--text-dim)' }}>Sensor Model:</span>
            <span style={{ color: 'var(--text-muted)', fontWeight: 600 }}>DHT22 Microclimate</span>
          </div>
        </div>

        {/* 4. MOTION: MPU6050 */}
        <div style={{
          background: 'rgba(0,0,0,0.35)',
          padding: '0.85rem',
          borderRadius: 'var(--radius-sm)',
          border: '1px solid var(--border-subtle)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 700 }}>
                <Disc size={13} color="var(--emerald-400)" />
                <span>MPU6050</span>
              </div>
              <span className={`status-pill ${tiltStatus !== 'OFFLINE' ? 'status-online' : 'status-offline'}`} style={{ fontSize: '0.62rem', padding: '0.15rem 0.45rem', fontWeight: 800 }}>
                {tiltStatus}
              </span>
            </div>

            {/* Accelerometer */}
            <div style={{ fontSize: '0.68rem', color: 'var(--text-dim)', fontWeight: 700, marginBottom: '0.15rem' }}>
              ACCELEROMETER
            </div>
            <div style={{ display: 'flex', gap: '0.4rem', fontSize: '0.72rem', marginBottom: '0.4rem' }}>
              <span className="mono" style={{ color: '#fff' }}>X: {accelXDisplay}</span>
              <span className="mono" style={{ color: '#fff' }}>Y: {accelYDisplay}</span>
              <span className="mono" style={{ color: 'var(--sky-400)', fontWeight: 700 }}>Z: {accelZDisplay}</span>
            </div>

            {/* Gyroscope */}
            <div style={{ fontSize: '0.68rem', color: 'var(--text-dim)', fontWeight: 700, marginBottom: '0.15rem' }}>
              GYROSCOPE
            </div>
            <div style={{ display: 'flex', gap: '0.4rem', fontSize: '0.72rem' }}>
              <span className="mono" style={{ color: '#fff' }}>X: {gyroXDisplay}</span>
              <span className="mono" style={{ color: '#fff' }}>Y: {gyroYDisplay}</span>
              <span className="mono" style={{ color: '#fff' }}>Z: {gyroZDisplay}</span>
            </div>
          </div>

          <div style={{ marginTop: '0.65rem', paddingTop: '0.45rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.68rem' }}>
            <span style={{ color: 'var(--text-dim)' }}>Tilt / Angle:</span>
            <span className="mono" style={{ color: 'var(--emerald-400)', fontWeight: 700 }}>
              {tiltDisplay}
            </span>
          </div>
        </div>

        {/* 5. SPRAY SYSTEM: PUMP + RELAY */}
        <div style={{
          background: 'rgba(0,0,0,0.35)',
          padding: '0.85rem',
          borderRadius: 'var(--radius-sm)',
          border: isPumpOn ? '1px solid rgba(16, 185, 129, 0.5)' : '1px solid var(--border-subtle)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          transition: 'border-color 0.2s ease'
        }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.45rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 700 }}>
                <Droplets size={13} color="var(--amber-400)" />
                <span>SPRAY SYSTEM</span>
              </div>
              <span className={`status-pill ${isPumpOn ? 'status-online' : 'status-offline'}`} style={{ fontSize: '0.62rem', padding: '0.15rem 0.45rem', fontWeight: 800 }}>
                {sprayStatus}
              </span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.78rem', marginBottom: '0.35rem' }}>
              <span style={{ color: 'var(--text-muted)' }}>Pump:</span>
              <strong style={{ color: isPumpOn ? 'var(--emerald-400)' : 'var(--text-dim)', fontWeight: 800 }}>
                {pumpState}
              </strong>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.78rem', marginBottom: '0.6rem' }}>
              <span style={{ color: 'var(--text-muted)' }}>Relay:</span>
              <strong style={{ color: isPumpOn ? 'var(--emerald-400)' : 'var(--text-dim)', fontWeight: 800 }}>
                {relayState}
              </strong>
            </div>

            {/* Dashboard Controls: [ PUMP ON ] and [ PUMP OFF ] */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.4rem', marginTop: '0.3rem' }}>
              <button
                type="button"
                disabled={isTogglingPump || isPumpOn || isDisconnected}
                onClick={() => handlePumpToggle(true)}
                className="btn"
                style={{
                  padding: '0.4rem 0.5rem',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  background: isPumpOn ? 'rgba(16, 185, 129, 0.4)' : 'rgba(16, 185, 129, 0.15)',
                  color: '#fff',
                  border: isPumpOn ? '1px solid var(--emerald-400)' : '1px solid rgba(16, 185, 129, 0.3)',
                  borderRadius: '6px',
                  cursor: (isPumpOn || isDisconnected) ? 'default' : 'pointer',
                  opacity: (isPumpOn || isDisconnected) ? 0.6 : 0.85
                }}
              >
                PUMP ON
              </button>

              <button
                type="button"
                disabled={isTogglingPump || !isPumpOn || isDisconnected}
                onClick={() => handlePumpToggle(false)}
                className="btn"
                style={{
                  padding: '0.4rem 0.5rem',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  background: !isPumpOn ? 'rgba(255, 255, 255, 0.15)' : 'rgba(244, 63, 94, 0.15)',
                  color: !isPumpOn ? '#fff' : 'var(--rose-500)',
                  border: !isPumpOn ? '1px solid rgba(255, 255, 255, 0.3)' : '1px solid rgba(244, 63, 94, 0.3)',
                  borderRadius: '6px',
                  cursor: (!isPumpOn || isDisconnected) ? 'default' : 'pointer',
                  opacity: (!isPumpOn || isDisconnected) ? 0.6 : 0.85
                }}
              >
                PUMP OFF
              </button>
            </div>
          </div>

          <div style={{ marginTop: '0.65rem', paddingTop: '0.45rem', borderTop: '1px solid var(--border-subtle)', fontSize: '0.65rem', color: 'var(--text-dim)' }}>
            SPRAY STATUS: <strong style={{ color: isPumpOn ? 'var(--emerald-400)' : 'var(--text-muted)' }}>{sprayStatus}</strong> ({isSimulation ? 'Simulation mode' : 'Real hardware'})
          </div>
        </div>

      </div>

      {/* Clear Demo / Simulated notice footer */}
      {isSimulation && (
        <div style={{
          marginTop: '0.85rem',
          padding: '0.4rem 0.75rem',
          background: 'rgba(56, 189, 248, 0.06)',
          borderRadius: 'var(--radius-sm)',
          border: '1px solid rgba(56, 189, 248, 0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '0.68rem',
          color: 'var(--text-muted)'
        }}>
          <span>
            <strong style={{ color: 'var(--sky-400)' }}>SIMULATED DATA:</strong> Sensor telemetry is dynamically generated by the Simulation Telemetry Provider. No real liquid is actuated.
          </span>
          <span className="mono" style={{ color: 'var(--text-dim)' }}>
            Target: 6.6 Hz continuous telemetry
          </span>
        </div>
      )}
    </div>
  );
};
