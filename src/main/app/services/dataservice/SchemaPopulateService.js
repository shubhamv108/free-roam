const { RedshiftRepository } = require('./repositories');
const { SCHEMA_NAMES } = require('./constants').Constants;
const { CacheService } = require('../cache');

for (const schemaName of SCHEMA_NAMES) {
    const tableNames = RedshiftRepository.fetchTableNamesBySchemaName(schemaName);
    for (const tableName of tables) {
        RedshiftRepository.fetchTableSchemaBySchemaNameAndTableName(schemaName, tableName);
    }
}
