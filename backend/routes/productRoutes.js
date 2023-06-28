const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProducts,
  deleteProduct,
  getProductDetails,
  createProductReview,
} = require("../controllers/productController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

// Admin: POST: add New Product   -- admin
router.post(
  "/admin/product/new",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  createProduct
);

// GET: Get All products
router.get("/products", getAllProducts);

// Admin: Update: Update Products
router.put(
  "/admin/products/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  updateProducts
);

// amdin: delete: delete Products
router.delete(
  "/admin/products/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  deleteProduct
);

// GET: getProductsDetails
router.get("/products/:id", getProductDetails);

// PUT :create a review
router.put("/review", isAuthenticatedUser, createProductReview);

module.exports = router;
