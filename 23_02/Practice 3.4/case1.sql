-- use practice3;

-- create table Cars(
--    CarId int auto_increment primary key ,
--    Brand varchar(50),
--    Model varchar(50),
--    Year int ,
--    Mileage int ,
--    Price decimal(10 , 2),
--    Available bit
-- );
-- Question 1
-- select * from Cars order by Price limit 10;

-- Question 2
-- select avg(price) from Cars


-- create table Customers(
--    CustomerID int auto_increment primary key,
--    FirstName varchar(50),
--    LastName varchar(50),
--    Email varchar(100),
--    PhoneNumber varchar(20)
-- );

-- create table Sales(
--   SaleID int auto_increment primary key,
--   CarID int,
--   CustomerID int,
--   SalesDate date,
--   SalePrice decimal(10 ,2),
--   FOREIGN KEY (CarID) REFERENCES Cars(CarID),
--   FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
-- );

-- insert into Cars (Brand , Model , Year , Mileage , Price , Available)
-- values('Toyota' , 'Camry' , 2015 , 50000 , 20000 , 1),
-- ('Toyota' , 'Corolla' , 2016 , 40000 , 25000 , 1),
-- ('Toyota' , 'Prius' , 2017 , 30000 , 30000 , 1),
-- ('Toyota' , 'Yaris' , 2018 , 20000 , 35000 , 1),
-- ('Toyota' , 'Avalon' , 2019 , 10000 , 40000 , 1),
-- ('Toyota' , 'Sienna' , 2020 , 0 , 45000 , 1);


-- insert into Customers (FirstName , LastName , Email , PhoneNumber)
-- values('John' , 'Smith' , 'john@gmail.com ' , '1234567890'),
-- ('Jane' , 'Doe' , 'jane@gmil.com' , '0987654321'),
-- ('Bob' , 'Jones' , 'Bob@gmail.com' , '1234567890'),
-- ('Sally' , 'Smith' , 'Sally@gmail.com' , '0987654321');


-- insert into Sales (CarID , CustomerID , SalesDate , SalePrice)
-- values(1 , 1 , '2021-01-01' , 20000),
-- (2 , 2 , '2021-01-02' , 25000),
-- (3 , 3 , '2021-01-03' , 30000),
-- (4 , 4 , '2021-01-04' , 35000),
-- (5 , 5 , '2021-01-05' , 40000),
-- (6 , 6 , '2021-01-06' , 45000);

-- Question 3

-- select FirstName , LastName , count(Customers.CustomerID) from Customers join Sales on Customers.CustomerID = Sales.CustomerID group by FirstName , LastName;

-- Question 4

-- select FirstName , LastName from Customers where CustomerID not in (select CustomerID from Sales);


-- Question 5

-- insert into Cars (Brand , Model , Year , Mileage , Price , Available)
-- values('Toyota' , 'Corolla' , 2022 , 0 , 20000 , 1);

-- Question 6

-- update Cars set Price = Price * 1.1;

-- Question 7

-- delete from Sales
-- where SalesDate = '2022-01-01' 


