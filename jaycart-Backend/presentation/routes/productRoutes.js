// presentation/routes/productRoutes.js
// This module defines the routes for product-related operations
// It uses the productController to handle the requests and responses

const express = require("express");
const router = express.Router();

const authMiddleware = require("../../middlewares/authMiddleware");
// Import validation middleware for product creation and update
// This ensures that the incoming request data is valid before processing
// It checks for required fields and formats, returning errors if validation fails
const {
  validateProduct,
  validateProductUpdate,
} = require("../../middlewares/validateMiddleware");

const productController = require("../controllers/productController");

// ✅ Test route to verify JWT token is working
// This route is protected by the authMiddleware
// It checks if the user is authenticated before allowing access
// If the token is valid, it returns a success message and user data
// If the token is invalid or missing, it returns a 401 Unauthorized error
router.get("/protected/test", authMiddleware, (req, res) => {
  res.json({
    message: "You are authorized to access this route!",
    user: req.user,
  });
});

// Public routes
router.get("/", productController.getAllProducts);
router.get("/:id", productController.getProductById);

// Protected + Validated routes
router.post(
  "/",
  authMiddleware,
  validateProduct,
  productController.createProduct
);
router.put(
  "/:id",
  authMiddleware,
  validateProductUpdate,
  productController.updateProduct
);
router.delete("/:id", authMiddleware, productController.deleteProduct);

module.exports = router;
