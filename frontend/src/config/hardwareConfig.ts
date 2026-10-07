/**
 * AgriGuard — Real Hardware & Connectivity Configuration
 * Centralized settings for Wi-Fi, BLE GATT, Watchdog, and Endpoints.
 */

export const HARDWARE_CONFIG = {
  // ── Wi-Fi Configuration ──────────────────────────────────────────────────
  WIFI: {
    DEFAULT_IP: '192.168.4.1',
    DEFAULT_PORT: 80,
    WEBSOCKET_PORT: 81,
    DEFAULT_HOSTNAME: 'agriguard.local',
    AP_SSID: 'AgriGuard-Robot',
    AP_PASSWORD: 'agri12345password',
    CONNECT_TIMEOUT_MS: 3000,
    HEARTBEAT_INTERVAL_MS: 1000,
    WATCHDOG_TIMEOUT_MS: 1500
  },

  // ── Bluetooth Low Energy (BLE) GATT Configuration ────────────────────────
  BLE: {
    DEVICE_NAME: 'AgriGuard-Robot',
    DEVICE_NAME_PREFIX: 'AgriGuard',
    SERVICE_UUID: '12345678-1234-1234-1234-123456789abc',
    COMMAND_CHARACTERISTIC_UUID: '12345678-1234-1234-1234-123456789ab1', // Write
    TELEMETRY_CHARACTERISTIC_UUID: '12345678-1234-1234-1234-123456789ab2', // Notify / Read
    STATUS_CHARACTERISTIC_UUID: '12345678-1234-1234-1234-123456789ab3', // Notify / Read
    RECONNECT_DELAY_MS: 2000
  },

  // ── RS485 Modbus RTU NPK Sensor Default Mapping ─────────────────────────
  NPK_MODBUS: {
    SLAVE_ID: 0x01,
    BAUD_RATE: 9600,
    PARITY: 'None (8N1)',
    STOP_BITS: 1,
    START_REGISTER: 0x001e, // Holding Register 30 (40031)
    REGISTER_COUNT: 3, // Reg 0x001E: Nitrogen, 0x001F: Phosphorus, 0x0020: Potassium
    UNIT: 'mg/kg'
  },

  // ── Safety & Fail-Safe Limits ───────────────────────────────────────────
  SAFETY: {
    WATCHDOG_TIMEOUT_MS: 1500,
    MAX_SPRAY_DURATION_MS: 6000,
    MIN_OBSTACLE_STOP_CM: 25.0,
    WARNING_OBSTACLE_CM: 60.0
  }
} as const;
