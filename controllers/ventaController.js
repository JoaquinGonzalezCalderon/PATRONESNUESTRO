const Venta = require('../models/venta');

const mostrarFormularioVenta = (req, res) => {
    res.render('ventas/nueva'); // form para registrar venta
};

const registrarVenta = async (req, res) => {
    const { total, formaPago } = req.body;
    console.log('Datos recibidos:', { total, formaPago }); // Agregado para ver qué llega

    try {
        await Venta.create({
            fecha: new Date(),
            total: parseFloat(total), // convierto a número por si viene como string
            formaPago
        });
        res.redirect('/ventas');
    } catch (error) {
        console.error('Error al registrar venta:', error); // Muestra errores si hay
        res.status(500).send('Error al registrar la venta');
    }
};

const listarVentas = async (req, res) => {
    const ventas = await Venta.findAll();

    const ventasFormateadas = ventas.map(v => ({
        fecha: v.fecha ? v.fecha.toLocaleDateString() : '',
        total: v.total,
        formaPago: v.formaPago
    }));

    res.render('ventas/lista', { ventas: ventasFormateadas });
};

module.exports = {
    mostrarFormularioVenta,
    registrarVenta,
    listarVentas
};
