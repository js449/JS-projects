const request = require("supertest");
const app = require("../app");
const db = require("../data-access/db");

const testEmail = `testuser${Date.now()}@example.com`;
const testPassword = "Test@123";

afterAll(async () => {
  await db.end?.();
});

describe("User API Endpoints", () => {
  it("should signup a new user successfully", async () => {
    const res = await request(app).post("/api/users/signup").send({
      email: testEmail,
      password: testPassword,
    });

    expect(res.statusCode).toEqual(201);
    expect(res.body.user).toHaveProperty("id"); // ✅ match actual structure
    expect(res.body.user).toHaveProperty("email", testEmail);
    expect(res.body.user).not.toHaveProperty("password");
  });

  it("should login with correct credentials", async () => {
    const res = await request(app).post("/api/users/login").send({
      email: testEmail,
      password: testPassword,
    });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("token"); // adjust if needed
  });

  it("should reject login with wrong password", async () => {
    const res = await request(app).post("/api/users/login").send({
      email: testEmail,
      password: "WrongPassword123",
    });

    expect(res.statusCode).toEqual(401); // ✅ fix from 400
    expect(res.body).toHaveProperty("error", "Invalid credentials");
  });
});
