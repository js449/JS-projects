// domain/userService.js
// This module handles user-related business logic, such as signup and login
// It interacts with the user repository and uses hashing utilities for password management
const userRepo = require("../data-access/repositories/userRepository");
const { hashPassword, comparePassword } = require("../utils/hash");

// Signup logic
const signupUser = async ({ email, password }) => {
  if (!email || !password) {
    throw new Error("Email and password are required");
  }

  const existingUser = await userRepo.getUserByEmail(email);
  if (existingUser) {
    throw new Error("Email already in use");
  }

  const hashedPassword = await hashPassword(password);

  return await userRepo.createUser({ email, password: hashedPassword });
};

// Login logic
const loginUser = async ({ email, password }) => {
  if (!email || !password) {
    throw new Error("Email and password are required");
  }

  const user = await userRepo.getUserByEmail(email);
  if (!user) {
    throw new Error("Invalid credentials");
  }

  const isMatch = await comparePassword(password, user.password);
  if (!isMatch) {
    throw new Error("Invalid credentials");
  }

  return user;
};

module.exports = {
  signupUser,
  loginUser,
};
