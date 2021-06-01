const { Client, User } = require('../entities/index');

function create(clientVO) {
    return Client.create({
        domain: clientVO.domain,
        name: clientVO.clientName
        emailId: clientVO.emailId,
        isOrganization: clientVO.isOrganization
    });
};

function findByDomain(domain) {
    return Client.findOne({
        where: {
            domain: domain
        }
    });
};

function findByName(name) {
    return Client.findOne({
        where: {
            name: name
        }
    });
};

function saveNewClientAndUser(userRegistrationVO) {
    return sequelize.transaction(function (t) {
        // chain all your queries here. make sure you return them.
        return Client.create({
            domain: userRegistrationVO.domain,
            name: userRegistrationVO.clientName,
            emailId: userRegistrationVO.emailId,
            isOrganization: userRegistrationVO.isOrganization
        }, {transaction: t}).then(function (client) {
            return User.create({
                name: userRegistrationVO.name,
                email: userRegistrationVO.email,
                password: PasswordUtils.getSaltedHash(userRegistrationVO.password),
                emailVerificationCode: userRegistrationVO.emailVerificationCode,
                emailVerificationCodeExpiry: userVO.emailVerificationCodeExpiry,
                clientId: client.id,
                isClientAdmin: true
            }, {transaction: t});
        });

    }).then(function (result) {
        // Transaction has been committed
        // result is whatever the result of the promise chain returned to the transaction callback
    }).catch(function (err) {
        // Transaction has been rolled back
        // err is whatever rejected the promise chain returned to the transaction callback
    });
}

module.exports = {
    create, findByName, findByDomain, saveNewClientAndUser
}

/*
    engagement- clusterdev user_session, user_app_company
    user_growth - user_app_company (clusterdev + confirmtkt) combined
    transactional - user_transaction_frequency, user_order_value
    behaviour - user_shopping_habbits
    demographics: user_demographics (user_static)
*/