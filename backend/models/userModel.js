const mongoose = require("mongoose");
const validator = require("validator");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please Enter Your Name"],
    maxLength: [30, "Name cannot exceed 30 characters"],
    minLength: [4, "Name should be more then 4 characters"],
  },
  email: {
    type: String,
    required: [true, "Please Enter Email Address"],
    unique: true,
    validate: [validator.isEmail, "Please Enter a valid Email"],
  },
  password: {
    type: String,
    required: true,
    minLength: [8, "password should be more then 8 characters"],
    select: false,
  },
  avatar: {
    publicId: {
      type: String,
      required: true,
    },
    publicUrl: {
      type: String,
      required: true,
    },
  },
  role: {
    type: String,
    default: "user",
  },

  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

module.exports = mongoose.model("user", userSchema);
