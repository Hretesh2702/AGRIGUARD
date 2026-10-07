/**
 * AgriGuard — Abstract Robot Transport Layer (Frontend)
 *
 * Bridges the legacy robot transport interface to the unified
 * ConnectionManager supporting both Wi-Fi and Web Bluetooth (BLE).
 */

import { connectionManager, RobotCommandPayload } from './connectionManager';

export type ConnectionState = 'CONNECTED' | 'DISCONNECTED' | 'RECONNECTING';

export interface TransportCommand {
  type?: string;
  command: string;
  speed?: number;
  duration_ms?: number;
  timestamp?: number;
  [key: string]: any;
}

export interface IRobotTransport {
  name: string;
  connect(options?: any): Promise<boolean>;
  disconnect(): Promise<void>;
  isConnected(): boolean;
  sendCommand(cmd: TransportCommand): Promise<any>;
}

export class WiFiTransportWrapper implements IRobotTransport {
  name = 'Wi-Fi';

  async connect(options?: any): Promise<boolean> {
    return await connectionManager.connect('wifi', options);
  }

  async disconnect(): Promise<void> {
    await connectionManager.disconnect();
  }

  isConnected(): boolean {
    const st = connectionManager.getStatus();
    return st.state === 'CONNECTED' && st.transport === 'Wi-Fi';
  }

  async sendCommand(cmd: TransportCommand): Promise<any> {
    return await connectionManager.sendCommand(cmd as RobotCommandPayload);
  }
}

export class BluetoothTransportWrapper implements IRobotTransport {
  name = 'Bluetooth BLE';

  async connect(): Promise<boolean> {
    return await connectionManager.connect('bluetooth');
  }

  async disconnect(): Promise<void> {
    await connectionManager.disconnect();
  }

  isConnected(): boolean {
    const st = connectionManager.getStatus();
    return st.state === 'CONNECTED' && st.transport === 'Bluetooth';
  }

  async sendCommand(cmd: TransportCommand): Promise<any> {
    return await connectionManager.sendCommand(cmd as RobotCommandPayload);
  }
}

export class UnifiedTransportBridge implements IRobotTransport {
  get name(): string {
    return connectionManager.getTransport();
  }

  async connect(options?: any): Promise<boolean> {
    return await connectionManager.connect(
      connectionManager.getTransport() === 'Bluetooth' ? 'bluetooth' : 'wifi',
      options
    );
  }

  async disconnect(): Promise<void> {
    await connectionManager.disconnect();
  }

  isConnected(): boolean {
    return connectionManager.isConnected();
  }

  async sendCommand(cmd: TransportCommand): Promise<any> {
    return await connectionManager.sendCommand(cmd as RobotCommandPayload);
  }
}

export const WiFiTransport = WiFiTransportWrapper;
export const BluetoothTransport = BluetoothTransportWrapper;
export const activeRobotTransport: IRobotTransport = new UnifiedTransportBridge();
