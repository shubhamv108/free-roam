const { Dashboard } = require('../repositories/index');

function create(request) {
    errorMessages = validate(request);
    if (errorMessages) {
        return {
            errorMessages
        }
    }
    request.userId = request.user.userId;
    Dashboard.create(request);
}

function validate(request) {
    errorMessages = {};
    return errorMessages;
}

module.exports = {
    create
};