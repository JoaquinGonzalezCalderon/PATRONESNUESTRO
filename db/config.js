const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db/database.sqlite' // o './database.sqlite' si está fuera de /db
});

module.exports = sequelize;