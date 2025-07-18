const request = require("supertest");
const app = require("../app");
const db = require("../data-access/db");

let createdProductId;
let authToken; // 🛡️ for storing JWT or session token

beforeAll(async () => {
  // Signup or login to get a valid token
  const testEmail = `test${Date.now()}@example.com`;
  const password = "Test@123";

  // Signup
  await request(app).post("/api/users/signup").send({
    email: testEmail,
    password,
  });

  // Login
  const loginRes = await request(app).post("/api/users/login").send({
    email: testEmail,
    password,
  });

  authToken = loginRes.body.token; // 🔐 Adjust if your token is nested differently
});

afterAll(async () => {
  // Proper DB teardown
  await db.end?.(); // Optional chaining in case db.end doesn't exist
});

describe("Product API Endpoints", () => {
  // CREATE
  it("should create a new product", async () => {
    const res = await request(app)
      .post("/api/products")
      .set("Authorization", `Bearer ${authToken}`) // 🛡️ Required
      .send({
        name: "Test Product",
        price: 19.99,
        stock: 10, // ✅ required field
      });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("id");
    expect(res.body).toHaveProperty("name", "Test Product");
    createdProductId = res.body.id;
  });
  // GET ALL
  it("should get all products", async () => {
    const res = await request(app).get("/api/products");

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  // GET ONE
  it("should get a product by ID", async () => {
    const res = await request(app).get(`/api/products/${createdProductId}`);

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("id", createdProductId);
  });

  // DELETE
  it("should delete a product by ID", async () => {
    const res = await request(app)
      .delete(`/api/products/${createdProductId}`)
      .set("Authorization", `Bearer ${authToken}`);

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("message", "Product deleted successfully");
  });

  // GET DELETED
  it("should return 404 for deleted product", async () => {
    const res = await request(app).get(`/api/products/${createdProductId}`);

    expect(res.statusCode).toBe(404);
    expect(res.body).toHaveProperty("error", "Product not found");
  });
});
