INSERT INTO users(first_name, last_name, email, password, gender, age, height, profile_image) 
VALUES 
('Diana', 'Prince', 'hello@world.com', 'password', 'Female', '30', '60', 'https://media.gq.com/photos/5a0b201485eb8b728aa3ba99/3:4/w_999,h_1332,c_limit/gq-gal-gadot-accent.jpg'),
('Yi Rong', 'Qin', 'hi@yahoo.com', 'password', 'Female', '25', '55', 'https://media.istockphoto.com/vectors/female-fitness-icon-vector-id1277127590?k=20&m=1277127590&s=170667a&w=0&h=oXg1V0qNg3DmqzPWPoNI9GqOonFibQEhLlvukoPeg90='),
('Sonam', 'Malhotra',  'heyhey@hey.com', 'password', 'Female', '20', '50', 'https://media.istockphoto.com/vectors/female-fitness-icon-vector-id1277127590?k=20&m=1277127590&s=170667a&w=0&h=oXg1V0qNg3DmqzPWPoNI9GqOonFibQEhLlvukoPeg90='),
('Yvette', 'Lim',  'a@a.com', 'password', 'Female', '23', '45', 'https://media.istockphoto.com/vectors/female-fitness-icon-vector-id1277127590?k=20&m=1277127590&s=170667a&w=0&h=oXg1V0qNg3DmqzPWPoNI9GqOonFibQEhLlvukoPeg90=');
-- ('Coach Blake', 'Lively', true, 'coach@coach.com', 'password', 'female', '35', '65');

INSERT INTO goaltypes(description) 
VALUES 
('Lose Weight'),
('Maintain Weight'),
('Gain Weight'),
('Healthy Lifestyle');

INSERT INTO coaches(alias, goaltype_id, imageurl)
VALUES
('Coach Blake', 1, 'https://pbs.twimg.com/media/E__E6EMVQAcEF15.jpg'),
('Coach Ryan', 2, 'https://static.onecms.io/wp-content/uploads/sites/14/2015/11/12/111215-ryan-reynolds-2-2000.jpg'),
('Coach Mandy', 3, 'https://media.allure.com/photos/5cbddb761e1ec0d66045523e/3:4/w_1263,h_1684,c_limit/Mandy%20Moore.jpg'),
('Coach Blaire', 4, 'https://media1.popsugar-assets.com/files/thumbor/foVjvLNLLafbcba7eL3fXaQHlp8/0x63:2087x2150/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/02/14/821/n/1922398/d53ac18b5e46ea2e06d0a9.40615575_/i/Leighton-Meester.jpg');

-- user 1's goals is to Lose Weight
-- INSERT INTO goals(user_id, coach_id, goaltype_id) 
-- VALUES
-- (1, 1, 1);




INSERT INTO food_diary(user_id, breakfast, lunch, dinner, snacks) 
VALUES 
(1, 'egg, avocado', 'steak, water', 'spaghetti, coke', 'none'),
(1, 'water, sandwich', 'none', 'pasta, water', 'none');

INSERT INTO biometrics(user_id, weight, calories_per_day) 
VALUES
(2, '150', '2500'),
(1, '100', '1500');
-- (2, 'female', '162', '50', '25', '2500'),
-- (1, 'female', '200', '100', '30', '1500');


-- we want to check users that has the same goal type as the coach.
--as a user
-- SELECT * from goaltypes; -- dropdown
-- SELECT * from coaches WHERE goaltype_id = 1;
-- INSERT INTO goals(user_id, coach_id, goaltype_id)
-- VALUES (1, 1, 1);


-- coach dashboard
-- select distinct goals.id, users.*, coaches.*, goaltypes.* from users
-- JOIN goals ON goals.user_id = users.id
-- JOIN coaches ON goals.coach_id = coaches.id
-- JOIN goaltypes ON goals.goaltype_id = goaltypes.id
-- WHERE coaches.id = 1;
