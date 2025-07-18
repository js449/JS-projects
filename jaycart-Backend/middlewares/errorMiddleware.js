// middlewares/errorMiddleware.js
// This module provides error handling middleware for the Express application
// It catches errors that occur during request processing and sends a standardized error response

const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;

  res.status(statusCode).json({
    error: err.message || "Internal Server Error",
  });
};

module.exports = errorHandler;
