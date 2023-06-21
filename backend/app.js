const express = require("express");

const errorMiddleware = require("./middleware/error");

const app = express();
const productRoutes = require("./routes/productRoutes");

app.use(express.json());

app.use("/app/v1", productRoutes);

// Middleware for error

app.use(errorMiddleware);
module.exports = app;
