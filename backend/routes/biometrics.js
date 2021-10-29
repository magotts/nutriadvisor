const express = require("express");
const router = express.Router();

const biometricsRouter = (db) => {

 // create a height, weight, calories
router.post("/", async (req, res) => {
  try {
    console.log("reqbody", req.body)

    const { weight, calories_per_day  } = req.body;
    const newWeight = await db.query(`INSERT INTO biometrics(user_id, weight, calories_per_day) VALUES ('1', $1, $2) RETURNING *`, [weight, calories_per_day]);

    res.json(newWeight.rows[0]);

  } catch(err) {
    console.error(err.message)
  }
});

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

  // update weight of a user
router.put("/:id", async (req, res) => {
  try {
  const {id} = req.params;
  const { weight } = req.body;
  const updateWeight = await db.query(`UPDATE biometrics SET weight = $1 WHERE id = $2 AND user_id = 1 RETURNING *`, [ weight, id]); 
  res.json("Biometrics has been updated.");

  }
  catch(err) {
    console.error(err.message)
  }
  });

// delete biometrics of a user
router.delete("/:id", async (req, res) => {
  try {
  const {id} = req.params;
  const deleteBiometrics = await db.query(`DELETE from biometrics WHERE id = $1`, [id]); 
  res.json("Biometrics was deleted.");

  }
  catch(err) {
    console.error(err.message)
  }
  });


     // show user info and their goaltype and coaches of user_id 1
     router.get("/goal/:id", async (req, res) => {
      try {
      const {id} = req.params;
      const userInfo = await db.query(`
      select users.*, goaltypes.description, coaches.alias
      from users
      join biometrics on users.id = biometrics.user_id
      join goals on users.id = goals.user_id
      join coaches on coaches.id = goals.coach_id
      join goaltypes on goaltypes.id = goals.goaltype_id
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

module.exports = biometricsRouter;
