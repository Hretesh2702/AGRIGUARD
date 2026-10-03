import React, { useState, useCallback } from 'react';
import {
  Wifi,
  Bluetooth,
  PlugZap,
  Unplug,
  Search,
  CheckCircle2,
  XCircle,
  Loader2,
  Signal,
  Radio,
  Cpu
} from 'lucide-react';
import {
  connectRobotWiFi,
  disconnectRobot,
  scanBluetoothDevices,
  connectRobotBluetooth,
  BLEDevice
} from '../services/api';
import { TelemetryData } from '../types';

interface ConnectPanelProps {
  telemetry: TelemetryData | null;
  onConnectionChange?: () => void;
}

type ConnectionStatus = 'idle' | 'connecting' | 'connected' | 'failed';
type ActiveTab = 'wifi' | 'bluetooth';

const STATUS_COLOR: Record<ConnectionStatus, string> = {
  idle: 'var(--text-dim)',
  connecting: 'var(--sky-400)',
  connected: 'var(--emerald-400)',
  failed: 'var(--rose-400)'
};

export const ConnectPanel: React.FC<ConnectPanelProps> = ({ telemetry, onConnectionChange }) => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('wifi');

  // Wi-Fi state
  const [wifiIp, setWifiIp] = useState('192.168.4.1');
  const [wifiPort, setWifiPort] = useState('80');
  const [wifiStatus, setWifiStatus] = useState<ConnectionStatus>('idle');
  const [wifiMsg, setWifiMsg] = useState('');

  // Bluetooth state
  const [btStatus, setBtStatus] = useState<ConnectionStatus>('idle');
  const [btMsg, setBtMsg] = useState('');
  const [btDevices, setBtDevices] = useState<BLEDevice[]>([]);
  const [btSelectedAddr, setBtSelectedAddr] = useState('');
  const [scanning, setScanning] = useState(false);

  const esp32Connected = Boolean(telemetry?.esp32_connected);
  const isSimulation = (
    telemetry?.mode === 'SIMULATION' ||
    telemetry?.hardware_mode === 'SIMULATION' ||
    telemetry?.data_source === 'SIMULATION' ||
    !esp32Connected
  );

  // ── Wi-Fi connect ────────────────────────────────────────────────────────────

  const handleWifiConnect = useCallback(async () => {
    const ip = wifiIp.trim();
    const port = parseInt(wifiPort) || 80;
    if (!ip) {
      setWifiMsg('Enter a valid IP address.');
      setWifiStatus('failed');
      return;
    }

    setWifiStatus('connecting');
    setWifiMsg(`Probing ESP32 at ${ip}:${port}…`);
    try {
      const res = await connectRobotWiFi(ip, port);
      if (res.ok) {
        setWifiStatus('connected');
        setWifiMsg(`Connected to ESP32 (${res.ping_ms != null ? `${res.ping_ms}ms ping` : 'OK'}) — Hardware Telemetry Live!`);
      } else {
        setWifiStatus('failed');
        setWifiMsg(res.message || 'ESP32 did not respond over Wi-Fi.');
      }
      onConnectionChange?.();
    } catch (e: any) {
      setWifiStatus('failed');
      setWifiMsg(e.message || 'Connection error to ESP32');
    }
  }, [wifiIp, wifiPort, onConnectionChange]);

  // ── Disconnect ───────────────────────────────────────────────────────────────

  const handleDisconnect = useCallback(async () => {
    try {
      await disconnectRobot();
      setWifiStatus('idle');
      setWifiMsg('Disconnected. Switched back to simulation telemetry mode.');
      setBtStatus('idle');
      setBtMsg('');
      onConnectionChange?.();
    } catch (e: any) {
      setWifiMsg(e.message || 'Disconnect error');
    }
  }, [onConnectionChange]);

  // ── BLE scan ────────────────────────────────────────────────────────────────

  const handleBtScan = useCallback(async () => {
    setScanning(true);
    setBtMsg('Scanning for nearby BLE devices (~8s)…');
    setBtDevices([]);
    setBtStatus('connecting');
    try {
      const res = await scanBluetoothDevices();
      setBtDevices(res.devices);
      if (res.found) {
        setBtMsg(`Found ${res.agriguard_devices.length} AgriGuard robot(s). Select device to connect.`);
        setBtStatus('idle');
        if (res.agriguard_devices.length > 0 && !btSelectedAddr) {
          setBtSelectedAddr(res.agriguard_devices[0].address);
        }
      } else {
        setBtMsg(`Scan finished. ${res.devices.length} device(s) visible. Select yours or retry.`);
        setBtStatus('idle');
        if (res.devices.length > 0 && !btSelectedAddr) {
          setBtSelectedAddr(res.devices[0].address);
        }
      }
    } catch (e: any) {
      setBtMsg(e.message || 'Scan failed — verify Bluetooth is enabled on this computer.');
      setBtStatus('failed');
    } finally {
      setScanning(false);
    }
  }, [btSelectedAddr]);

  // ── BLE connect ─────────────────────────────────────────────────────────────

  const handleBtConnect = useCallback(async () => {
    if (!btSelectedAddr) {
      setBtMsg('Select a Bluetooth device first.');
      return;
    }
    setBtStatus('connecting');
    setBtMsg(`Pairing with ${btSelectedAddr}…`);
    try {
      const res = await connectRobotBluetooth(btSelectedAddr);
      if (res.ok) {
        setBtStatus('connected');
        setBtMsg(`BLE Connected${res.ping_ms != null ? ` (${res.ping_ms}ms latency)` : ''} — Hardware Telemetry Live!`);
      } else {
        setBtStatus('failed');
        setBtMsg(res.message || 'BLE pairing failed. Make sure ESP32 is powered and in range.');
      }
      onConnectionChange?.();
    } catch (e: any) {
      setBtStatus('failed');
      setBtMsg(e.message || 'BLE connection error');
    }
  }, [btSelectedAddr, onConnectionChange]);

  const isConnected = esp32Connected || wifiStatus === 'connected' || btStatus === 'connected';

  return (
    <div className="glass-panel" style={{ padding: '1.25rem', width: '100%', boxSizing: 'border-box' }}>
      
      {/* ── Top Header Row ───────────────────────────────────────────────────── */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '1rem',
        flexWrap: 'wrap',
        gap: '0.75rem'
      }}>
        {/* Title & Icon */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          <div style={{
            width: '38px',
            height: '38px',
            borderRadius: '10px',
            background: isConnected ? 'rgba(16, 185, 129, 0.15)' : 'rgba(56, 189, 248, 0.15)',
            border: `1px solid ${isConnected ? 'rgba(16, 185, 129, 0.35)' : 'rgba(56, 189, 248, 0.35)'}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <PlugZap size={20} color={isConnected ? 'var(--emerald-400)' : 'var(--sky-400)'} />
          </div>
          <div>
            <h2 style={{ fontSize: '1.05rem', fontWeight: 700, margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              Robot Hardware Connectivity
            </h2>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', margin: '0.15rem 0 0 0' }}>
              Connect real ESP32 robot via Wi-Fi (Primary) or Bluetooth BLE (Offline fallback)
            </p>
          </div>
        </div>

        {/* Right Badges & Disconnect */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
          <span style={{
            fontSize: '0.75rem',
            padding: '0.3rem 0.75rem',
            borderRadius: '12px',
            fontWeight: 700,
            background: isConnected ? 'rgba(16, 185, 129, 0.15)' : 'rgba(234, 179, 8, 0.15)',
            border: `1px solid ${isConnected ? 'rgba(16, 185, 129, 0.4)' : 'rgba(234, 179, 8, 0.4)'}`,
            color: isConnected ? '#10b981' : '#eab308',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem'
          }}>
            <span style={{
              width: '7px',
              height: '7px',
              borderRadius: '50%',
              background: isConnected ? '#10b981' : '#eab308',
              boxShadow: isConnected ? '0 0 8px #10b981' : 'none'
            }} />
            {isConnected ? 'REAL HARDWARE CONNECTED' : 'SIMULATION MODE'}
          </span>

          {isConnected && (
            <button
              onClick={handleDisconnect}
              className="btn btn-outline"
              style={{
                padding: '0.32rem 0.75rem',
                fontSize: '0.72rem',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                color: 'var(--rose-400)',
                borderColor: 'rgba(244, 63, 94, 0.4)'
              }}
            >
              <Unplug size={13} />
              Disconnect
            </button>
          )}
        </div>
      </div>

      {/* ── Mode Tabs (Wi-Fi vs Bluetooth) ──────────────────────────────────── */}
      <div style={{
        display: 'flex',
        gap: '0.5rem',
        marginBottom: '1rem',
        background: 'rgba(0, 0, 0, 0.25)',
        padding: '0.3rem',
        borderRadius: '10px',
        border: '1px solid var(--border-subtle)',
        maxWidth: '380px'
      }}>
        <button
          onClick={() => setActiveTab('wifi')}
          style={{
            flex: 1,
            padding: '0.45rem 0.75rem',
            borderRadius: '7px',
            border: 'none',
            background: activeTab === 'wifi' ? 'var(--emerald-500)' : 'transparent',
            color: activeTab === 'wifi' ? '#05080f' : 'var(--text-muted)',
            fontWeight: 700,
            fontSize: '0.78rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.45rem',
            transition: 'all 0.15s ease'
          }}
        >
          <Wifi size={14} />
          Wi-Fi (Primary)
        </button>

        <button
          onClick={() => setActiveTab('bluetooth')}
          style={{
            flex: 1,
            padding: '0.45rem 0.75rem',
            borderRadius: '7px',
            border: 'none',
            background: activeTab === 'bluetooth' ? 'var(--emerald-500)' : 'transparent',
            color: activeTab === 'bluetooth' ? '#05080f' : 'var(--text-muted)',
            fontWeight: 700,
            fontSize: '0.78rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.45rem',
            transition: 'all 0.15s ease'
          }}
        >
          <Bluetooth size={14} />
          Bluetooth BLE (Fallback)
        </button>
      </div>

      {/* ── Wi-Fi Configuration Section ─────────────────────────────────────── */}
      {activeTab === 'wifi' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          
          {/* Controls Bar: IP + Port + Connect Button */}
          <div style={{
            display: 'flex',
            gap: '0.75rem',
            alignItems: 'flex-end',
            flexWrap: 'wrap'
          }}>
            {/* IP Input */}
            <div style={{ flex: '2 1 200px' }}>
              <label style={{
                fontSize: '0.72rem',
                color: 'var(--text-dim)',
                fontWeight: 600,
                display: 'block',
                marginBottom: '0.3rem'
              }}>
                ESP32 IP Address
              </label>
              <input
                type="text"
                value={wifiIp}
                onChange={e => setWifiIp(e.target.value)}
                placeholder="192.168.4.1"
                onKeyDown={e => e.key === 'Enter' && handleWifiConnect()}
                style={{
                  width: '100%',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '8px',
                  color: '#fff',
                  padding: '0.55rem 0.75rem',
                  fontSize: '0.85rem',
                  fontFamily: 'monospace',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            {/* Port Input */}
            <div style={{ flex: '1 1 100px', maxWidth: '140px' }}>
              <label style={{
                fontSize: '0.72rem',
                color: 'var(--text-dim)',
                fontWeight: 600,
                display: 'block',
                marginBottom: '0.3rem'
              }}>
                Port
              </label>
              <input
                type="number"
                value={wifiPort}
                onChange={e => setWifiPort(e.target.value)}
                min={1}
                max={65535}
                onKeyDown={e => e.key === 'Enter' && handleWifiConnect()}
                style={{
                  width: '100%',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '8px',
                  color: '#fff',
                  padding: '0.55rem 0.75rem',
                  fontSize: '0.85rem',
                  fontFamily: 'monospace',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            {/* Connect Action Button */}
            <button
              onClick={handleWifiConnect}
              disabled={wifiStatus === 'connecting'}
              className="btn btn-primary"
              style={{
                flex: '1 1 140px',
                height: '38px',
                padding: '0 1.25rem',
                fontSize: '0.8rem',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.45rem',
                opacity: wifiStatus === 'connecting' ? 0.75 : 1,
                cursor: 'pointer',
                whiteSpace: 'nowrap'
              }}
            >
              {wifiStatus === 'connecting' ? (
                <>
                  <Loader2 size={14} style={{ animation: 'spin 1s linear infinite' }} />
                  Probing ESP32…
                </>
              ) : (
                <>
                  <Wifi size={14} />
                  Connect Wi-Fi
                </>
              )}
            </button>
          </div>

          {/* Quick Presets & Guidance */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '0.5rem',
            paddingTop: '0.25rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.7rem', color: 'var(--text-dim)', fontWeight: 600 }}>Presets:</span>
              {[
                { label: 'SoftAP Default (192.168.4.1)', ip: '192.168.4.1', port: 80 },
                { label: 'Field Hotspot (192.168.1.100)', ip: '192.168.1.100', port: 80 },
                { label: 'Office/LAN (192.168.0.150)', ip: '192.168.0.150', port: 80 }
              ].map(p => (
                <button
                  key={p.label}
                  onClick={() => { setWifiIp(p.ip); setWifiPort(String(p.port)); }}
                  style={{
                    padding: '0.22rem 0.6rem',
                    borderRadius: '6px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: 'var(--text-muted)',
                    fontSize: '0.7rem',
                    cursor: 'pointer',
                    fontWeight: 600
                  }}
                >
                  {p.label}
                </button>
              ))}
            </div>

            <span style={{ fontSize: '0.7rem', color: 'var(--text-dim)' }}>
              SoftAP SSID: <strong style={{ color: '#fff' }}>AgriGuard-Robot</strong> | Pass: <strong style={{ color: '#fff' }}>agri12345password</strong>
            </span>
          </div>

          {/* Live Feedback Banner */}
          {wifiMsg && (
            <div style={{
              padding: '0.5rem 0.8rem',
              borderRadius: '8px',
              background: wifiStatus === 'connected' ? 'rgba(16, 185, 129, 0.12)' : wifiStatus === 'failed' ? 'rgba(244, 63, 94, 0.12)' : 'rgba(56, 189, 248, 0.12)',
              border: `1px solid ${STATUS_COLOR[wifiStatus]}`,
              color: STATUS_COLOR[wifiStatus],
              fontSize: '0.78rem',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '0.45rem'
            }}>
              {wifiStatus === 'connecting' && <Loader2 size={13} style={{ animation: 'spin 1s linear infinite' }} />}
              {wifiStatus === 'connected' && <CheckCircle2 size={13} />}
              {wifiStatus === 'failed' && <XCircle size={13} />}
              <span>{wifiMsg}</span>
            </div>
          )}
        </div>
      )}

      {/* ── Bluetooth BLE Configuration Section ─────────────────────────────── */}
      {activeTab === 'bluetooth' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          
          <div style={{
            display: 'flex',
            gap: '0.75rem',
            alignItems: 'center',
            flexWrap: 'wrap'
          }}>
            {/* Scan Button */}
            <button
              onClick={handleBtScan}
              disabled={scanning}
              className="btn btn-outline"
              style={{
                height: '38px',
                padding: '0 1.25rem',
                fontSize: '0.8rem',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                opacity: scanning ? 0.75 : 1,
                cursor: 'pointer'
              }}
            >
              {scanning ? (
                <>
                  <Loader2 size={14} style={{ animation: 'spin 1s linear infinite' }} />
                  Scanning (~8s)…
                </>
              ) : (
                <>
                  <Search size={14} />
                  Scan for Devices
                </>
              )}
            </button>

            {/* Device Dropdown or Picker */}
            {btDevices.length > 0 && (
              <div style={{ flex: '1 1 240px', minWidth: '200px' }}>
                <select
                  value={btSelectedAddr}
                  onChange={e => setBtSelectedAddr(e.target.value)}
                  style={{
                    width: '100%',
                    height: '38px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: '8px',
                    color: '#fff',
                    padding: '0 0.75rem',
                    fontSize: '0.8rem',
                    fontFamily: 'monospace',
                    outline: 'none'
                  }}
                >
                  <option value="" style={{ background: '#0f172a' }}>Select discovered device…</option>
                  {btDevices.map(d => (
                    <option key={d.address} value={d.address} style={{ background: '#0f172a' }}>
                      {d.is_agriguard ? '⭐ ' : ''}{d.name} ({d.address}) — RSSI: {d.rssi}dBm
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Pair & Connect Button */}
            <button
              onClick={handleBtConnect}
              disabled={!btSelectedAddr || btStatus === 'connecting'}
              className="btn btn-primary"
              style={{
                height: '38px',
                padding: '0 1.25rem',
                fontSize: '0.8rem',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                opacity: (!btSelectedAddr || btStatus === 'connecting') ? 0.6 : 1,
                cursor: btSelectedAddr ? 'pointer' : 'not-allowed'
              }}
            >
              {btStatus === 'connecting' ? (
                <>
                  <Loader2 size={14} style={{ animation: 'spin 1s linear infinite' }} />
                  Pairing…
                </>
              ) : (
                <>
                  <Bluetooth size={14} />
                  Pair & Connect BLE
                </>
              )}
            </button>
          </div>

          {/* Feedback message */}
          {btMsg && (
            <div style={{
              padding: '0.5rem 0.8rem',
              borderRadius: '8px',
              background: btStatus === 'connected' ? 'rgba(16, 185, 129, 0.12)' : btStatus === 'failed' ? 'rgba(244, 63, 94, 0.12)' : 'rgba(56, 189, 248, 0.12)',
              border: `1px solid ${STATUS_COLOR[btStatus]}`,
              color: STATUS_COLOR[btStatus],
              fontSize: '0.78rem',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '0.45rem'
            }}>
              {btStatus === 'connecting' && <Loader2 size={13} style={{ animation: 'spin 1s linear infinite' }} />}
              {btStatus === 'connected' && <CheckCircle2 size={13} />}
              {btStatus === 'failed' && <XCircle size={13} />}
              <span>{btMsg}</span>
            </div>
          )}

          {/* Discovered devices pills if any */}
          {btDevices.length > 0 && (
            <div style={{
              display: 'flex',
              gap: '0.45rem',
              flexWrap: 'wrap',
              marginTop: '0.2rem'
            }}>
              {btDevices.map(d => (
                <button
                  key={d.address}
                  onClick={() => setBtSelectedAddr(d.address)}
                  style={{
                    padding: '0.3rem 0.65rem',
                    borderRadius: '7px',
                    background: btSelectedAddr === d.address ? 'rgba(16, 185, 129, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                    border: btSelectedAddr === d.address ? '1px solid #10b981' : '1px solid rgba(255, 255, 255, 0.08)',
                    color: btSelectedAddr === d.address ? '#10b981' : 'var(--text-muted)',
                    fontSize: '0.72rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem'
                  }}
                >
                  <Bluetooth size={11} color={d.is_agriguard ? '#10b981' : undefined} />
                  <strong>{d.name}</strong>
                  <span style={{ fontSize: '0.65rem', color: 'var(--text-dim)' }}>({d.rssi} dBm)</span>
                </button>
              ))}
            </div>
          )}
        </div>
      )}

    </div>
  );
};
