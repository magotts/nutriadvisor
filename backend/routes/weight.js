const express = require("express");
const router = express.Router();

const weightRouter = (db) => {

  // const findUserById = function (userId) {
  //   const queryString = `
  //   SELECT * FROM users WHERE id = $1
  //   `;

  //   return db
  //     .query(queryString, [userId])
  //     .then((res) => {
  //       return res.rows.length > 0 ? res.rows[0] : null;
  //     })
  //     .catch((err) => {
  //       res.status(500).json({ error: err.message });
  //     });
  // };

    // create a weight
router.post("/", async (req, res) => {
  try {
    const { weights, calories } = req.body;
    const newWeight = await db.query(`INSERT INTO biometrics(user_id, weight, calories_per_day) VALUES ('1', $1, $2) RETURNING *`, [weights, calories]
    );

    res.json(newWeight.rows[0]);

  } catch(err) {
    console.error(err.message)
  }
});

  // show weight
  router.get("/", async (req, res) => {
    try {
    const allWeights = await db.query(`SELECT * FROM biometrics where user_id = 1`);
    res.json(allWeights.rows);
    
    }
    catch(err) {
      console.error(err.message)
    }
    });
  
    // show weight of a user
  // router.get("/:id", async (req, res) => {
  //   try {
  //   const {id} = req.params;
  //   const weight = await db.query(`SELECT weight FROM biometrics where user_id = $1`, [id]); 
  //   res.json(food.rows[0]);
  
  //   }
  //   catch(err) {
  //     console.error(err.message)
  //   }
  //   });


  return router;
};

module.exports = weightRouter;
