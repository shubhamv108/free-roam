const { DataTypes } = require('sequelize');
const { FreeRoamMysqlService } = require("../services/index");

const Dashboard = FreeRoamMysqlService.define('dashboards', {
    id: {
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING
    },
    queryId: {
        type: DataTypes.INTEGER
    },
    xAxisColumnName: {
        type: DataTypes.STRING
    },
    yAxisColumnName: {
        type: DataTypes.STRING
    },
    zAxisColumnName: {
        type: DataTypes.STRING
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