const express = require('express');
const router = express.Router();
const reporteController = require('../controllers/reporteController');

router.get('/', reporteController.listarReportes);
router.get('/nuevo', reporteController.mostrarFormulario);
router.post('/nuevo', reporteController.generarReporte);

module.exports = router;