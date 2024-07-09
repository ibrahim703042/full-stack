const express = require('express');
const categoryController = require('../controllers/categoryController');

const router = express.Router();

router.get('/index', categoryController.getAllCategories);
router.post('/store', categoryController.createCategory);
router.get('/edit/:id', categoryController.getCategoryById);
router.put('/update/:id', categoryController.updateCategory);
router.delete('/delete', categoryController.deleteCategory);

module.exports = router;
