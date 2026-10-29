-- Day 13: Database Fundamentals

CREATE DATABASE student_management;

-- Connect to the database using psql
\c student_management

-- Create Students table
CREATE TABLE students (
    student_id SERIAL PRIMARY KEY,
    student_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    date_of_birth DATE
);

-- Create Courses table
CREATE TABLE courses (
    course_id SERIAL PRIMARY KEY,
    course_name VARCHAR(100) NOT NULL,
    credits INTEGER
);

-- Create Enrollments table
CREATE TABLE enrollments (
    enrollment_id SERIAL PRIMARY KEY,
    student_id INTEGER REFERENCES students(student_id),
    course_id INTEGER REFERENCES courses(course_id),
    enrollment_date DATE DEFAULT CURRENT_DATE
);

-- Insert student records
INSERT INTO students (student_name, email, date_of_birth)
VALUES
('Rahul Patil', 'rahul@example.com', '2004-05-15'),
('Priya Sharma', 'priya@example.com', '2003-08-20');

-- Insert course records
INSERT INTO courses (course_name, credits)
VALUES
('Python', 4),
('Database Management', 3);

-- Insert enrollment records
INSERT INTO enrollments (student_id, course_id)
VALUES
(1, 1),
(1, 2),
(2, 1);

-- Display students and their courses
SELECT
    students.student_name,
    courses.course_name,
    enrollments.enrollment_date
FROM enrollments
JOIN students
    ON enrollments.student_id = students.student_id
JOIN courses
    ON enrollments.course_id = courses.course_id;