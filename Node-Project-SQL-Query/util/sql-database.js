const mysql = require('mysql2');

// instead of creating connection and ending connection for each query we use use connection pool instead
// creating connection pool
const pool = mysql.createPool({
    host: 'localhost',
    user: 'himtiaz194',
    port: 3307,
    password: '0000',
    database: 'node-complete',
});

module.exports = pool.promise();