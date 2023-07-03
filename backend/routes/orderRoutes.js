const {
  newOrder,
  getSingleOrder,
  myOrders,
  getAllOrders,
  updateOrder,
  deleteOrder,
} = require("../controllers/orderController");

const express = require("express");

const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

//POST: create a order
router.post("/order/new", isAuthenticatedUser, newOrder);

//GET: get single order details
router.get("/order/:id", isAuthenticatedUser, getSingleOrder);

// GET: get all order of user
router.get("/orders/me", isAuthenticatedUser, myOrders);

// GET: get all orders --Admin
router.get(
  "/admin/orders",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  getAllOrders
);

router.put(
  "/admin/order/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  updateOrder
);

router.put(
  "/admin/order/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  updateOrder
);

router.delete(
  "/admin/order/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  deleteOrder
);
//
module.exports = router;
