-- create table activity(
-- player_id int,
-- device_id int,
-- event_date date,
-- games_played int,
-- primary key(player_id, event_date)
-- );

-- insert into activity values(1,2,'2016-03-01',5),
-- (1,2,'2016-05-02',6),
-- (2,3,'2017-06-25',3),
-- (3,1,'2016-03-02',0),
-- (3,4,'2018-07-03',5);

-- select * from activity;
-- Question 1
-- select player_id, min(event_date) as first_login from activity group by player_id;
-- Question 2
-- select player_id , device_id from activity group by player_id;

-- select player_id , event_date , games_played from activity  group by

-- Create a table called "customers" with the following columns: id 
-- (integer, primary key), name (text), email (text), and 
-- created_at (timestamp).

create table customers(
   id int primary key,
    name text,
    email text,
    created_at timestamp
);

-- Insert the following data into the "customers" table:


-- id, name, email, created_at

insert into customers values(id , name , email , created_at);

values(1, 'John Smith', 'johnsmith@gmail.com', '2018-01-01 12:00:00'),
(2, 'Jane Doe', 'janedoe@yahoo.com' , '2018-01-02 12:00:00'),
(3, 'Bob Jones', 'bobjohnson@hotmail.com ', '2018-01-03 12:00:00')

-- Write a query that selects all customers whose email 
-- address ends with "@gmail.com".

select * from customers where email like '%@gmail.com';

--  Write a query that selects the customer with the earliest 
-- created_at date.

select * from customers order by created_at asc limit 1;

-- Write a query that selects the name and email of customers 
-- who were created on or after January 3, 2022.

select name , email from customers where created_at >= '2022-01-03';

CREATE TABLE sales (
 id INT PRIMARY KEY,
 date DATE,
 customer_id INT,
 product_id INT,
 quantity INT,
 total_price DECIMAL(10,2)
);
-- Write a query to retrieve the total sales for each month in the 
-- year 2021, sorted in ascending order by month.

select date , sum(total_price) from sales where date between '2021-01-01' and '2021-12-31' group by date order by date asc;