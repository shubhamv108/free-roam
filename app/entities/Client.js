const { DataTypes } = require('sequelize');
const { FreeRoamMysqlService } = require("../services/index");
const { User } = require("./User")
const { ClientSubscription, SubscriptionPlan, User, ClientQueryLog } = require("./ClientSubscription")
const { SubscriptionPlan } = require("./SubscriptionPlan")

const Client = FreeRoamMysqlService.define('clients', {
    id: {
        type: DataTypes.INTEGER
    },
    domain: {
        type: DataTypes.STRING
    },
    name: {
        type: DataTypes.STRING
    },
    isOrganization: {
        type: DataTypes.BOOLEAN
    },
    emailId: {
        type: DataTypes.STRING
    },
    createdOn: {
        type: DataTypes.DATE
    },
    updatedOn: {
        type: DataTypes.DATE
    },
});

Client.hasMany(User, { foreignKey: 'Client_id', as: "users" });
Client.hasMany(ClientQueryLog, { foreignKey: 'Client_id', as: 'query_logs' });
module.exports = Client;