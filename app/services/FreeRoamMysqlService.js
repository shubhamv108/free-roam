const FREE_ROAM_DB = require('../constants/index').EnvironmentConfiguration.FREE_ROAM_DB;

const db = new Sequelize(FREE_ROAM_DB.NAME, FREE_ROAM_DB.USERNAME, FREE_ROAM_DB.PASSWORD,  {
    host: FREE_ROAM_DB.HOST,
    dialect: FREE_ROAM_DB.DIALECT,
    pool: {
        max: FREE_ROAM_DB.MAX_CONNECTIONS,
        min: FREE_ROAM_DB.MIN_CONNECTIONS,
        idle: 10000
    }
});

module.exports = db;