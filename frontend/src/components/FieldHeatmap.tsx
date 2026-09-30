import React, { useState, useEffect, useCallback } from 'react';
import {
  MapPin,
  History,
  CheckCircle,
  AlertTriangle,
  AlertCircle,
  RefreshCw,
  Navigation,
  Eye,
  ShieldCheck,
  Activity,
  Crosshair,
  Droplets,
  Layers,
  Sparkles,
  Clock,
  Compass
} from 'lucide-react';
import { FieldHeatmapResponse, HeatmapObservation, RobotPosition, ZoneData } from '../types';
import { fetchFieldHeatmap, fetchZones, selectZone, setRobotPosition, fetchReinspection } from '../services/api';

interface FieldHeatmapProps {
  activeZoneId: string;
  onZoneSelected: (zoneId: string) => void;
}

export const FieldHeatmap: React.FC<FieldHeatmapProps> = ({ activeZoneId, onZoneSelected }) => {
  const [heatmapData, setHeatmapData] = useState<FieldHeatmapResponse | null>(null);
  const [zones, setZones] = useState<ZoneData[]>([]);
  const [selectedCellCoord, setSelectedCellCoord] = useState<{ x: number; y: number } | null>(null);
  const [reinspectionData, setReinspectionData] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [viewMode, setViewMode] = useState<'severity' | 'health'>('severity');
  const [lastSyncTime, setLastSyncTime] = useState<string>('');

  // Load heatmap and zones
  const loadHeatmap = useCallback(async (showLoading = false) => {
    if (showLoading) setIsLoading(true);
    try {
      const [hmRes, zonesRes] = await Promise.all([
        fetchFieldHeatmap().catch(() => null),
        fetchZones().catch(() => [])
      ]);

      if (hmRes) {
        setHeatmapData(hmRes);
        setLastSyncTime(new Date().toLocaleTimeString());
      }
      if (zonesRes && zonesRes.length > 0) {
        setZones(zonesRes);
      }
    } catch (err) {
      console.error('Failed to load field heatmap:', err);
    } finally {
      if (showLoading) setIsLoading(false);
    }
  }, []);

  // Initial load
  useEffect(() => {
    loadHeatmap(true);
  }, [loadHeatmap]);

  // Real-time update listeners via WebSocket events dispatched on window
  useEffect(() => {
    const handleFieldObservation = (e: any) => {
      const newObs: HeatmapObservation = e.detail;
      setHeatmapData((prev) => {
        if (!prev) return prev;
        // Prepend new observation or replace if same id
        const filtered = prev.observations.filter((o) => o.id !== newObs.id);
        return {
          ...prev,
          observations: [newObs, ...filtered]
        };
      });
      setLastSyncTime(new Date().toLocaleTimeString());
    };

    const handleTreatmentApplied = () => {
      // Re-fetch to get updated treatment status join from DB
      loadHeatmap(false);
    };

    window.addEventListener('field_observation', handleFieldObservation);
    window.addEventListener('treatment_applied', handleTreatmentApplied);

    // Fallback polling every 4 seconds to guarantee sync
    const pollInterval = window.setInterval(() => {
      loadHeatmap(false);
    }, 4000);

    return () => {
      window.removeEventListener('field_observation', handleFieldObservation);
      window.removeEventListener('treatment_applied', handleTreatmentApplied);
      window.clearInterval(pollInterval);
    };
  }, [loadHeatmap]);

  // Load reinspection when selected zone changes
  const loadReinspectionData = useCallback(async (zoneId: string) => {
    try {
      const data = await fetchReinspection(zoneId);
      setReinspectionData(data);
    } catch (e) {
      setReinspectionData(null);
    }
  }, []);

  // When activeZoneId changes from props, update selected cell if not set
  useEffect(() => {
    if (activeZoneId && !selectedCellCoord) {
      // Parse coordinates from ZONE-R{r}C{c}
      const match = activeZoneId.match(/R(\d+)C(\d+)/);
      if (match) {
        setSelectedCellCoord({ y: parseInt(match[1]), x: parseInt(match[2]) });
      }
    }
  }, [activeZoneId, selectedCellCoord]);

  // Field dimensions (default 6 cols x 4 rows)
  const fieldWidth = heatmapData?.field?.width ?? 6;
  const fieldHeight = heatmapData?.field?.height ?? 4;
  const observations = heatmapData?.observations ?? [];
  const robotPos: RobotPosition = heatmapData?.current_robot_position ?? {
    x: 1,
    y: 1,
    zone_id: 'ZONE-R1C1',
    zone: 'A1',
    mode: 'Prototype Estimated Position'
  };

  // Find observation for a specific (x, y) cell
  const getObservationForCell = (x: number, y: number): HeatmapObservation | undefined => {
    // Return latest observation at this coordinate
    return observations.find((o) => o.x === x && o.y === y);
  };

  // Cell click handler
  const handleCellClick = async (x: number, y: number) => {
    setSelectedCellCoord({ x, y });
    const zid = `ZONE-R${y}C${x}`;
    onZoneSelected(zid);
    await selectZone(zid);
    loadReinspectionData(zid);
  };

  // Reposition robot to specific cell
  const handleRepositionRobot = async (x: number, y: number) => {
    try {
      const zid = `ZONE-R${y}C${x}`;
      await setRobotPosition(x, y, zid);
      onZoneSelected(zid);
      await loadHeatmap(false);
    } catch (err) {
      console.error('Failed to update robot position:', err);
    }
  };

  // Severity color mapping (healthy: green, low/mild: yellow, moderate: orange, high/severe: red)
  const getSeverityColor = (severity: string): { bg: string; border: string; text: string; glow: string } => {
    const s = (severity || '').toLowerCase().trim();
    if (s === 'severe' || s === 'high') {
      return {
        bg: 'rgba(239, 68, 68, 0.25)',
        border: '#ef4444',
        text: '#fca5a5',
        glow: 'rgba(239, 68, 68, 0.4)'
      };
    }
    if (s === 'moderate') {
      return {
        bg: 'rgba(249, 115, 22, 0.25)',
        border: '#f97316',
        text: '#fdba74',
        glow: 'rgba(249, 115, 22, 0.4)'
      };
    }
    if (s === 'mild' || s === 'low') {
      return {
        bg: 'rgba(234, 179, 8, 0.25)',
        border: '#eab308',
        text: '#fde047',
        glow: 'rgba(234, 179, 8, 0.4)'
      };
    }
    // healthy or none
    return {
      bg: 'rgba(16, 185, 129, 0.22)',
      border: '#10b981',
      text: '#86efac',
      glow: 'rgba(16, 185, 129, 0.35)'
    };
  };

  // Health score color mapping (0-100)
  const getHealthScoreColor = (score: number): { bg: string; border: string; text: string; glow: string } => {
    if (score >= 80) {
      return {
        bg: 'rgba(16, 185, 129, 0.25)',
        border: '#10b981',
        text: '#86efac',
        glow: 'rgba(16, 185, 129, 0.35)'
      };
    }
    if (score >= 60) {
      return {
        bg: 'rgba(234, 179, 8, 0.25)',
        border: '#eab308',
        text: '#fde047',
        glow: 'rgba(234, 179, 8, 0.4)'
      };
    }
    if (score >= 40) {
      return {
        bg: 'rgba(249, 115, 22, 0.25)',
        border: '#f97316',
        text: '#fdba74',
        glow: 'rgba(249, 115, 22, 0.4)'
      };
    }
    return {
      bg: 'rgba(239, 68, 68, 0.25)',
      border: '#ef4444',
      text: '#fca5a5',
      glow: 'rgba(239, 68, 68, 0.4)'
    };
  };

  // Selected cell data
  const currentSelectedCoord = selectedCellCoord || { x: robotPos.x, y: robotPos.y };
  const currentObservation = getObservationForCell(currentSelectedCoord.x, currentSelectedCoord.y);
  const selectedZoneId = `ZONE-R${currentSelectedCoord.y}C${currentSelectedCoord.x}`;
  const selectedZoneData = zones.find((z) => z.zone_id === selectedZoneId);

  // Convert row index to agricultural bed label (Row 1 -> Bed A, Row 2 -> Bed B)
  const getRowLetter = (r: number) => String.fromCharCode(64 + r);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      
      {/* 1. Header & Controls Bar */}
      <div className="glass-panel" style={{ padding: '1.25rem 1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              width: 40,
              height: 40,
              borderRadius: '10px',
              background: 'rgba(16, 185, 129, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(16, 185, 129, 0.3)'
            }}>
              <MapPin size={22} color="var(--emerald-400)" />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '-0.02em', margin: 0 }}>
                  Real Field Pathology Heatmap
                </h2>
                <span className="status-pill status-online" style={{ fontSize: '0.7rem', padding: '0.15rem 0.5rem' }}>
                  REAL DATA
                </span>
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: '2px 0 0 0' }}>
                Agricultural grid representation ({fieldWidth} × {fieldHeight} Plots, 1.5m bed resolution)
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            {/* View Mode Toggle */}
            <div style={{
              display: 'flex',
              background: 'rgba(0,0,0,0.3)',
              borderRadius: '8px',
              padding: '2px',
              border: '1px solid var(--border-subtle)'
            }}>
              <button
                onClick={() => setViewMode('severity')}
                style={{
                  background: viewMode === 'severity' ? 'var(--emerald-500)' : 'transparent',
                  color: viewMode === 'severity' ? '#000' : 'var(--text-muted)',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '0.35rem 0.75rem',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  transition: 'all 0.2s'
                }}
              >
                <Layers size={13} />
                <span>Severity Map</span>
              </button>
              <button
                onClick={() => setViewMode('health')}
                style={{
                  background: viewMode === 'health' ? 'var(--emerald-500)' : 'transparent',
                  color: viewMode === 'health' ? '#000' : 'var(--text-muted)',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '0.35rem 0.75rem',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  transition: 'all 0.2s'
                }}
              >
                <Activity size={13} />
                <span>Health Score (0-100)</span>
              </button>
            </div>

            {/* Refresh Button */}
            <button
              onClick={() => loadHeatmap(true)}
              disabled={isLoading}
              className="btn btn-outline"
              style={{ padding: '0.4rem 0.8rem', fontSize: '0.75rem' }}
              title="Refresh heatmap from database"
            >
              <RefreshCw size={13} className={isLoading ? 'animate-spin' : ''} />
              <span>{isLoading ? 'Syncing...' : 'Refresh'}</span>
            </button>
          </div>

        </div>

        {/* Legend Bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '1rem',
          paddingTop: '0.75rem',
          borderTop: '1px solid var(--border-subtle)',
          fontSize: '0.75rem',
          color: 'var(--text-muted)',
          flexWrap: 'wrap',
          gap: '0.5rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <span style={{ fontWeight: 600, color: '#fff' }}>Color Scale:</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <span style={{ width: 12, height: 12, borderRadius: '3px', background: '#10b981', display: 'inline-block' }} />
              Healthy {viewMode === 'health' ? '(80-100)' : ''}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <span style={{ width: 12, height: 12, borderRadius: '3px', background: '#eab308', display: 'inline-block' }} />
              Mild / Low Stress {viewMode === 'health' ? '(60-79)' : ''}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <span style={{ width: 12, height: 12, borderRadius: '3px', background: '#f97316', display: 'inline-block' }} />
              Moderate Pathogen {viewMode === 'health' ? '(40-59)' : ''}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <span style={{ width: 12, height: 12, borderRadius: '3px', background: '#ef4444', display: 'inline-block' }} />
              High / Severe Disease {viewMode === 'health' ? '(<40)' : ''}
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Clock size={12} color="var(--text-dim)" />
            <span className="mono" style={{ fontSize: '0.7rem' }}>Last synced: {lastSyncTime || 'Just now'}</span>
          </div>
        </div>
      </div>

      {/* 2. Robot Location & Field Telemetry Strip */}
      <div className="glass-panel" style={{
        padding: '0.85rem 1.25rem',
        background: 'linear-gradient(90deg, rgba(16, 185, 129, 0.08) 0%, rgba(14, 165, 233, 0.05) 100%)',
        border: '1px solid rgba(16, 185, 129, 0.25)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '0.75rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 32,
            height: 32,
            borderRadius: '50%',
            background: 'rgba(16, 185, 129, 0.2)',
            border: '2px solid var(--emerald-400)',
            animation: 'pulse 2s infinite'
          }}>
            <Crosshair size={16} color="var(--emerald-400)" />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#fff' }}>
                CURRENT ROBOT LOCATION:
              </span>
              <span className="status-pill status-warning" style={{ fontSize: '0.68rem', padding: '0.1rem 0.45rem' }}>
                {robotPos.mode}
              </span>
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '2px' }}>
              Grid Plot: <strong className="mono" style={{ color: 'var(--emerald-400)' }}>Bed {getRowLetter(robotPos.y)}{robotPos.x}</strong> ({robotPos.zone_id}) &bull; Coordinate: <strong className="mono" style={{ color: '#fff' }}>X: {robotPos.x}, Y: {robotPos.y}</strong>
              {robotPos.latitude !== null && robotPos.longitude !== null && robotPos.latitude !== undefined && (
                <span> &bull; GPS: <span className="mono">{robotPos.latitude.toFixed(6)}, {robotPos.longitude.toFixed(6)}</span></span>
              )}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)' }}>
            Total Observations Recorded:
          </span>
          <span className="mono" style={{
            fontSize: '0.85rem',
            fontWeight: 800,
            background: 'rgba(255,255,255,0.08)',
            padding: '0.2rem 0.6rem',
            borderRadius: '6px',
            color: '#fff'
          }}>
            {observations.length}
          </span>
        </div>
      </div>

      {/* 3. Main Content: Field Grid Visualizer + Selected Observation Drawer */}
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(320px, 1.8fr) minmax(300px, 1.2fr)', gap: '1.25rem', alignItems: 'start' }}>
        
        {/* Field Grid Canvas */}
        <div className="glass-panel" style={{ padding: '1.5rem', overflow: 'hidden' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Navigation size={16} color="var(--emerald-400)" />
              <span style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Field Coordinates Map (Top-Down View)
              </span>
            </div>
            <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)' }}>
              Click any cell to inspect or target
            </span>
          </div>

          {/* Empty state notice if zero observations */}
          {observations.length === 0 && (
            <div style={{
              padding: '1rem',
              borderRadius: '8px',
              background: 'rgba(234, 179, 8, 0.1)',
              border: '1px solid rgba(234, 179, 8, 0.3)',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}>
              <AlertCircle size={20} color="var(--amber-400)" />
              <div style={{ fontSize: '0.8rem', color: '#fff' }}>
                <strong>No field observations recorded yet.</strong>
                <p style={{ margin: '2px 0 0 0', color: 'var(--text-muted)', fontSize: '0.75rem' }}>
                  Execute a camera AI scan using the Crop Diagnostics tab to capture real crop pathology observations.
                </p>
              </div>
            </div>
          )}

          {/* Agricultural Field Grid Container */}
          <div style={{
            background: 'radial-gradient(ellipse at center, rgba(16, 185, 129, 0.05) 0%, rgba(10, 15, 24, 0.8) 100%)',
            border: '2px solid rgba(16, 185, 129, 0.25)',
            borderRadius: 'var(--radius-md)',
            padding: '16px',
            position: 'relative'
          }}>
            
            {/* Column Labels (X-Axis: 1 to fieldWidth) */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: `40px repeat(${fieldWidth}, 1fr)`,
              gap: '8px',
              marginBottom: '8px',
              textAlign: 'center',
              fontSize: '0.7rem',
              color: 'var(--text-dim)',
              fontWeight: 700
            }}>
              <div />
              {Array.from({ length: fieldWidth }).map((_, colIdx) => (
                <div key={`col-${colIdx}`} className="mono">
                  X={colIdx + 1}
                </div>
              ))}
            </div>

            {/* Rows (Y-Axis: fieldHeight down to 1) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {Array.from({ length: fieldHeight }).map((_, rIdx) => {
                // Display from top row down to bottom row (Row 4 down to 1)
                const y = fieldHeight - rIdx;
                const rowLetter = getRowLetter(y);

                return (
                  <div
                    key={`row-${y}`}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: `40px repeat(${fieldWidth}, 1fr)`,
                      gap: '8px',
                      alignItems: 'center'
                    }}
                  >
                    {/* Row Label (Y-Axis) */}
                    <div className="mono" style={{
                      textAlign: 'center',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: 'var(--text-muted)'
                    }}>
                      Bed {rowLetter}
                      <div style={{ fontSize: '0.62rem', color: 'var(--text-dim)' }}>Y={y}</div>
                    </div>

                    {/* Cells for this row */}
                    {Array.from({ length: fieldWidth }).map((_, cIdx) => {
                      const x = cIdx + 1;
                      const obs = getObservationForCell(x, y);
                      const isRobotHere = robotPos.x === x && robotPos.y === y;
                      const isSelected = currentSelectedCoord.x === x && currentSelectedCoord.y === y;
                      const zoneId = `ZONE-R${y}C${x}`;

                      // Determine visual styling based on real observation
                      let cellStyle: { bg: string; border: string; text: string; glow: string };
                      if (obs) {
                        cellStyle = viewMode === 'severity'
                          ? getSeverityColor(obs.severity)
                          : getHealthScoreColor(obs.health_score);
                      } else {
                        cellStyle = {
                          bg: 'rgba(255, 255, 255, 0.03)',
                          border: 'rgba(255, 255, 255, 0.08)',
                          text: 'var(--text-dim)',
                          glow: 'none'
                        };
                      }

                      return (
                        <button
                          key={`cell-${x}-${y}`}
                          onClick={() => handleCellClick(x, y)}
                          style={{
                            aspectRatio: '1.2',
                            minHeight: '75px',
                            background: cellStyle.bg,
                            border: isSelected
                              ? '2px solid #34d399'
                              : isRobotHere
                              ? '2px dashed var(--sky-400)'
                              : `1px solid ${cellStyle.border}`,
                            borderRadius: '8px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '6px',
                            cursor: 'pointer',
                            color: '#fff',
                            position: 'relative',
                            transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                            boxShadow: isSelected
                              ? '0 0 16px rgba(16, 185, 129, 0.45)'
                              : isRobotHere
                              ? '0 0 12px rgba(56, 189, 248, 0.35)'
                              : 'none'
                          }}
                        >
                          {/* Cell Top Strip: Plot tag & Robot Marker */}
                          <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            width: '100%',
                            alignItems: 'center'
                          }}>
                            <span className="mono" style={{ fontSize: '0.65rem', fontWeight: 700, opacity: 0.85 }}>
                              {rowLetter}{x}
                            </span>
                            {isRobotHere && (
                              <span style={{
                                fontSize: '0.58rem',
                                fontWeight: 800,
                                background: 'var(--sky-500)',
                                color: '#000',
                                padding: '1px 4px',
                                borderRadius: '3px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '2px'
                              }}>
                                <Crosshair size={9} /> ROBOT
                              </span>
                            )}
                          </div>

                          {/* Cell Center: Observation Pathology or Empty State */}
                          {obs ? (
                            <div style={{ textAlign: 'center', margin: 'auto 0' }}>
                              <div style={{
                                fontSize: '0.72rem',
                                fontWeight: 800,
                                color: cellStyle.text,
                                textTransform: 'capitalize',
                                lineHeight: 1.1
                              }}>
                                {obs.disease.replace(/_/g, ' ')}
                              </div>
                              <div className="mono" style={{ fontSize: '0.65rem', marginTop: '2px', color: '#fff' }}>
                                {viewMode === 'severity' ? (
                                  <span>{Math.round(obs.confidence * 100)}% conf</span>
                                ) : (
                                  <span style={{ fontWeight: 700 }}>Score: {obs.health_score}</span>
                                )}
                              </div>
                            </div>
                          ) : (
                            <div style={{
                              textAlign: 'center',
                              margin: 'auto 0',
                              fontSize: '0.62rem',
                              color: 'var(--text-dim)'
                            }}>
                              Uninspected
                            </div>
                          )}

                          {/* Cell Bottom: Treatment Status Pill if observation exists */}
                          {obs && (
                            <div style={{
                              fontSize: '0.58rem',
                              padding: '1px 5px',
                              borderRadius: '4px',
                              background: obs.treatment_status === 'TREATED'
                                ? 'rgba(16, 185, 129, 0.4)'
                                : obs.treatment_status === 'PENDING_APPROVAL'
                                ? 'rgba(245, 158, 11, 0.4)'
                                : 'rgba(255, 255, 255, 0.1)',
                              color: obs.treatment_status === 'TREATED'
                                ? 'var(--emerald-400)'
                                : obs.treatment_status === 'PENDING_APPROVAL'
                                ? 'var(--amber-400)'
                                : 'var(--text-muted)',
                              fontWeight: 700
                            }}>
                              {obs.treatment_status.replace(/_/g, ' ')}
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                );
              })}
            </div>

            {/* Compass Indicator */}
            <div style={{
              position: 'absolute',
              bottom: 8,
              right: 12,
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              fontSize: '0.65rem',
              color: 'var(--text-dim)',
              opacity: 0.6
            }}>
              <Compass size={14} />
              <span>N ↑ / Row 4</span>
            </div>
          </div>
        </div>

        {/* 4. Selected Cell / Observation Detail Drawer */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          
          <div className="glass-panel" style={{ padding: '1.25rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Eye size={18} color="var(--emerald-400)" />
                <h3 style={{ fontSize: '1rem', fontWeight: 800 }}>
                  Plot Inspector: <span className="mono" style={{ color: 'var(--emerald-400)' }}>Bed {getRowLetter(currentSelectedCoord.y)}{currentSelectedCoord.x}</span>
                </h3>
              </div>
              <span className="mono" style={{ fontSize: '0.72rem', color: 'var(--text-dim)' }}>
                {selectedZoneId}
              </span>
            </div>

            {/* Quick Actions Bar */}
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
              <button
                onClick={() => handleRepositionRobot(currentSelectedCoord.x, currentSelectedCoord.y)}
                className="btn btn-outline"
                style={{ flex: 1, padding: '0.35rem 0.6rem', fontSize: '0.72rem' }}
                title="Update robot location tracker to this plot"
              >
                <Crosshair size={13} />
                <span>Move Target Here</span>
              </button>
            </div>

            {/* Detailed Real Observation Data */}
            {currentObservation ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                
                {/* Pathology Banner */}
                <div style={{
                  padding: '1rem',
                  borderRadius: 'var(--radius-sm)',
                  background: currentObservation.severity === 'severe'
                    ? 'rgba(239, 68, 68, 0.15)'
                    : currentObservation.severity === 'moderate'
                    ? 'rgba(249, 115, 22, 0.15)'
                    : 'rgba(16, 185, 129, 0.15)',
                  border: `1px solid ${getSeverityColor(currentObservation.severity).border}`
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <span style={{ fontSize: '0.68rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                        Crop Pathology Diagnosis
                      </span>
                      <h4 style={{ fontSize: '1.15rem', fontWeight: 800, textTransform: 'capitalize', color: '#fff', margin: '2px 0 0 0' }}>
                        {currentObservation.disease.replace(/_/g, ' ')}
                      </h4>
                    </div>
                    <span className="status-pill" style={{
                      fontSize: '0.7rem',
                      background: getSeverityColor(currentObservation.severity).bg,
                      color: getSeverityColor(currentObservation.severity).text,
                      border: `1px solid ${getSeverityColor(currentObservation.severity).border}`
                    }}>
                      {currentObservation.severity.toUpperCase()}
                    </span>
                  </div>

                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '8px',
                    marginTop: '0.85rem',
                    paddingTop: '0.85rem',
                    borderTop: '1px solid rgba(255,255,255,0.08)',
                    fontSize: '0.78rem'
                  }}>
                    <div>
                      <span style={{ color: 'var(--text-muted)' }}>Confidence:</span>
                      <div className="mono" style={{ fontWeight: 800, color: '#fff', fontSize: '0.9rem' }}>
                        {(currentObservation.confidence * 100).toFixed(1)}%
                      </div>
                    </div>
                    <div>
                      <span style={{ color: 'var(--text-muted)' }}>Health Score:</span>
                      <div className="mono" style={{ fontWeight: 800, color: 'var(--emerald-400)', fontSize: '0.9rem' }}>
                        {currentObservation.health_score} / 100
                      </div>
                    </div>
                  </div>
                </div>

                {/* Treatment & Field Metrics */}
                <div style={{
                  padding: '0.85rem',
                  borderRadius: 'var(--radius-sm)',
                  background: 'rgba(0,0,0,0.25)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                  fontSize: '0.78rem'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Treatment State:</span>
                    <span style={{
                      fontWeight: 700,
                      color: currentObservation.treatment_status === 'TREATED'
                        ? 'var(--emerald-400)'
                        : currentObservation.treatment_status === 'PENDING_APPROVAL'
                        ? 'var(--amber-400)'
                        : '#fff'
                    }}>
                      {currentObservation.treatment_status.replace(/_/g, ' ')}
                    </span>
                  </div>

                  {currentObservation.prescribed_treatment && (
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Prescribed Formula:</span>
                      <span style={{ fontWeight: 700, color: '#fff' }}>
                        {currentObservation.prescribed_treatment}
                      </span>
                    </div>
                  )}

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Crop Target:</span>
                    <span style={{ fontWeight: 700, color: '#fff', textTransform: 'capitalize' }}>
                      {currentObservation.crop}
                    </span>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Grid Coordinates:</span>
                    <span className="mono" style={{ color: '#fff' }}>
                      X: {currentObservation.x}, Y: {currentObservation.y}
                    </span>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Recorded Timestamp:</span>
                    <span className="mono" style={{ color: 'var(--text-dim)', fontSize: '0.72rem' }}>
                      {currentObservation.timestamp}
                    </span>
                  </div>
                </div>

              </div>
            ) : (
              /* No observation yet for this specific cell */
              <div style={{
                padding: '1.5rem',
                textAlign: 'center',
                background: 'rgba(255,255,255,0.02)',
                borderRadius: 'var(--radius-sm)',
                border: '1px dashed var(--border-subtle)',
                color: 'var(--text-muted)',
                fontSize: '0.8rem'
              }}>
                <AlertCircle size={28} color="var(--text-dim)" style={{ margin: '0 auto 0.5rem auto' }} />
                <p style={{ color: '#fff', fontWeight: 700, margin: '0 0 4px 0' }}>
                  Uninspected Field Cell
                </p>
                <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--text-dim)' }}>
                  Drive the robot to Bed {getRowLetter(currentSelectedCoord.y)}{currentSelectedCoord.x} (X: {currentSelectedCoord.x}, Y: {currentSelectedCoord.y}) and trigger an AI scan to record pathology data.
                </p>
              </div>
            )}
          </div>

          {/* Follow-up Reinspection Matrix */}
          <div className="glass-panel" style={{ padding: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <History size={16} color="var(--emerald-400)" />
              <h4 style={{ fontSize: '0.9rem', fontWeight: 700 }}>
                Agronomic Progression Analysis
              </h4>
            </div>

            {reinspectionData ? (
              <div style={{
                padding: '0.85rem',
                borderRadius: '8px',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid var(--border-subtle)',
                fontSize: '0.78rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                  <span className="status-pill" style={{
                    fontSize: '0.7rem',
                    background: reinspectionData.verdict === 'Improved' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(245, 158, 11, 0.2)',
                    color: reinspectionData.verdict === 'Improved' ? 'var(--emerald-400)' : 'var(--amber-400)'
                  }}>
                    VERDICT: {reinspectionData.verdict ?? 'Single baseline'}
                  </span>
                </div>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.75rem' }}>
                  {reinspectionData.reason ?? 'First baseline observation established for this zone.'}
                </p>
              </div>
            ) : (
              <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', margin: 0 }}>
                {currentObservation
                  ? 'Baseline observation active. Run follow-up scan after treatment to evaluate disease remission.'
                  : 'Select an inspected plot to view comparative analysis.'}
              </p>
            )}
          </div>

        </div>

      </div>

      {/* 5. Chronological Observations Audit Trail */}
      {observations.length > 0 && (
        <div className="glass-panel" style={{ padding: '1.25rem 1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Activity size={16} color="var(--emerald-400)" />
              <h4 style={{ fontSize: '0.95rem', fontWeight: 700 }}>
                Chronological Field Observations Log ({observations.length} Recorded)
              </h4>
            </div>
            <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)' }}>
              Real database records from data/agriguard_real.db
            </span>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.75rem', textAlign: 'left' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border-subtle)', color: 'var(--text-muted)' }}>
                  <th style={{ padding: '8px 12px' }}>ID</th>
                  <th style={{ padding: '8px 12px' }}>Plot / Zone</th>
                  <th style={{ padding: '8px 12px' }}>Grid (X, Y)</th>
                  <th style={{ padding: '8px 12px' }}>Disease Detection</th>
                  <th style={{ padding: '8px 12px' }}>Confidence</th>
                  <th style={{ padding: '8px 12px' }}>Severity</th>
                  <th style={{ padding: '8px 12px' }}>Health Score</th>
                  <th style={{ padding: '8px 12px' }}>Treatment Status</th>
                  <th style={{ padding: '8px 12px' }}>Timestamp</th>
                </tr>
              </thead>
              <tbody>
                {observations.slice(0, 10).map((obs) => {
                  const isSelected = currentSelectedCoord.x === obs.x && currentSelectedCoord.y === obs.y;
                  const sev = getSeverityColor(obs.severity);

                  return (
                    <tr
                      key={obs.id}
                      onClick={() => handleCellClick(obs.x, obs.y)}
                      style={{
                        borderBottom: '1px solid rgba(255,255,255,0.04)',
                        cursor: 'pointer',
                        background: isSelected ? 'rgba(16, 185, 129, 0.08)' : 'transparent',
                        transition: 'background 0.2s'
                      }}
                    >
                      <td className="mono" style={{ padding: '8px 12px', color: 'var(--text-dim)' }}>#{obs.id}</td>
                      <td className="mono" style={{ padding: '8px 12px', fontWeight: 700, color: 'var(--emerald-400)' }}>
                        Bed {getRowLetter(obs.y)}{obs.x}
                      </td>
                      <td className="mono" style={{ padding: '8px 12px' }}>({obs.x}, {obs.y})</td>
                      <td style={{ padding: '8px 12px', fontWeight: 700, textTransform: 'capitalize' }}>
                        {obs.disease.replace(/_/g, ' ')}
                      </td>
                      <td className="mono" style={{ padding: '8px 12px' }}>{(obs.confidence * 100).toFixed(1)}%</td>
                      <td style={{ padding: '8px 12px' }}>
                        <span style={{
                          padding: '2px 6px',
                          borderRadius: '4px',
                          background: sev.bg,
                          color: sev.text,
                          fontWeight: 700,
                          fontSize: '0.68rem',
                          textTransform: 'uppercase'
                        }}>
                          {obs.severity}
                        </span>
                      </td>
                      <td className="mono" style={{ padding: '8px 12px', fontWeight: 700, color: '#fff' }}>
                        {obs.health_score}
                      </td>
                      <td style={{ padding: '8px 12px' }}>
                        <span style={{
                          fontSize: '0.68rem',
                          fontWeight: 700,
                          color: obs.treatment_status === 'TREATED' ? 'var(--emerald-400)' : 'var(--amber-400)'
                        }}>
                          {obs.treatment_status.replace(/_/g, ' ')}
                        </span>
                      </td>
                      <td className="mono" style={{ padding: '8px 12px', color: 'var(--text-dim)' }}>
                        {obs.timestamp}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

    </div>
  );
};
