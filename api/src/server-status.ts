import os from "os";
import { ServerStatus } from "interfaces/status";

export const getServerStatus = (): ServerStatus => {
  const timestamp = Date.now();
  const freeMemory = os.freemem();
  const totalMemory = os.totalmem();
  const uptime = os.uptime();

  return {
    freeMemory,
    totalMemory,
    uptime,
    timestamp,
  };
};
