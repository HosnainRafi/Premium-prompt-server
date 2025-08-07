// server/server.js

const express = require("express");
const cors = require("cors");
require("dotenv").config(); // Loads environment variables from .env file

const promptRoutes = require("./routes/prompt.routes");

const app = express();
const PORT = process.env.PORT || 5000; // Using 5000 as per your previous file

// --- Middleware ---
app.use(cors());
app.use(express.json());

// --- Root Route (Welcome Message) ---
// This handles requests to the base URL of your backend.
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the PromptCraft AI Specialist API!",
    status: "Healthy",
    usage:
      "Please send a POST request to the /api/prompt endpoint to start a conversation.",
  });
});

// --- API Routes ---
// All routes for the prompt specialist are handled here.
app.use("/api/prompt", promptRoutes);

// --- Vercel Deployment & Local Server Start ---

// This is the crucial change for deploying to Vercel.
// We only want the server to "listen" on a specific port when we are running it locally.
// On Vercel, the platform handles the server creation and port assignment automatically.
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`Server is running for local development on port: ${PORT}`);
  });
}

// Export the express app.
// This is required for Vercel to import your app into its serverless function handler.
module.exports = app;
