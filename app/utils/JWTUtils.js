const jwt = require('jsonwebtoken');
const { JWT } = require('../constants/index');

function generateSessionToken(emailId) {
    return jwt.sign(emailId, JWT.TOKEN_SECRET);
}

function verifyAndGetEmailId(token, request) {
    jwt.verify(token, JWT.TOKEN_SECRET as string, (error, emailId) => {
        if (error) {
            console.log(error);
            return error;
        }
        return emailId;
    });
}

module.exports = {
    generateSessionToken, verifyAndGetEmailId
};