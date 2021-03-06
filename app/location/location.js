class Location {

    constructor(lat, long) {
        this.lat = lat;
        this.long = long;
    }

    setId(id) {
        this.id = id;
    }

    getId() {
        return this.id;
    }

    getLat() {
        return this.lat;
    }

    getLong() {
        return this.long;
    }

    setAddress(address) {
        this.address = address;
    }

    getAddress() {
        return this.address;
    }

}

module.exports = Location;
