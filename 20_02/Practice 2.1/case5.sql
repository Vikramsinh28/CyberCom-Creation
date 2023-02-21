-- use cybercom

create table Customers(
    id int auto_increment primary key,
    name varchar(255)
);

create table Orders(
   id int auto_increment primary key,
   customerId int
);
