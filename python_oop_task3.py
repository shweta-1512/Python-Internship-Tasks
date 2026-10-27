# Python OOP Fundamentals
# Student, Employee, Inheritance, Encapsulation and Polymorphism


# 1. Student Class and Constructor
class Student:
    def __init__(self, name, roll_no, marks):
        self.name = name
        self.roll_no = roll_no
        self.__marks = marks  # Encapsulation

    def display(self):
        print("Name:", self.name)
        print("Roll Number:", self.roll_no)
        print("Marks:", self.__marks)

    def get_marks(self):
        return self.__marks

    def set_marks(self, marks):
        if 0 <= marks <= 100:
            self.__marks = marks
        else:
            print("Marks must be between 0 and 100.")


# 2. Employee Class
class Employee:
    def __init__(self, name, employee_id, salary):
        self.name = name
        self.employee_id = employee_id
        self.__salary = salary

    def display(self):
        print("Employee Name:", self.name)
        print("Employee ID:", self.employee_id)
        print("Salary:", self.__salary)


# 3. Inheritance
class Person:
    def __init__(self, name):
        self.name = name

    def introduce(self):
        print("My name is", self.name)


class CollegeStudent(Person):
    def __init__(self, name, course):
        super().__init__(name)
        self.course = course

    def introduce(self):
        print("My name is", self.name)
        print("My course is", self.course)


# 4. Polymorphism and Method Overriding
class Animal:
    def sound(self):
        print("Animal makes a sound")


class Dog(Animal):
    def sound(self):
        print("Dog barks")


class Cat(Animal):
    def sound(self):
        print("Cat meows")


# 5. Student Management Console Application
def student_management():
    students = []

    while True:
        print("\n===== Student Management System =====")
        print("1. Add Student")
        print("2. View Students")
        print("3. Update Student Marks")
        print("4. Exit")

        choice = input("Enter your choice: ")

        if choice == "1":
            name = input("Enter student name: ")
            roll_no = input("Enter roll number: ")

            try:
                marks = float(input("Enter marks (0-100): "))

                if not 0 <= marks <= 100:
                    print("Marks must be between 0 and 100.")
                    continue

            except ValueError:
                print("Please enter valid marks.")
                continue

            # Prevent duplicate roll numbers
            if any(s.roll_no == roll_no for s in students):
                print("Roll number already exists.")
                continue

            student = Student(name, roll_no, marks)
            students.append(student)
            print("Student added successfully!")

        elif choice == "2":
            if not students:
                print("No students found.")
            else:
                print("\n--- Student List ---")

                for student in students:
                    student.display()
                    print("--------------------")

        elif choice == "3":
            roll_no = input("Enter roll number: ")

            student = next(
                (s for s in students if s.roll_no == roll_no),
                None
            )

            if student is None:
                print("Student not found.")
                continue

            try:
                marks = float(input("Enter new marks (0-100): "))

                if student.set_marks(marks) is None and 0 <= marks <= 100:
                    print("Marks updated successfully!")

            except ValueError:
                print("Please enter valid marks.")

        elif choice == "4":
            print("Exiting Student Management System.")
            break

        else:
            print("Invalid choice. Please try again.")


# 6. Demonstration of OOP Concepts
if __name__ == "__main__":

    print("===== Student Class =====")
    student1 = Student("Shweta", "101", 85)
    student1.display()

    print("\n===== Employee Class =====")
    employee1 = Employee("Rahul", "E101", 25000)
    employee1.display()

    print("\n===== Inheritance =====")
    college_student = CollegeStudent("Priya", "BCA")
    college_student.introduce()

    print("\n===== Polymorphism =====")
    animals = [Dog(), Cat(), Animal()]

    for animal in animals:
        animal.sound()

    print("\n===== Student Management Application =====")
    student_management()