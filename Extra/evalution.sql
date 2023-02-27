-- Write an SQL query to delete all the duplicate emails, keeping 
-- only one unique email with the smallest id. Return the result 
-- table in any order.

-- create table customers (
--     id int,
--     email varchar(255)
-- );

-- create table orders (
--     id int,
--     customer_id int
-- );

-- -- Write an SQL query to report all customers who never order 
-- -- anything. Return the result table in any order.

-- select c.name as Customers
-- from customers c
-- where c.id not in (select o.customer_id from orders o)

-- Write a SQL query to retrieve the names of all customers 
-- who have placed orders for products in the "Electronics" 
-- category, along with the total amount they have spent on 
-- all orders. The output should be sorted by the total amount 
-- spent in descending order.

select c.name as Customers, sum(p.price) as TotalAmount
from customers c  
join orders o on c.id = o.customer_id
join products p on o.product_id = p.id
where p.category = 'Electronics'
group by c.name
order by sum(p.price) desc

-- Write a SQL query to retrieve the names of all employees 
-- who have sold at least one product in the "Clothing" 
-- category, along with the total revenue they have generated 
-- from those sales. The output should be sorted by total 
-- revenue generated in descending order.

-- . Write a SQL query to retrieve the names of all customers 
-- who have placed orders for products in both the 
-- "Electronics" and "Clothing" categories. The output should 
-- only include customers who have ordered products in both 
-- categories


-- select c.name as Customers
-- from customers c
-- join orders o on c.id = o.customer_id
-- join products p on o.product_id = p.id
-- where p.category = 'Electronics' and p.category = 'Clothing'
-- group by c.name

-- Write a SQL query to retrieve the names of all employees 
-- who have sold at least one product to a customer who has a 
-- shipping address in the same city as the employee. The 
-- output should only include employees who have made at least 
-- one such sale.

select e.name as Employees
from employees e
join orders o on e.id = o.employee_id
join customers c on o.customer_id = c.id
where e.city = c.shipping_city
group by e.name

-- Write a SQL query to retrieve the names of all customers 
-- who have placed orders for products in the "Electronics" 
-- category, but have never placed an order for products in 
-- the "Clothing" category.

select c.name as Customers
from customers c
join orders o on c.id = o.customer_id
join products p on o.product_id = p.id
where p.category = 'Electronics' and c.id not in (select c.id from customers c join orders o on c.id = o.customer_id join products p on o.product_id = p.id where p.category = 'Clothing')
group by c.name



-- Write a SQL query to retrieve the names of all customers 
-- who have placed orders for more than five different 
-- products in the "Electronics" category

select c.name as Customers
from customers c
join orders o on c.id = o.customer_id
join products p on o.product_id = p.id
where p.category = 'Electronics'
group by c.name
having count(distinct p.id) > 5

-- Write a SQL query to retrieve the names of all employees 
-- who have sold products to customers who have placed orders 
-- for more than five different products in the "Electronics" 
-- category. The output should only include employees who have 
-- made at least one such sale

select e.name as Employees
from employees e
join orders o on e.id = o.employee_id
join customers c on o.customer_id = c.id
join products p on o.product_id = p.id
where p.category = 'Electronics'
group by e.name
having count(distinct p.id) > 5



select b.title, count(o.id) as Orders
from books b
join orders o on b.id = o.book_id
group by b.title
order by count(o.id) desc
limit 1


-- select the customer who havent order yet

select c.name as Customers
from customers c
where c.id not in (select o.customer_id from orders o)


-- get player name who win atleast five match 

select p.name as Player
from players p
where p.id in (select m.player_id from matches m where m.result = 'win')
group by p.name
having count(m.result) >= 5
