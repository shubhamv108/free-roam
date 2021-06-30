const { Query, Graph, DashboardGraphMapping } = require('../entities');

function createGraphInDashboard(graphVO) {
    return sequelize.transaction(function (t) {
        // chain all your queries here. make sure you return them.
        return Query.create({
            query: graphVO.query
        }, {transaction: t}).then(function (query) {
            return Graph.create({
                name: graphVO.name,
                queryId: query.id,
                xAxisColumnName: graphVO.xAxisColumnName,
                yAxisColumnName: graphVO.yAxisColumnName,
                zAxisColumnName: graphVO.zAxisColumnName
            }, {transaction: t}).then(function (graph) {
                return DashboardGraphMapping.create({
                    name: graphVO.dashboardGraphMappingName,
                    rowPosition: graphVO.dashboardRowPosition,
                    columnPosition: graphVO.dashboardColumnPosition,
                    dashboardId: graphVO.dashboardId,
                    graphId: graph.id
                });
            });
        });
    }).then(function (result) {
        // Transaction has been committed
        // result is whatever the result of the promise chain returned to the transaction callback
    }).catch(function (err) {
        // Transaction has been rolled back
        // err is whatever rejected the promise chain returned to the transaction callback
    });
}

module.exports = {
    createGraphInDashboard
};