const express = require('express');
const router = express.Router();
const ventaController = require('../controllers/ventaController');

router.get('/', ventaController.listarVentas);
router.get('/nueva', ventaController.mostrarFormularioVenta);
router.post('/nueva', ventaController.registrarVenta);

module.exports = router;