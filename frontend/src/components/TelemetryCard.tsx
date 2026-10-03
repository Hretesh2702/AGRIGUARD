import React, { useState } from 'react';
import { Droplet, Thermometer, Wind, Compass, Move, Disc, Droplets, Power, ShieldAlert } from 'lucide-react';
import { TelemetryData } from '../types';

interface TelemetryCardProps {
  telemetry: TelemetryData | null;
}

export const TelemetryCard: React.FC<TelemetryCardProps> = ({ telemetry }) => {
  const [isTogglingPump, setIsTogglingPump] = useState<boolean>(false);

  const isSimulation = (telemetry?.mode === 'SIMULATION' || telemetry?.hardware_mode === 'SIMULATION' || telemetry?.data_source === 'SIMULATION' || !telemetry?.esp32_connected);
  const isEsp32Connected = Boolean(telemetry?.esp32_connected);

  // 1. Ultrasonic values (Left, Center, Right in cm)
  const us = telemetry?.ultrasonic;
  const usLeft = us?.left ?? (us?.distance_cm != null ? Math.round(us.distance_cm * 1.05 * 10) / 10 : 72.0);
  const usCenter = us?.center ?? us?.distance_cm ?? 48.0;
  const usRight = us?.right ?? (us?.distance_cm != null ? Math.round(us.distance_cm * 1.15 * 10) / 10 : 86.0);

  // Obstacle calculation:
  // distance > 60 cm -> SAFE
  // 25 <= distance <= 60 cm -> WARNING
  // distance < 25 cm -> OBSTACLE
  // Center < 25 cm -> OBSTACLE AHEAD
  const minDistance = Math.min(usLeft, usCenter, usRight);
  let obstacleStatus: 'SAFE' | 'WARNING' | 'OBSTACLE' = 'SAFE';
  if (minDistance < 25) {
    obstacleStatus = 'OBSTACLE';
  } else if (minDistance <= 60) {
    obstacleStatus = 'WARNING';
  }

  const isCenterObstacle = usCenter < 25;
  const robotStatus = isCenterObstacle ? 'OBSTACLE AHEAD' : obstacleStatus;

  // 2. Soil Moisture
  let soilPct = 42.0;
  if (typeof telemetry?.soil_moisture === 'number') {
    soilPct = telemetry.soil_moisture;
  } else if (telemetry?.soil_moisture?.moisture_pct != null) {
    soilPct = telemetry.soil_moisture.moisture_pct;
  } else if (telemetry?.soil_moisture?.percentage != null) {
    soilPct = telemetry.soil_moisture.percentage;
  }

  let soilStatus: 'WET' | 'NORMAL' | 'DRY' = 'NORMAL';
  if (soilPct >= 70) {
    soilStatus = 'WET';
  } else if (soilPct >= 40) {
    soilStatus = 'NORMAL';
  } else {
    soilStatus = 'DRY';
  }

  // 3. DHT22 (Temperature & Humidity)
  const tempC = telemetry?.dht22?.temperature ?? telemetry?.environment?.temperature_c ?? 29.4;
  const humidityPct = telemetry?.dht22?.humidity ?? telemetry?.environment?.humidity_pct ?? 74.0;

  // 4. MPU6050 (Accelerometer & Gyroscope)
  const accelX = telemetry?.mpu6050?.accel_x ?? telemetry?.imu?.ax ?? 0.03;
  const accelY = telemetry?.mpu6050?.accel_y ?? telemetry?.imu?.ay ?? 0.12;
  const accelZ = telemetry?.mpu6050?.accel_z ?? telemetry?.imu?.az ?? 0.98;

  const gyroX = telemetry?.mpu6050?.gyro_x ?? telemetry?.imu?.gx ?? 1.2;
  const gyroY = telemetry?.mpu6050?.gyro_y ?? telemetry?.imu?.gy ?? -0.8;
  const gyroZ = telemetry?.mpu6050?.gyro_z ?? telemetry?.imu?.gz ?? 0.5;

  const pitchDeg = telemetry?.mpu6050?.pitch_deg ?? telemetry?.imu?.pitch_deg ?? 1.2;
  const rollDeg = telemetry?.mpu6050?.roll_deg ?? telemetry?.imu?.roll_deg ?? -0.8;
  const tiltStatus = telemetry?.mpu6050?.tilt_status ?? (Math.abs(pitchDeg) < 5 && Math.abs(rollDeg) < 5 ? 'LEVEL' : 'TILTED');

  // 5. Water Pump + Relay
  const pumpState = telemetry?.pump?.state ?? (telemetry?.actuators?.pump_active ? 'ON' : 'OFF');
  const relayState = telemetry?.pump?.relay ?? pumpState;
  const isPumpOn = pumpState === 'ON';
  const sprayStatus = telemetry?.pump?.spray_status ?? (isPumpOn ? 'ACTIVE' : 'READY');

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
              {isEsp32Connected ? '● HARDWARE MODE: CONNECTED' : 'ESP32 OFFLINE'}
            </span>
          )}
        </div>
      </div>

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
                <div className="mono" style={{ fontWeight: 800, fontSize: '1.05rem', color: '#fff' }}>{usLeft.toFixed(1)} cm</div>
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
                  {usCenter.toFixed(1)} cm
                </div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.45rem 0.6rem', borderRadius: '6px' }}>
                <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', marginBottom: '0.15rem' }}>Right Sensor</div>
                <div className="mono" style={{ fontWeight: 800, fontSize: '1.05rem', color: '#fff' }}>{usRight.toFixed(1)} cm</div>
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
                background: soilStatus === 'NORMAL' ? 'rgba(16, 185, 129, 0.2)' : soilStatus === 'WET' ? 'rgba(56, 189, 248, 0.2)' : 'rgba(245, 158, 11, 0.2)',
                color: soilStatus === 'NORMAL' ? 'var(--emerald-400)' : soilStatus === 'WET' ? 'var(--sky-400)' : 'var(--amber-400)',
                border: `1px solid ${soilStatus === 'NORMAL' ? 'rgba(16, 185, 129, 0.35)' : soilStatus === 'WET' ? 'rgba(56, 189, 248, 0.35)' : 'rgba(245, 158, 11, 0.35)'}`
              }}>
                {soilStatus}
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.35rem', margin: '0.35rem 0 0.15rem 0' }}>
              <div className="mono" style={{ fontSize: '1.65rem', fontWeight: 800, color: 'var(--sky-400)', lineHeight: 1 }}>
                {soilPct.toFixed(1)}%
              </div>
            </div>
            <div style={{ fontSize: '0.68rem', color: 'var(--text-dim)' }}>
              Range: 0–100% (Slow variation)
            </div>
          </div>

          <div style={{ marginTop: '0.65rem', paddingTop: '0.45rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.68rem' }}>
            <span style={{ color: 'var(--text-dim)' }}>Condition:</span>
            <strong style={{ color: soilStatus === 'NORMAL' ? 'var(--emerald-400)' : soilStatus === 'WET' ? 'var(--sky-400)' : 'var(--amber-400)' }}>
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
              <span className="status-pill status-online" style={{ fontSize: '0.62rem', padding: '0.15rem 0.45rem', fontWeight: 800 }}>
                ACTIVE
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', marginTop: '0.2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Temperature:</span>
                <span className="mono" style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--amber-400)' }}>
                  {tempC.toFixed(1)} °C
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Humidity:</span>
                <span className="mono" style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--emerald-400)' }}>
                  {humidityPct.toFixed(1)} %
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
              <span className="status-pill status-online" style={{ fontSize: '0.62rem', padding: '0.15rem 0.45rem', fontWeight: 800 }}>
                {tiltStatus}
              </span>
            </div>

            {/* Accelerometer */}
            <div style={{ fontSize: '0.68rem', color: 'var(--text-dim)', fontWeight: 700, marginBottom: '0.15rem' }}>
              ACCELEROMETER
            </div>
            <div style={{ display: 'flex', gap: '0.4rem', fontSize: '0.72rem', marginBottom: '0.4rem' }}>
              <span className="mono" style={{ color: '#fff' }}>X: {accelX.toFixed(3)}g</span>
              <span className="mono" style={{ color: '#fff' }}>Y: {accelY.toFixed(3)}g</span>
              <span className="mono" style={{ color: 'var(--sky-400)', fontWeight: 700 }}>Z: {accelZ.toFixed(3)}g</span>
            </div>

            {/* Gyroscope */}
            <div style={{ fontSize: '0.68rem', color: 'var(--text-dim)', fontWeight: 700, marginBottom: '0.15rem' }}>
              GYROSCOPE
            </div>
            <div style={{ display: 'flex', gap: '0.4rem', fontSize: '0.72rem' }}>
              <span className="mono" style={{ color: '#fff' }}>X: {gyroX.toFixed(1)}°/s</span>
              <span className="mono" style={{ color: '#fff' }}>Y: {gyroY.toFixed(1)}°/s</span>
              <span className="mono" style={{ color: '#fff' }}>Z: {gyroZ.toFixed(1)}°/s</span>
            </div>
          </div>

          <div style={{ marginTop: '0.65rem', paddingTop: '0.45rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.68rem' }}>
            <span style={{ color: 'var(--text-dim)' }}>Tilt / Angle:</span>
            <span className="mono" style={{ color: 'var(--emerald-400)', fontWeight: 700 }}>
              Pitch {pitchDeg.toFixed(1)}° | Roll {rollDeg.toFixed(1)}°
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
                disabled={isTogglingPump || isPumpOn}
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
                  cursor: isPumpOn ? 'default' : 'pointer',
                  opacity: isPumpOn ? 1 : 0.85
                }}
              >
                PUMP ON
              </button>

              <button
                type="button"
                disabled={isTogglingPump || !isPumpOn}
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
                  cursor: !isPumpOn ? 'default' : 'pointer',
                  opacity: !isPumpOn ? 1 : 0.85
                }}
              >
                PUMP OFF
              </button>
            </div>
          </div>

          <div style={{ marginTop: '0.65rem', paddingTop: '0.45rem', borderTop: '1px solid var(--border-subtle)', fontSize: '0.65rem', color: 'var(--text-dim)' }}>
            SPRAY STATUS: <strong style={{ color: isPumpOn ? 'var(--emerald-400)' : 'var(--text-muted)' }}>{sprayStatus}</strong> (Simulation mode)
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
