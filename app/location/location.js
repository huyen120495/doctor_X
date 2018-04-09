const turf = require('@turf/turf');

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

    distance(location) {
        let from = turf.point([this.long, this.lat]);
        let to = turf.point([location.getLong(), location.getLat()]);
        let options = {units : 'kilometers'};
        return turf.distance(from, to, options);
    }
    
}

module.exports = Location;
