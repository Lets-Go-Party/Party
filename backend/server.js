const express = require("express");
const db = require("./src/config/db");
const authRoutes = require("./src/routes/authRoutes");

const app = express();
app.use(express.json());

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));