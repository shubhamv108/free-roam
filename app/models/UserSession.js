const { DataTypes } = require('sequelize');
const { FreeRoamMysqlService } = require("../services/index");

const UserSession = FreeRoamMysqlService.define('user_sessions', {
    id: {
        type: DataTypes.INTEGER
    },
    user_id: {
        type: DataTypes.INTEGER
    },
    token: {
        type: DataTypes.STRING
    },
    createdOn: {
        type: DataTypes.DATE
    },
    expirationOn: {
        type: DataTypes.DATE
    },
    status: {
        type: DataTypes.ENUM
    }
});

module.exports = UserSession;