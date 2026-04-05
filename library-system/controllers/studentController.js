const Student = require('../models/Student');

const createStudent = async (req, res) => {
  try {
    const { name, email, studentId } = req.body;
    const student = await Student.create({ name, email, studentId });
    res.status(201).json(student);
  } 
  catch (err) 
  {
    res.status(500).json({ error: err.message });
  }
};

const getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } 
  catch (err) 
  {
    res.status(500).json({ error: err.message });
  }
};

const getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).json({ error: "Student not found" });
    res.status(200).json(student);
  } 
  catch (err) 
  {
    res.status(500).json({ error: err.message });
  }
};

const updateStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!student) return res.status(404).json({ error: "Student not found" });
    res.status(200).json(student);
  } 
  catch (err) 
  {
    res.status(500).json({ error: err.message });
  }
};

const deleteStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) return res.status(404).json({ error: "Student not found" });
    res.status(200).json({ message: "Student deleted" });
  } 
  catch (err) 
  {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createStudent,
  getStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
};