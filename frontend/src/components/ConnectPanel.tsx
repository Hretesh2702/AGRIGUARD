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
  ChevronDown,
  ChevronRight,
  Signal
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
  connected: 'var(--emerald-500)',
  failed: 'var(--rose-500)'
};

export const ConnectPanel: React.FC<ConnectPanelProps> = ({ telemetry, onConnectionChange }) => {
  const [expanded, setExpanded] = useState(false);
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

  const esp32Connected = telemetry?.esp32_connected ?? false;
  const hwMode = telemetry?.hardware_mode ?? 'SIMULATION';

  // ── Wi-Fi connect ────────────────────────────────────────────────────────────

  const handleWifiConnect = useCallback(async () => {
    const ip = wifiIp.trim();
    const port = parseInt(wifiPort) || 80;
    if (!ip) { setWifiMsg('Enter a valid IP address.'); setWifiStatus('failed'); return; }

    setWifiStatus('connecting');
    setWifiMsg(`Probing ${ip}:${port}…`);
    try {
      const res = await connectRobotWiFi(ip, port);
      if (res.ok) {
        setWifiStatus('connected');
        setWifiMsg(`✓ Connected — ${res.ping_ms != null ? `${res.ping_ms}ms` : 'OK'}`);
      } else {
        setWifiStatus('failed');
        setWifiMsg(res.message || 'ESP32 did not respond.');
      }
      onConnectionChange?.();
    } catch (e: any) {
      setWifiStatus('failed');
      setWifiMsg(e.message || 'Connection error');
    }
  }, [wifiIp, wifiPort, onConnectionChange]);

  // ── Disconnect ───────────────────────────────────────────────────────────────

  const handleDisconnect = useCallback(async () => {
    try {
      await disconnectRobot();
      setWifiStatus('idle');
      setWifiMsg('Switched to simulation mode.');
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
        setBtMsg(`Found ${res.agriguard_devices.length} AgriGuard device(s). Select one to connect.`);
        setBtStatus('idle');
        // Pre-select first AgriGuard device
        if (res.agriguard_devices.length > 0 && !btSelectedAddr) {
          setBtSelectedAddr(res.agriguard_devices[0].address);
        }
      } else {
        setBtMsg(`No AgriGuard devices found. ${res.devices.length} total BLE device(s) visible.`);
        setBtStatus('idle');
      }
    } catch (e: any) {
      setBtMsg(e.message || 'Scan failed — is Bluetooth enabled?');
      setBtStatus('failed');
    } finally {
      setScanning(false);
    }
  }, [btSelectedAddr]);

  // ── BLE connect ─────────────────────────────────────────────────────────────

  const handleBtConnect = useCallback(async () => {
    if (!btSelectedAddr) { setBtMsg('Select a device first.'); return; }
    setBtStatus('connecting');
    setBtMsg(`Connecting to ${btSelectedAddr}…`);
    try {
      const res = await connectRobotBluetooth(btSelectedAddr);
      if (res.ok) {
        setBtStatus('connected');
        setBtMsg(`✓ BLE Connected${res.ping_ms != null ? ` — ${res.ping_ms}ms` : ''}`);
      } else {
        setBtStatus('failed');
        setBtMsg(res.message || 'BLE pairing failed.');
      }
      onConnectionChange?.();
    } catch (e: any) {
      setBtStatus('failed');
      setBtMsg(e.message || 'BLE error');
    }
  }, [btSelectedAddr, onConnectionChange]);

  // ── Render ───────────────────────────────────────────────────────────────────

  const isConnected = esp32Connected || wifiStatus === 'connected' || btStatus === 'connected';

  return (
    <div
      className="glass-panel"
      style={{
        borderRadius: '14px',
        border: '1px solid var(--border-subtle)',
        overflow: 'hidden'
      }}
    >
      {/* Header — always visible */}
      <button
        onClick={() => setExpanded(v => !v)}
        style={{
          width: '100%',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.65rem 0.9rem',
          color: '#fff'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
          <PlugZap size={15} color={isConnected ? 'var(--emerald-500)' : 'var(--text-dim)'} />
          <span style={{ fontWeight: 700, fontSize: '0.78rem' }}>Robot Connectivity</span>
          <span
            className={`status-pill ${isConnected ? 'status-online' : 'status-warning'}`}
            style={{ fontSize: '0.6rem', padding: '0.1rem 0.4rem', fontWeight: 700 }}
          >
            {isConnected ? '● LIVE' : hwMode === 'SIMULATION' ? '● SIM' : '● OFFLINE'}
          </span>
        </div>
        {expanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
      </button>

      {/* Collapsible body */}
      {expanded && (
        <div style={{ padding: '0 0.9rem 0.9rem' }}>

          {/* Tab switcher */}
          <div style={{ display: 'flex', gap: '0.35rem', marginBottom: '0.75rem' }}>
            {(['wifi', 'bluetooth'] as ActiveTab[]).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  flex: 1,
                  padding: '0.38rem 0',
                  borderRadius: '8px',
                  border: activeTab === tab
                    ? '1px solid rgba(16,185,129,0.45)'
                    : '1px solid var(--border-subtle)',
                  background: activeTab === tab ? 'var(--emerald-500)' : 'rgba(255,255,255,0.04)',
                  color: activeTab === tab ? '#05080f' : 'var(--text-main)',
                  fontWeight: 700,
                  fontSize: '0.72rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.35rem'
                }}
              >
                {tab === 'wifi' ? <Wifi size={12} /> : <Bluetooth size={12} />}
                {tab === 'wifi' ? 'Wi-Fi' : 'Bluetooth'}
              </button>
            ))}
          </div>

          {/* ── Wi-Fi Tab ── */}
          {activeTab === 'wifi' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
              <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>
                Connect to ESP32 Access Point (192.168.4.1) or your field router IP.
              </div>

              {/* IP field */}
              <div>
                <label style={{ fontSize: '0.65rem', color: 'var(--text-dim)', fontWeight: 600, display: 'block', marginBottom: '0.2rem' }}>
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
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '7px',
                    color: '#fff',
                    padding: '0.4rem 0.6rem',
                    fontSize: '0.78rem',
                    fontFamily: 'monospace',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              {/* Port field */}
              <div>
                <label style={{ fontSize: '0.65rem', color: 'var(--text-dim)', fontWeight: 600, display: 'block', marginBottom: '0.2rem' }}>
                  Port (default 80)
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
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '7px',
                    color: '#fff',
                    padding: '0.4rem 0.6rem',
                    fontSize: '0.78rem',
                    fontFamily: 'monospace',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              {/* Status message */}
              {wifiMsg && (
                <div style={{
                  fontSize: '0.68rem',
                  color: STATUS_COLOR[wifiStatus],
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem'
                }}>
                  {wifiStatus === 'connecting' && <Loader2 size={11} style={{ animation: 'spin 1s linear infinite' }} />}
                  {wifiStatus === 'connected' && <CheckCircle2 size={11} />}
                  {wifiStatus === 'failed' && <XCircle size={11} />}
                  <span>{wifiMsg}</span>
                </div>
              )}

              {/* Action buttons */}
              <div style={{ display: 'flex', gap: '0.4rem' }}>
                <button
                  onClick={handleWifiConnect}
                  disabled={wifiStatus === 'connecting'}
                  className="btn btn-primary"
                  style={{
                    flex: 1,
                    padding: '0.42rem 0',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.35rem',
                    opacity: wifiStatus === 'connecting' ? 0.7 : 1
                  }}
                >
                  {wifiStatus === 'connecting'
                    ? <><Loader2 size={12} style={{ animation: 'spin 1s linear infinite' }} /> Probing…</>
                    : <><Wifi size={12} /> Connect</>}
                </button>

                {(esp32Connected || wifiStatus === 'connected') && (
                  <button
                    onClick={handleDisconnect}
                    className="btn btn-outline"
                    style={{
                      padding: '0.42rem 0.65rem',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      color: 'var(--rose-400)',
                      borderColor: 'rgba(244,63,94,0.4)'
                    }}
                  >
                    <Unplug size={12} /> Disconnect
                  </button>
                )}
              </div>

              {/* Quick preset buttons */}
              <div style={{ display: 'flex', gap: '0.3rem', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.62rem', color: 'var(--text-dim)', alignSelf: 'center' }}>Presets:</span>
                {[
                  { label: 'SoftAP', ip: '192.168.4.1', port: 80 },
                  { label: 'Hotspot', ip: '192.168.1.100', port: 80 },
                ].map(p => (
                  <button
                    key={p.label}
                    onClick={() => { setWifiIp(p.ip); setWifiPort(String(p.port)); }}
                    style={{
                      padding: '0.2rem 0.5rem',
                      borderRadius: '6px',
                      background: 'rgba(255,255,255,0.06)',
                      border: '1px solid var(--border-subtle)',
                      color: 'var(--text-muted)',
                      fontSize: '0.62rem',
                      cursor: 'pointer',
                      fontWeight: 600
                    }}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ── Bluetooth Tab ── */}
          {activeTab === 'bluetooth' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
              <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>
                Scan for AgriGuard BLE devices. Bluetooth must be enabled on this laptop.
              </div>

              {/* Scan button */}
              <button
                onClick={handleBtScan}
                disabled={scanning}
                className="btn btn-outline"
                style={{
                  width: '100%',
                  padding: '0.42rem',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.4rem',
                  opacity: scanning ? 0.7 : 1
                }}
              >
                {scanning
                  ? <><Loader2 size={12} style={{ animation: 'spin 1s linear infinite' }} /> Scanning…</>
                  : <><Search size={12} /> Scan for Devices</>}
              </button>

              {/* Status message */}
              {btMsg && (
                <div style={{
                  fontSize: '0.68rem',
                  color: STATUS_COLOR[btStatus],
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem'
                }}>
                  {btStatus === 'connecting' && <Loader2 size={11} style={{ animation: 'spin 1s linear infinite' }} />}
                  {btStatus === 'connected' && <CheckCircle2 size={11} />}
                  {btStatus === 'failed' && <XCircle size={11} />}
                  <span>{btMsg}</span>
                </div>
              )}

              {/* Device list */}
              {btDevices.length > 0 && (
                <div style={{
                  background: 'rgba(0,0,0,0.25)',
                  borderRadius: '8px',
                  border: '1px solid var(--border-subtle)',
                  overflow: 'hidden',
                  maxHeight: '160px',
                  overflowY: 'auto'
                }}>
                  {btDevices.map(dev => (
                    <button
                      key={dev.address}
                      onClick={() => setBtSelectedAddr(dev.address)}
                      style={{
                        width: '100%',
                        background: btSelectedAddr === dev.address
                          ? 'rgba(16,185,129,0.12)'
                          : 'transparent',
                        border: 'none',
                        borderBottom: '1px solid rgba(255,255,255,0.05)',
                        padding: '0.45rem 0.65rem',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        textAlign: 'left'
                      }}
                    >
                      <Bluetooth
                        size={11}
                        color={dev.is_agriguard ? 'var(--emerald-500)' : 'var(--text-dim)'}
                      />
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{
                          fontSize: '0.70rem',
                          fontWeight: dev.is_agriguard ? 700 : 500,
                          color: dev.is_agriguard ? 'var(--emerald-400)' : 'var(--text-main)',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis'
                        }}>
                          {dev.name || 'Unknown Device'}
                          {dev.is_agriguard && (
                            <span style={{ marginLeft: '0.35rem', fontSize: '0.58rem', color: 'var(--emerald-500)', fontWeight: 700 }}>
                              ✓ AGRIGUARD
                            </span>
                          )}
                        </div>
                        <div style={{ fontSize: '0.60rem', color: 'var(--text-dim)', fontFamily: 'monospace' }}>
                          {dev.address}
                        </div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--text-dim)', fontSize: '0.60rem' }}>
                        <Signal size={9} />
                        <span>{dev.rssi}</span>
                      </div>
                      {btSelectedAddr === dev.address && (
                        <CheckCircle2 size={12} color="var(--emerald-500)" />
                      )}
                    </button>
                  ))}
                </div>
              )}

              {/* Connect button */}
              {btSelectedAddr && (
                <button
                  onClick={handleBtConnect}
                  disabled={btStatus === 'connecting'}
                  className="btn btn-primary"
                  style={{
                    width: '100%',
                    padding: '0.42rem',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.4rem',
                    opacity: btStatus === 'connecting' ? 0.7 : 1
                  }}
                >
                  {btStatus === 'connecting'
                    ? <><Loader2 size={12} style={{ animation: 'spin 1s linear infinite' }} /> Pairing…</>
                    : <><Bluetooth size={12} /> Pair &amp; Connect</>}
                </button>
              )}

              {/* Disconnect */}
              {btStatus === 'connected' && (
                <button
                  onClick={handleDisconnect}
                  className="btn btn-outline"
                  style={{
                    width: '100%',
                    padding: '0.42rem',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.4rem',
                    color: 'var(--rose-400)',
                    borderColor: 'rgba(244,63,94,0.4)'
                  }}
                >
                  <Unplug size={12} /> Disconnect BLE
                </button>
              )}
            </div>
          )}
        </div>
      )}

      {/* Keyframe for spinner */}
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
};
