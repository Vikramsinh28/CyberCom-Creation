create table Salary(
	id int auto_increment primary key ,
    name varchar(256) ,
    sex enum('m' , 'f'),
    salary int 
);


insert into Salary(name , sex , salary) Values ("A" , "m" , 2500) ,
("B" , "f" , 1500) ,
("C" , "m" , 5500) ,
("D" , "f" , 500);

SET SQL_SAFE_UPDATES = 0;

update salary
	set sex=(case when sex="m" 
			then "f" 
            else "m" 
            end);

select * from Salary;