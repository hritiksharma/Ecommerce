const catchAsyncError = require("../middleware/catchAsyncError");
const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorHandler");

// POST: Create a Product          --admin
exports.createProduct = catchAsyncError(async (req, res, next) => {
  const body = req.body;

  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
});

// GET - GET ALL Products
exports.getAllProducts = catchAsyncError(async (req, res) => {
  const products = await Product.find();

  if (products.length > 0) {
    res.status(200).json({
      success: true,
      products,
    });
  } else {
    res.status(404).send({ message: "Products are empty" });
  }
});

// put: Update Product
exports.updateProducts = catchAsyncError(async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }
  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).send({
    success: true,
    product,
  });
});

// delete : deleteProduct

exports.deleteProduct = catchAsyncError(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  await Product.findByIdAndRemove(req.params.id);

  res.status(200).send({
    success: true,
    message: "product deleted",
  });
});

//GET: getProductDetails

exports.getProductDetails = catchAsyncError(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  res.status(200).send({
    success: true,
    product,
  });
});
