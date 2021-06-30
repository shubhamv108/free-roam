const { DataTypes } = require('sequelize');
const { FreeRoamMysqlService } = require("../services");
const { Client, ClientQueryLog } = require("./index")

const User = FreeRoamMysqlService.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
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
    type: {
        type: DataTypes.STRING
    },
    clientId: {
        type: DataTypes.INTEGER
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

// User.belongsTo(Client, {
//     foreignKey: "Client_id",
//     as: "client",
// });
User.hasMany(ClientQueryLog, { foreignKey: 'User_id', as: 'query_logs' });

module.exports = User;