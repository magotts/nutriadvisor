INSERT INTO users(first_name, last_name, coach, email, password, gender, age, height) 
VALUES 
('yvette', 'lim', false, 'hello@world.com', 'password', 'female', '30', '60'),
('yi rong', 'qin', false, 'hi@yahoo.com', 'password', 'female', '25', '55'),
('sonam', 'malhotra', false, 'heyhey@hey.com', 'password', 'female', '20', '50'),
('blake', 'lively', true, 'coach@coach.com', 'password', 'female', '35', '65');

INSERT INTO goals(user_id, goal_type) 
VALUES
(1, 'Weight Loss');

INSERT INTO food_diary(user_id, breakfast, lunch, dinner, snacks) 
VALUES 
(1, 'egg, avocado', 'steak, water', 'spaghetti, coke', 'none'),
(1, 'water, sandwich', 'none', 'pasta, water', 'none');

INSERT INTO biometrics(user_id, weight, calories_per_day) 
VALUES
<<<<<<< HEAD
(2, '150', '2500'),
(1, '100', '1500');
=======
(2, 'female', '162', '50', '25', '2500'),
(1, 'female', '200', '100', '30', '1500');

INSERT INTO messages(
  sender_id ,
  receiver_id ,
  conversation ,
  date_created ) 
VALUES
(1,2, "hy",
>>>>>>> project
