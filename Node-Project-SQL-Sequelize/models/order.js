const Sequelize = require('sequelize');

const sequelize = require('../util/sql-database');

const Order = sequelize.define('Order', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
});

module.exports = Order;