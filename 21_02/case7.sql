-- create database Student_grade_system

-- use Student_grade_system;

-- create table Student(
--     id int primary key,
--     name varchar(50),
--     age int
-- );

-- create table Subject(
--     id int primary key,
--     name varchar(50),
--     credit int
-- );

-- create table Grade(
--     Student_id int,
--     Subject_id int,
--     Grade int,
--     foreign key(Student_id) references Student(id),
--     foreign key(Subject_id) references Subject(id)
-- );

-- create table semester(
--     semester_id int primary key auto_increment,
--     semester_name varchar(50) not null
-- );

-- insert into Student( id , name, age) values
-- ( 1 ,'John', 20),
-- ( 2 , 'Peter', 21),
-- ( 3 ,'Mary', 19),
-- ( 4 ,'Kate', 20),
-- ( 5 ,'David', 22);

-- insert into Subject(id , name , credit) values
-- (1 , 'Math' ,3),
-- (2 ,'English' , 4),
-- (3 ,'Science' , 5),
-- (4 ,'History' , 3),
-- (5 ,'Geography',5);

insert into semester(semester_id , semester_name)
values(1 , "1"), 
(2 , "2")



