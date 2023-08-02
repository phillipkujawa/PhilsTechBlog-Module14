const sequelize = require('sequelize');
require('dotenv').config();

// create connection to our db
const sequelizeObject = new sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PW,
    {
        host: '192.168.1.55',
        dialect: 'mysql',
        port: 3306
    }
);

module.exports = sequelizeObject;
