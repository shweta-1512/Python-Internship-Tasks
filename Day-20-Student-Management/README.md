# Day 20 – EduSphere Student Management Portal

A Student Management Application built using React, Django REST Framework, and SQLite to manage student records through a simple and interactive dashboard.

## Project Overview

EduSphere is a CRUD-based student management web application that allows users to add, view, search, edit, and delete student records. The frontend is developed using React and connected to a Django REST API.

## Features

- Dashboard overview
- List and view students
- Add new student records
- Edit student details
- Delete student records
- Search students
- Course overview
- React frontend connected to Django REST API
- SQLite database
- Responsive user interface

## Technologies Used

- React.js
- Python
- Django
- Django REST Framework
- SQLite
- HTML5
- CSS3
- Git & GitHub

## Project Structure

--text
Day-20-Student-Management/
│
├── backend/
│   ├── manage.py
│   ├── db.sqlite3
│   └── ...
│
├── frontend/
│   ├── src/
│   │   ├── main.jsx
│   │   └── style.css
│   ├── package.json
│   └── ...
│
└── README.md


## Requirements

- Python 3.10+
- Node.js and npm

## How to Run the Project

### 1. Start the Backend

Open terminal in the backend folder:

---powershell---
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```

Backend API:

http://127.0.0.1:8000/api/students/

### 2. Start the Frontend

Open a separate terminal in the frontend folder:

---powershell---
cd frontend
npm install
npm run dev


Open the Vite URL displayed in the terminal, usually:

http://localhost:5173

## Project Outcome

Successfully developed EduSphere, a student management portal with CRUD operations, student search, course overview, dashboard statistics, and frontend-backend API integration.

---

**Python Internship – Day 20**