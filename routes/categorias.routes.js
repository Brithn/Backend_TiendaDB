const express = require('express');
const router = express.Router();
const categoriasController = require('../controllers/categorias.controller');

// Rutas y funciones del controlador
router.get('/', categoriasController.getCategorias);
router.post('/', categoriasController.createCategorias);
router.delete('/:id', categoriasController.deleteCategoria);

module.exports = router;
    