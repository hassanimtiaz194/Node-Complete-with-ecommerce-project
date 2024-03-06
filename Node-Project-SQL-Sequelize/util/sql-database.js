//if we are not using sequelize
/* const mysql = require('mysql2');

// instead of creating connection and ending connection for each query we use use connection pool instead
// creating connection pool
const pool = mysql.createPool({
    host: 'localhost',
    user: 'himtiaz194',
    port: 3307,
    password: '0000',
    database: 'node-complete',
});

module.exports = pool.promise(); */

const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'himtiaz194', '0000', {
    dialect: 'mysql',
    host: 'localhost',
    port: 3307,
});

module.exports = sequelize;