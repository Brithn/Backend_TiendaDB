const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productos.controller');

router.get('/', productosController.getProductos);
router.post('/', productosController.createProducto);
router.delete('/:id', productosController.deleteProducto);

router.get('/detallado', productosController.getProductosDetallado);


module.exports = router;