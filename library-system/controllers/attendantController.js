const Attendant = require("../models/Attendant");

const createAttendant = async (req, res) => {
  try {
    const { name, staffId } = req.body;

    const attendant = await Attendant.create({ name, staffId });

    res.status(201).json(attendant);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAttendants = async (req, res) => {
  try {
    const attendants = await Attendant.find();
    res.status(200).json(attendants);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAttendantById = async (req, res) => {
  try {
    const attendant = await Attendant.findById(req.params.id);
    if (!attendant) return res.status(404).json({ error: "Attendant not found" });
    res.status(200).json(attendant);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateAttendant = async (req, res) => {
  try {
    const attendant = await Attendant.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!attendant) return res.status(404).json({ error: "Attendant not found" });
    res.status(200).json(attendant);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteAttendant = async (req, res) => {
  try {
    const attendant = await Attendant.findByIdAndDelete(req.params.id);
    if (!attendant) return res.status(404).json({ error: "Attendant not found" });
    res.status(200).json({ message: "Attendant deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createAttendant,
  getAttendants,
  getAttendantById,
  updateAttendant,
  deleteAttendant,
};