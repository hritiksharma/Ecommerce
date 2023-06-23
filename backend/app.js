const express = require("express");

const errorMiddleware = require("./middleware/error");

const app = express();
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");

app.use(express.json());

app.use("/app/v1", productRoutes);
app.use("/app/v1", userRoutes);

// Middleware for error

app.use(errorMiddleware);
module.exports = app;
