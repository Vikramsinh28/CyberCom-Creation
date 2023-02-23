-- blog_post
-- use practice3

-- case 1
-- CREATE TABLE blog_posts (
--  id INT PRIMARY KEY,
--  title VARCHAR(255),
--  body TEXT,
--  author_id INT,
--  created_at TIMESTAMP,
--  updated_at TIMESTAMP
-- );
-- CREATE TABLE blog_comments (
--  id INT PRIMARY KEY,
--  post_id INT,
--  body TEXT,
--  author_id INT,
--  created_at TIMESTAMP
-- );

-- select title , body , count(post_id) from blog_posts join blog_comments on blog_posts.id = blog_comments.post_id group by title , body order by created_at desc limit 5;



