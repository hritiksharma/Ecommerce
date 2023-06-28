const express = require("express");

const router = express.Router();
const {
  register,
  login,
  logout,
  forgotPassword,
  resetPassword,
  getUserDetail,
  changePassword,
  updateProfile,
  getAllUsers,
  getSingleUser,
  updateUserRole,
} = require("../controllers/userController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

router.post("/register", register);

router.post("/login", login);

router.post("/password/forgot", forgotPassword);

router.put("/password/reset/:token", resetPassword);

router.get("/logout", logout);

router.get("/me", isAuthenticatedUser, getUserDetail);

router.put("/password/change", isAuthenticatedUser, changePassword);

router.put("/me/update", isAuthenticatedUser, updateProfile);

router.get(
  "/admin/users",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  getAllUsers
);

router.get(
  "/admin/user/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  getSingleUser
);

router.put(
  "/admin/role/update/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  updateUserRole
);
module.exports = router;
