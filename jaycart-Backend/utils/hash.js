// utils/hash.js
//npm install bcrypt - to install bcrypt for password hashing
// This module provides functions to hash passwords and compare them with hashed passwords
// What this does:
// hashPassword: Used when a user signs up. We’ll store the hashed password in the DB.
// comparePassword: Used during login to verify entered password matches the stored hash.
const bcrypt = require("bcrypt");

const SALT_ROUNDS = 10;

// Hash a plain password
const hashPassword = async (plainPassword) => {
  return await bcrypt.hash(plainPassword, SALT_ROUNDS);
};

// Compare a plain password with a hashed one
const comparePassword = async (plainPassword, hashedPassword) => {
  return await bcrypt.compare(plainPassword, hashedPassword);
};

module.exports = {
  hashPassword,
  comparePassword,
};
