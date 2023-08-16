const Sequelize = require('sequelize');

require('dotenv').config({path: '.env'});

let sequelizeObject;

if (process.env.JAWSDB_URL) {
    // If JAWSDB_URL is available, it's in the production environment.
    sequelizeObject = new Sequelize(process.env.JAWSDB_URL);
} else {
    // Otherwise, it's in the development environment.
    sequelizeObject = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASS,
        {
            host: process.env.DB_HOST || '192.168.1.55',
            dialect: 'mysql',
            port: 3306
        }
    );
}

module.exports = sequelizeObject;
