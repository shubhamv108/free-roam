const { Dashboard } = require('../repositories');

function refresh(request) {
    const errorMessages = validate(request);
    if (errorMessages) {
        return {
            errorMessages
        }
    }
    const dashboard = Dashboard.findAllByUserIdAndName(request.user.id, request.dashboardName);
    if (dashboard) {
        for (const graph of dashboard.graphs) {
            graph.query.query
        }
    }
}

function validate(request) {
    errorMessages = {};
    return errorMessages;
}