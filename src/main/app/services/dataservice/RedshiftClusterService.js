require('dotenv').config();
const Logger = require('../index').LoggingService;

const REDSHIFT_CLUSTER = require('../../constants').EnvironmentConfiguration.REDSHIFT_CLUSTER;

const { Pool } = require('pg');
const client = new Pool({
    host: REDSHIFT_CLUSTER.HOST,
    port: REDSHIFT_CLUSTER.PORT,
    max: REDSHIFT_CLUSTER.MAX_CONNECTIONS,
    database: REDSHIFT_CLUSTER.DATABASE,
    user: REDSHIFT_CLUSTER.USERNAME,
    password: REDSHIFT_CLUSTER.PASSWORD
});

client
    .connect()
    .then(() => { console.log('connected') })
    .catch(error => console.error('connection error', error.stack));

async function executeQuery(sql) {
    Logger.info('Executing query in redshift: ${sql}');
    let result = await client.query(sql, []);
    Logger.info('Executed query in redshift: ${sql}');
}

module.exports = {
    executeQuery
};

