
const Product = require('../models/Product');

exports.createProduct = async (req, res) => {
  try {
    const { name, price, category, description, image } = req.body;

    const newProduct = await Product.create({
      name,
      price,
      category,
      description,
      image,
      createdBy: req.user.id
    });

    res.status(201).json({ message: "Product created", product: newProduct });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};