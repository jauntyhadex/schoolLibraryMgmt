// server.js
const express = require("express");
const app = express();
const connectDB = require("./config/database"); // this will now work

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Import routes
const authorRoutes = require("./library-system/routes/authorRoutes");
const bookRoutes = require("./library-system/routes/bookRoutes");
const studentRoutes = require("./library-system/routes/studentRoutes");
const attendantRoutes = require("./library-system/routes/attendantRoutes");

// Use routes
app.use("/authors", authorRoutes);
app.use("/books", bookRoutes);
app.use("/students", studentRoutes);
app.use("/attendants", attendantRoutes);

// Test root route
app.get("/", (req, res) => res.send("Library API running"));

// Start server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));