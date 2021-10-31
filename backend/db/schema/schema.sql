DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS coaches CASCADE;
DROP TABLE IF EXISTS biometrics CASCADE;
DROP TABLE IF EXISTS goals CASCADE;
DROP TABLE IF EXISTS food_diary CASCADE;
DROP TABLE IF EXISTS goaltypes CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE,
  password VARCHAR(255),
  gender VARCHAR(255),
  age INTEGER, 
  height INTEGER,
  date_joined TIMESTAMP DEFAULT NOW(),
  profile_image VARCHAR(255)
);


CREATE TABLE biometrics (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  weight INTEGER, 
  calories_per_day INTEGER,
  date_created TIMESTAMP DEFAULT NOW()
);

CREATE TABLE goaltypes (
  id SERIAL PRIMARY KEY NOT NULL,
  description VARCHAR(255) NOT NULL
);

CREATE TABLE food_diary (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  breakfast VARCHAR(255) NOT NULL,
  lunch VARCHAR(255) NOT NULL,
  dinner VARCHAR(255) NOT NULL,
  snacks VARCHAR(255) NOT NULL,
  date_created TIMESTAMP DEFAULT NOW()
);

CREATE TABLE coaches (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE RESTRICT,
  alias VARCHAR(255) NOT NULL,
  goaltype_id INTEGER NOT NULL REFERENCES goaltypes(id) ON DELETE CASCADE,
  imageurl VARCHAR(4000) NOT NULL,
  created TIMESTAMP DEFAULT NOW()
);


CREATE TABLE goals (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  coach_id INTEGER NOT NULL REFERENCES coaches(id) ON DELETE CASCADE,
  goaltype_id INTEGER NOT NULL REFERENCES goaltypes(id) ON DELETE CASCADE
);


