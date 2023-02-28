use practice4;

-- create table books
-- (
--     id int auto_increment primary key,
--     title varchar(50),
--     author_id int,
--     publication_date date
-- );

-- create table authors
-- (
--     id int auto_increment primary key,
--     name varchar(50)
-- );

-- create table book_categories
-- (
--     id int auto_increment primary key,
--     name varchar(50)
-- );

-- create table book_category_mappings
-- (
--     id int auto_increment primary key,
--     book_id int,
--     category_id int
-- );

-- insert into books(title, author_id, publication_date)
-- values('book1', 1, '2020-01-01'),
-- ('book2', 2, '2020-01-02'),
-- ('book3', 3, '2020-01-03'),
-- ('book4', 4, '2020-01-04'),
-- ('book5', 5, '2020-01-05');

-- insert into authors(name)
-- values('author1'),
-- ('author2'),
-- ('author3'),
-- ('author4'),
-- ('author5');

-- insert into book_categories(name)
-- values('category1'),
-- ('category2'),
-- ('category3'),
-- ('category4'),
-- ('category5');

-- insert into book_category_mappings(book_id, category_id)
-- values(1, 1),
-- (2, 2),
-- (3, 3),
-- (4, 4),
-- (5, 5);
-- Q-1 
-- select * from books where publication_date like '2020%';

-- Q-2
-- select a.name, count(b.id) as total_books from authors a
-- inner join books b on a.id = b.author_id
-- group by a.name
-- order by total_books desc
-- limit 3;

-- Q-3
-- select c.name, count(bcm.id) as total_books from book_categories c
-- inner join book_category_mappings bcm on c.id = bcm.category_id
-- group by c.name
-- order by total_books desc
-- limit 1;

-- Q-4

-- select a.name, count(b.id) as total_books from authors a
-- inner join books b on a.id = b.author_id
-- inner join book_category_mappings bcm on b.id = bcm.book_id
-- inner join book_categories c on bcm.category_id = c.id
-- where c.name = 'fiction'
-- group by a.name
-- order by total_books desc
-- limit 1;    

-- Q -5

create table book_borrowings
(
    id int auto_increment primary key,
    book_id int,
    customer_id int,
    borrow_date date
);

insert into book_borrowings(book_id, customer_id, borrow_date)
values(1, 1, '2020-01-01'),
(2, 2, '2020-01-02'),
(3, 3, '2020-01-03'),
(4, 4, '2020-01-04'),
(5, 5, '2020-01-05'),
(1, 1, '2020-01-01'),
(2, 2, '2020-01-02'),
(3, 3, '2020-01-03'),
(4, 4, '2020-01-04'),
(5, 5, '2020-01-05');

select b.title, count(bb.id) as total_borrowings from books b
inner join book_borrowings bb on b.id = bb.book_id
group by b.title
order by total_borrowings desc
limit 5;


create table customer 
(
    id int auto_increment primary key,
    name varchar(50)
);
create table orders
(
    id int auto_increment primary key,
    customer_id int,
    order_date date
);

insert into customer(name)
values('customer1'),
('customer2'),
('customer3'),
('customer4'),
('customer5');

insert into orders(customer_id, order_date)
values(1, '2020-01-01'),
(2, '2020-01-02'),
(3, '2020-01-03'),
(4, '2020-01-04'),
(5, '2020-01-05'),
(1, '2020-01-01'),
(2, '2020-01-02'),
(3, '2020-01-03'),
(4, '2020-01-04'),
(5, '2020-01-05');

