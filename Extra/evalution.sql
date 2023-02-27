create table customers
(
  customer_id int not null,
  customer_name varchar(50) not null,
  customer_address varchar(50) not null,
  customer_city varchar(50) not null,
  customer_state varchar(50) not null,
  customer_zip varchar(50) not null,
  customer_phone varchar(50) not null,
  customer_email varchar(50) not null,
  customer_password varchar(50) not null,
  primary key (customer_id)
);

create table products
(
  product_id int not null,
  product_name varchar(50) not null,
  product_description varchar(50) not null,
  product_price decimal(10,2) not null,
  primary key (product_id)
);

create table orders
(
  order_id int not null,
  order_date date not null,
  order_status varchar(50) not null,
  customer_id int not null,
  primary key (order_id),
  foreign key (customer_id) references customers(customer_id)
);


create table order_items
(
  order_item_id int not null,
  order_id int not null,
  product_id int not null,
  quantity int not null,
  primary key (order_item_id),
  foreign key (order_id) references orders(order_id),
  foreign key (product_id) references products(product_id)
);