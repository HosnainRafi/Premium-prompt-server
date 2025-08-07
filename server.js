// server/server.js

const express = require("express");
const cors = require("cors");
require("dotenv").config();

const promptRoutes = require("./routes/prompt.routes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/prompt", promptRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
