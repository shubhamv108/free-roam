const { DataTypes } = require('sequelize');
const { FreeRoamMysqlService } = require("../services/index");

const Query = FreeRoamMysqlService.define('queries', {
    id: {
        type: DataTypes.INTEGER
    },
    query: {
        type: DataTypes.TEXT
    },
    createdOn: {
        type: DataTypes.DATE
    },
});

module.exports = Query;