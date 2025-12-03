
const express = require('express');
const router = express.Router();
const { createProduct, getProducts } = require('../controllers/productController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/add', authMiddleware, createProduct);
router.get('/', getProducts);

module.exports = router;