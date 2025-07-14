const User = require("../models/User");

// @desc    Register new user
// @route   POST /api/users/register
// @access  Public
/**
 * Registers a new user.
 *
 * @async
 * @function registerUser
 * @param {Object} req - Express request object containing user details in req.body.
 * @param {Object} req.body - The request body.
 * @param {string} req.body.name - The name of the user.
 * @param {string} req.body.email - The email of the user.
 * @param {string} req.body.password - The password of the user.
 * @param {Object} res - Express response object used to send responses.
 * @returns {Promise<void>} Sends a JSON response with user info (excluding password) on success,
 * or an error message on failure.
 */
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create new user (for now password stored as plain text — will hash later)
    const user = await User.create({ name, email, password });

    // Send back some user info (no password!)
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  registerUser,
};
