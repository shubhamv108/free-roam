const { ClientQueryLog } = require('../entities/ClientQueryLog')

function create(clientQueryLogVO) {
    return ClientQueryLog.create({
        clientId: clientQueryLogVO.clientId,
        userId: clientQueryLogVO.userId,
        query: clientQueryLogVO.query
    });
}

module.exports = {
    create
}