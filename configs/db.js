const { Sequelize } = require('sequelize');
const config = require('../database/config/config');

module.exports = new Sequelize(config.development);