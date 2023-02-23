use practice3;

create table employees(
   id int primary key auto_increment,
   name text,
   department text,
   salary int
);

insert into employees(id , name , department , salary)
values(1, 'John Smith', 'sales', 60000),
(2, 'Jane Doe', 'sales', 50000),
(3, 'Bob Jones', 'marketing', 40000),
(4, 'Sally Smith', 'sales', 70000),
(5, 'Samuel Johnson', 'marketing', 50000);

select name , salary from employees where department = 'sales' and salary > 50000;