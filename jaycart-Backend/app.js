// app.js
const express = require("express");
const app = express();

app.use(express.json());

// Import routes
const productRoutes = require("./presentation/routes/productRoutes");

// Use routes
app.use("/api/products", productRoutes);

// Basic error handler middleware (optional)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

module.exports = app;
