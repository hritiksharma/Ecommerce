const {
  newOrder,
  getSingleOrder,
  myOrders,
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
module.exports = router;
