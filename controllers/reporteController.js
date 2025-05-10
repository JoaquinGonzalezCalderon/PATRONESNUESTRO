const Reporte = require('../models/reporte');

const mostrarFormulario = (req, res) => {
    res.render('reportes/nuevo');
};

const generarReporte = async (req, res) => {
    const { tipo, rangoFechas } = req.body;

    // Simulación de análisis de datos
    const datosAnalizados = 'Reporte ${ tipo } generado para ${ rangoFechas }';

    await Reporte.create({ tipo, rangoFechas, datosAnalizados });
    res.redirect('/reportes');
};

const listarReportes = async (req, res) => {
    const reportes = await Reporte.findAll();
    res.render('reportes/lista', { reportes });
};

module.exports = {
    mostrarFormulario,
    generarReporte,
    listarReportes
};