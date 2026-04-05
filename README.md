Library Management API

Setup
1. npm install
2. Start MongoDB
3. npm start

Base URL
http://localhost:3000/api

Features
* Manage Authors, Books, Students, Attendants
* Borrow and Return Books
* Book linked to multiple authors

Endpoints
* Authors
POST /authors - Create author
GET /authors - Get all authors

* Books
POST /books - Create book (include author IDs)
GET /books - Get all books
GET /books/:id - Get one book

* Students
POST /students - Create student
GET /students - Get all students
GET /students/:id - Get one student

* Library Attendants
POST /attendants - Create attendant
GET /attendants - Get all attendants

* Borrow Book
POST /books/:id/borrow - Borrow a book

* Return Book
POST /books/:id/return - Return a book

Testing
I tested all endpoints using Postman and verified relationships and borrowing logic.


MVC Pattern:
* config
* controllers
* models
* routes
* server.js

I created the library environment(Postman environment variables) and included their unique id's for easier navigation for the authors,books,students and attendant.
