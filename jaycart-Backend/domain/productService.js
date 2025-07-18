// domain/productService.js
const productRepo = require("../data-access/repositories/productRepository"); // Import the product repository

// This module provides functions to interact with the product repository
// It includes functions to get all products, get a product by ID,
// add a new product, update an existing product, and delete a product
const getProducts = () => productRepo.getAllProducts();

const getProduct = (id) => productRepo.getProductById(id);

// Function to add a new product
// It validates the input data and calls the repository function to create the product
// If validation fails, it throws an error with a descriptive message
// This ensures that only valid products are added to the database
const addProduct = (data) => {
  // Example validation
  if (!data.name || data.price == null || data.stock == null) {
    throw new Error("Name, price and stock are required");
  }
  if (data.price < 0 || data.stock < 0) {
    throw new Error("Price and stock must be non-negative");
  }
  return productRepo.createProduct(data); // Call the repository function to create the product, output example: {id: 1, name: 'Product1', price: 100, stock: 50}
};

// Function to update an existing product
// It validates the input data and calls the repository function to update the product
// If validation fails, it throws an error with a descriptive message
const updateProduct = (id, data) => {
  if (data.price < 0 || data.stock < 0) {
    throw new Error("Price and stock must be non-negative");
  }
  return productRepo.updateProduct(id, data);
};

// Function to delete a product by ID
// It calls the repository function to delete the product
// If the product does not exist, it will not throw an error, but simply do nothing
const removeProduct = (id) => productRepo.deleteProduct(id);

// Export the functions to be used in other parts of the application
// This allows other modules to import these functions and use them to interact with the product repository
// instead of directly accessing the database or product repository
module.exports = {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  removeProduct,
};
