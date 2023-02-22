-- use practice3

-- CREATE TABLE inventory (
--  id INT PRIMARY KEY,
--  name VARCHAR(255),
--  quantity INT,
--  price DECIMAL(10,2),
--  category VARCHAR(50)
-- );

select name , price from inventory 
where quantity > 0 and category = 'electronics'
order by price desc;
