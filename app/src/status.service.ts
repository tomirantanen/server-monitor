export const getStatus = (): void => {
  const eventSource = new EventSource("/status");
  eventSource.onmessage = (event) => {
    return event.data;
  };
  eventSource.onerror = (event) => {
    console.log("error", event);
  };
};
