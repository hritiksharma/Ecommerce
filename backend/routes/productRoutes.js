const express = require("express");
const {
  getAllProducts,
  createProduct,
} = require("../controllers/productController");
const router = express.Router();

// POST: add New Product   -- admin
router.post("/products/new", createProduct);

// GET: Get All products
router.get("/products", getAllProducts);
module.exports = router;
