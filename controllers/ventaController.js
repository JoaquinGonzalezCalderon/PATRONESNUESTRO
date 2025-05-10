const Venta = require('../models/venta');

const mostrarFormularioVenta = (req, res) => {
    res.render('ventas/nueva'); // form para registrar venta
};

const registrarVenta = async (req, res) => {
    const { total, formaPago } = req.body;
    await Venta.create({
        fecha: new Date(),
        total,
        formaPago
    });
    res.redirect('/ventas');
};

const listarVentas = async (req, res) => {
    const ventas = await Venta.findAll();
    res.render('ventas/lista', { ventas });
};

module.exports = {
    mostrarFormularioVenta,
    registrarVenta,
    listarVentas
};