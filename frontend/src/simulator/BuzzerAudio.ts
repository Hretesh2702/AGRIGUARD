/**
 * AgriGuard Simulator — Web Audio API Ultrasonic Buzzer Synthesizer
 *
 * Implements browser-native non-intrusive audio beeps for obstacle proximity:
 * - WARNING: Intermittent gentle pulse (~750 Hz, 100ms on, 700ms off)
 * - OBSTACLE: Rapid repeating urgent alert (~1150 Hz, 80ms on, 170ms off)
 * - OFF: Silent
 *
 * Handles browser Autoplay Policy with lazy user-gesture unlocking.
 */

export class BuzzerAudioService {
  private audioCtx: AudioContext | null = null;
  private isUnlocked = false;
  private currentMode: 'OFF' | 'WARNING' | 'OBSTACLE' = 'OFF';
  private pulseTimer: number | null = null;
  private isMuted = false;

  constructor() {
    // AudioContext will be lazily created/unlocked upon user gesture
  }

  /**
   * Must be called during or after a user interaction (click, keypress)
   */
  public unlockAudio() {
    if (this.isUnlocked && this.audioCtx) return;
    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContextClass) return;

      if (!this.audioCtx) {
        this.audioCtx = new AudioContextClass();
      }

      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }
      this.isUnlocked = true;
    } catch {
      // Audio not supported or blocked
    }
  }

  public setMuted(muted: boolean) {
    this.isMuted = muted;
    if (muted) {
      this.stop();
    }
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    if (this.isMuted) {
      this.stop();
    }
    return this.isMuted;
  }

  public getIsMuted(): boolean {
    return this.isMuted;
  }

  public setBuzzerState(state: 'OFF' | 'WARNING' | 'OBSTACLE') {
    if (this.currentMode === state) return;
    this.currentMode = state;

    if (this.pulseTimer !== null) {
      window.clearInterval(this.pulseTimer);
      this.pulseTimer = null;
    }

    if (state === 'OFF' || this.isMuted) {
      return;
    }

    // Trigger initial chirp
    this.playChirp(state === 'OBSTACLE' ? 1150 : 750, state === 'OBSTACLE' ? 0.08 : 0.1);

    // Schedule repetitive pulsing
    const intervalMs = state === 'OBSTACLE' ? 250 : 800;
    this.pulseTimer = window.setInterval(() => {
      if (this.currentMode !== 'OFF' && !this.isMuted) {
        this.playChirp(this.currentMode === 'OBSTACLE' ? 1150 : 750, this.currentMode === 'OBSTACLE' ? 0.08 : 0.1);
      }
    }, intervalMs);
  }

  private playChirp(frequency: number, durationSec: number) {
    if (!this.audioCtx || this.audioCtx.state !== 'running' || this.isMuted) {
      return;
    }

    try {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(frequency, this.audioCtx.currentTime);

      // Soft envelope to avoid speaker clicks
      const now = this.audioCtx.currentTime;
      const peakGain = 0.04; // Very gentle comfortable volume

      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(peakGain, now + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + durationSec);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(now);
      osc.stop(now + durationSec + 0.02);
    } catch {
      // Ignore audio synthesis errors
    }
  }

  public stop() {
    this.currentMode = 'OFF';
    if (this.pulseTimer !== null) {
      window.clearInterval(this.pulseTimer);
      this.pulseTimer = null;
    }
  }

  public dispose() {
    this.stop();
    if (this.audioCtx) {
      try {
        this.audioCtx.close();
      } catch {}
      this.audioCtx = null;
    }
    this.isUnlocked = false;
  }
}

export const buzzerAudio = new BuzzerAudioService();
