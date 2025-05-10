const Producto = require('../models/producto');
const Venta = require('../models/venta');
const Reporte = require('../models/reporte');

sequelize.sync(); // Asegura que las tablas se creen