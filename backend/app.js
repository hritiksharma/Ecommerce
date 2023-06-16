const express = require("express");

const app = express();
const productRoutes = require("./routes/productRoutes");

app.use(express.json());

app.use("/app/v1", productRoutes);

module.exports = app;
