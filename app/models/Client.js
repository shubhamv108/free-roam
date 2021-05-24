const { DataTypes } = require('sequelize');
const { FreeRoamMysqlService } = require("../services/index");
const { User } = require("./User")
const { ClientSubscription } = require("./ClientSubscription")
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
    createdOn: {
        type: DataTypes.DATE
    },
    updatedOn: {
        type: DataTypes.DATE
    },
});

Client.hasMany({ User, { foreignKey: 'Client_id', as: "users" })

module.exports = Client;