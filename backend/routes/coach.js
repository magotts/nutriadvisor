const express = require("express");
const router = express.Router();

const coachRouter = (db) => {

  // show weight
  router.get("/", async (req, res) => {
    console.log("user id", req.params);

    try {
    const allWeights = await db.query(`SELECT * FROM biometrics where user_id = 1`);
    res.json(allWeights.rows);
    
    }
    catch(err) {
      console.log("error", err);
      console.error(err.message)
    }
    });

    // show user info of user_id 1
  router.get("/:id", async (req, res) => {
    try {
    const {id} = req.params;
    const userInfo = await db.query(`
    select *, biometrics.weight
    from users
    join biometrics on users.id = biometrics.user_id
    where biometrics.user_id = $1`, [id]);
    console.log("user info", userInfo)
    res.json(userInfo.rows);
    
    }
    catch(err) {
      console.log("error", err);
      console.error(err.message)
    }
    });
  



  return router;
};

module.exports = coachRouter;
