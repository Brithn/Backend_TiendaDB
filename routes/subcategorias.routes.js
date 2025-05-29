const express = require('express');
const router = express.Router();
const subcategoriasController = require('../controllers/subcategorias.controller');

// Rutas y funciones del controlador
router.get('/', subcategoriasController.getSubcategorias);
router.post('/', subcategoriasController.createSubcategoria);
router.delete('/:id', subcategoriasController.deleteSubcategoria);

module.exports = router;