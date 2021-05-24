const { DataTypes } = require('sequelize');
const { FreeRoamMysqlService } = require("../services/index");
const { Client } = require("./Client")

const User = FreeRoamMysqlService.define('users', {
    id: {
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING
    },
    emailId: {
        type: DataTypes.STRING
    },
    isEmailVerified: {
        type: DataTypes.BOOLEAN
    },
    emailVerificationCode: {
        type: DataTypes.STRING
    },
    emailVerificationCodeExpiry: {
        type: DataTypes.DATE
    },
    password: {
        type: DataTypes.STRING
    },
    isAdmin: {
        type: DataTypes.BOOLEAN
    },
    clientId: {
        type: DataTypes.INTEGER
    },
    isClientAdmin: {
        type: DataTypes.BOOLEAN
    },
    isPendingForApprovalFromClientAdmin: {
        type: DataTypes.BOOLEAN
    },
    createdOn: {
        type: DataTypes.DATE
    },
    updatedOn: {
        type: DataTypes.DATE
    },
});

User.belongsTo(Client, {
    foreignKey: "Client_id",
    as: "client",
});

module.exports = User;