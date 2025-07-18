//Server entry point
// server.js
require("dotenv").config();
require("module-alias/register");
const app = require("./app");

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`JayCart backend running on port ${PORT}`);
});
