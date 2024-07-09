const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

router.get('/index', productController.getAllProducts);
router.post('/store', productController.createProduct);
router.get('/edit/:id', productController.getProductById);
router.put('/update/:id', productController.updateProduct);
router.delete('/delete', productController.deleteProduct);

module.exports = router;
