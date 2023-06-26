const catchAsyncError = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utils/errorHandler");
const User = require("../models/userModel");
const sendToken = require("../utils/jwtToken");

// POST: Register API
exports.register = catchAsyncError(async (req, res) => {
  const { name, email, password, avatar } = req.body;
  console.log("Name, Email, Passord", name, email, password, avatar);

  const user = await User.create({
    name,
    email,
    password,
    avatar,
  });

  sendToken(user, 200, res);
});

// POST: Login API
exports.login = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;

  console.log("Email and Password", email, password);

  if (!email || !password) {
    return next(new ErrorHandler("Please Enter Email and Password", 400));
  }

  const user = await User.findOne({ email }).select("+password");
  console.log("user", user);

  if (!user) {
    return next(new ErrorHandler("Incorrect Email and password", 400));
  }

  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    return next(new ErrorHandler("Incorrect Email and password", 400));
  }

  sendToken(user, 200, res);
});

exports.logout = catchAsyncError(async (req, res) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).send({
    success: true,
    message: "Logged Out",
  });
});
