

//create database Student_grade_system

create table Student(
    Student_id int primary key,
    Student_name varchar(50),
    Student_age int,
);

create table Subject(
    Subject_id int primary key,
    Subject_name varchar(50),
    Subject_credit int,
);

create table Grade(
    Student_id int,
    Subject_id int,
    Grade int,
    foreign key(Student_id) references Student(Student_id),
    foreign key(Subject_id) references Subject(Subject_id),
);