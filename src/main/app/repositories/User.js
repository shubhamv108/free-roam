const { User } = require('../entities');
const { PasswordUtils } = require('../utils')

function save(userVO) {
    return User.create({
        name: userVO.name,
        email: userVO.email,
        password: PasswordUtils.getSaltedHash(userVO.password),
        emailVerificationCode: userVO.emailVerificationCode,
        emailVerificationCodeExpiry: userVO.emailVerificationCodeExpiry,
        clientId: userVO.clientId,
        type: userVO.type
    });
};

function findByEmailId(emailId) {
    return User.findOne({
        where: {
            email: email
        }
    });
};

function findAllByClientId(clientId) {
    return User.findAll({
        where: {
            clientId: clientId
        }
    });
};

function findAllClientAdminByClientId(clientId) {
    return User.findAll({
        where: {
            clientId: clientId,
            isClientAdmin: true
        }
    });
};


function findAllPendingForApprovalFromClientAdminByClientId() {
    return User.findAll({
        where: {
            clientId: clientId,
            isPendingForApprovalFromClientAdmin: true
        }
    });
};

function findAllAdmin() {
    return User.findAll({
        where: {
            isAdmin: true
        }
    });
};

function setNewEmailVerificationCode(entity, emailVerificationCode) {
    entity.update({
        emailVerificationCode: emailVerificationCode,
        emailVerificationCodeExpiry: Date.now() + 86400000
    });
}

function setClient(entity, valueObject) {
    entity.update({
        clientId: valueObject.clientId,
        type: valueObject.userType
    });
}

function emailVerified(entity) {
    entity.update({
        isEmailVerified: true
    });
}

module.exports = {
    save, findByEmailId, findAllByClientId, findAllClientAdminByClientId, findAllAdmin,
    findAllPendingForApprovalFromClientAdminByClientId, setClient, emailVerified
};