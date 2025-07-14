const mongoose = require("mongoose");

/**
 * Asynchronously connects to the MongoDB database using the URI specified in environment variables.
 * Logs the connection host on success, and exits the process on failure.
 *
 * @async
 * @function connectDB
 * @returns {Promise<void>} Resolves when the connection is successful.
 */
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error("MongoDB connection failed:", err.message);
    process.exit(1); // Stop the app if DB fails
  }
};

module.exports = connectDB;
