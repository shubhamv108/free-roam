const { Dashboard } = require('../entities/index');

function create(userId, status) {
    return Dashboard.create({
        userId: userId,
        status: status
    });
};

function findAllByUserIdAndStatus(userId, status) {
    return Dashboard.findAll({
        userId: userId,
        status: status
    });
};

function findAllByUserId(userId) {
    return Dashboard.findAll({
        userId: userId
    });
};

module.exports = {
    create, findAllByUserIdAndStatus, findAllByUserId
};