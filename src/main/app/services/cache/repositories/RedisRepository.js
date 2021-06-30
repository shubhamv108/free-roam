const Client = require('./index').RedisService;

function SETEX (key, value, ttl) {
    Client.setex(searchTerm, ttl, JSON.stringify(value));
}

function GET (key) {
    return Client.get(key, async (error, value) => {
        if (error) throw error;
        if (value) {
            return JSON.parse(value);
        }
    });
}

module.exports = {
    SETEX, GET
};