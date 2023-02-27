-- Q -1 
-- select u.name, count(o.id) as total_orders from users u
-- inner join orders o on u.id = o.user_id
-- group by u.name
-- order by total_orders desc

-- Q -2 
-- select e.name, sum(od.quantity * od.unit_price) as total_sales from employees e  
-- inner join orders o on e.id = o.employee_id
-- inner join order_details od on o.id = od.order_id
-- group by e.name
-- having total_sales > 100000
-- order by total_sales desc;

-- Q - 3
-- select c.name, sum(od.quantity * od.unit_price) as total_spent, sum(case when o.order_date > date_sub(now(), interval 30 day) then od.quantity * od.unit_price else 0 end) as total_spent_last_30_days from customers c  
-- inner join orders o on c.id = o.customer_id
-- inner join order_details od on o.id = od.order_id
-- group by c.name
-- order by total_spent desc;

-- Q -4 
-- select e.name, e.salary from employees e
-- where e.salary > (select avg(salary) from employees)
-- order by e.salary desc;

-- Q -5 
-- select c.name from customers c
-- where c.id not in (select customer_id from orders where order_date > date_sub(now(), interval 90 day))
-- order by c.name;

-- Q - 6
-- select e.name, e.salary, e.department_id from employees e
-- where e.salary > (select min(salary) from employees where department_id = e.department_id)   
-- order by e.department_id, e.salary desc;

-- Q - 7
-- select e.name, e.salary, e.department_id from employees e
-- where e.salary > (select min(salary) from employees where department_id = e.department_id)
-- order by e.department_id, e.salary desc limit 5;

-- Q -8 
-- select c.name from customers c
-- where c.id not in (select customer_id from orders o
-- inner join order_details od on o.id = od.order_id
-- inner join products p on od.product_id = p.id
-- where p.price > 100)
-- order by c.name;

-- Q - 9
-- select c.name, sum(od.quantity * od.unit_price) as total_spent, avg(od.quantity * od.unit_price) as average_spent from customers c
-- inner join orders o on c.id = o.customer_id
-- inner join order_details od on o.id = od.order_id
-- group by c.name
-- order by total_spent desc;

-- Q - 10
-- select p.name, c.name from products p
-- inner join order_details od on p.id = od.product_id
-- inner join orders o on od.order_id = o.id
-- inner join customers c on o.customer_id = c.id
-- group by p.name, c.name
-- having count(c.name) > 1
-- order by p.name;
