const express = require("express");
const router = express.Router();

const coachRouter = (db) => {

  // show users of coach id = 1
  router.get("/", async (req, res) => {
    //console.log("coach id", req.params);

    try {
    const usersUnderCoach = await db.query(`select distinct goals.id, users.*, coaches.*, goaltypes.* from users
    JOIN goals ON goals.user_id = users.id
    JOIN coaches ON goals.coach_id = coaches.id
    JOIN goaltypes ON goals.goaltype_id = goaltypes.id
    WHERE coaches.id = 1`);
    res.json(usersUnderCoach.rows);
    
    }
    catch(err) {
      console.log("error", err);
      console.error(err.message)
    }
    });



  return router;
};

module.exports = coachRouter;
