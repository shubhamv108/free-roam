const { RedshiftRepository } = require('./repositories/index');
const { SCHEMA_NAMES } = require('./constants/index').Constants;

function process(request) {
    let schemas = [];
    for (const schemaName of SCHEMA_NAMES) {
        let schema = {
            schemaName: schemaName,
            tables: []
        };
        const tableNames = RedshiftRepository.fetchTableNamesBySchemaName(schemaName);
        for (const tableName of tableNames) {
            let table = {
                tableName: tableName
            };
            table.schema = RedshiftRepository.fetchTableSchemaBySchemaNameAndTableName(schemaName, tableName);
            schema.tables.push(table);
        }
        schemas.push(schema);
    }
    return schemas;
}