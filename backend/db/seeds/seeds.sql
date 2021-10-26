INSERT INTO users(first_name, last_name, coach, email, password, gender, age, height) 
VALUES 
('Diana', 'Prince', false, 'hello@world.com', 'password', 'female', '30', '60'),
('Yi Rong', 'Qin', false, 'hi@yahoo.com', 'password', 'female', '25', '55'),
('Sonam', 'Malhotra', false, 'heyhey@hey.com', 'password', 'female', '20', '50'),
('Coach Blake', 'Lively', true, 'coach@coach.com', 'password', 'female', '35', '65');

INSERT INTO goals(user_id, goal_type) 
VALUES
(1, 'Weight Loss');

INSERT INTO food_diary(user_id, breakfast, lunch, dinner, snacks) 
VALUES 
(1, 'egg, avocado', 'steak, water', 'spaghetti, coke', 'none'),
(1, 'water, sandwich', 'none', 'pasta, water', 'none');

INSERT INTO biometrics(user_id, weight, calories_per_day) 
VALUES
(2, '150', '2500'),
(1, '100', '1500');