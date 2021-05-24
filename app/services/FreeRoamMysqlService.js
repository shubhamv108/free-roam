require('dotenv').config();

const Sequelize = require('sequelize');

const db_name = process.env.CUBEJS_EXT_DB_NAME
const db_user = process.env.CUBEJS_EXT_DB_USER
const db_pass = process.env.CUBEJS_EXT_DB_PASS
const db_host = process.env.CUBEJS_EXT_DB_HOST

const db = new Sequelize(db_name, db_user, db_pass,  {
    host: db_host,
    dialect: 'mysql',
    pool: {
        max: 20,
        min: 0,
        idle: 10000
    }
});

module.exports = db;