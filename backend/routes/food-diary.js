const express = require("express");
const router = express.Router();

const foodDiaryRouter = (db) => {
  // create a food diary
  router.post("/", async (req, res) => {
    try {
      const { breakfast, lunch, dinner, snacks } = req.body;
      const newFood = await db.query(
        `insert into food_diary(user_id, breakfast, lunch, dinner, snacks) VALUES (1, $1, $2, $3, $4) RETURNING *`,
        [breakfast, lunch, dinner, snacks]
      );

      res.json(newFood.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  });

  // show food diary
  router.get("/", async (req, res) => {
    try {
      const allFoods = await db.query(`SELECT * FROM food_diary`);
      res.json(allFoods.rows);
    } catch (err) {
      console.error(err.message);
    }
  });

  // show food diary of a user
  router.get("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const food = await db.query(
        `SELECT * FROM food_diary where user_id = $1 order by date_created asc`,
        [id]
      );
      res.json(food.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  });

  // update food diary of a user
  router.put("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { breakfast, lunch, dinner, snacks } = req.body;
      const updateFood = await db.query(
        `UPDATE food_diary SET user_id = 1, breakfast = $1, lunch = $2, dinner = $3, snacks = $4 WHERE id = $5 RETURNING *`,
        [breakfast, lunch, dinner, snacks, id]
      );
      res.json("Food diary was updated.");
    } catch (err) {
      console.error(err.message);
    }
  });

  // delete food diary of a user
  router.delete("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deleteFood = await db.query(
        `DELETE from food_diary WHERE id = $1`,
        [id]
      );
      res.json("Food was deleted.");
    } catch (err) {
      console.error(err.message);
    }
  });

  return router;
};

module.exports = foodDiaryRouter;
