// userController.js
// This module handles user-related HTTP requests, such as signup and login
// It uses the userService for business logic and returns appropriate responses
const express = require("express");
const userService = require("../../domain/userService");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  try {
    const user = await userService.signupUser(req.body);
    res.status(201).json({ user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const login = async (req, res) => {
  try {
    const user = await userService.loginUser(req.body);
    // Generate JWT token
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.json({ token });
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};

module.exports = {
  signup,
  login,
};
