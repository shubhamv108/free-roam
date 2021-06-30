const { UserSession } = require('../entities');
const { Status } = require('../constants').Enums;

function create(userId, token) {
    UserSession.create({
        userId: userId,
        token: token
    });
}

function findAllByUserId(userId) {
    return UserSession.findAll({
        where: {
            userId: userId
        }
    });
}

function findAllByUserIdAndStatusAndToken(userId, status, token) {
    return UserSession.findOne({
        where: {
            userId: userId,
            status: status,
            token: token
        }
    });
}

function expire(entity) {
    entity.update({
        status: Status.EXPIRED
    });
}

function remove(id) {
    UserSession.destroy({
        where: {
            id: id
        }
    });
}

module.exports = {
    create, findAllByUserId, findAllByUserIdAndStatusAndToken, expire, remove
}