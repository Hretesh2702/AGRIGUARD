/**
 * AgriGuard — Abstract Robot Transport Layer (Frontend)
 *
 * Exposes abstract transport interfaces:
 *   RobotTransport
 *     ├── WiFiTransport (Active primary)
 *     └── BluetoothTransport (BLE Standby)
 */

import { sendRobotCommand, sendRobotStop, sendEmergencyStop } from './api';

export type ConnectionState = 'CONNECTED' | 'DISCONNECTED' | 'RECONNECTING';

export interface TransportCommand {
  type: string;
  command: string;
  speed?: number;
  duration_ms?: number;
  timestamp?: number;
  [key: string]: any;
}

export interface IRobotTransport {
  name: string;
  connect(): Promise<boolean>;
  disconnect(): Promise<void>;
  isConnected(): boolean;
  sendCommand(cmd: TransportCommand): Promise<any>;
}

export class WiFiTransport implements IRobotTransport {
  name = 'Wi-Fi';
  private _connected = false;

  async connect(): Promise<boolean> {
    try {
      const res = await fetch('/api/network/status');
      if (res.ok) {
        const data = await res.json();
        this._connected = Boolean(data.esp32_connected);
        return this._connected;
      }
    } catch {
      this._connected = false;
    }
    return false;
  }

  async disconnect(): Promise<void> {
    this._connected = false;
  }

  isConnected(): boolean {
    return this._connected;
  }

  async sendCommand(cmd: TransportCommand): Promise<any> {
    if (cmd.command === 'STOP') {
      return await sendRobotStop();
    }
    if (cmd.command === 'EMERGENCY_STOP') {
      return await sendEmergencyStop();
    }
    return await sendRobotCommand(cmd.command, cmd.speed || 120, cmd.duration_ms || 0);
  }
}

export class BluetoothTransport implements IRobotTransport {
  name = 'Bluetooth BLE';

  async connect(): Promise<boolean> {
    console.warn('[BluetoothTransport] BLE fallback transport in standby; Wi-Fi is active.');
    return false;
  }

  async disconnect(): Promise<void> {}

  isConnected(): boolean {
    return false;
  }

  async sendCommand(): Promise<any> {
    throw new Error('Bluetooth transport is in standby mode. Please connect via Wi-Fi.');
  }
}

// Global active transport instance (defaults to Wi-Fi)
export const activeRobotTransport: IRobotTransport = new WiFiTransport();
