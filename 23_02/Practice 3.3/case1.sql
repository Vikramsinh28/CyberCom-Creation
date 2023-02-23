
-- create table books(
--     id int auto_increment primary key,
--     title varchar(255),
--     author varchar(255),
--     publication_year int
-- );

-- insert into books (title , author , publication_year)
-- values("rano" , "viku" , 2032),
-- ("kulu" , "ujju" , 2021),
-- ("jijj" , "ujju" , 2020)

-- select title , author from books order by publication_year limit 1;

-- Question 2 

-- create table employees (
--    id int auto_increment primary key,
--    name text,
--    age int ,
--    salary int
-- )

-- insert into employees(name , age , salary)
-- values("john" , 35 , 60000),
-- ("Mary" , 27 , 50000),
-- ("Peter" , 42 , 75000),
-- ("olivia" , 49 , 55000),
-- ("Michael" , 38 , 80000)

-- select * from employees

-- select name , salary from employees where salary > 60000;

-- Question 3
-- SET sql_safe_updates=0;

-- update employees
-- set age = 43
-- where name = "Peter";

-- select * from employees; 

-- Question 4

-- delete from employees
-- where id = 4

-- Question 5

-- select avg(salary) from employees

-- Question 6

-- select name , age from employees order by age desc limit 1;

-- Question 7
-- select name , age from employees order by age asc limit 1;

-- Question 8 
-- select name from employees where salary = (select Max(salary) from employees);
select name from employees order by salary desc limit 1;




 