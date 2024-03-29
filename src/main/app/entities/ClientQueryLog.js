const { DataTypes } = require('sequelize');
const { FreeRoamMysqlService } = require("../services");
const { Client, User } = require("./index");

const ClientQueryLog = FreeRoamMysqlService.define('clientQueryLogs', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    clientId: {
        type: DataTypes.INTEGER
    },
    userId: {
        type: DataTypes.INTEGER
    },
    query: {
        type: DataTypes.STRING
    },
    createdOn: {
        type: DataTypes.DATE
    }
});

ClientQueryLog.belongsTo(Client, { foreignKey: 'ClientQueryLog_clientId' });
ClientQueryLog.belongsTo(User, { foreignKey: 'ClientQueryLog_userId' });

module.exports = ClientQueryLog;