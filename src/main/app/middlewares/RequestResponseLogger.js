const { Logger } = require('../services').LoggingService;

function log(request, response, next) {
    Logger.info('Received request for API: ' + request.apiName, 'Body: ' + request.body);
    next();
    Logger.info('Sending response for API: ' + request.apiName, 'Body: ' + response.body);
}

module.exports = {
    log
};