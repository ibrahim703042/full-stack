const express = require('express');
const router = express.Router();
const registerController = require('../../controllers/auths/RegisterController');

router.get('/index', registerController.getAllUsers);
router.post('/store', registerController.createUser);
router.get('/edit/:id', registerController.getUserById);
router.put('/update/:id', registerController.updateUser);
router.delete('/delete', registerController.deleteUser);

module.exports = router;
