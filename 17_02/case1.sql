-- create database case1
-- use case1

-- create table Products(
--     id int not null auto_increment,
--     name varchar(256) not null,
--     primary key(pid)
-- )

-- create table Category(
--     id int not null auto_increment ,
--     name varchar(256) not null,
--     primary key(cid)
-- )

-- create table Products_Category(
-- 	product_id int,
--  category_id int,
-- 	foreign key (product_id ) references Products(id),
-- 	foreign key (category_id) references category(id)    
-- )

-- select * from Products_Category