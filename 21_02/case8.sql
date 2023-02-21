-- create database student_grade -- 

create table student(
    id int primary key auto_increment,
    name varchar(50) not null
);

create table subject(
    subject_id int primary key auto_increment,
    subject_name varchar(50) not null
);

create table semester(
    semester_id int primary key auto_increment,
    semester_name varchar(50) not null
);

create table grade(
    grade_id int primary key auto_increment,
    student_id int not null,
    subject_id int not null,
    semester_id int not null,
    grade int not null,
    foreign key (student_id) references student(student_id),
    foreign key (subject_id) references subject(subject_id),
    foreign key (semester_id) references semester(semester_id)
);

insert into student(student_name, student_age, student_address) values
('John', 20, 'New York'),
('Peter', 21, 'California'),
('Mary', 19, 'Texas'),
('Kate', 20, 'Florida'),
('David', 22, 'New Jersey');

insert into subject(subject_name) values
('Math'),
('English'),
('Science'),
('History'),
('Geography');

insert into semester(semester_name) values
('Semester 1'),
('Semester 2');
