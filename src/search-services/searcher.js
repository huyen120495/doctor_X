class Searcher {

    constructor(connection, hospitalFac) {
        this.connection = connection;
        this.hospitalFac = hospitalFac;
    }
    search(condition) {
        let factory = this.hospitalFac;
        let sqlQuery = this.connection
            .select('hospitals.id', 'hospitals.name', 'hospitals.location_id', 'locations.lat', 'locations.long',
                'locations.address', 'hospitals.phone', 'hospitals.describe')
            .from('hospitals')
            .innerJoin('locations', function () {
                this.on('location_id', '=', 'locations.id')
            });
        condition.describe(sqlQuery);
        return sqlQuery.then(listHospital => listHospital.map(hospitalRaw => factory.makeFromDB(hospitalRaw)));
    }
}
module.exports = Searcher;