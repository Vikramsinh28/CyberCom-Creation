-- create table customers (id int, name varchar(255));
-- create table orders (id int, customer_id int);
-- create table returns (id int, customer_id int);

-- insert into customers values (1, 'A');
-- insert into customers values (2, 'B');
-- insert into customers values (3, 'C');
-- insert into customers values (4, 'D');
-- insert into customers values (5, 'E');

-- insert into orders values (1, 1);
-- insert into orders values (2, 1);
-- insert into orders values (3, 2);
-- insert into orders values (4, 3);
-- insert into orders values (5, 4);
-- insert into orders values (6, 5);

-- insert into returns values (1, 1);
-- insert into returns values (2, 3);
-- insert into returns values (3, 4);

-- Write a SQL query to retrieve the names of all customers 
-- who have made at least one order in the "orders" table and 
-- have not made any orders in the "returns" table.

-- select name from customers where id in (select customer_id from orders) and id not in (select customer_id from returns);

