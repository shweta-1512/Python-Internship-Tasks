-- DAY 14 SQL TASK - QUERY 1
CREATE DATABASE StudentDB;
GO

USE StudentDB;
GO

CREATE TABLE Students (
    StudentID INT PRIMARY KEY,
    StudentName VARCHAR(100),
    Age INT,
    Email VARCHAR(100),
    Course VARCHAR(50)
);
GO

-- DAY 14 SQL TASK - QUERY 2
USE StudentDB;
GO

INSERT INTO Students (StudentID, StudentName, Age, Email, Course)
VALUES
(1, 'Rahul', 21, 'rahul@gmail.com', 'Python'),
(2, 'Priya', 22, 'priya@gmail.com', 'Java'),
(3, 'Amit', 20, 'amit@gmail.com', 'SQL'),
(4, 'Sneha', 23, 'sneha@gmail.com', 'Python'),
(5, 'Rohan', 21, 'rohan@gmail.com', 'Web Development');
GO


SELECT * FROM Students;


SELECT StudentName, Age
FROM Students;


SELECT * FROM Students
WHERE Age > 21;


SELECT * FROM Students
WHERE Course = 'Python';


SELECT * FROM Students
ORDER BY StudentName ASC;


UPDATE Students
SET Age = 24
WHERE StudentID = 2;

-- DAY 14 SQL TASK - QUERY 3
USE StudentDB;
GO

UPDATE Students
SET Age = 24
WHERE StudentID = 2;
GO

SELECT * FROM Students;

DELETE FROM Students
WHERE StudentID = 5;

SELECT * FROM Students;

SELECT * FROM Students
ORDER BY Age DESC;

SELECT COUNT(*) AS TotalStudents
FROM Students;

