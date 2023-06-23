const catchAsyncError = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utils/errorHandler");
const User = require("../models/userModel");

exports.register = catchAsyncError(async (req, res) => {
  const { name, email, password, avatar } = req.body;
  console.log("Name, Email, Passord", name, email, password, avatar);

  const user = await User.create({
    name,
    email,
    password,
    avatar,
  });

  const token = user.getJWTToken();

  res.status(200).send({
    success: true,
    message: "user is registered",
    token,
  });
});
