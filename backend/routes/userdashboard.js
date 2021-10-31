const express = require("express");
const router = express.Router();

const userdashboardRouter = (db) => {

    // show user info of user_id 1
    router.get("/:id", async (req, res) => {
      try {
      const {id} = req.params;
      const userInfo = await db.query(`select * from users where id = $1`, [id]);
      res.json(userInfo.rows);
      
      }
      catch(err) {
        console.error(err.message)
      }
      });

      return router;


 }

 module.exports = userdashboardRouter;
