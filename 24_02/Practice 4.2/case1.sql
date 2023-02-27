-- create database company;

use company;

-- create table employees
-- (
--     id int auto_increment primary key,
--     name varchar(50),
--     department_id int,
--     salary int
-- );

-- create table departments
-- (
--     id int auto_increment primary key,
--     name varchar(50)
-- );

-- create table salaries
-- (
--     id int auto_increment primary key,
--     employee_id int,
--     salary int,
--     date date
-- );

-- insert into employees(name, department_id, salary)  
-- values('employee6', 4, 4000),
-- ('employee7', 5, 5000),
-- ('employee8', 2, 2000),
-- ('employee9', 3, 3000),
-- ('employee10', 4, 4000);
-- insert into departments(name)
-- values('department1'),
-- ('department2'),
-- ('department3'),
-- ('department4'),
-- ('department5');

-- insert into salaries(employee_id, salary, date)
-- values(1, 1000, '2020-01-01'),
-- (2, 2000, '2020-01-02'),
-- (3, 3000, '2020-01-03'),
-- (4, 4000, '2020-01-04'),
-- (5, 5000, '2020-01-05');

-- Q- 1
-- select employees.name from employees 
-- join departments on employees.department_id = departments.id
-- where departments.id = 1;

-- 1 is stands for sales

-- Q -2 
-- select d.name  , count(e.department_id) as numberOfEmployee from departments as d
-- join employees e on e.department_id = d.id
-- group by d.name
-- order by d.name;

-- Q -3 

-- select d.name, avg(e.salary) as average_salary from departments d
-- inner join employees e on d.id = e.department_id
-- group by d.name
-- order by d.name;

-- Q -4 

-- select e.name, e.salary from employees e
-- order by e.salary desc
-- limit 1 offset 4;


-- Q -5

-- select e.name, s.salary from employees e
-- inner join salaries s on e.id = s.employee_id
-- where s.date = (select max(date) from salaries);







