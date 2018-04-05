class Searcher {
    
    constructor(connection) {
        this.connection = connection;
    }

    search(condition) {
        let sqlQuery = this.connection('hospitals')
        .select('hospitals.id', 'hospitals.name', 'hospitals.location_id', 'hospitals.phone', 'hospitals.describe', 'locations.lat', 'locations.long', 'locations.address')
        .from('hospitals')
        .innerJoin('locations', function() {
            this.on('location_id', '=', 'locations.id')
        })
        .where({
            'hospitals.deleted_at' : null
        })
        condition.describe(sqlQuery);
        return sqlQuery;
     }
    }

module.exports = Searcher;
