const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProducts,
  deleteProduct,
  getProductDetails,
} = require("../controllers/productController");
const router = express.Router();

// POST: add New Product   -- admin
router.post("/products/new", createProduct);

// GET: Get All products
router.get("/products", getAllProducts);

// Update: Update Products
router.put("/products/:id", updateProducts);

// delete: delete Products
router.delete("/products/:id", deleteProduct);

// GET: getProductsDetails
router.get("/products/:id", getProductDetails);
module.exports = router;
