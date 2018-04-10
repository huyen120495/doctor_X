const Hospital = require('./hospital');
const Location = require('../location/location');
class HospitalFactory {

    makeFromRequest(hospitalRaw) {
        let location = new Location(hospitalRaw.lat, hospitalRaw.long);
        location.setAddress(hospitalRaw.address);
        location.setId(hospitalRaw.location_id);

        let hospital = new Hospital(hospitalRaw.name, location);
        hospital.setPhone(hospitalRaw.phone);
        hospital.setDescribe(hospitalRaw.describe);
    }

    makeFromDB(hospitalRaw) {
        let location = new Location(hospitalRaw.lat, hospitalRaw.long);
        location.setAddress(hospitalRaw.address);

        let hospital = new Hospital(hospitalRaw.name, location);
        hospital.setPhone(hospitalRaw.phone);
        hospital.setDescribe(hospitalRaw.describe);
        return hospital;
    }

}

module.exports = HospitalFactory;
