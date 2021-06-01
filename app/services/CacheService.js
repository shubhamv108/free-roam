const { InMemoryCacheRepository, RedisRepository } = require('../repositories/cache/index');

function SETEX(key, value, ttl) {
    try {
        RedisRepository.SETEX(key, value, ttl);
        InMemoryCacheRepository.SETEX(key, value, ttl);
    } catch (e) {

    }
}

function GET(key) {
    let value = InMemoryCacheRepository.GET(key);
    if (value == null) {
        value = RedisRepository.GET(key);
    }
    return value;
}

module.exports = {
    SETEX, GET
};