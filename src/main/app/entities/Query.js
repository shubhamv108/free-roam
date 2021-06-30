const { DataTypes } = require('sequelize');
const { FreeRoamMysqlService } = require("../services");
const { Graph } = require("./index");

const Query = FreeRoamMysqlService.define('queries', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    query: {
        type: DataTypes.TEXT
    },
    createdOn: {
        type: DataTypes.DATE
    }
});

Query.hasMany(Graph, { foreignKey: 'Query_id' });

module.exports = Query;