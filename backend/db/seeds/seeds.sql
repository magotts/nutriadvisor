INSERT INTO users(first_name, last_name, coach, email, password) 
VALUES 
('yvette', 'lim', false, 'hello@world.com', 'password'),
('yi rong', 'qin', false, 'hi@yahoo.com', 'password'),
('sonam', 'malhotra', false, 'heyhey@hey.com', 'password'),
('blake', 'lively', true, 'coach@coach.com', 'password');

INSERT INTO goals(user_id, goal_type) 
VALUES
(1, 'Weight Loss');

INSERT INTO food_diary(user_id, breakfast, lunch, dinner, snacks) 
VALUES 
(1, 'egg, avocado', 'steak, water', 'spaghetti, coke', 'none'),
(1, 'water, sandwich', 'none', 'pasta, water', 'none');

INSERT INTO biometrics(user_id, gender, height, weight, age, calories_per_day) 
VALUES
(2, 'female', '162', '50', '25', '2500'),
(1, 'female', '200', '100', '30', '1500');