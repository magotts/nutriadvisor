const express = require("express");
const app = express();
const router = express.Router();


const loginRouter = (db) => {  // -- GET route for login ---

  // Post request that authenticates and redirects to homepage
  router.post("/", (req, res) => {
    const { email, password } = req.body;

    db.query(`SELECT from users where email = ? and password = ?`, [email, password], (err, result) => {
      if (err) {
        res.send({err: err});
      }

      if (result) {
        res.send(result);
      } else {
        res.send({ message: "Wrong email/password combination."})
      }
    })
  
  });

  return router;
};

module.exports = loginRouter;