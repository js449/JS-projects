// utils/jwtHelper.js
// npm install jsonwebtoken - to install jsonwebtoken for JWT handling
// This module provides functions to generate and verify JSON Web Tokens (JWT)
// It is used for user authentication and session management
// utils/jwtHelper.js
const jwt = require("jsonwebtoken");

// Read secrets from environment variables
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "1d";

// Generate a JWT token with given payload (e.g., user info)
function generateToken(payload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
}

// Verify a JWT token and return the decoded payload if valid
function verifyToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return null; // or throw error based on your error handling strategy
  }
}

module.exports = {
  generateToken,
  verifyToken,
};
