-- order by example 

-- create table orderby (
--     id int not null auto_increment primary key,
--     name varchar(20),
--     age int not null,
--     gender varchar(2),
--     phone varchar(10),
--     city varchar(20)
-- )

-- insert into orderby( name , age  , gender , phone , city)
-- values()

-- select * from orderby

select name , age , city from orderby where city = "vn" order by name , city;

-- insert into orderby(name , age , gender , phone , city)
-- values("jay" , 21 , "M" , "1069258085" , "bvn"),
-- ("milan" , 22 , "M" , "2069358085" , "vn"),
-- ("malay" , 24 , "M" , "4069558085" , "vnb"),
-- ("yash" , 26 , "M" , "7669278085" , "bv"),
-- ("ghori" , 11 , "M" , "8069258085" , "vn"),
-- ("viku" , 27 , "M" , "9069268085" , "bn")



