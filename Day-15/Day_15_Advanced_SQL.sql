USE day15_advanced_sql;


-- =================================
-- 1. INSERT SAMPLE DATA
-- =================================

INSERT INTO students (student_name, city) VALUES
('Aarav', 'Pune'),
('Riya', 'Mumbai'),
('Neha', 'Pune'),
('Kabir', 'Nashik');


-- =================================
-- 2. DISPLAY TABLE RECORDS
-- =================================

-- Display students
SELECT * FROM students;

-- Display courses
SELECT * FROM courses;

-- Display enrollments
SELECT * FROM enrollments;


-- =================================
-- 3. AGGREGATE FUNCTIONS
-- =================================

-- COUNT: Total number of students
SELECT COUNT(*) AS total_students
FROM students;

-- SUM: Total course fees
SELECT SUM(fee) AS total_course_fees
FROM courses;

-- AVG: Average marks
SELECT AVG(marks) AS average_marks
FROM enrollments;

-- MIN and MAX: Lowest and highest marks
SELECT
    MIN(marks) AS lowest_marks,
    MAX(marks) AS highest_marks
FROM enrollments;


-- =================================
-- 4. GROUP BY
-- =================================

-- Count students in each course
SELECT
    c.course_name,
    COUNT(e.student_id) AS total_students
FROM courses c
LEFT JOIN enrollments e
ON c.course_id = e.course_id
GROUP BY c.course_id, c.course_name;


-- =================================
-- 5. HAVING
-- =================================

-- Display courses having more than one student
SELECT
    c.course_name,
    COUNT(e.student_id) AS total_students
FROM courses c
JOIN enrollments e
ON c.course_id = e.course_id
GROUP BY c.course_id, c.course_name
HAVING COUNT(e.student_id) > 1;


-- =================================
-- 6. JOINS
-- =================================

-- Display student name, course name and marks
SELECT
    s.student_name,
    c.course_name,
    e.marks
FROM students s
INNER JOIN enrollments e
ON s.student_id = e.student_id
INNER JOIN courses c
ON e.course_id = c.course_id
ORDER BY s.student_id;


-- =================================
-- 7. SUBQUERIES
-- =================================

-- Students scoring above average marks
SELECT s.student_name, e.marks
FROM students s
JOIN enrollments e
ON s.student_id = e.student_id
WHERE e.marks > (
    SELECT AVG(marks)
    FROM enrollments
);

-- Courses having fees above average
SELECT course_name, fee
FROM courses
WHERE fee > (
    SELECT AVG(fee)
    FROM courses
);