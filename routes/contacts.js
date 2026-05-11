const express = require('express');
const router = express.Router();
const contactsController = require('../controllers/contacts');

// GET para traer todos los contactos
router.get('/', contactsController.getAll);

// GET para traer uno solo por su ID
router.get('/:id', contactsController.getSingle);

module.exports = router;