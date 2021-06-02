const { DataTypes } = require('sequelize');
const { FreeRoamMysqlService } = require("../services/index");
const { DashboardGraphMapping } = require('../entities/DashboardGraphMapping');

const Graph = FreeRoamMysqlService.define('graphs', {
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

Graph.hasOne(DashboardGraphMapping, { foreignKey: 'Graph_id' });

module.exports = Dashboard;