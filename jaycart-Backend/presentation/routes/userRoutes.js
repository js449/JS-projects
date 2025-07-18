// userRoutes.js
// This module defines the routes for user-related operations such as signup and login
// It uses the userController to handle the requests and responses

const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

const {
  validateUserSignup,
  validateUserLogin,
} = require("../../middlewares/validateMiddleware");

router.post("/signup", validateUserSignup, userController.signup);
router.post("/login", validateUserLogin, userController.login);

module.exports = router;
