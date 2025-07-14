# 🛒 JayCart Backend API

A simple and scalable backend for an eCommerce platform built with **Node.js**, **Express.js**, and **MongoDB**. This project is under active development.

---

## ✅ Features Implemented So Far

- User Registration (POST /api/users/register)
- MongoDB database connection (via Mongoose)
- API development with Express.js
- Project structure using MVC pattern
- Environment variable setup with dotenv
- Modular folder structure
- Ready to scale with additional features like login, products, cart, and payments

---

## 🗂️ Project Structure

jaycart-backend/
├── config/
│ └── db.js # MongoDB connection logic

├── controllers/
│ └── userController.js # Handles user registration logic

├── models/
│ └── User.js # Mongoose schema for User

├── routes/
│ └── userRoutes.js # API routes for users

├── .env # Environment variables (not committed)

├── index.js # Entry point of the backend app

└── package.json # Project dependencies and scripts

## 🔧 Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB + Mongoose**
- **dotenv** – Securely handle environment variables
- **CORS** – Allow frontend and backend communication
- **Nodemon** – Live server reloading for development

---

## 🧪 API Endpoint

### `POST /api/users/register`

Registers a new user in the database.

**Request Body (JSON):**

{
"name": "John Doe",
"email": "john@example.com",
"password": "123456"
}

Success Response:

{
"\_id": "mongodb_generated_id",
"name": "John Doe",
"email": "john@example.com"
}

## 🌐 How to Run Locally

1. Clone the repository

git clone https://github.com/yourusername/jaycart-backend.git
cd jaycart-backend

2. Install dependencies

npm install

3. Create a .env file

PORT=5000
MONGO_URI=your_mongodb_connection_string

4. Start the server

npm run dev

You should see:
Server running on port 5000
MongoDB Connected: ✅

📦 Coming Soon

🔐 Login & JWT Authentication
🔑 Password Hashing with Bcrypt
🛍️ Product and Cart APIs
💳 Payment Integration
🌍 Frontend (React) Integration

📁 License
This project is licensed under the MIT License.

🤝 Contributions
Pull requests are welcome. Please keep the code clean and modular.

👨‍💻 Author
Developed by Jay Singh
(Backend Developer – 2025 Roadmap)
