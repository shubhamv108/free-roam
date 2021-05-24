const { DataTypes } = require('sequelize');
const { FreeRoamMysqlService } = require("../services/index");

const ClientQueryLog = FreeRoamMysqlService.define('clientQueryLogs', {
    id: {
        type: DataTypes.INTEGER
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

module.exports = ClientQueryLog;