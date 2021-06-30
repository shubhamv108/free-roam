const NOTIFICATIONS_DB = require('../constants/index').EnvironmentConfiguration.NOTIFICATIONS_DB;

const db = new Sequelize(NOTIFICATIONS_DB.NAME, NOTIFICATIONS_DB.USERNAME, NOTIFICATIONS_DB.PASSWORD,  {
    host: NOTIFICATIONS_DB.HOST,
    dialect: NOTIFICATIONS_DB.DIALECT,
    pool: {
        max: NOTIFICATIONS_DB.MAX_CONNECTIONS,
        min: NOTIFICATIONS_DB.MIN_CONNECTIONS,
        idle: 10000
    }
});

module.exports = db;