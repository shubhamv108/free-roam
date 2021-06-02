const { DataTypes } = require('sequelize');
const { FreeRoamMysqlService } = require("../services/index");
const { Graph, DashboardGraphMapping } = require("./index");

const Dashboard = FreeRoamMysqlService.define('dashboards', {
    id: {
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING
    },
    type: {
        type: DataTypes.String
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

Dashboard.hasMany(DashboardGraphMapping, { foreignKey: 'Dashboard_id', as: "graphs" });

module.exports = Dashboard;