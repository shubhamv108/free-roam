const { Dashboard, Graph } = require('../repositories');

function create(request) {
    const errorMessages = validate(request);
    if (!errorMessages) {
        return {
            errorMessages
        }
    }
    Graph.createGraphInDashboard(request);
}

function validate(request) {
    errorMessages = {};

    const dashboard = Dashboard.findById(request.dashboardId);
    if (!dashboard) {
        errorMessages.dashboardId = 'Invalid Dashboard Id!'
    } else {
        request.dashboard = dashboard;
    }

    return errorMessages;
}