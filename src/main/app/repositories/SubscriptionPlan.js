const { SubscriptionPlan } = require('../entities');
const { Status } = require('../constants')

function findAllByStatus(status) {
    return SubscriptionPlan.findAll({
        where: {
            status: status
        }
    });
};

function create(subscriptionPlanVO) {
    return SubscriptionPlan.create({
        name: subscriptionPlanVO.name,
        validity: subscriptionPlanVO.validity,
        queryCount: subscriptionPlanVO.queryCount,
        dataAccessibilityStartDate: subscriptionPlanVO.dataAccessibilityStartDate,
        dataAccessibilityEndDate: subscriptionPlanVO.dataAccessibilityEndDate,
        status: subscriptionPlanVO.status
    });
};

function findAllByDataAccessibilityDateRange(startDate, endDate) {
    return SubscriptionPlan.findAll({
        where: {
            dataAccessibilityStartDate: {
                $gte: startDate,
                $lte: endDate
            }
        }
    });
};

function findByLessThanQueryCount(queryCount) {
    return SubscriptionPlan.findAll({
        where: {
            queryCount: {
                $lte: queryCount
            }
        }
    });
};

function findByGreaterThanQueryCount(queryCount) {
    return SubscriptionPlan.findAll({
        where: {
            queryCount: {
                $gte: queryCount
            }
        }
    });
};

function findByLessThanValidity(validity) {
    return SubscriptionPlan.findAll({
        where: {
            validity: {
                $lte: validity
            }
        }
    });
};

function findByGreaterThanValidity(validity) {
    return SubscriptionPlan.findAll({
        where: {
            validity: {
                $gte: validity
            }
        }
    });
};

module.exports = {
    create, findAllByStatus, findAllByDataAccessibilityDateRange, findByLessThanQueryCount, findByGreaterThanQueryCount,
    findByLessThanValidity, findByGreaterThanValidity
};

