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

Direct link to the Library API
https://jauntyhadex-9250654.postman.co/workspace/Atolagbe-Adeola's-Workspace~85156089-bac6-433f-89e6-9e9fc5fe6feb/collection/53123429-ce7b658e-6518-44c0-8b42-ca5e1d53cd8d?action=share&source=copy-link&creator=53123429