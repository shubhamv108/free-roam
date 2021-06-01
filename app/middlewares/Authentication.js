const { JWTUtils } = require("../utils/index");
const { User, UserSession } = require("../repositories/index");
const { Status } = require('../constants/index').Enums;

function authenticate(request, response, next) {
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