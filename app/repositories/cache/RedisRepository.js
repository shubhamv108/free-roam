const client = require('../../services/index').RedisService.client

function SETEX (key, value, ttl) {
    client.setex(searchTerm, ttl, JSON.stringify(value));
}

function GET (key) {
    return client.get(key, async (error, value) => {
        if (error) throw error;
        if (value) {
            return JSON.parse(value);
        }
    });
}

module.exports = {
    SETEX, GET
};