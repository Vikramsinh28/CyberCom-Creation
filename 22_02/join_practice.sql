-- hello to joins

-- create database joinss

-- use joinss

-- create table student(
--     id int primary key auto_increment,
--     name varchar(255) not null,
--     percentage int not null,
--     age int,
--     gender varchar(2) 
-- )

-- insert into student(name , percentage , age , gender)
-- values ("viku" , 90 , 89 , "M"),
-- ("niku" , 70 , 89 , "M"),
-- ("chiku" , 50 , 89 , "F"),
-- ("raju" , 92 , 89 , "M"),
-- ("lalu" , 96 , 89 , "F"),("viku" , 80 , 89 , "M");

-- create table city(
--    cid int auto_increment primary key,
--    name varchar(255)
-- )

-- insert into city(name) 
-- values ("agera"),
-- ("delhi"),
-- ("bhopal"),
-- ("jaipur"),
-- ("noida");

-- update student
-- set city = 3
-- where id = 2

-- select s.id , s.name , s.percentage , s.age , s.gender , c.name as cityName from student as s inner join city as c
-- on s.city = c.cid;

-- select s.id , s.name , c.name 
-- from student s inner join city c
-- on s.city = c.cid
-- where c.name = "agera"
-- order by s.name

-- left join 
-- use joinss
-- select * from student
-- left join city 
-- on student.city = city.cid

-- right join

-- select * from 
-- student s right join city c
-- on s.id = c.cid

-- cross join 

-- select * from student
-- cross join city  

-- multiple join

-- create table courses(
--    crid int auto_increment primary key,
--    crname varchar(255)
-- );

-- insert into courses( crname) 
-- values("Btech"),
-- ("BCA"),
-- ("BBA")


-- select city , count(city)
-- from student
-- group by city;

-- select c.name , count(s.city)
-- from student s
-- inner join city c
-- on s.city = c.cid
-- group by c.name
-- having s.age >0







