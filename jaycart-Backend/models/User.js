const mongoose = require("mongoose");

/**
 * Mongoose schema for User model.
 *
 * @typedef {Object} User
 * @property {string} name - The name of the user. Required.
 * @property {string} email - The email address of the user. Required, unique, and stored in lowercase.
 * @property {string} password - The hashed password of the user. Required.
 * @property {boolean} [isAdmin=false] - Indicates if the user has admin privileges. Defaults to false.
 * @property {Date} createdAt - Timestamp when the user was created. Automatically managed by Mongoose.
 * @property {Date} updatedAt - Timestamp when the user was last updated. Automatically managed by Mongoose.
 */
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true, // Automatically add createdAt & updatedAt
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
