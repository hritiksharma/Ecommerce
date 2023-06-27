const express = require("express");

const router = express.Router();
const {
  register,
  login,
  logout,
  forgotPassword,
  resetPassword,
  getUserDetail,
} = require("../controllers/userController");
const { isAuthenticatedUser } = require("../middleware/auth");

router.post("/register", register);

router.post("/login", login);

router.post("/password/forgot", forgotPassword);

router.put("/password/reset/:token", resetPassword);

router.get("/logout", logout);

router.get("/me", isAuthenticatedUser, getUserDetail);

module.exports = router;
