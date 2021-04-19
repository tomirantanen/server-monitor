import { getServerStatus } from "./server-status";

export const SSE_HEADER = {
  "Content-Type": "text/event-stream",
  "Cache-Control": "no-transform",
  Connection: "keep-alive",
};

const FIELD_END = "\n";
const MESSAGE_END = "\n\n";

const createSseEvent = (id: number, event: string, data: unknown): string => {
  return [
    `id: ${id}`,
    `event: ${event}`,
    `data: ${JSON.stringify(data)}${MESSAGE_END}`,
  ].join(FIELD_END);
};

export const createStatusEvent = (): string => {
  const status = getServerStatus();
  return createSseEvent(status.timestamp, "serverStatus", status);
};
