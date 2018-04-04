class Searcher {

    constructor(connection) {
        this.connection = connection;
    }
    search(condition) {
        let sqlQuery = this.connection
            .select('hospitals.id', 'hospitals.name', 'hospitals.location_id', 'hospitals.phone')
            .from('hospitals')
            .innerJoin('locations', function () {
                this.on('location_id', '=', 'locations.id')
            });
        condition.describe(sqlQuery);
        // console.log(sqlQuery.toSQL());
        return sqlQuery;
    }
}
module.exports = Searcher;