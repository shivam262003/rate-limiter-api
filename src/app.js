const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const authRoutes = require("./routes/auth.routes");

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Rate Limiter API is running 🚀",
        version: "1.0.0"
    });
});

// Authentication Routes
app.use("/api/auth", authRoutes);

module.exports = app;