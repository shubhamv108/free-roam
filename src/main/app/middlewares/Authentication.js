const { JWTUtils } = require("../utils");
const { User, UserSession } = require("../repositories");
const { Status } = require('../constants').Enums;

function process(request, response, next) {
    const authorizationHeader = request.headers['Authorization']
    const token = authorizationHeader && authorizationHeader.split(' ')[1]

    if (token == null) {
        return response.sendStatus(401)
    }

    try {
        request.emailId = JWTUtils.verifyAndGetEmailId(token);
        request.user = User.findByEmailId(request.emailId);
        if (!request.user) {
            response.sendStatus(403);
        }
        request.userSession = UserSession.findAllByUserIdAndStatusAndToken(request.user.id, Status.ACTIVE, token);
        if (request.userSession.createdOn + request.userSession.ttl < Date.now()) {
            UserSession.expire(request.userSession);
            response.body('Session Expired!').sendStatus(403);
        }
    } catch (error) {
        response.sendStatus(403);
    }
    next();
}

module.exports = {
    process
};