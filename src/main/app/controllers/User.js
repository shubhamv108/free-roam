const { User } = require('../repositories');

function register(userRequest) {
    validate(userRequest);

    if (userRequest.isOrganization) {

    }

}

function validate(userRequest) {
    errorMessages = {};
}