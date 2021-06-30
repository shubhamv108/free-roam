const redis = require("redis");
const REDIS_URL = require('../../constants').EnvironmentConfiguration.REDIS_URL;

const redisPort = 6379;
const Client = redis.createClient(redisPort);

module.exports = Client;