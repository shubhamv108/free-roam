const { Client, User } = require('../repositories');
const { NotificationService }  = require('../services/notifications');
const { OTPUtils } = require('../utils');
const { UserType, ClientType } = require('../constants').Enums;

function register(request) {
    validate(request);
    
    if (request.clientName) {
        client = Client.findByName(request.clientName);
        if (client) {
            request.clientId = client.id;
        }
        request.isOrganization = true;
        request.userType = UserType.CLIENT_USER;
        request.clientType = ClientType.ORGANIZATION;
    } else {
        request.isOrganization = false;
    }
    request.emailVerificationCode = OTPUtils.generateOTP();
    request.emailVerificationCodeExpiry = Date.now() + 86400000;

    if (request.clientId) {
        return User.save(request);
    } else if (request.isIndividualClient) {
        request.userType = UserType.CLIENT_ADMIN;
        request.clientType = ClientType.INDIVIDUAL;
        return Client.saveNewClientAndUser(request);
    } else {
        User.save(request);
    }

    NotificationService.send(request.emailId, 1, request);
}

function validate(request) {
    errorMessages = {};
}

module.exports = {
    register
};