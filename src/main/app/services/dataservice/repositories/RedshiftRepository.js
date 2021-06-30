const { QueryExecutionOrchestrator } = require('../../../orchestrators');

const FETCH_TABLES_NAMES_BY_SCHEMA = "SELECT DISTINCT(tablename) FROM pg_table_def WHERE schemaname = ${schemaName}";
const SQL_TABLES_NAMES_BY_SCHEMA_NAME_AND_TABLE_NAME = "SELECT column, type FROM PG_TABLE_DEF WHERE schemaname = ${schemaName} AND tablename = ${tableName};"

function fetchTableNamesBySchemaName(schemaName) {
    return executeQuery(SQL_TABLES_NAMES_BY_SCHEMA);
}

function fetchTableSchemaBySchemaNameAndTableName(schemaName, tableName) {
    return executeQuery(SQL_TABLES_NAMES_BY_SCHEMA_NAME_AND_TABLE_NAME);
}

function executeQuery(sqlQuery) {
    return QueryExecutionOrchestrator.orchestrate(sqlQuery);
}

module.exports = {
    fetchTableNamesBySchemaName, fetchTableSchemaBySchemaNameAndTableName
};