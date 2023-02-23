use practice3;

-- CREATE TABLE users (
--  id INT PRIMARY KEY,
--  name VARCHAR(255),
--  created_at TIMESTAMP
-- );
-- CREATE TABLE posts (
--  id INT PRIMARY KEY,
--  user_id INT,
--  body TEXT,
--  created_at TIMESTAMP
-- );
-- CREATE TABLE likes (
--  id INT PRIMARY KEY,
--  user_id INT,
--  post_id INT,
--  created_at TIMESTAMP
-- );

-- select name , count(posts.user_id) as numberOfPosts , count(likes.user_id) as numberOfLikes from users
-- join posts on users.id = posts.user_id join likes on posts.id = likes.post_id 
-- where users.created_at between '2022-01-01' and '2022-12-31' group by users.name; 

