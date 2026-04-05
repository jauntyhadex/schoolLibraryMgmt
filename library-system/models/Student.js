const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true },
  studentId: { type: String, unique: true }
}, { timestamps: true });

studentSchema.set("toJSON", {
  transform: (doc, ret) => {
    delete ret.__v;  // remove the __v field
    return ret;
  }
});

module.exports = mongoose.model("Student", studentSchema);