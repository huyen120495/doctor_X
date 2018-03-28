class LocationTransformer {

    /**
     *
     * @param connection
     */
    constructor(connection) {
        this.connection = connection;
    }

    /**
     *
     * @param location
     * @return {location_id}
     */
    transform(location) {
        return this.connection('locations').insert({
            latitude: location.getLatitude(),
            longitude: location.getLongitude(),
            address: location.getAddress()
        }).then(location_id => {
            return location_id[0];
        });
    }
}

module.exports = LocationTransformer;
