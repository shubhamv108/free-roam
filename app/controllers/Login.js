const { User, UserSession } = require('../repositories/index');
const { PasswordUtils, JWTUtils } = require('../utils/index');

function process(userLoginRequest) {
    validate(userLoginRequest, (error) => {
        return error;
    });

    const token = JWTUtils.generateSessionToken(userLoginRequest.emailId);

    UserSession.create(userLoginRequest.userId, token);

    return {
        sessionToken: token
    }
}

function validate(userLoginRequest) {
    let errorMessages = {};

    if (!userLoginRequest.emailId) {
        errorMessages.emailId = "emailId must not be empty";
    }

    if (!userLoginRequest.password) {
        errorMessages.emailId = "password must not be empty";
    }

    if (Object.keys(errorMessages).length) {
        let user = User.findByEmailId(userLoginRequest.emailId);
        if (!user) {
            errorMessages.emailId = "Invalid emailId!"
        }
        if (!PasswordUtils.isPasswordMatching(userLoginRequest.password, user.password)) {
            errorMessages.password = "Invalid password!";
            return errorMessages;
        }
    }

}