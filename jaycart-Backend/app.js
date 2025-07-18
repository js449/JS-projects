// app.js
require("dotenv").config(); // Load environment variables from .env file
const express = require("express"); // Import the express module to create an Express application
const app = express(); // Create an instance of the Express application

app.use(express.json()); // Middleware to parse JSON request bodies

// Import routes
const productRoutes = require("./presentation/routes/productRoutes");
const userRoutes = require("./presentation/routes/userRoutes"); // Import user routes

// Import custom error handler middleware
const errorHandler = require("./middlewares/errorMiddleware");

// Use routes
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes); // Register user routes

// Global error handler middleware
app.use(errorHandler);

module.exports = app;
