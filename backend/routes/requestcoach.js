const express = require("express");
const router = express.Router();

const requestcoachRouter = (db) => {
  // STEP 1
  // show goaltypes in dropdown
  router.get("/", async (req, res) => {
    try {
      const allGoaltypes = await db.query(`SELECT * FROM goaltypes`);
      res.json(allGoaltypes.rows);
    } catch (err) {
      console.log("error", err);
      console.error(err.message);
    }
  });

  // STEP 2
  // show coaches where goaltype_id = 1
  router.get("/coach/:id", async (req, res) => {
    const { id } = req.params;

    try {
      const specificCoach = await db.query(
        `SELECT * from coaches WHERE goaltype_id = $1;`,
        [id]
      );
      res.json(specificCoach.rows);
    } catch (err) {
      console.error(err.message);
    }
  });

  // STEP 3
  // add a coach with a goaltype_id
  router.post("/", async (req, res) => {
    try {
      const { coachId, goalId } = req.body;
      const requestCoach = await db.query(
        `INSERT INTO goals(user_id, coach_id, goaltype_id) VALUES ('1', $1, $2) RETURNING *`,
        [coachId, goalId]
      );

      res.json(requestCoach.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  });

  return router;
};

module.exports = requestcoachRouter;
