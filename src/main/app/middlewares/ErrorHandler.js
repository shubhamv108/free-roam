const { ClientError } = require('../errors');
const { Logger } = require('../services').LoggingService;

function process(request, response, next) {
    try {
        next();
    } catch (error) {
        if (error instanceof ClientError) {
            response.body.errorMessages = error.errorMessages;
        } else {
            Logger.error('Error occurred', { error });
        }
    }
}

module.exports = {
    process
};