const express = require("express");
const router = express.Router();

const chatRouter = (http, db) => {
  const io = require("socket.io")(http, {
    cors: {
      origin: ["http://localhost:8000"],
    },
  })

  io.on("connection", (socket) => {
     console.log(socket.id);
    socket.on("send-message", (message) => {
    // console.log("mesage from client", message)
    socket.broadcast.emit("receive-message", message);
    })
  }) 

return router;
}

module.exports = chatRouter;