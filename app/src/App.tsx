import { useEffect, useState } from "react";
import "./App.css";
//import { ServerStatus } from "interfaces/status";

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

const INITIAL_STATE: ServerStatus = {
  freeMemory: 0,
  totalMemory: 0,
  uptime: 0,
  timestamp: 0,
};

export const App = (): JSX.Element => {
  const [serverStatus, setServerStatus] = useState(INITIAL_STATE);

  useEffect(() => {
    const eventSource = new EventSource("/status");

    eventSource.addEventListener("serverStatus", ((event: MessageEvent) => {
      setServerStatus(JSON.parse(event.data));
    }) as EventListener);

    eventSource.onerror = (event) => {
      console.error(event);
      eventSource.close();
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>{`Free Memory ${serverStatus.freeMemory} bytes`}</p>
        <p>{`Total Memory ${serverStatus.totalMemory} bytes`}</p>
        <p>{`Uptime ${serverStatus.uptime} seconds`}</p>
        <p>{`Server time ${serverStatus.timestamp}`}</p>
      </header>
    </div>
  );
};
