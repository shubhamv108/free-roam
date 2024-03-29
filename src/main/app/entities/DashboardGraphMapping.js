const { DataTypes } = require('sequelize');
const { FreeRoamMysqlService } = require("../services");
const { Dashboard }= require('./index');

const DashboardGraphMapping = FreeRoamMysqlService.define('dashboard__graph__mapping', {
    dashboardId: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    graphId: {
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING
    },
    rowPosition: {
        type: DataTypes.INTEGER
    },
    columnPosition: {
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
    }
});

DashboardGraphMapping.belongsTo(Graph, { foreignKey: 'Graph_id', as: 'Graph' });
DashboardGraphMapping.belongsTo(Dashboard, { foreignKey: 'Dashboard_id', as: 'Dashboard' });

module.exports = {
    DashboardGraphMapping
};