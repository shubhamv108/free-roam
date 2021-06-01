const { User } = require('../repositories/index');

function register(userRequest) {
    validate(userRequest);

    if (userRequest.isOrganization) {

    }

}

function validate(userRequest) {
    errorMessages = {};
}