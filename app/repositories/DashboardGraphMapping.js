const { DashboardGraphMapping } = require('../entities/DashboardGraphMapping')

function findAllByDashboardId(dashboardId) {
    return DashboardGraphMapping.findAll({
        where: {
            dashboardId: dashboardId
        }
    });
}

module.exports = {
    findAllByDashboardId
}