import React, { useState } from 'react';
import { Pill, CheckCircle2, XCircle, AlertOctagon, Droplets, Zap, ShieldCheck } from 'lucide-react';
import { TreatmentDecision, TelemetryData } from '../types';

interface TreatmentCardProps {
  decision: TreatmentDecision | null;
  telemetry: TelemetryData | null;
  onApprove: (decisionId: string, approved: boolean, operatorName: string) => Promise<any>;
}

export const TreatmentCard: React.FC<TreatmentCardProps> = ({
  decision,
  telemetry,
  onApprove
}) => {
  const [operatorName, setOperatorName] = useState('Lead Agronomist');
  const [isApproving, setIsApproving] = useState(false);
  const [approvalMessage, setApprovalMessage] = useState<string | null>(null);
  const [approvalError, setApprovalError] = useState<string | null>(null);

  const esp32Connected = telemetry?.esp32_connected ?? false;
  const isEStopActive = telemetry?.safety?.emergency_stop ?? false;
  const pumpActive = telemetry?.actuators?.pump_active ?? false;
  const valveOpen = telemetry?.actuators?.valve_open ?? false;
  const flowRate = telemetry?.actuators?.flow_rate_ml_s ?? 0.0;

  if (!decision) {
    return (
      <div className="glass-panel" style={{ padding: '1.25rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
          <Pill size={18} color="var(--emerald-400)" />
          <h2 style={{ fontSize: '1.05rem', fontWeight: 700 }}>Prescription & Farmer Approval</h2>
        </div>
        <div style={{ padding: '2rem 1rem', textAlign: 'center', color: 'var(--text-muted)' }}>
          <p style={{ fontSize: '0.9rem' }}>No pending prescription</p>
          <p style={{ fontSize: '0.75rem', marginTop: '0.25rem' }}>
            When an actionable pathogen is verified by AI, treatment protocols will populate here for farmer review.
          </p>
        </div>
      </div>
    );
  }

  const trt = decision.recommended_treatment;
  const isActionable = decision.status === 'ACTIONABLE';
  const invAvailable = decision.inventory_check?.available ?? false;

  const handleApprovalClick = async (approved: boolean) => {
    setIsApproving(true);
    setApprovalMessage(null);
    setApprovalError(null);
    try {
      const res = await onApprove(decision.decision_id, approved, operatorName);
      setApprovalMessage(res.message || 'Operation executed successfully.');
    } catch (err: any) {
      setApprovalError(err.message || 'Approval execution failed.');
    } finally {
      setIsApproving(false);
    }
  };

  return (
    <div className="glass-panel" style={{ padding: '1.25rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Pill size={18} color="var(--emerald-400)" />
          <h2 style={{ fontSize: '1.05rem', fontWeight: 700 }}>Prescription & Farmer Approval Gate</h2>
        </div>
        <span className="mono" style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
          ID: {decision.decision_id}
        </span>
      </div>

      {/* Decision Status Banner */}
      <div style={{
        padding: '0.85rem 1rem',
        borderRadius: 'var(--radius-md)',
        background: isActionable ? 'rgba(16, 185, 129, 0.12)' : 'rgba(245, 158, 11, 0.12)',
        border: `1px solid ${isActionable ? 'rgba(16, 185, 129, 0.3)' : 'rgba(245, 158, 11, 0.3)'}`,
        marginBottom: '1rem'
      }}>
        <div style={{ fontSize: '0.9rem', fontWeight: 700, color: isActionable ? 'var(--emerald-400)' : 'var(--amber-400)', marginBottom: '0.25rem' }}>
          Status: {decision.status.replace(/_/g, ' ')}
        </div>
        <div style={{ fontSize: '0.8rem', color: '#fff' }}>
          {decision.action_guidance}
        </div>
      </div>

      {/* Recommended Treatment Details (from verified DB) */}
      {trt ? (
        <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', marginBottom: '1rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.5rem' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#fff' }}>{trt.trade_name}</h3>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Code: {trt.target_inventory_code}</span>
          </div>

          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
            Active Ingredient: <strong style={{ color: '#fff' }}>{trt.active_ingredient}</strong>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem', marginBottom: '0.75rem' }}>
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.5rem', borderRadius: '6px' }}>
              <div style={{ fontSize: '0.65rem', color: 'var(--text-dim)' }}>Prescribed Dose</div>
              <div className="mono" style={{ fontSize: '0.8rem', fontWeight: 600 }}>{trt.dosage_description}</div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.5rem', borderRadius: '6px' }}>
              <div style={{ fontSize: '0.65rem', color: 'var(--text-dim)' }}>Target Volume</div>
              <div className="mono" style={{ fontSize: '0.8rem', fontWeight: 600 }}>{trt.estimated_volume_ml} mL</div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.5rem', borderRadius: '6px' }}>
              <div style={{ fontSize: '0.65rem', color: 'var(--text-dim)' }}>Pulse Duration</div>
              <div className="mono" style={{ fontSize: '0.8rem', fontWeight: 600 }}>{trt.pulse_duration_ms} ms</div>
            </div>
          </div>

          {/* Tank Inventory Availability */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem' }}>
            {invAvailable ? (
              <>
                <CheckCircle2 size={16} color="var(--emerald-400)" />
                <span style={{ color: 'var(--emerald-400)' }}>Chemical Tank Ready (In Stock)</span>
              </>
            ) : (
              <>
                <XCircle size={16} color="var(--rose-500)" />
                <span style={{ color: 'var(--rose-500)' }}>Tank Stock Insufficient - Cannot Spray</span>
              </>
            )}
          </div>
        </div>
      ) : null}

      {/* Real Actuator Status (Physical Pump & Solenoid) */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0.75rem 1rem',
        borderRadius: 'var(--radius-sm)',
        background: (pumpActive || valveOpen) ? 'rgba(56, 189, 248, 0.15)' : 'rgba(0,0,0,0.25)',
        border: `1px solid ${(pumpActive || valveOpen) ? 'var(--sky-400)' : 'var(--border-subtle)'}`,
        marginBottom: '1rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Droplets size={18} color={(pumpActive || valveOpen) ? 'var(--sky-400)' : 'var(--text-muted)'} />
          <div style={{ fontSize: '0.8rem' }}>
            <div>
              Pump: <strong style={{ color: pumpActive ? 'var(--emerald-400)' : 'var(--text-muted)' }}>{pumpActive ? 'RUNNING' : 'OFF'}</strong>
              {' • '}
              Valve: <strong style={{ color: valveOpen ? 'var(--emerald-400)' : 'var(--text-muted)' }}>{valveOpen ? 'OPEN' : 'CLOSED'}</strong>
            </div>
          </div>
        </div>
        <div className="mono" style={{ fontSize: '0.85rem', fontWeight: 700, color: flowRate > 0.5 ? 'var(--sky-400)' : 'var(--text-dim)' }}>
          {flowRate > 0.5 ? `${flowRate.toFixed(1)} mL/s FLOW` : '0.0 mL/s (NO FLOW)'}
        </div>
      </div>

      {/* Farmer In-The-Loop Approval Gate */}
      {isActionable && (
        <div>
          <div style={{ marginBottom: '0.75rem' }}>
            <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.25rem' }}>
              Authorized Operator Sign-off:
            </label>
            <input
              type="text"
              value={operatorName}
              onChange={(e) => setOperatorName(e.target.value)}
              style={{
                width: '100%',
                padding: '0.5rem 0.75rem',
                borderRadius: '8px',
                background: 'rgba(0,0,0,0.3)',
                border: '1px solid var(--border-subtle)',
                color: '#fff',
                fontSize: '0.85rem'
              }}
            />
          </div>

          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button
              onClick={() => handleApprovalClick(true)}
              disabled={isApproving || !invAvailable || !esp32Connected || isEStopActive}
              className="btn btn-primary"
              style={{ flex: 2, padding: '0.75rem' }}
            >
              <ShieldCheck size={18} />
              <span>
                {isApproving
                  ? 'Dispatching Command...'
                  : !esp32Connected
                  ? 'ESP32 Disconnected'
                  : !invAvailable
                  ? 'Chemical Unavailable'
                  : 'FARMER APPROVE & EXECUTE'}
              </span>
            </button>

            <button
              onClick={() => handleApprovalClick(false)}
              disabled={isApproving}
              className="btn btn-outline"
              style={{ flex: 1, padding: '0.75rem' }}
            >
              <XCircle size={18} />
              <span>Reject</span>
            </button>
          </div>
        </div>
      )}

      {/* Success Notification */}
      {approvalMessage && (
        <div style={{
          marginTop: '0.75rem',
          padding: '0.65rem 0.85rem',
          borderRadius: '8px',
          background: 'rgba(16, 185, 129, 0.15)',
          border: '1px solid var(--emerald-500)',
          color: '#34d399',
          fontSize: '0.8rem'
        }}>
          {approvalMessage}
        </div>
      )}

      {/* Error Notification */}
      {approvalError && (
        <div style={{
          marginTop: '0.75rem',
          padding: '0.65rem 0.85rem',
          borderRadius: '8px',
          background: 'rgba(244, 63, 94, 0.15)',
          border: '1px solid var(--rose-500)',
          color: 'var(--rose-500)',
          fontSize: '0.8rem',
          display: 'flex',
          gap: '0.5rem',
          alignItems: 'center'
        }}>
          <AlertOctagon size={16} />
          <span>{approvalError}</span>
        </div>
      )}
    </div>
  );
};
