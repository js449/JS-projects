// data-access/repositories/productRepository.js
const db = require("../db"); // Import the database query module

// This module provides functions to interact with the products table in the database
// Define functions to interact with the products table in the database
// These functions will be used to get all products, get a product by ID,
// create a new product, update an existing product, and delete a product

const getAllProducts = async () => {
  const { rows } = await db.query("SELECT * FROM products ORDER BY id");
  return rows; //output all products in the database example: [{id: 1, name: 'Product1', price: 100, stock: 50}, ...]
};

const getProductById = async (id) => {
  const { rows } = await db.query("SELECT * FROM products WHERE id = $1", [id]);
  return rows[0]; //output a single product by id example: {id: 1, name: 'Product1', price: 100, stock: 50}
};

// Function to create a new product in the database
// It takes an object with name, price, and stock properties and returns the created product
// It uses a SQL INSERT statement to add the new product to the products table
// async request means it will return a promise that resolves to the created product
//awaits are used to wait for the database query to complete before returning the result
const createProduct = async ({ name, price, stock }) => {
  const { rows } = await db.query(
    "INSERT INTO products (name, price, stock) VALUES ($1, $2, $3) RETURNING *",
    [name, price, stock]
  );
  console.log("Inserted product:", rows[0]); // Log the inserted product for debugging
  return rows[0];
};

// Function to update an existing product in the database
// It takes an id and an object with name, price, and stock properties
// It returns the updated product after executing the SQL UPDATE statement
// The RETURNING * clause returns the updated product
//we can also use something else instead of placeholders $1, $2, $3, $4
// to avoid confusion with the parameters for example: $name, $price, $stock, $id
const updateProduct = async (id, { name, price, stock }) => {
  const { rows } = await db.query(
    "UPDATE products SET name = $1, price = $2, stock = $3 WHERE id = $4 RETURNING *",
    [name, price, stock, id]
  );
  return rows[0];
};

const deleteProduct = async (id) => {
  await db.query("DELETE FROM products WHERE id = $1", [id]);
};

// Export the functions to be used in other parts of the application
// This allows other modules to import these functions and use them to interact with the products table
module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
