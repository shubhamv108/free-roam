const { DataTypes } = require('sequelize');
const { FreeRoamMysqlService } = require("../services/index");

const DashboardGraphMapping = FreeRoamMysqlService.define('dashboard_graph_mapping', {
    dashboardId: {
        type: DataTypes.INTEGER
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
    columnPosiiton: {
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

module.exports = DashboardGraphMapping;