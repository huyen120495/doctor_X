const turf = require('@turf/turf');

class Location {

    constructor(long, lat) {
        this.long = long;
        this.lat = lat;
    }
    getId(){
        return this.id;
    }

    getLong() {
        return this.long;
    }

    getLat() {
        return this.lat;
    }

    getAddress() {
        return this.address;
    }

    setId(id) {
        this.id = id;
    }

    setAddress(address) {
        this.address = address;
    }

    distance(location){
        let from = turf.point([this.lat, this.long]);
        let to = turf.point([location.getLat(), location.getLong()]);
        let options = {units: 'kilometers'};

        return turf.distance(from, to, options);
    }

}
module.exports = Location;