const routes = require('express').Router();
const baseController = require('../controllers/index');

// Esta es la ruta que busca el script.js del frontend
routes.get('/professional', baseController.getData);

module.exports = routes;