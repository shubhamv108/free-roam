const { DataTypes } = require('sequelize');
const { FreeRoamMysqlService } = require("../services");

const UserSession = FreeRoamMysqlService.define('user_sessions', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    userId: {
        type: DataTypes.INTEGER
    },
    token: {
        type: DataTypes.STRING
    },
    createdOn: {
        type: DataTypes.DATE
    },
    ttl: {
        type: DataTypes.BIGINT
    },
    status: {
        type: DataTypes.ENUM
    }
});

module.exports = UserSession;