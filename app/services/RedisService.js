const redis = require("redis");
const REDIS_URL = require('../constants').EnvironmentConfiguration.REDIS_URL;

const redisPort = 6379;
const client = redis.createClient(redisPort);

module.exports = {
    client
};