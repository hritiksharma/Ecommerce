const express = require("express");

const errorMiddleware = require("./middleware/error");

const app = express();
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const orderRoutes = require("./routes/orderRoutes");
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());
app.use("/api/v1", productRoutes);
app.use("/api/v1", userRoutes);
app.use("/api/v1", orderRoutes);
// Middleware for error

app.use(errorMiddleware);
module.exports = app;
