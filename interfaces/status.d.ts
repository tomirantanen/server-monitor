export interface ServerStatus {
  /**
   * The amount of free system memory in bytes.
   */
  freeMemory: number;
  /**
   * Total amount of system memory in bytes.
   */
  totalMemory: number;
  /**
   * System uptime in seconds.
   */
  uptime: number;
  /**
   * Unix timestamp in seconds.
   */
  timestamp: number;
}
