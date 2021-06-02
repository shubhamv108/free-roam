const memoryCache = require('memory-cache');

let cache = new memoryCache.Cache();

function GET(key) {
    return cache.get(key);
}

function SETEX(key, value, ttl) {
    return cache.put(key, value, ttl);
}

module.exports = {
    GET, SETEX
}