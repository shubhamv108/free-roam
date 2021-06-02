const { Dashboard } = require('../entities/index');

function create(dashboardVO) {
    return Dashboard.create({
        name: dashboardVO.name,
        userId: dashboardVO.userId
    });
};

function findAllByUserIdAndStatus(userId, status) {
    return Dashboard.findAll({
        userId: userId,
        status: status
    });
};

function findAllByUserIdAndName(userId, name) {
    return Dashboard.findAll({
        userId: userId,
        name: name
    });
};

function findAllByUserId(userId) {
    return Dashboard.findAll({
        userId: userId
    });
};

function findDefaultByUserId(userId) {
    return Dashboard.findOne({
        userId: userId,
        type: 'DEFAULT'
    });
};

module.exports = {
    create, findAllByUserIdAndStatus, findAllByUserId, findDefaultByUserId, findAllByUserIdAndName
};