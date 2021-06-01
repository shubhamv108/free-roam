require('dotenv').config();

const REDSHIFT_CLUSTER = require('../constants/index').EnvironmentConfiguration.REDSHIFT_CLUSTER;

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
    return await client.query(sql, []);
}

module.exports = {
    executeQuery
}

