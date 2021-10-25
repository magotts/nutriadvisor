const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("../lib/db");
const { Pool } = require("pg");

// middleware
app.use(cors());
app.use(express.json()); // req.body

// ROUTES

app.listen(5000, () => {
  console.log("Server has started on port 5000");
})