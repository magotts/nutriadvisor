const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const { Pool } = require("pg");
const cookieSession = require("cookie-session");
const cors = require("cors");



// const indexRouter = require('./routes/index');
// const usersRouter = require('./routes/users');

const foodDiaryRouter = require('./routes/food-diary');
const loginRouter = require('./routes/login');
const biometricsRouter = require('./routes/biometrics');
const chatRouter = require('./routes/chat');




const app = express();
const http = require("http").createServer(app);

const db = require("./lib/db");
db.connect();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(
  cookieSession({
    name: "session",
    keys: ["key1", "key2"],
  })
);

// req.session.id = "1";

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

app.use('/food_diary', foodDiaryRouter(db));
app.use('/login', loginRouter(db));
app.use('/biometrics', biometricsRouter(db));
app.use('/chat', chatRouter(http));

// logout
// app.post("/logout", (req, res) => {
//   req.session = null;
//   // redirect home
//   res.redirect("/");
// });

http.listen(6000, () => console.log("Server is running on port 6000"));
chatRouter(http);

module.exports = app;
