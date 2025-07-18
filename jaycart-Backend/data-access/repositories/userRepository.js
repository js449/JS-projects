// data-access/repositories/userRepository.js
const db = require("../db");

// Create a new user
const createUser = async ({ email, password }) => {
  const { rows } = await db.query(
    `INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id, email, created_at`,
    [email, password]
  );
  return rows[0]; // return the created user info without password
};

// Find a user by email (used for login)
const getUserByEmail = async (email) => {
  const { rows } = await db.query(`SELECT * FROM users WHERE email = $1`, [
    email,
  ]);
  return rows[0];
};

// Find a user by id
const getUserById = async (id) => {
  const { rows } = await db.query(
    `SELECT id, email, created_at FROM users WHERE id = $1`,
    [id]
  );
  return rows[0];
};

module.exports = {
  createUser,
  getUserByEmail,
  getUserById,
};
