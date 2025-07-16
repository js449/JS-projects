// domain/productService.js
const productRepo = require("../data-access/repositories/productRepository");

const getProducts = () => productRepo.getAllProducts();

const getProduct = (id) => productRepo.getProductById(id);

const addProduct = (data) => {
  // Example validation
  if (!data.name || data.price == null || data.stock == null) {
    throw new Error("Name, price and stock are required");
  }
  if (data.price < 0 || data.stock < 0) {
    throw new Error("Price and stock must be non-negative");
  }
  return productRepo.createProduct(data);
};

const updateProduct = (id, data) => {
  if (data.price < 0 || data.stock < 0) {
    throw new Error("Price and stock must be non-negative");
  }
  return productRepo.updateProduct(id, data);
};

const removeProduct = (id) => productRepo.deleteProduct(id);

module.exports = {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  removeProduct,
};
