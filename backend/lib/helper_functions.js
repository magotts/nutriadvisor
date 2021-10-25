// // Secure authentication
// // function to help get user by ID from the database
// const findUserById = function (db, userId) {
//   const queryString = `
//     SELECT * FROM users WHERE id = $1
//     `;

//   return db
//     .query(queryString, [userId])
//     .then((res) => {
//       return res.rows.length > 0 ? res.rows[0] : null;
//     })
//     .catch((err) => {
//       res.status(500).json({ error: err.message });
//     });
// };
// exports.findUserById = findUserById;

// // ---------------------- //

// // function that checks password and authenticates user based on findUserByEmail
// const authenticateUser = (email, password, db) => {
//   // const user = findUserByEmail(db, email);
//   return findUserByEmail(db, email).then((user) => {
//     if (!user) {
//       return null;
//     }
//     if (bcrypt.compareSync(password, user.password)) {
//       return user;
//     }
//     return null;
//   });
// };

// exports.authenticateUser = authenticateUser;

// // ---------------------- //

// // function that gets users using email - to be used to match db and authenticate only
// const findUserByEmail = function (db, email) {
//   const queryString = `
//     SELECT * FROM users WHERE users.email = $1
//     `;

//   return db
//     .query(queryString, [email.toLowerCase()])
//     .then((res) => {
//       return res.rows.length > 0 ? res.rows[0] : null;
//     })
//     .catch((err) => {
//       res.status(500).json({ error: err.message });
//     });
// };
// exports.findUserByEmail = findUserByEmail;


