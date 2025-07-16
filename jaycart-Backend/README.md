# JayCart Backend

This is the backend for the JayCart eCommerce project, built using Node.js, Express, and PostgreSQL with plain SQL queries. The project follows a clean layered architecture inspired by the MVC pattern to organize code for scalability and maintainability.

---

## Project Structure & Architecture

The backend is structured into logical layers to separate concerns:

/jaycart-Backend

├── data-access/ # Data layer: direct SQL queries here
│ ├── db.js # PostgreSQL connection setup with pg
│ └── repositories/ # SQL query functions for each entity
│ ├── productRepository.js
│ ├── userRepository.js
│ ├── cartRepository.js
│ └── orderRepository.js
├── domain/ # Business logic and validation
│ ├── productService.js
│ ├── userService.js
│ ├── cartService.js
│ └── orderService.js
├── presentation/ # API Layer (Express controllers + routes)
│ ├── controllers/
│ │ ├── productController.js
│ │ ├── userController.js
│ │ ├── cartController.js
│ │ └── orderController.js
│ └── routes/
│ ├── productRoutes.js
│ ├── userRoutes.js
│ ├── cartRoutes.js
│ └── orderRoutes.js
├── middlewares/ # Middleware (auth, error handling, validation)
│ ├── authMiddleware.js
│ ├── errorMiddleware.js
│ └── validateMiddleware.js
├── utils/ # Helper functions (e.g. token generation)
│ └── jwtHelper.js
├── app.js # Express app setup, middleware & routes registration
├── server.js # Server entry point
├── .env # Environment variables (DB creds, JWT secret, Stripe keys)
├── package.json
└── README.md

---

## How Layers Work Together

- **Data Access Layer**: Contains raw SQL queries to interact with the PostgreSQL database.
- **Domain Layer**: Contains business logic, validation, and application rules.
- **Presentation Layer**: Handles incoming HTTP requests, calls domain logic, and sends responses.

This separation helps keep the codebase clean, scalable, and easy to maintain.

## Setup & Running Locally

1. ## Clone the repository

   git clone <your-repo-url>
   cd jaycart-Backend

2. ## Install dependencies

   npm install

3. ## Create .env file
   Add your environment variables:

DATABASE_URL=postgresql://postgres:<password>@localhost:5432/jaycart_db
PORT=5000
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_key

4. ## Start the backend server
   node server.js

keep track of logs indicating connection to PostgreSQL and server running on specified port on console.

## API Endpoints Implemented So Far

POST /api/products — Create a new product

(Add other endpoints as you implement)

## Notes

I'm currently using plain SQL queries with the pg library instead of ORM for greater control and simplicity.

Database schema is managed manually; migration scripts coming soon.

The backend follows a layered architecture inspired by MVC for clarity and maintainability.

## Next Steps

Complete full CRUD for products

Add input validation

Implement user authentication with JWT

Build shopping cart and order management

Integrate Stripe payments

Improve error handling and write tests

## Contributing

Contributions are welcome! Feel free to open issues or pull requests.
