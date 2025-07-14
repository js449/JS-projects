const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config(); // Load .env file
connectDB(); // Connect MongoDB

const app = express();

app.use(cors()); // Allow frontend/backend to talk
app.use(express.json()); // Parse JSON requests

/**
 * @module userRoutes
 * @description Express router module for handling user-related routes.
 */
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("JayCart API is running 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
