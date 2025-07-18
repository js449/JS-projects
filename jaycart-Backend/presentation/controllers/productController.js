// presentation/controllers/productController.js
const productService = require("../../domain/productService"); // Import the product service to handle business logic

// This module provides functions to handle HTTP requests related to products
// It includes functions to get all products, get a product by ID,
// create a new product, update an existing product, and delete a product
// Each function interacts with the product service to perform the necessary operations

// Function to get all products
// It calls the product service to retrieve all products and sends them as a JSON response
// If an error occurs, it sends a 500 status code with the error message
const getAllProducts = async (req, res) => {
  try {
    const products = await productService.getProducts();
    res.json(products); //returns all products in the database in json format
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Function to get a product by ID
// It calls the product service to retrieve a product by its ID
// If the product is not found, it sends a 404 status code with an error message
//req.params.id is used to get the product ID from the request parameters
// If an error occurs, it sends a 500 status code with the error message
const getProductById = async (req, res) => {
  try {
    const product = await productService.getProduct(req.params.id);
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Function to create a new product
// It calls the product service to add a new product using the data from the request body
// If the product is created successfully, it sends a 201 status code with the created product
// If validation fails or an error occurs, it sends a 400 status code with the error message
//req.body contains the data for the new product in the json format
// It expects the request body to contain the product details like name, price, and stock
const createProduct = async (req, res) => {
  try {
    const newProduct = await productService.addProduct(req.body);
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Function to update an existing product
// It calls the product service to update a product using the ID from the request parameters and the data from the request body
// If the product is updated successfully, it sends the updated product as a JSON response
const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await productService.updateProduct(
      req.params.id,
      req.body
    );
    if (!updatedProduct)
      return res.status(404).json({ error: "Product not found" });
    res.json(updatedProduct);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Function to delete a product by ID
// It calls the product service to delete a product using the ID from the request parameters
// If the product is deleted successfully, it sends a 204 status code with no content
// If an error occurs, it sends a 500 status code with the error message
//req.params.id is used to get the product ID from the request parameters
const deleteProduct = async (req, res) => {
  try {
    await productService.removeProduct(req.params.id);
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Export the functions to be used in the routes
// This allows the application to handle product-related HTTP requests
// Each function corresponds to a specific route in the application
module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
