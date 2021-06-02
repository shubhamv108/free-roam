const { Client, User, Dashboard, Graph, DashboardGraphMapping } = require('../entities/index');
const { Enums, DefaultGraphs } = require('../constants/index');
const { Status } = Enums;
const { Graphs, DashboardGraphMappings } = DefaultGraphs;
const sequelize = require('sequelize');

function create(clientVO) {
    return Client.create({
        domain: clientVO.domain,
        name: clientVO.clientName
        emailId: clientVO.emailId,
        type: clientVO.type
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
            type: userRegistrationVO.clientType
        }, {transaction: t}).then(function (client) {
            return User.create({
                name: userRegistrationVO.name,
                email: userRegistrationVO.email,
                password: PasswordUtils.getSaltedHash(userRegistrationVO.password),
                emailVerificationCode: userRegistrationVO.emailVerificationCode,
                emailVerificationCodeExpiry: userVO.emailVerificationCodeExpiry,
                clientId: client.id,
                type: userRegistrationVO.userType
            }, {transaction: t}).then(function (user) {
                return Dashboard.create({
                    userId: user.id,
                    type: 'DEFAULT',
                    status: Status.ACTIVE
                }, {transaction: t}).then(function (dashboard) {
                    result = [];
                    for (const graph of Graphs) {
                        result.push(Graph.create(graph));
                    }
                    return { dashboard: dashboard, result: result };
                }, {transaction: t}).then(function ({ dashboard, graphs }) {
                    result = [];
                    let i = 0;
                    for (const dashboardGraphMapping of DashboardGraphMappings) {
                        result.push(DashboardGraphMapping.create({
                            name: dashboardGraphMapping.name,
                            rowPosition: dashboardGraphMapping.rowPosition,
                            columnPosition: dashboardGraphMapping.columnPosition
                            dashboardId: dashboard.id,
                            graphId: graphs[i++]
                        }));
                    }
                    return result;
                }, {transaction: t});
            });
        });

    }).then(function (result) {
        // Transaction has been committed
        // result is whatever the result of the promise chain returned to the transaction callback
    }).catch(function (err) {
        // Transaction has been rolled back
        // err is whatever rejected the promise chain returned to the transaction callback
    });
}

function createClientAndUpdateUser(clientVO) {
     return sequelize.transaction(function (t) {
            // chain all your queries here. make sure you return them.
            return Client.create({
                domain: clientVO.domain,
                name: clientVO.clientName,
                emailId: clientVO.emailId,
                type: clientVO.clientType
            }, {transaction: t}).then(function (client) {
                return clientVO.user.update({
                    clientId: client.id,
                    type: clientVO.userType
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
    create, findByName, findByDomain, saveNewClientAndUser, createClientAndUpdateUser
}

/*
    engagement- clusterdev user_session, user_app_company
    user_growth - user_app_company (clusterdev + confirmtkt) combined
    transactional - user_transaction_frequency, user_order_value
    behaviour - user_shopping_habbits
    demographics: user_demographics (user_static)
*/