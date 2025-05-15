const { DataTypes } = require('sequelize');
const sequelize = require('../db/config');

const Reporte = sequelize.define('Reporte', {
    tipo: DataTypes.STRING,
    rangoFechas: DataTypes.STRING,
    datosAnalizados: DataTypes.TEXT
});

module.exports = Reporte;