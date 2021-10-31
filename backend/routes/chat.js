const express = require("express");
const router = express.Router();

const chatRouter = (http) => {
  const io = require("socket.io")(http, {
    cors: {
      origin: ["http://localhost:3000"],
    },
  });

  io.on("connection", (socket) => {
    socket.on("send-message", (message) => {
      socket.broadcast.emit("receive-message", message);
    });
  });

  return router;
};

module.exports = chatRouter;
