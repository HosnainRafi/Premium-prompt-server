// server/routes/prompt.routes.js

const express = require("express");
const router = express.Router();
const { continueConversation } = require("../controllers/prompt.controller.js");

// API Endpoint: POST /api/prompt
router.post("/", continueConversation);

module.exports = router;
