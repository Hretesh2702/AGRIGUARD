import React, { useEffect, useRef, useState, useCallback } from 'react';
import {
  Boxes,
  Play,
  RotateCcw,
  Compass,
  AlertTriangle,
  Radio,
  Zap,
  Layers,
  Thermometer,
  Droplet,
  Activity,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Square,
  Sparkles,
  ShieldAlert,
  Volume2,
  VolumeX,
  Camera,
  CheckCircle2,
  XCircle,
  Clock,
  Leaf,
  TrendingDown,
  Info,
  Scan,
  Maximize2
} from 'lucide-react';
import { FarmScene, SimCameraMode } from './FarmScene';
import { SimulatorManager, SIMULATOR_ZONES } from './SimulatorManager';
import {
  FarmPlant,
  ScenarioPresetId,
  SimulationMovementCommand,
  SimulatorLogEvent,
  SimulatorTelemetry,
} from './types';
import { buzzerAudio } from './BuzzerAudio';
import { SAFETY_THRESHOLDS } from '../digitalTwin/types';

export const SimulatedViewPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const sceneRef = useRef<FarmScene | null>(null);
  const managerRef = useRef<SimulatorManager | null>(null);

  // Live Simulator State
  const [telemetry, setTelemetry] = useState<SimulatorTelemetry | null>(null);
  const [logs, setLogs] = useState<SimulatorLogEvent[]>([]);
  const [activeCamera, setActiveCamera] = useState<SimCameraMode>('CHASE');
  const [activePreset, setActivePreset] = useState<ScenarioPresetId>('NORMAL_FIELD');
  const [isAudioMuted, setIsAudioMuted] = useState<boolean>(false);
  const [operatorName, setOperatorName] = useState<string>('Operator-Swayam');
  const [selectedPlant, setSelectedPlant] = useState<FarmPlant | null>(null);

  // Initialize Simulator on Mount
  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new FarmScene(containerRef.current);
    const manager = new SimulatorManager(scene);

    sceneRef.current = scene;
    managerRef.current = manager;

    manager.setCallbacks(
      (newTel) => setTelemetry(newTel),
      (newLogs) => setLogs(newLogs)
    );

    const handleResize = () => scene.resize();
    window.addEventListener('resize', handleResize);

    // Keyboard Movement Listener
    const handleKeyDown = (e: KeyboardEvent) => {
      // Unlock Web Audio on first user keypress
      buzzerAudio.unlockAudio();

      // Don't intercept if typing in an input
      if ((e.target as HTMLElement).tagName === 'INPUT') return;

      switch (e.key) {
        case 'w':
        case 'W':
        case 'ArrowUp':
          e.preventDefault();
          manager.move('FORWARD');
          break;
        case 's':
        case 'S':
        case 'ArrowDown':
          e.preventDefault();
          manager.move('BACKWARD');
          break;
        case 'a':
        case 'A':
        case 'ArrowLeft':
          e.preventDefault();
          manager.move('LEFT');
          break;
        case 'd':
        case 'D':
        case 'ArrowRight':
          e.preventDefault();
          manager.move('RIGHT');
          break;
        case ' ':
          e.preventDefault();
          manager.move('STOP');
          break;
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement).tagName === 'INPUT') return;
      if (['w', 'W', 's', 'S', 'a', 'A', 'd', 'D', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
        manager.move('STOP');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      manager.dispose();
      scene.destroy();
      sceneRef.current = null;
      managerRef.current = null;
    };
  }, []);

  // Unlock Audio on canvas or button click
  const handleUserInteract = () => {
    buzzerAudio.unlockAudio();
  };

  const handleSetCamera = (mode: SimCameraMode) => {
    handleUserInteract();
    setActiveCamera(mode);
    if (sceneRef.current) {
      sceneRef.current.setCameraMode(mode);
    }
  };

  const handleSelectPreset = (preset: ScenarioPresetId) => {
    handleUserInteract();
    setActivePreset(preset);
    if (managerRef.current) {
      managerRef.current.applyScenarioPreset(preset);
    }
  };

  const handleMove = (cmd: SimulationMovementCommand) => {
    handleUserInteract();
    if (managerRef.current) {
      managerRef.current.move(cmd);
    }
  };

  const handleApproveSpray = () => {
    handleUserInteract();
    if (managerRef.current) {
      managerRef.current.approveAndSpray(operatorName);
    }
  };

  const handleToggleMute = () => {
    handleUserInteract();
    const next = !isAudioMuted;
    setIsAudioMuted(next);
    buzzerAudio.setMuted(next);
  };

  // Environmental impact values
  const impact = managerRef.current ? managerRef.current.getEnvironmentalImpact() : null;

  // Active target plant from inspection camera
  const targetPlant = telemetry?.sprayTargetPlantId
    ? sceneRef.current?.getAllPlants().find((p) => p.id === telemetry.sprayTargetPlantId) || managerRef.current?.detectedPlant
    : managerRef.current?.detectedPlant;

  return (
    <div
      onClick={handleUserInteract}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1.25rem',
        width: '100%',
        boxSizing: 'border-box'
      }}
    >
      {/* ── Top Header & Scenario Presets Bar ──────────────────────────────── */}
      <div className="glass-panel" style={{ padding: '1rem 1.25rem' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          {/* Title & Badge */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.25), rgba(6, 182, 212, 0.25))',
              border: '1px solid var(--emerald-500)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 15px rgba(16, 185, 129, 0.25)'
            }}>
              <Boxes size={22} color="var(--emerald-400)" />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <h1 style={{ fontSize: '1.15rem', fontWeight: 800, margin: 0, color: '#fff' }}>
                  SIMULATED VIEW — 3D FARM ROBOT WORLD
                </h1>
                <span className="status-pill" style={{
                  background: 'rgba(56, 189, 248, 0.15)',
                  color: 'var(--sky-400)',
                  border: '1px solid rgba(56, 189, 248, 0.35)',
                  fontSize: '0.64rem',
                  padding: '0.15rem 0.5rem',
                  fontWeight: 800
                }}>
                  VIRTUAL PHYSICS ACTIVE
                </span>
              </div>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', margin: '0.15rem 0 0 0' }}>
                Operate the virtual AgriGuard robot across farmland crop rows with real-time raycasting & agronomic modeling
              </p>
            </div>
          </div>

          {/* Scenario Presets */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)', fontWeight: 700 }}>
              Scenarios:
            </span>
            {([
              { id: 'NORMAL_FIELD', label: '1. Normal Field' },
              { id: 'OBSTACLE_AHEAD', label: '2. Obstacle Ahead' },
              { id: 'DISEASED_ZONE', label: '3. Diseased Crop' },
              { id: 'DRY_SOIL_ZONE', label: '4. Dry Soil Zone' },
              { id: 'PRECISION_SPRAY', label: '5. Precision Spray' },
              { id: 'FULL_DEMO', label: '★ FULL DEMO' }
            ] as const).map(({ id, label }) => (
              <button
                key={id}
                type="button"
                onClick={() => handleSelectPreset(id)}
                className="btn"
                style={{
                  padding: '0.28rem 0.65rem',
                  fontSize: '0.70rem',
                  fontWeight: activePreset === id ? 800 : 600,
                  borderRadius: '6px',
                  background: activePreset === id
                    ? (id === 'FULL_DEMO' ? 'var(--cyan-500)' : 'var(--emerald-500)')
                    : 'rgba(255, 255, 255, 0.05)',
                  color: activePreset === id ? '#05080f' : 'var(--text-muted)',
                  border: activePreset === id
                    ? (id === 'FULL_DEMO' ? '1px solid var(--cyan-400)' : '1px solid var(--emerald-400)')
                    : '1px solid rgba(255, 255, 255, 0.1)',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
                }}
              >
                {label}
              </button>
            ))}

            <button
              type="button"
              onClick={() => {
                handleUserInteract();
                managerRef.current?.resetField();
              }}
              title="Reset field and robot to baseline"
              className="btn btn-outline"
              style={{
                padding: '0.28rem 0.6rem',
                fontSize: '0.70rem',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                color: 'var(--text-muted)'
              }}
            >
              <RotateCcw size={12} />
              Reset
            </button>
          </div>
        </div>
      </div>

      {/* ── Main Viewport & Simulation HUD Row ─────────────────────────────── */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1.8fr) minmax(320px, 1fr)',
        gap: '1.25rem',
        width: '100%'
      }}>
        {/* Left Column: 3D Farm Canvas & Floating Overlays */}
        <div className="glass-panel" style={{ padding: '0', position: 'relative', overflow: 'hidden' }}>
          {/* Camera View Switcher Bar */}
          <div style={{
            position: 'absolute',
            top: '12px',
            left: '12px',
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
            background: 'rgba(15, 23, 42, 0.85)',
            backdropFilter: 'blur(8px)',
            padding: '4px 8px',
            borderRadius: '8px',
            border: '1px solid rgba(255, 255, 255, 0.12)'
          }}>
            <span style={{ fontSize: '0.65rem', color: 'var(--text-dim)', fontWeight: 700, marginRight: '4px' }}>
              CAMERA:
            </span>
            {([
              { id: 'CHASE', label: 'Follow Rover' },
              { id: 'OVERHEAD', label: 'Overhead Field' },
              { id: 'ISOMETRIC', label: 'Orbit 3D' },
              { id: 'BUMPER', label: 'FPV Bumper' }
            ] as const).map(({ id, label }) => (
              <button
                key={id}
                type="button"
                onClick={() => handleSetCamera(id)}
                style={{
                  padding: '2px 8px',
                  fontSize: '0.68rem',
                  fontWeight: activeCamera === id ? 800 : 600,
                  borderRadius: '5px',
                  background: activeCamera === id ? 'var(--emerald-500)' : 'transparent',
                  color: activeCamera === id ? '#05080f' : 'var(--text-muted)',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Top-Right Audio Mute & Telemetry Pill */}
          <div style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            {/* Buzzer Sound Indicator */}
            <button
              type="button"
              onClick={handleToggleMute}
              title={isAudioMuted ? 'Unmute Obstacle Buzzer' : 'Mute Obstacle Buzzer'}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                background: telemetry?.buzzerState === 'OBSTACLE'
                  ? 'rgba(244, 63, 94, 0.3)'
                  : (telemetry?.buzzerState === 'WARNING' ? 'rgba(245, 158, 11, 0.3)' : 'rgba(15, 23, 42, 0.85)'),
                border: `1px solid ${telemetry?.buzzerState === 'OBSTACLE' ? 'var(--rose-500)' : (telemetry?.buzzerState === 'WARNING' ? 'var(--amber-500)' : 'rgba(255, 255, 255, 0.15)')}`,
                borderRadius: '8px',
                padding: '4px 8px',
                color: '#fff',
                fontSize: '0.68rem',
                fontWeight: 700,
                cursor: 'pointer'
              }}
            >
              {isAudioMuted ? <VolumeX size={13} color="var(--text-muted)" /> : <Volume2 size={13} color={telemetry?.buzzerState !== 'OFF' ? 'var(--rose-400)' : 'var(--emerald-400)'} />}
              <span>BUZZER: {isAudioMuted ? 'MUTED' : (telemetry?.buzzerState || 'OFF')}</span>
            </button>
          </div>

          {/* Center Safety Stop Banner if triggered */}
          {telemetry?.safetyStopActive && (
            <div style={{
              position: 'absolute',
              top: '52px',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 10,
              background: 'rgba(244, 63, 94, 0.9)',
              backdropFilter: 'blur(10px)',
              border: '1px solid #fff',
              borderRadius: '8px',
              padding: '6px 14px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: '#fff',
              fontSize: '0.78rem',
              fontWeight: 800,
              boxShadow: '0 0 24px rgba(244, 63, 94, 0.7)'
            }}>
              <AlertTriangle size={16} color="#fff" />
              <span>SAFETY STOP: CENTER OBSTACLE AHEAD (&lt; 25 cm)</span>
              <button
                type="button"
                onClick={() => managerRef.current?.resetSafetyStop()}
                style={{
                  background: 'rgba(0,0,0,0.3)',
                  border: '1px solid rgba(255,255,255,0.4)',
                  color: '#fff',
                  borderRadius: '4px',
                  padding: '2px 6px',
                  fontSize: '0.68rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  marginLeft: '6px'
                }}
              >
                Clear
              </button>
            </div>
          )}

          {/* Bottom HUD Bar: Coordinates, Heading, Speed & Zone */}
          <div style={{
            position: 'absolute',
            bottom: '12px',
            left: '12px',
            right: '12px',
            zIndex: 10,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0.5rem',
            pointerEvents: 'none'
          }}>
            <div style={{
              background: 'rgba(15, 23, 42, 0.85)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '8px',
              padding: '5px 10px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              fontSize: '0.72rem'
            }}>
              <div>
                <span style={{ color: 'var(--text-dim)' }}>POS: </span>
                <span className="mono" style={{ color: '#fff', fontWeight: 800 }}>
                  X: {telemetry?.position.x ?? 0}m · Z: {telemetry?.position.z ?? 0}m
                </span>
              </div>
              <div style={{ borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: '8px' }}>
                <span style={{ color: 'var(--text-dim)' }}>HEADING: </span>
                <span className="mono" style={{ color: 'var(--emerald-400)', fontWeight: 800 }}>
                  {telemetry?.headingDeg ?? 0}°
                </span>
              </div>
              <div style={{ borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: '8px' }}>
                <span style={{ color: 'var(--text-dim)' }}>PWM: </span>
                <span className="mono" style={{ color: 'var(--sky-400)', fontWeight: 800 }}>
                  {telemetry?.speedPwm ?? 160}
                </span>
              </div>
            </div>

            <div style={{
              background: 'rgba(15, 23, 42, 0.85)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '8px',
              padding: '5px 10px',
              fontSize: '0.72rem'
            }}>
              <span style={{ color: 'var(--text-dim)' }}>FIELD ZONE: </span>
              <span style={{ color: 'var(--emerald-400)', fontWeight: 800 }}>
                {telemetry?.currentZone.name || 'Central Ridge'}
              </span>
            </div>
          </div>

          {/* Three.js Canvas Container */}
          <div
            ref={containerRef}
            style={{
              width: '100%',
              height: '520px',
              cursor: activeCamera === 'ISOMETRIC' || activeCamera === 'OVERHEAD' ? 'grab' : 'crosshair'
            }}
          />
        </div>

        {/* Right Column: Tactile Rover Controls & Tri-Zone Radar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          
          {/* Tactile D-Pad Rover Controls */}
          <div className="glass-panel" style={{ padding: '1.1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Compass size={17} color="var(--emerald-400)" />
                <h3 style={{ fontSize: '0.92rem', fontWeight: 800, margin: 0, color: '#fff' }}>
                  ROBOT MOBILITY CONTROLS
                </h3>
              </div>
              <span style={{ fontSize: '0.65rem', color: 'var(--text-dim)' }}>
                W / A / S / D or Click
              </span>
            </div>

            {/* D-Pad Buttons Grid */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', margin: '0.5rem 0' }}>
              <button
                type="button"
                onClick={() => handleMove('FORWARD')}
                className="btn"
                style={{
                  width: '64px',
                  height: '48px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: telemetry?.movement === 'FORWARD' ? 'var(--emerald-500)' : 'rgba(255,255,255,0.06)',
                  color: telemetry?.movement === 'FORWARD' ? '#05080f' : '#fff',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: '10px'
                }}
              >
                <ArrowUp size={22} />
              </button>

              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  type="button"
                  onClick={() => handleMove('LEFT')}
                  className="btn"
                  style={{
                    width: '64px',
                    height: '48px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: telemetry?.movement === 'LEFT' ? 'var(--emerald-500)' : 'rgba(255,255,255,0.06)',
                    color: telemetry?.movement === 'LEFT' ? '#05080f' : '#fff',
                    border: '1px solid rgba(255,255,255,0.12)',
                    borderRadius: '10px'
                  }}
                >
                  <ArrowLeft size={22} />
                </button>

                <button
                  type="button"
                  onClick={() => handleMove('STOP')}
                  className="btn"
                  style={{
                    width: '64px',
                    height: '48px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: telemetry?.movement === 'STOP' ? 'rgba(244, 63, 94, 0.25)' : 'rgba(255,255,255,0.06)',
                    color: telemetry?.movement === 'STOP' ? 'var(--rose-400)' : '#fff',
                    border: '1px solid rgba(255,255,255,0.12)',
                    borderRadius: '10px'
                  }}
                >
                  <Square size={20} />
                </button>

                <button
                  type="button"
                  onClick={() => handleMove('RIGHT')}
                  className="btn"
                  style={{
                    width: '64px',
                    height: '48px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: telemetry?.movement === 'RIGHT' ? 'var(--emerald-500)' : 'rgba(255,255,255,0.06)',
                    color: telemetry?.movement === 'RIGHT' ? '#05080f' : '#fff',
                    border: '1px solid rgba(255,255,255,0.12)',
                    borderRadius: '10px'
                  }}
                >
                  <ArrowRight size={22} />
                </button>
              </div>

              <button
                type="button"
                onClick={() => handleMove('BACKWARD')}
                className="btn"
                style={{
                  width: '64px',
                  height: '48px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: telemetry?.movement === 'BACKWARD' ? 'var(--emerald-500)' : 'rgba(255,255,255,0.06)',
                  color: telemetry?.movement === 'BACKWARD' ? '#05080f' : '#fff',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: '10px'
                }}
              >
                <ArrowDown size={22} />
              </button>
            </div>

            {/* Emergency STOP Button */}
            <div style={{ marginTop: '0.85rem' }}>
              <button
                type="button"
                onClick={() => managerRef.current?.emergencyStop()}
                className="btn"
                style={{
                  width: '100%',
                  padding: '0.55rem',
                  background: 'linear-gradient(135deg, var(--rose-600), #9f1239)',
                  color: '#fff',
                  fontWeight: 800,
                  fontSize: '0.78rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  borderRadius: '8px',
                  boxShadow: '0 0 15px rgba(244, 63, 94, 0.3)'
                }}
              >
                <ShieldAlert size={16} />
                SIMULATOR EMERGENCY STOP
              </button>
            </div>
          </div>

          {/* Tri-Zone Raycast Ultrasonic Radar */}
          <div className="glass-panel" style={{ padding: '1.1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Radio size={16} color="var(--sky-400)" />
                <h3 style={{ fontSize: '0.90rem', fontWeight: 800, margin: 0, color: '#fff' }}>
                  TRI-ZONE ULTRASONIC RADAR
                </h3>
              </div>
              <span style={{ fontSize: '0.65rem', color: 'var(--text-dim)' }}>
                Raycast 3D Distance
              </span>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '8px',
              textAlign: 'center'
            }}>
              {/* Left Sensor */}
              <div style={{
                background: 'rgba(0,0,0,0.25)',
                padding: '8px 4px',
                borderRadius: '8px',
                border: '1px solid rgba(255,255,255,0.08)'
              }}>
                <div style={{ fontSize: '0.62rem', color: 'var(--text-dim)', fontWeight: 700 }}>LEFT (-X)</div>
                <div className="mono" style={{
                  fontSize: '1.1rem',
                  fontWeight: 800,
                  color: (telemetry?.ultrasonic.left ?? 999) < SAFETY_THRESHOLDS.OBSTACLE_CM
                    ? 'var(--rose-400)'
                    : ((telemetry?.ultrasonic.left ?? 999) <= SAFETY_THRESHOLDS.WARNING_CM ? 'var(--amber-400)' : 'var(--emerald-400)')
                }}>
                  {telemetry?.ultrasonic.left ?? '--'}
                  <span style={{ fontSize: '0.65rem' }}>cm</span>
                </div>
                <div style={{ fontSize: '0.58rem', fontWeight: 800, color: (telemetry?.ultrasonic.left ?? 999) < SAFETY_THRESHOLDS.OBSTACLE_CM ? 'var(--rose-400)' : 'var(--text-muted)' }}>
                  {(telemetry?.ultrasonic.left ?? 999) < SAFETY_THRESHOLDS.OBSTACLE_CM ? 'OBSTACLE' : 'CLEAR'}
                </div>
              </div>

              {/* Center Sensor */}
              <div style={{
                background: (telemetry?.ultrasonic.center ?? 999) < SAFETY_THRESHOLDS.OBSTACLE_CM
                  ? 'rgba(244, 63, 94, 0.2)'
                  : 'rgba(0,0,0,0.25)',
                padding: '8px 4px',
                borderRadius: '8px',
                border: `1px solid ${(telemetry?.ultrasonic.center ?? 999) < SAFETY_THRESHOLDS.OBSTACLE_CM ? 'var(--rose-500)' : 'rgba(255,255,255,0.08)'}`
              }}>
                <div style={{ fontSize: '0.62rem', color: (telemetry?.ultrasonic.center ?? 999) < SAFETY_THRESHOLDS.OBSTACLE_CM ? 'var(--rose-400)' : 'var(--text-dim)', fontWeight: 800 }}>CENTER (+Z)</div>
                <div className="mono" style={{
                  fontSize: '1.1rem',
                  fontWeight: 800,
                  color: (telemetry?.ultrasonic.center ?? 999) < SAFETY_THRESHOLDS.OBSTACLE_CM
                    ? 'var(--rose-400)'
                    : ((telemetry?.ultrasonic.center ?? 999) <= SAFETY_THRESHOLDS.WARNING_CM ? 'var(--amber-400)' : 'var(--emerald-400)')
                }}>
                  {telemetry?.ultrasonic.center ?? '--'}
                  <span style={{ fontSize: '0.65rem' }}>cm</span>
                </div>
                <div style={{ fontSize: '0.58rem', fontWeight: 800, color: (telemetry?.ultrasonic.center ?? 999) < SAFETY_THRESHOLDS.OBSTACLE_CM ? 'var(--rose-400)' : 'var(--text-muted)' }}>
                  {(telemetry?.ultrasonic.center ?? 999) < SAFETY_THRESHOLDS.OBSTACLE_CM ? 'HARD STOP' : 'CLEAR'}
                </div>
              </div>

              {/* Right Sensor */}
              <div style={{
                background: 'rgba(0,0,0,0.25)',
                padding: '8px 4px',
                borderRadius: '8px',
                border: '1px solid rgba(255,255,255,0.08)'
              }}>
                <div style={{ fontSize: '0.62rem', color: 'var(--text-dim)', fontWeight: 700 }}>RIGHT (+X)</div>
                <div className="mono" style={{
                  fontSize: '1.1rem',
                  fontWeight: 800,
                  color: (telemetry?.ultrasonic.right ?? 999) < SAFETY_THRESHOLDS.OBSTACLE_CM
                    ? 'var(--rose-400)'
                    : ((telemetry?.ultrasonic.right ?? 999) <= SAFETY_THRESHOLDS.WARNING_CM ? 'var(--amber-400)' : 'var(--emerald-400)')
                }}>
                  {telemetry?.ultrasonic.right ?? '--'}
                  <span style={{ fontSize: '0.65rem' }}>cm</span>
                </div>
                <div style={{ fontSize: '0.58rem', fontWeight: 800, color: (telemetry?.ultrasonic.right ?? 999) < SAFETY_THRESHOLDS.OBSTACLE_CM ? 'var(--rose-400)' : 'var(--text-muted)' }}>
                  {(telemetry?.ultrasonic.right ?? 999) < SAFETY_THRESHOLDS.OBSTACLE_CM ? 'OBSTACLE' : 'CLEAR'}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── Middle Row: AI Crop Pathology Inspection & Location Telemetry ─── */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1.25fr) minmax(0, 1fr)',
        gap: '1.25rem',
        width: '100%'
      }}>
        {/* AI Camera Crop Inspection & Farmer Approval Gate */}
        <div className="glass-panel" style={{ padding: '1.25rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
              <Scan size={18} color="var(--emerald-400)" />
              <h3 style={{ fontSize: '0.95rem', fontWeight: 800, margin: 0, color: '#fff' }}>
                AI CROP PATHOLOGY &amp; FARMER APPROVAL GATE
              </h3>
            </div>
            <span className="status-pill status-online" style={{ fontSize: '0.62rem', padding: '0.15rem 0.5rem' }}>
              VIRTUAL FRUSTUM ACTIVE
            </span>
          </div>

          {targetPlant ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {/* Target Plant Banner */}
              <div style={{
                background: 'rgba(0,0,0,0.3)',
                padding: '0.75rem 1rem',
                borderRadius: '8px',
                border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#fff' }}>
                    {targetPlant.id} — {targetPlant.variety}
                  </div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                    Row {targetPlant.row} · Position ({targetPlant.position.x}m, {targetPlant.position.z}m)
                  </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <span className="status-pill" style={{
                    background: targetPlant.state === 'DISEASED'
                      ? 'rgba(244, 63, 94, 0.2)'
                      : (targetPlant.state === 'TREATED' ? 'rgba(6, 182, 212, 0.2)' : 'rgba(16, 185, 129, 0.2)'),
                    color: targetPlant.state === 'DISEASED'
                      ? 'var(--rose-400)'
                      : (targetPlant.state === 'TREATED' ? 'var(--cyan-400)' : 'var(--emerald-400)'),
                    border: `1px solid ${targetPlant.state === 'DISEASED' ? 'var(--rose-500)' : (targetPlant.state === 'TREATED' ? 'var(--cyan-500)' : 'var(--emerald-500)')}`,
                    fontWeight: 800,
                    fontSize: '0.72rem'
                  }}>
                    {targetPlant.state}
                  </span>
                  <div style={{ fontSize: '0.68rem', color: 'var(--text-dim)', marginTop: '2px' }}>
                    Health Score: {targetPlant.healthScore}%
                  </div>
                </div>
              </div>

              {/* Disease Diagnosis & Treatment Prescription */}
              {targetPlant.disease && (
                <div style={{
                  background: 'rgba(244, 63, 94, 0.08)',
                  border: '1px solid rgba(244, 63, 94, 0.25)',
                  borderRadius: '8px',
                  padding: '0.85rem'
                }}>
                  <div style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--rose-400)', marginBottom: '4px' }}>
                    DIAGNOSIS: {targetPlant.disease.name} ({Math.round(targetPlant.disease.confidence * 100)}% Confidence)
                  </div>
                  <div style={{ fontSize: '0.74rem', color: 'var(--text-secondary)', marginBottom: '8px' }}>
                    <strong>Symptoms:</strong> {targetPlant.disease.symptoms}
                  </div>
                  <div style={{ fontSize: '0.74rem', color: '#fff', marginBottom: '8px' }}>
                    <strong>Prescription:</strong> {targetPlant.disease.recommendedTreatment}
                  </div>
                  <div style={{ display: 'flex', gap: '1rem', fontSize: '0.72rem', color: 'var(--text-dim)' }}>
                    <span>Product: <strong style={{ color: '#fff' }}>{targetPlant.disease.chemicalProduct}</strong></span>
                    <span>Dose: <strong style={{ color: 'var(--cyan-400)' }}>{targetPlant.disease.recommendedDoseMl} mL</strong></span>
                    <span>Inventory: <strong style={{ color: 'var(--emerald-400)' }}>AVAILABLE (1000 mL)</strong></span>
                  </div>
                </div>
              )}

              {/* Farmer Approval Action Box */}
              {targetPlant.state === 'DISEASED' && (
                <div style={{
                  background: 'rgba(16, 185, 129, 0.08)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  borderRadius: '8px',
                  padding: '0.85rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '0.75rem'
                }}>
                  <div>
                    <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#fff' }}>
                      Farmer Safety Interlock: Approval Required
                    </div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                      Robot will never spray automatically. Authorize micro-pulse spray.
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleApproveSpray}
                    disabled={telemetry?.sprayActive}
                    className="btn btn-primary"
                    style={{
                      padding: '0.5rem 1rem',
                      fontWeight: 800,
                      fontSize: '0.78rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.45rem'
                    }}
                  >
                    <Sparkles size={15} />
                    {telemetry?.sprayActive ? 'SPRAYING IN PROGRESS...' : 'FARMER APPROVE & EXECUTE SPRAY'}
                  </button>
                </div>
              )}

              {targetPlant.state === 'TREATED' && (
                <div style={{
                  background: 'rgba(6, 182, 212, 0.1)',
                  border: '1px solid var(--cyan-500)',
                  borderRadius: '8px',
                  padding: '0.75rem 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem'
                }}>
                  <CheckCircle2 size={18} color="var(--cyan-400)" />
                  <div>
                    <div style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--cyan-400)' }}>
                      TREATMENT EXECUTED &amp; RECORDED
                    </div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                      Targeted micro-pulse application verified. Status updated to TREATED. Follow-up evaluation scheduled in 4 days.
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div style={{
              padding: '2.5rem 1rem',
              textAlign: 'center',
              color: 'var(--text-dim)',
              fontSize: '0.8rem'
            }}>
              <Camera size={28} color="var(--text-dim)" style={{ margin: '0 auto 8px auto', display: 'block' }} />
              <div>No crop plant currently in inspection frame.</div>
              <div style={{ fontSize: '0.72rem', marginTop: '4px' }}>
                Drive the rover near a crop row or click <strong>Preset 3 (Diseased Crop)</strong> to focus on a target plant.
              </div>
            </div>
          )}
        </div>

        {/* Spatial Soil Moisture & Agronomic Telemetry */}
        <div className="glass-panel" style={{ padding: '1.25rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
              <Droplet size={18} color="var(--sky-400)" />
              <h3 style={{ fontSize: '0.95rem', fontWeight: 800, margin: 0, color: '#fff' }}>
                SPATIAL SOIL &amp; MICROCLIMATE TELEMETRY
              </h3>
            </div>
            <span style={{ fontSize: '0.68rem', color: 'var(--text-dim)' }}>
              Location Dependent
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
            {/* Soil Moisture */}
            <div style={{
              background: 'rgba(0,0,0,0.25)',
              padding: '10px',
              borderRadius: '8px',
              border: '1px solid rgba(255,255,255,0.08)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                <span style={{ fontSize: '0.68rem', color: 'var(--text-dim)', fontWeight: 700 }}>SOIL MOISTURE</span>
                <Droplet size={14} color="var(--sky-400)" />
              </div>
              <div className="mono" style={{ fontSize: '1.35rem', fontWeight: 800, color: '#fff' }}>
                {telemetry?.soilMoisturePct.toFixed(1) ?? '--'}%
              </div>
              <div style={{ fontSize: '0.68rem', color: telemetry?.currentZone.soilCondition === 'DRY' ? 'var(--amber-400)' : 'var(--emerald-400)', fontWeight: 700 }}>
                Status: {telemetry?.currentZone.soilCondition || 'OPTIMAL'}
              </div>
            </div>

            {/* NPK Values */}
            <div style={{
              background: 'rgba(0,0,0,0.25)',
              padding: '10px',
              borderRadius: '8px',
              border: '1px solid rgba(255,255,255,0.08)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                <span style={{ fontSize: '0.68rem', color: 'var(--text-dim)', fontWeight: 700 }}>NPK PROFILE</span>
                <Activity size={14} color="var(--pink-400)" />
              </div>
              <div className="mono" style={{ fontSize: '1.15rem', fontWeight: 800, color: '#fff' }}>
                N:{telemetry?.npk.n} · P:{telemetry?.npk.p} · K:{telemetry?.npk.k}
              </div>
              <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>
                mg/kg (Location Calibrated)
              </div>
            </div>

            {/* Temperature */}
            <div style={{
              background: 'rgba(0,0,0,0.25)',
              padding: '10px',
              borderRadius: '8px',
              border: '1px solid rgba(255,255,255,0.08)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                <span style={{ fontSize: '0.68rem', color: 'var(--text-dim)', fontWeight: 700 }}>DHT22 TEMP</span>
                <Thermometer size={14} color="var(--amber-400)" />
              </div>
              <div className="mono" style={{ fontSize: '1.35rem', fontWeight: 800, color: '#fff' }}>
                {telemetry?.dht22.temperature.toFixed(1) ?? '--'}°C
              </div>
              <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>
                Microclimate Ambient
              </div>
            </div>

            {/* Humidity */}
            <div style={{
              background: 'rgba(0,0,0,0.25)',
              padding: '10px',
              borderRadius: '8px',
              border: '1px solid rgba(255,255,255,0.08)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                <span style={{ fontSize: '0.68rem', color: 'var(--text-dim)', fontWeight: 700 }}>DHT22 HUMIDITY</span>
                <Zap size={14} color="var(--sky-400)" />
              </div>
              <div className="mono" style={{ fontSize: '1.35rem', fontWeight: 800, color: '#fff' }}>
                {telemetry?.dht22.humidity.toFixed(1) ?? '--'}%
              </div>
              <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>
                Relative Humidity
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom Row: Environmental & Carbon Impact Engine ───────────────── */}
      <div className="glass-panel" style={{ padding: '1.25rem' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1rem',
          flexWrap: 'wrap',
          gap: '0.75rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
            <Leaf size={18} color="var(--emerald-400)" />
            <h3 style={{ fontSize: '0.98rem', fontWeight: 800, margin: 0, color: '#fff' }}>
              ENVIRONMENTAL &amp; CARBON FOOTPRINT IMPACT
            </h3>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span className="status-pill" style={{
              background: 'rgba(16, 185, 129, 0.15)',
              color: 'var(--emerald-400)',
              border: '1px solid rgba(16, 185, 129, 0.35)',
              fontSize: '0.64rem',
              padding: '0.15rem 0.5rem',
              fontWeight: 800
            }}>
              TRANSPARENT LIFE CYCLE ESTIMATE
            </span>
            <span style={{ fontSize: '0.68rem', color: 'var(--text-dim)' }}>
              (All figures labeled SIMULATION / ESTIMATE)
            </span>
          </div>
        </div>

        {/* Side-by-Side Comparison Metrics Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
          gap: '12px'
        }}>
          {/* Chemical Volume Savings Card */}
          <div style={{
            background: 'rgba(0,0,0,0.25)',
            padding: '12px',
            borderRadius: '10px',
            border: '1px solid rgba(255,255,255,0.08)'
          }}>
            <div style={{ fontSize: '0.68rem', color: 'var(--text-dim)', fontWeight: 700, marginBottom: '4px' }}>
              CHEMICAL VOLUME SAVED
            </div>
            <div className="mono" style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--emerald-400)' }}>
              {impact?.volumeSavedMl.toLocaleString() ?? '5,358'} <span style={{ fontSize: '0.8rem' }}>mL</span>
            </div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
              {impact?.percentageReduction ?? 99.2}% reduction vs. conventional blanket broadcast ({impact?.conventionalBaselineMl.toLocaleString() ?? '5,400'} mL baseline).
            </div>
          </div>

          {/* Targeted vs Spared Plants */}
          <div style={{
            background: 'rgba(0,0,0,0.25)',
            padding: '12px',
            borderRadius: '10px',
            border: '1px solid rgba(255,255,255,0.08)'
          }}>
            <div style={{ fontSize: '0.68rem', color: 'var(--text-dim)', fontWeight: 700, marginBottom: '4px' }}>
              CROP CANOPY TARGETING
            </div>
            <div className="mono" style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--cyan-400)' }}>
              {impact?.plantsTreatedCount ?? 0} <span style={{ fontSize: '0.8rem' }}>Treated</span>
            </div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
              <strong>{impact?.nonTargetPlantsSparedCount ?? 24}</strong> non-target healthy crops spared from chemical runoff.
            </div>
          </div>

          {/* Robot Electrical Energy */}
          <div style={{
            background: 'rgba(0,0,0,0.25)',
            padding: '12px',
            borderRadius: '10px',
            border: '1px solid rgba(255,255,255,0.08)'
          }}>
            <div style={{ fontSize: '0.68rem', color: 'var(--text-dim)', fontWeight: 700, marginBottom: '4px' }}>
              ROBOT ENERGY USE
            </div>
            <div className="mono" style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--sky-400)' }}>
              {impact?.robotEnergyKwh.toFixed(4) ?? '0.0012'} <span style={{ fontSize: '0.8rem' }}>kWh</span>
            </div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
              Low-power 12V LiFePO4 drivetrain with pulse diaphragm actuation.
            </div>
          </div>

          {/* Estimated Avoided CO2e */}
          <div style={{
            background: 'rgba(16, 185, 129, 0.08)',
            padding: '12px',
            borderRadius: '10px',
            border: '1px solid rgba(16, 185, 129, 0.3)'
          }}>
            <div style={{ fontSize: '0.68rem', color: 'var(--emerald-400)', fontWeight: 800, marginBottom: '4px' }}>
              ESTIMATED AVOIDED CO2e
            </div>
            <div className="mono" style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--emerald-400)' }}>
              {impact?.estimatedAvoidedCO2eKg.toFixed(3) ?? '0.061'} <span style={{ fontSize: '0.8rem' }}>kg CO2e</span>
            </div>
            <div style={{ fontSize: '0.70rem', color: 'var(--text-dim)', marginTop: '4px' }}>
              Baseline: {impact?.conventionalFootprintKgCO2e ?? '0.062'} kg · AgriGuard: {impact?.agriguardFootprintKgCO2e ?? '0.001'} kg (Estimate).
            </div>
          </div>
        </div>
      </div>

      {/* ── Chronological Event Log ─────────────────────────────────────────── */}
      <div className="glass-panel" style={{ padding: '1rem 1.25rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.65rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
            <Clock size={15} color="var(--emerald-400)" />
            <h4 style={{ fontSize: '0.85rem', fontWeight: 800, margin: 0, color: '#fff' }}>
              SIMULATION CHRONOLOGICAL EVENT AUDIT LOG
            </h4>
          </div>
          <span style={{ fontSize: '0.65rem', color: 'var(--text-dim)' }}>
            Latest 50 events
          </span>
        </div>

        <div style={{
          maxHeight: '130px',
          overflowY: 'auto',
          background: 'rgba(0,0,0,0.3)',
          borderRadius: '6px',
          padding: '8px',
          fontFamily: 'monospace',
          fontSize: '0.72rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '4px'
        }}>
          {logs.length > 0 ? (
            logs.map((log) => (
              <div key={log.id} style={{ display: 'flex', gap: '8px' }}>
                <span style={{ color: 'var(--text-dim)' }}>[{log.timestamp}]</span>
                <span style={{
                  fontWeight: 700,
                  color: log.type === 'ALERT'
                    ? 'var(--rose-400)'
                    : (log.type === 'SAFETY' ? 'var(--amber-400)' : (log.type === 'TREATMENT' ? 'var(--cyan-400)' : (log.type === 'DETECTION' ? 'var(--emerald-400)' : 'var(--sky-400)')))
                }}>
                  [{log.type}]
                </span>
                <span style={{ color: 'var(--text-secondary)' }}>{log.message}</span>
              </div>
            ))
          ) : (
            <div style={{ color: 'var(--text-dim)' }}>Waiting for simulation events...</div>
          )}
        </div>
      </div>

    </div>
  );
};
