const express = require("express");
const app = express();
const router = express.Router();
const { authenticateUser } = require("../lib/helper_functions");

const loginRouter = (db) => {  // -- GET route for login ---

  // Display the login form, but first check if user is logged in.
  // If they're logged in, redirect to homepage
  router.get("/", (req, res) => {
    if (req.session.user_id) {
      return res.redirect("/");
    }
    // const templateVars = { user: null, message: null };
    // res.render("/", templateVars);
  });

  // Post request that authenticates and redirects to homepage
  router.post("/", (req, res) => {
    const user_id = req.session.user_id || "";
    const { email, password } = req.body;

    // check if email or password exists, if not send alert
    if (!email || !password) {
      res.status(403);
      const vals = {
        message: "Please enter an email and a password",
        messageClass: "alert-danger",
        user: null,
      };

      res.render("login", vals);
    }

    // start authentication process
    authenticateUser(email, password, db)
      .then((user) => {

        // If authenticateUser returns null
        if (!user || req.session.user_id) {
          res.status(401).render("login", {
            message: "Your username or password is incorrect",
            messageClass: "alert-danger",
            user: null,
          });
          return;
        }

        req.session.user_id = user.id;

        //coach login
        if (req.session.user_id && user.coach === true) {
            return res.redirect("/coach");
          }

        if (req.session.user_id) {
          res.redirect("/");
        }

      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  return router;
};

module.exports = loginRouter;