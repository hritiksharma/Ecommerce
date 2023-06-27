const express = require("express");

const router = express.Router();
const {
  register,
  login,
  logout,
  forgotPassword,
  resetPassword,
} = require("../controllers/userController");

router.post("/register", register);

router.post("/login", login);

router.post("/password/forgot", forgotPassword);

router.put("/password/reset/:token", resetPassword);

router.get("/logout", logout);

module.exports = router;
