const { DataTypes } = require('sequelize');
const { FreeRoamMysqlService } = require("../services/index");

const Dashboard = FreeRoamMysqlService.define('dashboards', {
    id: {
        type: DataTypes.INTEGER
    },
    userId: {
        type: DataTypes.INTEGER
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

module.exports = Dashboard;