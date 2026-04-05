const mongoose = require("mongoose");

const attendantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  staffId: { type: String, unique: true, required: true } // ✅ make it required
}, { timestamps: true });

attendantSchema.set("toJSON", {
  transform: (doc, ret) => {
    delete ret.__v;
    return ret;
  }
});

module.exports = mongoose.model("Attendant", attendantSchema);