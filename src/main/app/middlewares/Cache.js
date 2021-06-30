const { CacheService } = require('../services/cache');

async function process(request, response, next) {
    const cachedResponse = await CacheService.GET(request.apiName);
    if (cachedResponse) {
        return cachedResponse;
    }
    next();
    if (response.isCachable) {
        CacheService.SETEX(response.body);
    }
}

module.exports = {
    process
};