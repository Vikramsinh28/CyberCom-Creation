-- Consider you’ve one employee database system. Create table 
-- schema and add data according to the following queries

-- 1. Create a table named “Employee” with the following fields:

Create table Employee
(
    EmployeeID int auto_increment primary key,
    EmployeeName varchar(50),
    EmployeeAddress varchar(50),
    EmployeePhone varchar(50),
    EmployeeEmail varchar(50),
    EmployeeSalary int,
    EmployeeDepartment varchar(50)
)

insert into Employee(EmployeeName, EmployeeAddress, EmployeePhone, EmployeeEmail, EmployeeSalary, EmployeeDepartment)
values('John', 'USA', '1723456789', 'wert' , 1000, 'IT'),
('Peter', 'SA', '1234526789', 'wrt' , 1000, 'CE'),
('Mry', 'US', '1234576789', 'rt' , 6000, 'EC'),
('John', 'UA', '1234356789', 'wrt' , 2000, 'DF'),
('Pter', 'UrSA', '1243456789', 'wet' , 9000, 'IT'),
('Mary', 'US', '12356789', 'wer' , 10060, 'CE'),
('Jon', 'USsA', '12345689', 'wedrt' , 13000, 'TT'),
('Peter', 'USssA', '12356789', 'wehrt' , 17000, 'IT'),
('ary', 'USssA', '12345689', 'weret' , 1200, 'IT');

-- . Write a query that returns the department name and the 
-- average salary of all employees in each department.

select EmployeeDepartment, avg(EmployeeSalary) as AverageSalary from Employee group by EmployeeDepartment;

-- Write a query that returns the number of employees who were 
-- hired in each year, sorted by year.

-- . Write a query that returns the top 5 departments with the 
-- highest average salary

select EmployeeDepartment, avg(EmployeeSalary) as AverageSalary from Employee group by EmployeeDepartment order by AverageSalary desc limit 5;

-- Write a query that deletes all employees who were hired 
-- before the year 2000.

delete from Employee where EmployeeID in (select EmployeeID from Employee where EmployeeID < 2000);

-- . Write a query that creates a new table called 
-- "employee_stats" that contains the following columns: 
-- "department_name", "total_employees", and "average_salary". 
-- The table should include one row for each department.

create table employee_stats
(
    department_name varchar(50),
    total_employees int,
    average_salary int
)

insert into employee_stats(department_name, total_employees, average_salary)
values('IT', 4, 10000),
('CE', 2, 1000),
('EC', 1, 6000),
('DF', 1, 2000),
('TT', 1, 13000);
select EmployeeDepartment, count(EmployeeID), avg(EmployeeSalary) from Employee group by EmployeeDepartment;


-- Create a database called "sales" with three tables: "customers", 
-- "orders", and "products".
-- The "customers" table should have the following columns: 
-- "customer_id", "first_name", "last_name", "email", and "phone".
-- The "orders" table should have the following columns: 
-- "order_id", "order_date", "customer_id", and "product_id".
-- The "products" table should have the following columns: 
-- "product_id", "product_name", "unit_price", and "description".
-- 1. Insert at least five customers, five products, and ten 
-- orders into the respective tables. Make sure that at least 
-- two customers have multiple orders, and at least two 
-- products are included in multiple orders.

-- create database sales;
-- use sales;

-- create table customers
-- (
--     customer_id int auto_increment primary key,
--     first_name varchar(50),
--     last_name varchar(50),
--     email varchar(50),
--     phone varchar(50)
-- );

-- create table orders
-- (
--     order_id int auto_increment primary key,
--     order_date date,
--     customer_id int,
--     product_id int
-- );

-- create table products
-- (
--     product_id int auto_increment primary key,
--     product_name varchar(50),
--     unit_price int,
--     description varchar(50)
-- );

-- insert into customers(first_name, last_name, email, phone)
-- values('John', 'Smith', 'john@gmail.com', '123456789'),
-- ('Peter', 'Smith', 'Peter@gmail.com' , '543456789'),
-- ('Mary', 'Smith', 'mary@gmail.com', '123626789'),
-- ('Jon', 'Smith', 'jon@gmail.com', '123459889'),
-- ('Pter', 'Smith', 'pter@gmail.com', '123146789');

-- insert into orders(order_date, customer_id, product_id)
-- values('2020-01-01', 1, 1),
-- ('2020-01-02', 2, 2),
-- ('2020-01-03', 3, 3),
-- ('2020-01-04', 4, 4),
-- ('2020-01-05', 5, 5),
-- ('2020-01-06', 1, 2),
-- ('2020-01-07', 2, 3),
-- ('2020-01-08', 3, 4),
-- ('2020-01-09', 4, 5),
-- ('2020-01-10', 5, 1);

-- insert into products(product_name, unit_price, description)
-- values('product1', 100, 'description1'),
-- ('product2', 200, 'description2'),
-- ('product3', 300, 'description3'),
-- ('product4', 400, 'description4'),
-- ('product5', 500, 'description5');


