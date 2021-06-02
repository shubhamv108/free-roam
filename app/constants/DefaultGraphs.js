const Graphs = [
    {
        name: 'DAU',
        queryId: 1,
        xAxisColumnName: 'dt',
        yAxisColumnName: 'daily_active_users',
        zAxisColumnName: 'company'
    }
];

const DashboardGraphMappings = [
    {
        name: 'DAU',
        rowPosition: 0,
        columnPosition: 0
    }
];

module.exports = {
    Graphs, DashboardGraphMapping
};