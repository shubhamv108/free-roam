const winston = require('winston');

let logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(info => {
            return `${info.timestamp} ${info.level}: ${info.message}`;
        })
    ),
    // transports: [new winston.transport.Console()]
});

const Logger = {
    info: function (info, params) { logger.log('info', info, params); },
    error: function (info, params) { logger.log('error', info, params); }
};

module.exports = Logger;