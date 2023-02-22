-- use practice3

-- CREATE TABLE sales (
--  id INT PRIMARY KEY,
--  date DATE,
--  customer_id INT,
--  product_id INT,
--  quantity INT,
--  total_price DECIMAL(10,2)
-- );

select date , sum(total_price) from sales
where date between '2021-01-01' and '2021-12-31' 
group by date 
order by date asc;