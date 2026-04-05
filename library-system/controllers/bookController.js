const Book = require("../models/Book");

const createBook = async (req, res) => {
  try {
    const { title, isbn, authors } = req.body;
    const book = await Book.create({ title, isbn, authors });
    res.status(201).json(book);
  } 
  catch (err) 
  {
    res.status(500).json({ error: err.message });
  }
};

const getBooks = async (req, res) => {
  try {
    const books = await Book.find().populate("authors");
    res.status(200).json(books);
  } 
  catch (err) 
  {
    res.status(500).json({ error: err.message });
  }
};

const getBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id)
      .populate("authors")
      .populate("borrowedBy")
      .populate("issuedBy");
    if (!book) return res.status(404).json({ error: "Book not found" });
    res.status(200).json(book);
  } 
  catch (err) 
  {
    res.status(500).json({ error: err.message });
  }
};

const updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!book) return res.status(404).json({ error: "Book not found" });
    res.status(200).json(book);
  } 
  catch (err) 
  {
    res.status(500).json({ error: err.message });
  }
};

const deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) return res.status(404).json({ error: "Book not found" });
    res.status(200).json({ message: "Book deleted" });
  } 
  catch (err) 
  {
    res.status(500).json({ error: err.message });
  }
};

// Borrow Book
const borrowBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book || book.status === "OUT") return res.status(400).json({ message: "Book not available" });

    book.status = "OUT";
    book.borrowedBy = req.body.studentId;
    book.issuedBy = req.body.attendantId;
    book.returnDate = req.body.returnDate;

    await book.save();
    const populatedBook = await Book.findById(book._id)
      .populate("authors")
      .populate("borrowedBy")
      .populate("issuedBy");

    res.status(200).json(populatedBook);
  } 
  catch (err) 
  {
    res.status(500).json({ error: err.message });
  }
};

const returnBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book || book.status === "IN") return res.status(400).json({ message: "Book already returned" });

    book.status = "IN";
    book.borrowedBy = null;
    book.issuedBy = null;
    book.returnDate = null;

    await book.save();
    res.status(200).json(book);
  } 
  catch (err) 
  {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createBook,
  getBooks,
  getBook,
  updateBook,
  deleteBook,
  borrowBook,
  returnBook,
};