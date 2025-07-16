// data-access/repositories/productRepository.js
const db = require("../db");

const getAllProducts = async () => {
  const { rows } = await db.query("SELECT * FROM products ORDER BY id");
  return rows;
};

const getProductById = async (id) => {
  const { rows } = await db.query("SELECT * FROM products WHERE id = $1", [id]);
  return rows[0];
};

const createProduct = async ({ name, price, stock }) => {
  const { rows } = await db.query(
    "INSERT INTO products (name, price, stock) VALUES ($1, $2, $3) RETURNING *",
    [name, price, stock]
  );
  console.log("Inserted product:", rows[0]); // <-- Add this
  return rows[0];
};

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

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
