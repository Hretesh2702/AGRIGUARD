import React from 'react';
import { Droplet, Thermometer, Wind, Compass, Move, Disc } from 'lucide-react';
import { TelemetryData } from '../types';

interface TelemetryCardProps {
  telemetry: TelemetryData | null;
}

export const TelemetryCard: React.FC<TelemetryCardProps> = ({ telemetry }) => {
  const isEsp32Connected = telemetry?.esp32_connected ?? false;

  const npk = telemetry?.npk;
  const soil = telemetry?.soil_moisture;
  const env = telemetry?.environment;
  const us = telemetry?.ultrasonic;
  const imu = telemetry?.imu;
  const flow = telemetry?.actuators;

  return (
    <div className="glass-panel" style={{ padding: '1.25rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Compass size={18} color="var(--sky-400)" />
          <h2 style={{ fontSize: '1.05rem', fontWeight: 700 }}>Soil & Microclimate Telemetry</h2>
        </div>
        <span className={`status-pill ${isEsp32Connected ? 'status-online' : 'status-offline'}`}>
          {isEsp32Connected ? 'SENSORS ACTIVE' : 'ESP32 OFFLINE'}
        </span>
      </div>

      {/* Grid of Real Sensors */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '0.75rem' }}>
        
        {/* RS485 NPK Probe */}
        <div style={{ background: 'rgba(0,0,0,0.3)', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
          <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: 600 }}>
            RS485 NPK PROBE
          </div>
          {npk && npk.valid ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
              <div style={{ fontSize: '0.75rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>N: </span>
                <span className="mono" style={{ fontWeight: 700, color: '#34d399' }}>{npk.nitrogen_mg_kg}</span>
                <span style={{ fontSize: '0.65rem', color: 'var(--text-dim)' }}> mg/kg</span>
              </div>
              <div style={{ fontSize: '0.75rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>P: </span>
                <span className="mono" style={{ fontWeight: 700, color: '#38bdf8' }}>{npk.phosphorus_mg_kg}</span>
                <span style={{ fontSize: '0.65rem', color: 'var(--text-dim)' }}> mg/kg</span>
              </div>
              <div style={{ fontSize: '0.75rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>K: </span>
                <span className="mono" style={{ fontWeight: 700, color: '#fbbf24' }}>{npk.potassium_mg_kg}</span>
                <span style={{ fontSize: '0.65rem', color: 'var(--text-dim)' }}> mg/kg</span>
              </div>
            </div>
          ) : (
            <span style={{ fontSize: '0.75rem', color: 'var(--rose-500)', fontWeight: 600 }}>
              {npk?.status ?? 'Sensor unavailable'}
            </span>
          )}
        </div>

        {/* Capacitive Soil Moisture */}
        <div style={{ background: 'rgba(0,0,0,0.3)', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: 600 }}>
            <Droplet size={12} color="var(--sky-400)" />
            <span>SOIL MOISTURE</span>
          </div>
          {soil && soil.valid ? (
            <div>
              <div className="mono" style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--sky-400)' }}>
                {soil.moisture_pct.toFixed(1)}%
              </div>
              <div style={{ fontSize: '0.65rem', color: 'var(--text-dim)' }}>
                Raw ADC: {soil.raw_adc}
              </div>
            </div>
          ) : (
            <span style={{ fontSize: '0.75rem', color: 'var(--rose-500)', fontWeight: 600 }}>
              {soil?.status ?? 'Sensor unavailable'}
            </span>
          )}
        </div>

        {/* Microclimate Temperature */}
        <div style={{ background: 'rgba(0,0,0,0.3)', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: 600 }}>
            <Thermometer size={12} color="var(--amber-400)" />
            <span>TEMPERATURE</span>
          </div>
          {env && env.valid ? (
            <div className="mono" style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--amber-400)' }}>
              {env.temperature_c.toFixed(1)}°C
            </div>
          ) : (
            <span style={{ fontSize: '0.75rem', color: 'var(--rose-500)', fontWeight: 600 }}>
              {env?.status ?? 'Sensor unavailable'}
            </span>
          )}
        </div>

        {/* Microclimate Humidity */}
        <div style={{ background: 'rgba(0,0,0,0.3)', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: 600 }}>
            <Wind size={12} color="var(--emerald-400)" />
            <span>HUMIDITY</span>
          </div>
          {env && env.valid ? (
            <div className="mono" style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--emerald-400)' }}>
              {env.humidity_pct.toFixed(1)}%
            </div>
          ) : (
            <span style={{ fontSize: '0.75rem', color: 'var(--rose-500)', fontWeight: 600 }}>
              {env?.status ?? 'Sensor unavailable'}
            </span>
          )}
        </div>

        {/* Ultrasonic Obstacle Distance */}
        <div style={{ background: 'rgba(0,0,0,0.3)', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: 600 }}>
            <Move size={12} color="var(--sky-400)" />
            <span>ULTRASONIC</span>
          </div>
          {us && us.valid ? (
            <div>
              <div className="mono" style={{ fontSize: '1.25rem', fontWeight: 700, color: us.obstacle_detected ? 'var(--rose-500)' : '#fff' }}>
                {us.distance_cm.toFixed(1)} cm
              </div>
              <div style={{ fontSize: '0.65rem', color: us.obstacle_detected ? 'var(--rose-500)' : 'var(--text-muted)' }}>
                {us.obstacle_detected ? 'OBSTACLE DETECTED' : 'CLEAR PATH'}
              </div>
            </div>
          ) : (
            <span style={{ fontSize: '0.75rem', color: 'var(--rose-500)', fontWeight: 600 }}>
              Sensor unavailable
            </span>
          )}
        </div>

        {/* MPU6050 IMU */}
        <div style={{ background: 'rgba(0,0,0,0.3)', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: 600 }}>
            <Disc size={12} color="var(--emerald-400)" />
            <span>MPU6050 IMU</span>
          </div>
          {imu && imu.valid ? (
            <div className="mono" style={{ fontSize: '0.75rem' }}>
              <div>Pitch: {imu.pitch_deg.toFixed(1)}°</div>
              <div>Roll: {imu.roll_deg.toFixed(1)}°</div>
            </div>
          ) : (
            <span style={{ fontSize: '0.75rem', color: 'var(--rose-500)', fontWeight: 600 }}>
              Sensor unavailable
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
