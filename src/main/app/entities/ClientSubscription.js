const { DataTypes } = require('sequelize');
const { FreeRoamMysqlService } = require("../services");

const Client = require('./Client')
const SubscriptionPlan = require('./SubscriptionPlan')

const ClientSubscription = FreeRoamMysqlService.define('client_subscriptions', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    clientId: {
        type: DataTypes.INTEGER,
        references: 'Client',
        referencesKey: 'id',
    },
    subscriptionPlanId: {
        type: DataTypes.INTEGER,
        references: 'SubscriptionPlan',
        referencesKey: 'id',
    },
    subscriptionStartDate: {
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

ClientSubscription.belongsTo(Client, { foreignKey: 'Client_id' });
ClientSubscription.belongsTo(SubscriptionPlan, { foreignKey: 'SubscriptionPlan_id' });

module.exports = ClientSubscription;