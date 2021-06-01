const { Client, User } = require('../repositories/index');
const { NotificationService }  = require('../services/notifications/index');
const { OTPUtils } = require('../utils/index');

function register(userRegistrationRequest) {
    validate(userRegistrationRequest);
    
    if (userRegistrationRequest.clientName) {
        client = Client.findByName(userRegistrationRequest.clientName);
        userRegistrationRequest.isOrganization = true;
        if (client) {
            userRegistrationRequest.clientId = client.id;
        }
    } else {
        userRegistrationRequest.isOrganization = false;
    }
    userRegistrationRequest.emailVerificationCode = OTPUtils.generateOTP();
    userRegistrationRequest.emailVerificationCodeExpiry = Date.now() + 86400000;

    if (userRegistrationRequest.clientId) {
        return User.save(userRegistrationRequest);
    } else if (userRegistrationRequest.isIndividualClient) {
        return Client.saveNewClientAndUser(userRegistrationRequest);
    } else {
        User.save(userRegistrationRequest);
    }
    NotificationService.send(userRegistrationRequest.emailId, 1, userRegistrationRequest);
}

function validate(userRegistrationRequest) {
    errorMessages = {};
}

module.exports = {
    register
};