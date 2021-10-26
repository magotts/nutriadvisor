const express = require("express");
const router = express.Router();

const chatRouter = (http) => {
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

  // router.get("/", async (req, res) => {
  //   console.log("user id", req.params);

  //   try {
  //   const userInfo = await db.query(`SELECT * FROM users where id = 1`);
  //   console.log("user:", userInfo)
  //   res.json(userInfo.rows);
    
  //   }
  //   catch(err) {
  //     console.log("error", err);
  //     console.error(err.message)
  //   }
  //   });

return router;
}

module.exports = chatRouter;