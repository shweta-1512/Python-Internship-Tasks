import json
from pathlib import Path

FILE_NAME = "students.json"


def load_students():
    """Read student records from a JSON file."""
    path = Path(FILE_NAME)

    if not path.exists():
        return []

    try:
        with path.open("r", encoding="utf-8") as file:
            return json.load(file)
    except (json.JSONDecodeError, OSError) as error:
        print("Error reading file:", error)
        return []


def save_students(students):
    """Save student records to a JSON file."""
    try:
        with open(FILE_NAME, "w", encoding="utf-8") as file:
            json.dump(students, file, indent=4)
        print("Records saved successfully.")
    except OSError as error:
        print("Error saving file:", error)


def add_student(students):
    try:
        student_id = input("Enter student ID: ").strip()

        if any(s["id"] == student_id for s in students):
            print("Student ID already exists.")
            return

        name = input("Enter student name: ").strip()

        if not name:
            print("Name cannot be empty.")
            return

        marks = float(input("Enter marks (0-100): "))

        if not 0 <= marks <= 100:
            print("Marks must be between 0 and 100.")
            return

        students.append({
            "id": student_id,
            "name": name,
            "marks": marks
        })

        save_students(students)

    except ValueError:
        print("Invalid input. Enter marks as a number.")


def display_students(students):
    if not students:
        print("No student records found.")
        return

    for student in students:
        print(
            f"ID: {student['id']} | "
            f"Name: {student['name']} | "
            f"Marks: {student['marks']}"
        )


def search_student(students):
    search_value = input("Enter student ID or name: ").strip().lower()

    results = [
        student for student in students
        if student["id"].lower() == search_value
        or search_value in student["name"].lower()
    ]

    display_students(results)


def sort_students(students):
    print("1. Sort by name")
    print("2. Sort by marks")

    choice = input("Choose sorting option: ")

    if choice == "1":
        sorted_students = sorted(
            students,
            key=lambda student: student["name"].lower()
        )
    elif choice == "2":
        sorted_students = sorted(
            students,
            key=lambda student: student["marks"],
            reverse=True
        )
    else:
        print("Invalid choice.")
        return

    display_students(sorted_students)


def main():
    students = load_students()

    while True:
        print("\n--- Student Management System ---")
        print("1. Add student")
        print("2. Display students")
        print("3. Search student")
        print("4. Sort students")
        print("5. Exit")

        choice = input("Enter your choice: ")

        if choice == "1":
            add_student(students)
        elif choice == "2":
            display_students(students)
        elif choice == "3":
            search_student(students)
        elif choice == "4":
            sort_students(students)
        elif choice == "5":
            print("Thank you!")
            break
        else:
            print("Invalid choice. Please try again.")


if __name__ == "__main__":
    main()