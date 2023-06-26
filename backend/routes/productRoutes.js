const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProducts,
  deleteProduct,
  getProductDetails,
} = require("../controllers/productController");
const { isAuthenticatedUser } = require("../middleware/auth");

const router = express.Router();

// POST: add New Product   -- admin
router.post("/products/new", isAuthenticatedUser, createProduct);

// GET: Get All products
router.get("/products", getAllProducts);

// Update: Update Products
router.put("/products/:id", isAuthenticatedUser, updateProducts);

// delete: delete Products
router.delete("/products/:id", isAuthenticatedUser, deleteProduct);

// GET: getProductsDetails
router.get("/products/:id", getProductDetails);
module.exports = router;
