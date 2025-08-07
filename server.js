// server.js

const express = require("express");
const cors = require("cors");
require("dotenv").config();

const promptRoutes = require("./routes/prompt.routes");

const app = express();
// Vercel provides its own PORT, but we set a default for local use
const PORT = process.env.PORT || 5000;

// --- Middleware ---
app.use(cors());
app.use(express.json());

// --- Root Route for Health Check ---
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the Premium Prompt Server API!",
    status: "Healthy",
  });
});

// --- API Routes ---
app.use("/api/prompt", promptRoutes);

// --- Vercel Export ---
// This line exports the configured 'app' for Vercel's serverless environment.
module.exports = app;

// --- Localhost Start ---
// This block of code will only run if the file is executed directly
// (e.g., "node server.js") and NOT when imported by Vercel.
// This allows you to run the server on localhost for testing.
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running for local development on port: ${PORT}`);
  });
}
