const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'himtiaz194', '0000', {
    dialect: 'mysql',
    host: 'localhost',
    port: 3307,
});

module.exports = sequelize;