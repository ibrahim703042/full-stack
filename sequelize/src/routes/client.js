const express = require('express');
const router = express.Router();
const clientController = require('../controllers/RoleController');

router.get('/index', clientController.getAllClients);
router.post('/store', clientController.createClient);
router.get('/edit/:id', clientController.getClientById);
router.put('/update/:id', clientController.updateClient);
router.delete('/delete', clientController.deleteClient);

module.exports = router;
