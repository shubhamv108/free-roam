const { Client } = require('../models/index');

function create(clientVO) {
    return Client.create({
        domain: clientVO.domain,
        name: clientVO.name
    });
};

function findByDomain(domain) {
    return Client.findOne({
        where: {
            domain: domain
        }
    });
};

/*
    engagement- clusterdev user_session, user_app_company
    user_growth - user_app_company (clusterdev + confirmtkt) combined
    transactional - user_transaction_frequency, user_order_value
    behaviour - user_shopping_habbits
    demographics: user_demographics (user_static)
*/