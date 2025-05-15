const { DataTypes } = require('sequelize');
const sequelize = require('../db/config');

const Venta = sequelize.define('Venta', {
    fecha: DataTypes.DATE,
    total: DataTypes.FLOAT,
    formaPago: DataTypes.STRING
});

module.exports = Venta;