const Author = require("../models/Author");

const createAuthor = async (req, res) => {
  try {
    const { name, bio } = req.body;
    const author = await Author.create({ name, bio });
    res.status(201).json(author);
  } 
  catch (err) 
  {
    res.status(500).json({ error: err.message });
  }
};

const getAuthors = async (req, res) => {
  try {
    const authors = await Author.find();
    res.status(200).json(authors);
  } 
  catch (err)
  {
    res.status(500).json({ error: err.message });
  }
};

const getAuthorById = async (req, res) => {
  try {
    const author = await Author.findById(req.params.id);
    if (!author) return res.status(404).json({ error: "Author not found" });
    res.status(200).json(author);
  } 
  catch (err) 
  {
    res.status(500).json({ error: err.message });
  }
};

const updateAuthor = async (req, res) => {
  try {
    const author = await Author.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!author) return res.status(404).json({ error: "Author not found" });
    res.status(200).json(author);
  } 
  catch (err) 
  {
    res.status(500).json({ error: err.message });
  }
};

const deleteAuthor = async (req, res) => {
  try {
    const author = await Author.findByIdAndDelete(req.params.id);
    if (!author) return res.status(404).json({ error: "Author not found" });
    res.status(200).json({ message: "Author deleted" });
  } 
  catch (err) 
  {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createAuthor,
  getAuthors,
  getAuthorById,
  updateAuthor,
  deleteAuthor
};