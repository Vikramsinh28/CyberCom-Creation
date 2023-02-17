-- create database case1
-- use case1

-- create table product1(
--     pid int not null auto_increment,
--     pname varchar(20) not null,
--     primary key(pid)
-- )

-- create table category(
--     cid int not null auto_increment ,
--     cname varchar(20) not null,
--     primary key(cid)
-- )

-- create table result(
-- 	pid int,
--     cid int,
-- 	foreign key (pid) references product1(pid),
-- 	foreign key (cid) references category(cid)    
-- )

-- select * from result