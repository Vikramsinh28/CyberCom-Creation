-- use practice3;

-- Create table Employee
-- (
--     EmployeeID int auto_increment primary key,
--     EmployeeName varchar(50),
--     EmployeeAddress varchar(50),
--     EmployeePhone varchar(50),
--     EmployeeEmail varchar(50),
--     EmployeeSalary int,
--     EmployeeDepartment varchar(50)
-- );

-- insert into Employee(EmployeeName, EmployeeAddress, EmployeePhone, EmployeeEmail, EmployeeSalary, EmployeeDepartment)
-- values('John', 'USA', '1723456789', 'wert' , 1000, 'IT'),
-- ('Peter', 'SA', '1234526789', 'wrt' , 1000, 'CE'),
-- ('Mry', 'US', '1234576789', 'rt' , 6000, 'EC'),
-- ('John', 'UA', '1234356789', 'wrt' , 2000, 'DF'),
-- ('Pter', 'UrSA', '1243456789', 'wet' , 9000, 'IT'),
-- ('Mary', 'US', '12356789', 'wer' , 10060, 'CE'),
-- ('Jon', 'USsA', '12345689', 'wedrt' , 13000, 'TT'),
-- ('Peter', 'USssA', '12356789', 'wehrt' , 17000, 'IT'),
-- ('ary', 'USssA', '12345689', 'weret' , 1200, 'IT');

-- Question 2
-- select EmployeeDepartment , avg(EmployeeSalary) from Employee  group by EmployeeDepartment;

-- Question 3
-- select year(EmployeeHireDate) as Year, count(*) as NumberofEmployees from Employee group by year(EmployeeHireDate) order by year(EmployeeHireDate);

-- Question 4
-- select EmployeeName from Employee order by EmployeeSalary limit 10;

-- Question 5
-- update Employee
-- set EmployeeSalary = 10
-- where EmployeeID = 1;

-- select * from Employee

-- Question 6

-- delete from Employee where EmployeeID in (select EmployeeID from Employee where EmployeeID < 2000);

-- Question 7
-- create table employee_stats
-- (
--     department_name varchar(50),
--     total_employees int,
--     average_salary int
-- );

-- insert into employee_stats(department_name, total_employees, average_salary)
-- values('IT', 4, 10000),
-- ('CE', 2, 1000),
-- ('EC', 1, 6000),
-- ('DF', 1, 2000),
-- ('TT', 1, 13000);

-- Question 9
-- select EmployeeDepartment, avg(EmployeeSalary) as AverageSalary from Employee group by EmployeeDepartment order by AverageSalary desc limit 5;

