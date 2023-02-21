use practice2;
create table Courses(
student varchar(255),
class varchar(255),
primary key(student , class)
);

insert into Courses (student, class) values ('A', 'Math'),
('B', 'English') ,
('C', 'Math') ,
 ('D', 'Biology') ,
('E', 'Math') ,
 ('F', 'Computer') ,
('G', 'Math') ,
 ('H', 'Math') ,
 ('I', 'Math') ;

select class from Courses
group by class
having count(distinct student) >= 5;