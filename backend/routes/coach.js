const express = require("express");
const router = express.Router();

const coachRouter = (db) => {

  // show users of coach id = 1
  router.get("/:id", async (req, res) => {

    try {
    const {id} = req.params;
    console.log("coach id", req.params);

    const usersUnderCoach = await db.query(`select goals.id, users.*, coaches.*, goaltypes.* from users
    JOIN goals ON goals.user_id = users.id
    JOIN coaches ON goals.coach_id = coaches.id
    JOIN goaltypes ON goals.goaltype_id = goaltypes.id
    WHERE coaches.id = $1`, [id]);
    console.log("user backend coach", usersUnderCoach)
    res.json(usersUnderCoach.rows);
    
    }
    catch(err) {
      console.log("error", err);
      console.error(err.message)
    }
    });

     // show user food diary of user = 1 of coach id = 1
  router.get("/userfooddiary/:id", async (req, res) => {

    try {
    const {id} = req.params;
    console.log("coach id", req.params);

    const userFoodDiary = await db.query(`select * from food_diary where user_id = $1`, [id]);
    console.log("user fooddiary in coach profile", userFoodDiary)
    res.json(userFoodDiary.rows);
    
    }
    catch(err) {
      console.log("error", err);
      console.error(err.message)
    }
    });


  return router;
};

module.exports = coachRouter;

