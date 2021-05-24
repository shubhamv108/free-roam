const { DataTypes } = require('sequelize');
const { FreeRoamMysqlService } = require("../services/index");

const SubscriptionPlan = FreeRoamMysqlService.define('subscription_plans', {
    id: {
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING
    },
    validity: {
        type: DataTypes.TIME
    },
    queryCount: {
        type: DataTypes.INTEGER
    },
    dataAccessibilityStartDate: {
        type: DataTypes.DATE
    },
    dataAccessibilityEndDate: {
        type: DataTypes.DATE
    },
    status: {
        type: DataTypes.ENUM
    },
    createdOn: {
        type: DataTypes.DATE
    },
    updatedOn: {
        type: DataTypes.DATE
    },
});

module.exports = SubscriptionPlan;