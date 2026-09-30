import React, { useState, useEffect } from 'react';
import { Cpu, CheckCircle2, XCircle, RefreshCw, Terminal, AlertTriangle, ShieldCheck } from 'lucide-react';
import { DiagnosticsReport } from '../types';
import { fetchDiagnostics } from '../services/api';

export const DiagnosticsPage: React.FC = () => {
  const [report, setReport] = useState<DiagnosticsReport | null>(null);
  const [loading, setLoading] = useState(false);
  const [lastCheck, setLastCheck] = useState<string>('');

  const runDiagnostics = async () => {
    setLoading(true);
    try {
      const data = await fetchDiagnostics();
      setReport(data);
      setLastCheck(new Date().toLocaleTimeString());
    } catch (e) {
      console.error('Diagnostics query failed:', e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    runDiagnostics();
    const interval = setInterval(runDiagnostics, 3000);
    return () => clearInterval(interval);
  }, []);

  const getStatusBadge = (value: string, expectedGood: string[]) => {
    const isGood = expectedGood.includes(value.toUpperCase());
    return (
      <span className={`status-pill ${isGood ? 'status-online' : 'status-offline'}`} style={{ fontSize: '0.85rem' }}>
        {isGood ? <CheckCircle2 size={14} /> : <XCircle size={14} />}
        <span>{value}</span>
      </span>
    );
  };

  return (
    <div className="glass-panel animate-fade-in" style={{ padding: '1.75rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Cpu size={22} color="var(--emerald-400)" />
            <h2 style={{ fontSize: '1.35rem', fontWeight: 800 }}>Physical Hardware Diagnostic Suite</h2>
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
            Section 27 Real Hardware Verification Matrix — Direct live polling of physical buses and interfaces.
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            Last Polled: <strong style={{ color: '#fff' }}>{lastCheck || 'Waiting...'}</strong>
          </span>
          <button
            onClick={runDiagnostics}
            disabled={loading}
            className="btn btn-primary"
            style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
          >
            <RefreshCw size={14} className={loading ? 'animate-spin' : ''} />
            <span>Poll Hardware</span>
          </button>
        </div>
      </div>

      {/* STRICT SECTION 27 DIAGNOSTIC TABLE */}
      <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border-subtle)', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
              <th style={{ padding: '0.75rem 1rem' }}>SUBSYSTEM / INTERFACE</th>
              <th style={{ padding: '0.75rem 1rem' }}>PHYSICAL BUS / PROTOCOL</th>
              <th style={{ padding: '0.75rem 1rem' }}>PIN / PORT</th>
              <th style={{ padding: '0.75rem 1rem' }}>LIVE STATUS</th>
            </tr>
          </thead>
          <tbody style={{ fontSize: '0.9rem' }}>
            {/* 1. ESP32 */}
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
              <td style={{ padding: '0.85rem 1rem', fontWeight: 600 }}>ESP32 Main Controller</td>
              <td style={{ padding: '0.85rem 1rem', color: 'var(--text-muted)' }}>Wi-Fi 802.11 b/g/n HTTP/WS</td>
              <td style={{ padding: '0.85rem 1rem', fontFamily: 'JetBrains Mono, monospace' }}>192.168.4.1:80</td>
              <td style={{ padding: '0.85rem 1rem' }}>
                {report ? getStatusBadge(report.esp32, ['CONNECTED']) : <span className="text-muted">Querying...</span>}
              </td>
            </tr>

            {/* 2. External USB Camera */}
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
              <td style={{ padding: '0.85rem 1rem', fontWeight: 600 }}>External USB Camera</td>
              <td style={{ padding: '0.85rem 1rem', color: 'var(--text-muted)' }}>USB 2.0 / V4L2 / DShow</td>
              <td style={{ padding: '0.85rem 1rem', fontFamily: 'JetBrains Mono, monospace' }}>Video Dev Index 0</td>
              <td style={{ padding: '0.85rem 1rem' }}>
                {report ? getStatusBadge(report.camera, ['CONNECTED']) : <span className="text-muted">Querying...</span>}
              </td>
            </tr>

            {/* 3. RS485 NPK Sensor */}
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
              <td style={{ padding: '0.85rem 1rem', fontWeight: 600 }}>RS485 NPK Soil Probe</td>
              <td style={{ padding: '0.85rem 1rem', color: 'var(--text-muted)' }}>Modbus RTU over RS485</td>
              <td style={{ padding: '0.85rem 1rem', fontFamily: 'JetBrains Mono, monospace' }}>GPIO 16(RX) / 17(TX)</td>
              <td style={{ padding: '0.85rem 1rem' }}>
                {report ? getStatusBadge(report.npk, ['CONNECTED']) : <span className="text-muted">Querying...</span>}
              </td>
            </tr>

            {/* 4. Soil Moisture */}
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
              <td style={{ padding: '0.85rem 1rem', fontWeight: 600 }}>Capacitive Soil Moisture</td>
              <td style={{ padding: '0.85rem 1rem', color: 'var(--text-muted)' }}>Analog 12-bit ADC</td>
              <td style={{ padding: '0.85rem 1rem', fontFamily: 'JetBrains Mono, monospace' }}>GPIO 34 (ADC1_CH6)</td>
              <td style={{ padding: '0.85rem 1rem' }}>
                {report ? getStatusBadge(report.soil_moisture, ['OK']) : <span className="text-muted">Querying...</span>}
              </td>
            </tr>

            {/* 5. Temperature / Humidity */}
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
              <td style={{ padding: '0.85rem 1rem', fontWeight: 600 }}>Microclimate DHT22</td>
              <td style={{ padding: '0.85rem 1rem', color: 'var(--text-muted)' }}>Single-Wire Digital Bus</td>
              <td style={{ padding: '0.85rem 1rem', fontFamily: 'JetBrains Mono, monospace' }}>GPIO 4</td>
              <td style={{ padding: '0.85rem 1rem' }}>
                {report ? getStatusBadge(report.temperature, ['OK']) : <span className="text-muted">Querying...</span>}
              </td>
            </tr>

            {/* 6. Ultrasonic Sensor */}
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
              <td style={{ padding: '0.85rem 1rem', fontWeight: 600 }}>HC-SR04 Ultrasonic Distance</td>
              <td style={{ padding: '0.85rem 1rem', color: 'var(--text-muted)' }}>GPIO Pulse Timing</td>
              <td style={{ padding: '0.85rem 1rem', fontFamily: 'JetBrains Mono, monospace' }}>Trig: GPIO 5 / Echo: GPIO 18</td>
              <td style={{ padding: '0.85rem 1rem' }}>
                {report ? getStatusBadge(report.ultrasonic, ['OK']) : <span className="text-muted">Querying...</span>}
              </td>
            </tr>

            {/* 7. MPU6050 IMU */}
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
              <td style={{ padding: '0.85rem 1rem', fontWeight: 600 }}>MPU6050 6-DOF IMU</td>
              <td style={{ padding: '0.85rem 1rem', color: 'var(--text-muted)' }}>I2C Bus (Addr: 0x68)</td>
              <td style={{ padding: '0.85rem 1rem', fontFamily: 'JetBrains Mono, monospace' }}>SDA: GPIO 21 / SCL: GPIO 22</td>
              <td style={{ padding: '0.85rem 1rem' }}>
                {report ? getStatusBadge(report.imu, ['OK']) : <span className="text-muted">Querying...</span>}
              </td>
            </tr>

            {/* 8. 12V Spray Pump */}
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
              <td style={{ padding: '0.85rem 1rem', fontWeight: 600 }}>12V Diaphragm Spray Pump</td>
              <td style={{ padding: '0.85rem 1rem', color: 'var(--text-muted)' }}>MOSFET Gate Driver</td>
              <td style={{ padding: '0.85rem 1rem', fontFamily: 'JetBrains Mono, monospace' }}>GPIO 25</td>
              <td style={{ padding: '0.85rem 1rem' }}>
                {report ? getStatusBadge(report.pump, ['ON', 'OFF']) : <span className="text-muted">Querying...</span>}
              </td>
            </tr>

            {/* 9. 12V Solenoid Valve */}
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
              <td style={{ padding: '0.85rem 1rem', fontWeight: 600 }}>12V Solenoid Shutoff Valve</td>
              <td style={{ padding: '0.85rem 1rem', color: 'var(--text-muted)' }}>MOSFET Gate Driver</td>
              <td style={{ padding: '0.85rem 1rem', fontFamily: 'JetBrains Mono, monospace' }}>GPIO 26</td>
              <td style={{ padding: '0.85rem 1rem' }}>
                {report ? getStatusBadge(report.valve, ['OPEN', 'CLOSED']) : <span className="text-muted">Querying...</span>}
              </td>
            </tr>

            {/* 10. Flow Sensor */}
            <tr>
              <td style={{ padding: '0.85rem 1rem', fontWeight: 600 }}>YF-S401 Liquid Flow Sensor</td>
              <td style={{ padding: '0.85rem 1rem', color: 'var(--text-muted)' }}>Hardware Pulse Interrupt</td>
              <td style={{ padding: '0.85rem 1rem', fontFamily: 'JetBrains Mono, monospace' }}>GPIO 27</td>
              <td style={{ padding: '0.85rem 1rem' }}>
                {report ? (
                  <span className={`status-pill ${report.flow !== 'NO FLOW' ? 'status-online' : 'status-warning'}`}>
                    {report.flow}
                  </span>
                ) : (
                  <span className="text-muted">Querying...</span>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Raw Physical Telemetry Inspector */}
      <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
          <Terminal size={16} color="var(--sky-400)" />
          <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#fff' }}>Physical Payload Inspector (JSON)</h3>
        </div>
        <pre className="mono" style={{ fontSize: '0.75rem', color: 'var(--emerald-400)', overflowX: 'auto', maxHeight: '220px' }}>
          {report?.raw_telemetry ? JSON.stringify(report.raw_telemetry, null, 2) : '// No physical telemetry packet received'}
        </pre>
      </div>
    </div>
  );
};
