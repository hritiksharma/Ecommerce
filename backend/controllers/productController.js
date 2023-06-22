const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorHandler");

// POST: Create a Product          --admin
exports.createProduct = async (req, res) => {
  try {
    const body = req.body;

    const product = await Product.create(req.body);

    res.status(201).json({
      success: true,
      product,
    });
  } catch (error) {
    console.log("Error", Error);
    res.status(500).send("Error in add Product");
  }
};

// GET - GET ALL Products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();

    if (products.length > 0) {
      res.status(200).json({
        success: true,
        products,
      });
    } else {
      res.status(404).send({ message: "Products are empty" });
    }
  } catch (error) {
    res.status(500).send({ message: "Internal server Error" });
  }
};

// put: Update Product
exports.updateProducts = async (req, res) => {
  try {
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
  } catch (error) {
    console.log("Error:updateProducts", error);
    res.status(500).send(error);
  }
};

// delete : deleteProduct

exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return next(new ErrorHandler("Product not found", 404));
    }

    await Product.findByIdAndRemove(req.params.id);

    res.status(200).send({
      success: true,
      message: "product deleted",
    });
  } catch (error) {
    console.log("Error:deleteProducts", error);
    res.status(500).send(error);
  }
};

//GET: getProductDetails

exports.getProductDetails = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return next(new ErrorHandler("Product not found", 404));
    }

    res.status(200).send({
      success: true,
      product,
    });
  } catch (error) {
    console.log("Error:getProductDetails", error);
    res.status(500).send(error);
  }
};
