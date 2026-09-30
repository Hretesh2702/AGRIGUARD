import React from 'react';
import { Activity, AlertTriangle, CheckCircle, HelpCircle, Gauge } from 'lucide-react';
import { AIDetection, TelemetryData } from '../types';

interface DiagnosisCardProps {
  detection: AIDetection | null;
  telemetry: TelemetryData | null;
}

export const DiagnosisCard: React.FC<DiagnosisCardProps> = ({ detection, telemetry }) => {
  if (!detection) {
    return (
      <div className="glass-panel" style={{ padding: '1.25rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
          <Activity size={18} color="var(--emerald-400)" />
          <h2 style={{ fontSize: '1.05rem', fontWeight: 700 }}>AI Pathology & Health Score</h2>
        </div>
        <div style={{ padding: '2rem 1rem', textAlign: 'center', color: 'var(--text-muted)' }}>
          <p style={{ fontSize: '0.9rem' }}>Awaiting camera capture...</p>
          <p style={{ fontSize: '0.75rem', marginTop: '0.25rem' }}>
            Click "Capture & AI Scan" on the live camera viewport to evaluate crop pathology.
          </p>
        </div>
      </div>
    );
  }

  const isLowConfidence = detection.status === 'LOW_CONFIDENCE_REVIEW' || detection.confidence < 0.60;
  const isHealthy = detection.disease === 'healthy';
  const healthScore = detection.plant_health_score ?? 100;

  // Real agronomic stress flags from telemetry
  const soilMoisture = telemetry?.soil_moisture?.moisture_pct;
  const nitrogen = telemetry?.npk?.nitrogen_mg_kg;

  let waterStressLabel = 'NORMAL';
  if (soilMoisture !== undefined) {
    if (soilMoisture < 20) waterStressLabel = 'HIGH (DROUGHT)';
    else if (soilMoisture < 28) waterStressLabel = 'MODERATE';
    else if (soilMoisture > 75) waterStressLabel = 'WATERLOGGED';
  }

  let nStressLabel = 'NORMAL';
  if (nitrogen !== undefined && nitrogen > 0) {
    if (nitrogen < 30) nStressLabel = 'HIGH DEFICIENCY';
    else if (nitrogen < 50) nStressLabel = 'MODERATE DEFICIENCY';
  }

  // Health score color
  let scoreColor = 'var(--emerald-400)';
  if (healthScore < 50) scoreColor = 'var(--rose-500)';
  else if (healthScore < 75) scoreColor = 'var(--amber-400)';

  return (
    <div className="glass-panel" style={{ padding: '1.25rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Activity size={18} color="var(--emerald-400)" />
          <h2 style={{ fontSize: '1.05rem', fontWeight: 700 }}>AI Pathology & Health Score</h2>
        </div>
        <span className="mono" style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
          Latency: {detection.inference_time_ms ?? 0}ms
        </span>
      </div>

      {/* Main Condition Header */}
      <div style={{
        padding: '1rem',
        borderRadius: 'var(--radius-md)',
        background: isLowConfidence ? 'rgba(245, 158, 11, 0.1)' : isHealthy ? 'rgba(16, 185, 129, 0.1)' : 'rgba(244, 63, 94, 0.1)',
        border: `1px solid ${isLowConfidence ? 'rgba(245, 158, 11, 0.3)' : isHealthy ? 'rgba(16, 185, 129, 0.3)' : 'rgba(244, 63, 94, 0.3)'}`,
        marginBottom: '1rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          {isHealthy ? (
            <CheckCircle size={22} color="var(--emerald-400)" />
          ) : isLowConfidence ? (
            <HelpCircle size={22} color="var(--amber-400)" />
          ) : (
            <AlertTriangle size={22} color="var(--rose-500)" />
          )}
          <div>
            <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff' }}>
              {detection.display_name}
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'capitalize' }}>
              Crop: {detection.crop} • Severity: <strong style={{ color: '#fff' }}>{detection.severity}</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem', marginBottom: '1rem' }}>
        
        {/* Plant Health Score */}
        <div style={{ background: 'rgba(0,0,0,0.25)', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>
            Overall Health Index
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem' }}>
            <span className="mono" style={{ fontSize: '1.5rem', fontWeight: 800, color: scoreColor }}>
              {healthScore}
            </span>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>/100</span>
          </div>
        </div>

        {/* AI Confidence */}
        <div style={{ background: 'rgba(0,0,0,0.25)', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>
            Model Confidence
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem' }}>
            <span className="mono" style={{ fontSize: '1.5rem', fontWeight: 800, color: isLowConfidence ? 'var(--amber-400)' : '#fff' }}>
              {(detection.confidence * 100).toFixed(1)}%
            </span>
          </div>
        </div>

        {/* Affected Foliage Ratio */}
        <div style={{ background: 'rgba(0,0,0,0.25)', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>
            Lesion Coverage
          </div>
          <div className="mono" style={{ fontSize: '1.1rem', fontWeight: 700 }}>
            {(detection.affected_area * 100).toFixed(1)}%
          </div>
        </div>

        {/* Water Stress */}
        <div style={{ background: 'rgba(0,0,0,0.25)', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>
            Water Stress Context
          </div>
          <div className="mono" style={{ fontSize: '0.9rem', fontWeight: 700, color: waterStressLabel.includes('HIGH') ? 'var(--rose-500)' : '#fff' }}>
            {waterStressLabel}
          </div>
        </div>
      </div>

      {/* Supporting Diagnostic Context / Contraindications */}
      {(soilMoisture !== undefined && soilMoisture < 20) && (
        <div style={{
          padding: '0.65rem 0.85rem',
          borderRadius: '8px',
          background: 'rgba(245, 158, 11, 0.15)',
          border: '1px solid rgba(245, 158, 11, 0.3)',
          fontSize: '0.75rem',
          color: 'var(--amber-400)',
          display: 'flex',
          gap: '0.5rem',
          alignItems: 'center'
        }}>
          <AlertTriangle size={16} />
          <span>
            <strong>Drought Stress Active:</strong> Soil moisture is below 20%. Foliage chlorosis may be drought-induced.
          </span>
        </div>
      )}
    </div>
  );
};
