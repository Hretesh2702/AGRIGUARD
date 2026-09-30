/**
 * AgriGuard — Master Dashboard Interactive Controller
 * Real-time WebSocket Telemetry, AI Diagnostics, Mobility Controls & Actuation Gate
 */

document.addEventListener('DOMContentLoaded', () => {
    // State Store
    const state = {
        activeZone: 'ZONE-R2C2',
        activeScenario: 'early_blight',
        activeDecision: null,
        robotConnected: false,
        isSprayActive: false,
        speed: 120,
        sprayTimer: null
    };

    // DOM Elements
    const els = {
        scenarioSelect: document.getElementById('scenario-select'),
        modeBadge: document.getElementById('mode-badge'),
        modeText: document.getElementById('mode-text'),
        batteryFill: document.getElementById('battery-fill'),
        batteryPct: document.getElementById('battery-pct'),
        batteryVolts: document.getElementById('battery-volts'),
        btnEstop: document.getElementById('btn-estop'),
        
        // Camera & Scan
        btnScan: document.getElementById('btn-scan'),
        btnSnapshot: document.getElementById('btn-snapshot'),
        badgeActiveZone: document.getElementById('badge-active-zone'),
        hudDiagTitle: document.getElementById('hud-diag-title'),
        hudDiagConf: document.getElementById('hud-diag-conf'),
        sprayBanner: document.getElementById('spray-actuation-banner'),
        sprayCountdown: document.getElementById('spray-countdown'),
        valLatency: document.getElementById('val-latency'),

        // Diagnosis
        diagHealthScore: document.getElementById('diag-health-score'),
        diagCondition: document.getElementById('diag-condition'),
        diagPathogen: document.getElementById('diag-pathogen'),
        diagConfBar: document.getElementById('diag-conf-bar'),
        diagConfVal: document.getElementById('diag-conf-val'),
        diagSeverityPill: document.getElementById('diag-severity-pill'),
        diagSymptomsText: document.getElementById('diag-symptoms-text'),
        contextAlertBox: document.getElementById('context-alert-box'),
        contextAlertText: document.getElementById('context-alert-text'),
        scoreCircle: document.getElementById('score-circle'),

        // Sensors
        valN: document.getElementById('val-n'),
        valP: document.getElementById('val-p'),
        valK: document.getElementById('val-k'),
        valMoisture: document.getElementById('val-moisture'),
        barMoisture: document.getElementById('bar-moisture'),
        valTemp: document.getElementById('val-temp'),
        valHumidity: document.getElementById('val-humidity'),
        valSonar: document.getElementById('val-sonar'),
        valFlow: document.getElementById('val-flow'),

        // Treatment & Tanks
        approvalStatusTag: document.getElementById('approval-status-tag'),
        rxTreatmentName: document.getElementById('rx-treatment-name'),
        rxCategory: document.getElementById('rx-category'),
        rxDose: document.getElementById('rx-dose'),
        rxMethod: document.getElementById('rx-method'),
        rxDuration: document.getElementById('rx-duration'),
        rxSource: document.getElementById('rx-source'),
        btnApproveSpray: document.getElementById('btn-approve-spray'),
        btnRejectTreatment: document.getElementById('btn-reject-treatment'),
        btnRefillAll: document.getElementById('btn-refill-all'),
        tankCopperVol: document.getElementById('tank-copper-vol'),
        tankCopperBar: document.getElementById('tank-copper-bar'),
        tankNeemVol: document.getElementById('tank-neem-vol'),
        tankNeemBar: document.getElementById('tank-neem-bar'),
        tankWaterVol: document.getElementById('tank-water-vol'),
        tankWaterBar: document.getElementById('tank-water-bar'),

        // Robot Controls
        robotStateBadge: document.getElementById('robot-state-badge'),
        btnFwd: document.getElementById('btn-fwd'),
        btnBack: document.getElementById('btn-back'),
        btnLeft: document.getElementById('btn-left'),
        btnRight: document.getElementById('btn-right'),
        btnStop: document.getElementById('btn-stop'),
        sliderSpeed: document.getElementById('slider-speed'),
        speedDisplay: document.getElementById('speed-display'),

        // Field Grid & Feed
        fieldGrid: document.getElementById('field-grid'),
        feedList: document.getElementById('feed-list'),

        // Modal
        sprayModal: document.getElementById('spray-modal'),
        btnModalClose: document.getElementById('btn-modal-close'),
        btnModalCancel: document.getElementById('btn-modal-cancel'),
        btnModalConfirm: document.getElementById('btn-modal-confirm'),
        modalZoneId: document.getElementById('modal-zone-id'),
        modalCondition: document.getElementById('modal-condition'),
        modalChemical: document.getElementById('modal-chemical'),
        modalVolume: document.getElementById('modal-volume'),
        modalDuration: document.getElementById('modal-duration'),

        toastContainer: document.getElementById('toast-container')
    };

    // ==========================================
    // 1. WEBSOCKET REAL-TIME TELEMETRY
    // ==========================================
    function initWebSocket() {
        const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
        const wsUrl = `${protocol}//${window.location.host}/ws/telemetry`;
        const ws = new WebSocket(wsUrl);

        ws.onopen = () => {
            console.log('[Telemetry] WebSocket connected.');
            showToast('Connected to AgriGuard real-time telemetry.', 'success');
        };

        ws.onmessage = (event) => {
            try {
                const data = JSON.parse(event.data);
                updateTelemetryUI(data);
            } catch (err) {
                console.error('[Telemetry] Parse error:', err);
            }
        };

        ws.onclose = () => {
            console.warn('[Telemetry] WebSocket closed. Reconnecting in 2s...');
            setTimeout(initWebSocket, 2000);
        };
    }

    function updateTelemetryUI(t) {
        if (!t) return;

        // Battery
        if (t.battery_pct !== undefined) {
            els.batteryPct.textContent = `${Math.round(t.battery_pct)}%`;
            els.batteryFill.style.width = `${t.battery_pct}%`;
            els.batteryVolts.textContent = `(${t.battery_v}V)`;
            if (t.battery_pct < 25) {
                els.batteryFill.style.backgroundColor = 'var(--accent-rose)';
            }
        }

        // Soil Sensors
        if (t.soil_moisture !== undefined) {
            els.valMoisture.innerHTML = `${t.soil_moisture}<span class="unit">%</span>`;
            els.barMoisture.style.width = `${Math.min(100, t.soil_moisture)}%`;
        }
        if (t.temperature_c !== undefined) els.valTemp.textContent = `${t.temperature_c}°C`;
        if (t.humidity_pct !== undefined) els.valHumidity.textContent = `${t.humidity_pct}%`;
        if (t.distance_cm !== undefined) els.valSonar.textContent = `${t.distance_cm} cm`;
        if (t.flow_rate_ml_s !== undefined) els.valFlow.textContent = `${t.flow_rate_ml_s} mL/s`;

        // NPK
        if (t.nitrogen) els.valN.textContent = t.nitrogen.toUpperCase();
        if (t.phosphorus) els.valP.textContent = t.phosphorus.toUpperCase();
        if (t.potassium) els.valK.textContent = t.potassium.toUpperCase();

        // Robot Status
        if (t.motor_state) els.robotStateBadge.textContent = t.motor_state;

        // Spray Pulse Indicator
        if (t.spray_state === 'ACTIVE' && !state.isSprayActive) {
            triggerSprayUIActive(2500);
        }
    }

    // ==========================================
    // 2. AI DIAGNOSIS & INSPECTION
    // ==========================================
    async function executeCropScan() {
        els.btnScan.disabled = true;
        els.btnScan.innerHTML = `<span class="pulse-dot"></span><span>Analyzing Foliage...</span>`;

        try {
            const resp = await fetch('/api/ai/scan', { method: 'POST' });
            const data = await resp.json();
            if (data.ok) {
                state.activeDecision = data.decision;
                renderDiagnosis(data.detection, data.decision);
                updateTanksUI(data.tanks);
                loadFieldZones(); // Refresh zone health status
                addActivityItem(`Scanned ${state.activeZone}: ${data.decision.condition_display}`, 'scan');
                showToast(`Scan complete: ${data.decision.condition_display}`, 'success');
            } else {
                showToast(`Scan error: ${data.detail || 'Inference failed'}`, 'error');
            }
        } catch (err) {
            console.error('Scan failed:', err);
            showToast('Failed to contact AI inspection service', 'error');
        } finally {
            els.btnScan.disabled = false;
            els.btnScan.innerHTML = `<span class="btn-icon">🔬</span><span>Scan & Diagnose Crop</span>`;
        }
    }

    function renderDiagnosis(det, dec) {
        if (!det || !dec) return;

        // Latency
        if (det.latency_ms) els.valLatency.textContent = `${det.latency_ms} ms`;

        // HUD Banner
        els.hudDiagTitle.textContent = dec.condition_display.toUpperCase();
        els.hudDiagConf.textContent = `${Math.round(dec.confidence * 100)}% CONF`;

        // Health Score
        els.diagHealthScore.textContent = dec.health_score;
        if (dec.health_score >= 80) {
            els.scoreCircle.style.borderColor = 'var(--accent-emerald)';
        } else if (dec.health_score >= 55) {
            els.scoreCircle.style.borderColor = 'var(--accent-amber)';
        } else {
            els.scoreCircle.style.borderColor = 'var(--accent-rose)';
        }

        // Details
        els.diagCondition.textContent = dec.condition_display;
        els.diagConfBar.style.width = `${dec.confidence * 100}%`;
        els.diagConfVal.textContent = `${(dec.confidence * 100).toFixed(1)}%`;

        // Severity Pill
        els.diagSeverityPill.textContent = (dec.severity || 'Moderate').toUpperCase();
        els.diagSeverityPill.className = `severity-pill pill-${dec.severity || 'moderate'}`;

        // Symptoms text
        if (dec.condition === 'early_blight') {
            els.diagSymptomsText.textContent = "Concentric 'bullseye' rings with chlorotic yellow halo on lower older foliage.";
            els.diagPathogen.textContent = "Alternaria solani (Fungal Pathogen)";
        } else if (dec.condition === 'late_blight') {
            els.diagSymptomsText.textContent = "Fast-expanding water-soaked necrotic patches with grey fungal fuzz on undersides.";
            els.diagPathogen.textContent = "Phytophthora infestans (Oomycete)";
        } else if (dec.condition === 'bacterial_spot') {
            els.diagSymptomsText.textContent = "Dense small necrotic speckling with yellow chlorotic margins and ragged perforations.";
            els.diagPathogen.textContent = "Xanthomonas perforans (Bacterium)";
        } else {
            els.diagSymptomsText.textContent = "Lush green foliage, normal vigor, no visible fungal or bacterial lesions.";
            els.diagPathogen.textContent = "None (Healthy Normal)";
        }

        // Contextual Warnings
        if (dec.context_warnings && dec.context_warnings.length > 0) {
            els.contextAlertBox.style.display = 'flex';
            els.contextAlertText.textContent = dec.context_warnings[0];
        } else {
            els.contextAlertBox.style.display = 'none';
        }

        // Treatment Prescription
        renderTreatment(dec);
    }

    function renderTreatment(dec) {
        if (!dec.primary_treatment) {
            els.rxTreatmentName.textContent = dec.condition === 'healthy' ? "No Intervention Required" : "No Approved Treatment";
            els.rxCategory.textContent = "N/A";
            els.rxDose.textContent = "N/A";
            els.rxMethod.textContent = dec.action_guidance;
            els.rxDuration.textContent = "0 ms";
            els.approvalStatusTag.textContent = "INTERVENTION INACTIVE";
            els.approvalStatusTag.className = "approval-tag";
            els.btnApproveSpray.disabled = true;
            els.btnApproveSpray.style.opacity = '0.5';
            return;
        }

        const trt = dec.primary_treatment;
        els.rxTreatmentName.textContent = trt.treatment_name;
        els.rxCategory.textContent = trt.category;
        els.rxDose.textContent = trt.configured_dose_reference;
        els.rxMethod.textContent = trt.application_method;
        els.rxDuration.textContent = `${trt.spray_duration_ms} ms (~${trt.spray_volume_est_ml} mL)`;
        els.rxSource.textContent = trt.source;

        els.approvalStatusTag.textContent = "PENDING FARMER APPROVAL";
        els.approvalStatusTag.className = "approval-tag pending";

        els.btnApproveSpray.disabled = !dec.inventory_check.available;
        els.btnApproveSpray.style.opacity = dec.inventory_check.available ? '1' : '0.5';
    }

    // ==========================================
    // 3. FARMER-IN-THE-LOOP APPROVAL & SPRAY
    // ==========================================
    function openApprovalModal() {
        if (!state.activeDecision || !state.activeDecision.primary_treatment) {
            showToast('No actionable treatment available to approve.', 'error');
            return;
        }

        const trt = state.activeDecision.primary_treatment;
        els.modalZoneId.textContent = state.activeZone;
        els.modalCondition.textContent = state.activeDecision.condition_display;
        els.modalChemical.textContent = trt.treatment_name;
        els.modalVolume.textContent = `~${trt.spray_volume_est_ml} mL`;
        els.modalDuration.textContent = `${trt.spray_duration_ms} ms`;

        els.sprayModal.style.display = 'flex';
    }

    function closeApprovalModal() {
        els.sprayModal.style.display = 'none';
    }

    async function confirmAndSpray() {
        closeApprovalModal();
        if (!state.activeDecision) return;

        els.btnApproveSpray.disabled = true;
        try {
            const resp = await fetch('/api/treatment/approve', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    decision_id: state.activeDecision.decision_id,
                    approved: true,
                    operator_name: 'Farmer (Dashboard)'
                })
            });
            const data = await resp.json();
            if (data.ok) {
                showToast(data.message, 'success');
                addActivityItem(`Approved & Sprayed ${state.activeZone}`, 'spray');
                triggerSprayUIActive(state.activeDecision.primary_treatment.spray_duration_ms);
                updateTanksUI(data.tanks);
                loadFieldZones();

                els.approvalStatusTag.textContent = "APPROVED & EXECUTED";
                els.approvalStatusTag.className = "approval-tag approved";
            } else {
                showToast(`Actuation failed: ${data.detail}`, 'error');
            }
        } catch (err) {
            console.error('Approval failed:', err);
            showToast('Network error dispatching spray command.', 'error');
        } finally {
            els.btnApproveSpray.disabled = false;
        }
    }

    function triggerSprayUIActive(durationMs) {
        state.isSprayActive = true;
        els.sprayBanner.style.display = 'flex';
        let remainingSec = (durationMs / 1000.0);
        els.sprayCountdown.textContent = `${remainingSec.toFixed(1)}s`;

        if (state.sprayTimer) clearInterval(state.sprayTimer);
        const interval = 100;
        state.sprayTimer = setInterval(() => {
            remainingSec -= (interval / 1000.0);
            if (remainingSec <= 0) {
                clearInterval(state.sprayTimer);
                state.isSprayActive = false;
                els.sprayBanner.style.display = 'none';
            } else {
                els.sprayCountdown.textContent = `${remainingSec.toFixed(1)}s`;
            }
        }, interval);
    }

    // ==========================================
    // 4. ROBOT MOBILITY CONTROLS
    // ==========================================
    async function sendRobotCommand(action, speed = state.speed) {
        try {
            const resp = await fetch('/api/robot/command', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ action: action, speed: speed })
            });
            const data = await resp.json();
            if (data.motor_state) {
                els.robotStateBadge.textContent = data.motor_state;
            }
            if (!data.ok) {
                showToast(data.message || 'Command rejected', 'error');
            }
        } catch (err) {
            console.error('Robot command error:', err);
        }
    }

    // Keyboard bindings
    window.addEventListener('keydown', (e) => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;
        const key = e.code;
        if (key === 'KeyW') sendRobotCommand('forward');
        else if (key === 'KeyS') sendRobotCommand('backward');
        else if (key === 'KeyA') sendRobotCommand('left');
        else if (key === 'KeyD') sendRobotCommand('right');
        else if (key === 'Space') {
            e.preventDefault();
            sendRobotCommand('stop');
        }
    });

    // Button bindings
    els.btnFwd.addEventListener('click', () => sendRobotCommand('forward'));
    els.btnBack.addEventListener('click', () => sendRobotCommand('backward'));
    els.btnLeft.addEventListener('click', () => sendRobotCommand('left'));
    els.btnRight.addEventListener('click', () => sendRobotCommand('right'));
    els.btnStop.addEventListener('click', () => sendRobotCommand('stop'));
    els.btnEstop.addEventListener('click', () => {
        sendRobotCommand('estop');
        showToast('EMERGENCY STOP TRIGGERED!', 'error');
    });

    els.sliderSpeed.addEventListener('input', (e) => {
        state.speed = parseInt(e.target.value);
        els.speedDisplay.textContent = `${state.speed} / 255`;
    });

    // ==========================================
    // 5. FIELD MATRIX & ACTIVITY FEED
    // ==========================================
    async function loadFieldZones() {
        try {
            const resp = await fetch('/api/zones');
            const data = await resp.json();
            renderFieldGrid(data.zones || []);
        } catch (err) {
            console.error('Failed to load zones:', err);
        }
    }

    function renderFieldGrid(zones) {
        els.fieldGrid.innerHTML = '';
        zones.forEach(z => {
            const cell = document.createElement('div');
            cell.className = `grid-cell status-${z.health_status.toLowerCase()}`;
            if (z.zone_id === state.activeZone) {
                cell.classList.add('active-zone');
            }
            cell.innerHTML = `
                <span>R${z.row}C${z.col}</span>
                <span style="font-size:0.6rem;opacity:0.8;">${z.health_score}</span>
            `;
            cell.addEventListener('click', () => selectZone(z.zone_id));
            els.fieldGrid.appendChild(cell);
        });
    }

    async function selectZone(zoneId) {
        state.activeZone = zoneId;
        els.badgeActiveZone.textContent = zoneId;
        await fetch('/api/zone/select', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ zone_id: zoneId })
        });
        loadFieldZones();
        showToast(`Target zone set to ${zoneId}`, 'success');
        // Automatically run scan on newly selected zone
        executeCropScan();
    }

    function addActivityItem(message, type = 'scan') {
        const item = document.createElement('div');
        item.className = `feed-item type-${type}`;
        const timeStr = new Date().toLocaleTimeString();
        item.innerHTML = `<span>${message}</span><span style="color:var(--text-muted);font-family:var(--font-mono);font-size:0.65rem;">${timeStr}</span>`;
        els.feedList.prepend(item);
    }

    // ==========================================
    // 6. TANK INVENTORY & REFILL
    // ==========================================
    function updateTanksUI(tanks) {
        if (!tanks) return;
        if (tanks.TANK_COPPER_FUNGICIDE) {
            const t = tanks.TANK_COPPER_FUNGICIDE;
            els.tankCopperVol.textContent = `${Math.round(t.current_ml)} / ${t.capacity_ml} mL`;
            els.tankCopperBar.style.width = `${t.level_pct}%`;
        }
        if (tanks.TANK_NEEM_ORGANIC) {
            const t = tanks.TANK_NEEM_ORGANIC;
            els.tankNeemVol.textContent = `${Math.round(t.current_ml)} / ${t.capacity_ml} mL`;
            els.tankNeemBar.style.width = `${t.level_pct}%`;
        }
        if (tanks.TANK_CLEAN_WATER) {
            const t = tanks.TANK_CLEAN_WATER;
            els.tankWaterVol.textContent = `${Math.round(t.current_ml)} / ${t.capacity_ml} mL`;
            els.tankWaterBar.style.width = `${t.level_pct}%`;
        }
    }

    els.btnRefillAll.addEventListener('click', async () => {
        try {
            await fetch('/api/inventory/refill', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ item_id: 'TANK_COPPER_FUNGICIDE' })
            });
            await fetch('/api/inventory/refill', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ item_id: 'TANK_NEEM_ORGANIC' })
            });
            const resp = await fetch('/api/inventory/refill', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ item_id: 'TANK_CLEAN_WATER' })
            });
            const data = await resp.json();
            updateTanksUI(data.tanks);
            showToast('All chemical tanks refilled to 100% capacity.', 'success');
        } catch (err) {
            console.error('Refill error:', err);
        }
    });

    // ==========================================
    // 7. SCENARIO SELECTOR
    // ==========================================
    els.scenarioSelect.addEventListener('change', async (e) => {
        const scenario = e.target.value;
        state.activeScenario = scenario;
        await fetch('/api/scenario/set', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ scenario: scenario })
        });
        showToast(`Demo scenario set to ${scenario}`, 'success');
        executeCropScan();
    });

    // Action button listeners
    els.btnScan.addEventListener('click', executeCropScan);
    els.btnSnapshot.addEventListener('click', () => {
        showToast('Snapshot saved to observations audit log.', 'success');
    });
    els.btnApproveSpray.addEventListener('click', openApprovalModal);
    els.btnModalClose.addEventListener('click', closeApprovalModal);
    els.btnModalCancel.addEventListener('click', closeApprovalModal);
    els.btnModalConfirm.addEventListener('click', confirmAndSpray);
    els.btnRejectTreatment.addEventListener('click', () => {
        showToast('Treatment dismissed. No chemical applied.', 'success');
        els.approvalStatusTag.textContent = "DISMISSED BY OPERATOR";
        els.approvalStatusTag.className = "approval-tag";
    });

    // Toast helper
    function showToast(message, type = 'success') {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.textContent = message;
        els.toastContainer.appendChild(toast);
        setTimeout(() => {
            toast.style.opacity = '0';
            setTimeout(() => toast.remove(), 300);
        }, 3500);
    }

    // Startup Initialization
    initWebSocket();
    loadFieldZones();
    setTimeout(executeCropScan, 600); // Initial automatic scan
});
