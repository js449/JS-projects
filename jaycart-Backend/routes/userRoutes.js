const express = require("express");
const router = express.Router();
/**
 * Imports the registerUser function from the userController module.
 * @module routes/userRoutes
 * @requires ../controllers/userController
 */
const { registerUser } = require("../controllers/userController");

router.post("/register", registerUser);

module.exports = router;
