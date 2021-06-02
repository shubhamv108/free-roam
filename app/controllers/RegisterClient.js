const { Client, User } = require('../repositories/index');
const { NotificationService }  = require('../services/notifications/index');
const { OTPUtils } = require('../utils/index');
const { ClientType, UserType } = require('../constants/index').Enums;

function process(request) {
    clientVO = {};
    if (request.user.clientId) {
        return {
            clientId: 'User is already assigned to a client'
        }
    }
    if (request.isIndividualUser) {
        request.emailId = request.user.emailId;
        request.clientType = ClientType.INDIVIDUAL;
        request.userType = UserType.INDIVIDUAL_CLIENT;
        Client.createClientAndUpdateUser(request);
    } else if (request.registerNewClient) {
        const client = Client.findByName(request.clientName);
        if (client) {
            return {
                clientName: 'Client name already present'
            }
        }
        request.userType = UserType.INDIVIDUAL_CLIENT;
        Client.createClientAndUpdateUser(request);
    } if (request.clientName) {
        const client = Client.findByName(request.clientName);
        if (client) {
            request.clientId = client.id;
            request.userType = UserType.CLIENT_USER;
        }
        User.setClient(request.user, request);
    }
}

function validate(request) {
    errorMessages = {};
}