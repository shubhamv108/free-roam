const { CacheService } = require('../services/cache/index');
const { HashUtils } = require('../utils/index');
const { RedshiftClusterService } = require('../services/index');
const { ClientQueryLog } = require('../repositories/index');

function orchestrate(request) {
    const query = request.query;
    const queryKeyHash = HashUtils.MD5(query);
    let resultSet = CacheService.GET(query);
    if (resultSet) {
        return resultSet;
    }
    resultset = RedshiftClusterService.executeQuery(query);
    CacheService.SETEX(queryKeyHash, resultSet, 100000000);
    ClientQueryLog.create(request);
    return resultSet;
}

function hash(data) {
    return HashUtils.MD5(query);
}

module.exports = {
    orchestrate
};