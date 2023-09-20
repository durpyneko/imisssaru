import { Server } from "ws";

export default async function handler(req, res) {
  // Create a WebSocket server
  const wss = new Server({ noServer: true });

  // Handle WebSocket connections
  wss.on("connection", (ws) => {
    var stream = startMoniteringStream("saruei");

    stream.on("connect", (data) => {
      ws.send(JSON.stringify({ event: "connect", data }));
    });
    stream.on("stream-up", (data) => {
      ws.send(JSON.stringify({ event: "stream-up", data }));
    });
    stream.on("stream-down", (data) => {
      ws.send(JSON.stringify({ event: "stream-down", data }));
    });
    stream.on("viewcount", (data) => {
      ws.send(JSON.stringify({ event: "viewcount", data }));
    });
  });

  // Upgrade the HTTP request to a WebSocket connection
  if (req.headers.upgrade === "websocket") {
    wss.handleUpgrade(req, req.socket, Buffer.alloc(0), (ws) => {
      wss.emit("connection", ws, req);
    });
  } else {
    res.status(400).send("WebSocket upgrade required");
  }
}
