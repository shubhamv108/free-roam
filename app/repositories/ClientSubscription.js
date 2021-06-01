const { ClientSubscription } = require('../entities/index');

function create(clientSubscriptionVO) {
    return ClientSubscription.create({
        clientId: clientSubscriptionVO.clientId,
        subscriptionPlanId: clientSubscriptionVO.subscriptionPlanId,
        status: clientSubscriptionVO.status
    });
};

function findAllByClientIdAndStatus(clientId, status) {
    return ClientSubscription.findAll({
        where: {
            clientId: clientId,
            status: status
        }
    });
};

function findAllBySubscriptionPlanIdAndStatus(subscriptionPlanId, status) {
    return ClientSubscription.findAll({
        where: {
            subscriptionPlanId: subscriptionPlanId,
            status: status
        }
    });
};

module.exports = {
    create, findAllByClientIdAndStatus, findAllBySubscriptionPlanIdAndStatus
};