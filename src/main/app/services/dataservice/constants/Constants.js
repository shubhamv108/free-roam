const SCHEMA_NAMES: ReadonlyArray<string> = ["engagement", "user_growth", "transactional", "behaviour", "demographics"];
const SCHEMAS = new Set(SCHEMA_NAMES);

module.exports = {
    SCHEMA_NAMES, SCHEMAS
}



/*
    engagement- clusterdev user_session, user_app_company
    user_growth - user_app_company (clusterdev + confirmtkt) combined
    transactional - user_transaction_frequency, user_order_value
    behaviour - user_shopping_habbits
    demographics: user_demographics (user_static)
*/