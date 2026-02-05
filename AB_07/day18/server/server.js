import { Server } from "socket.io";

const io = new Server(3001, {
  cors: {
    origin: "http://localhost:5173",
  },
});

io.on("connection", (socket) => {
  console.log("User connected");

  // Send notification every 3 seconds
  setInterval(() => {
    socket.emit("notification", {
      message: "🔔 New notification arrived!",
      time: new Date().toLocaleTimeString(),
    });
  }, 3000);
});
