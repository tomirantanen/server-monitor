import express, { Response, Request } from "express";
import { config } from "./config";
import { createStatusEvent, SSE_HEADER } from "./sse";

const app = express();

app.get("/status", (request: Request, response: Response) => {
  response.writeHead(200, SSE_HEADER);

  const intervalId = setInterval(
    () => response.write(createStatusEvent()),
    config.eventUpdateInterval
  );

  request.on("close", () => {
    console.log("Connection closed");
    clearInterval(intervalId);
  });

  setTimeout(() => response.end(), config.sseTimeout);
});

app.listen(config.port, () => {
  console.log("Server started");
});
