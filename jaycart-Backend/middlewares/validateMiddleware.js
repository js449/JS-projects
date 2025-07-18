// middlewares/validationMiddleware.js
// npm install express-validator - This module provides validation middleware for user and product data
// It uses express-validator to validate incoming request data
// The middleware checks for required fields and formats, returning errors if validation fails

const { body, validationResult } = require("express-validator");

// Signup validation
const validateUserSignup = [
  body("email").isEmail().withMessage("Email must be valid"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

// Login validation
const validateUserLogin = [
  body("email").isEmail().withMessage("Email must be valid"),
  body("password").notEmpty().withMessage("Password cannot be empty"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

// Product creation validation
const validateProduct = [
  body("name").notEmpty().withMessage("Product name is required"),
  body("price")
    .isFloat({ gt: 0 })
    .withMessage("Price must be a number greater than 0"),
  body("stock")
    .isInt({ min: 0 })
    .withMessage("Stock must be an integer greater than or equal to 0"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

// Product update (PUT/PATCH) validation
const validateProductUpdate = [
  body("name")
    .optional()
    .notEmpty()
    .withMessage("Product name cannot be empty"),
  body("price")
    .optional()
    .isFloat({ gt: 0 })
    .withMessage("Price must be a number greater than 0"),
  body("stock")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Stock must be an integer ≥ 0"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = {
  validateUserSignup,
  validateUserLogin, // 👈 Exported for use in userRoutes
  validateProduct,
  validateProductUpdate,
};
