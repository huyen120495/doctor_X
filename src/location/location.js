class Location {

    /**
     *
     * @param latitude
     * @param longitude
     */
    constructor(latitude, longitude) {
        this.latitude = latitude;
        this.longitude = longitude;
    }
    /**
     *
     * @return {number}
     */
    getLatitude() {
        return this.latitude;
    }

    /**
     *
     * @return {number}
     */
    getLongitude() {
        return this.longitude;
    }

    /**
     *
     * @param address
     */
    setAddress(address) {
        this.address = address;
    }
    /**
     *
     * @return {string}
     */
    getAddress() {
        return this.address;
    }
}

module.exports = Location;
