const { Sequelize } = require('sequelize');

module.exports = new Sequelize({
    dialect: 'mysql',
    host: '127.0.0.1',
    username: 'root',
    password: 'bismillah',
    database:'basarnas',
    port: '3306',
    define: {
        timestamps: false
    }
});