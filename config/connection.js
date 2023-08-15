const sequelize = require('sequelize');
require('dotenv').config();

// create connection to our db
const sequelizeObject = new sequelize(
    "techblog_db",
    "root",
    "Walcott34",
    {
        host: '192.168.1.55',
        dialect: 'mysql',
        port: 3306
    }
);

module.exports = sequelizeObject;
