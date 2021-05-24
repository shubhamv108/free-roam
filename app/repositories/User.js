const { User } = require('../models');
const { PasswordUtils } = require('../utils')

function create(userVO) {
    return User.create({
        name: userVO.name,
        email: userVO.email,
        password: PasswordUtils.getSaltedHash(userVO.password),
        emailVerificationCode: userVO.emailVerificationCode,
        clientId: clientId,
        isClientAdmin: userVO.isClientAdmin
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


module.exports = {
    create, findByEmailId, findAllByClientId, findAllClientAdminByClientId, findAllAdmin,
    findAllPendingForApprovalFromClientAdminByClientId
};