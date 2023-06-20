const Product = require("../models/productModel");

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
