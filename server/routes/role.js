const express = require('express');
const roleController = require('../controllers/RoleController');

const router = express.Router();

router.get('/index', roleController.getAllRoles);
router.post('/create', roleController.createRole);
router.get('/edit/:id', roleController.getRoleById);
router.put('/update/:id', roleController.updateRole);
router.delete('/delete', roleController.deleteCategory);

module.exports = router;
