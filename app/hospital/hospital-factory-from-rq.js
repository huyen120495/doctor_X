const Location = require('../location/location');
const Hospital = require('./hospital');

class HospitalFactoryFromRQ {

    make(hospitalRaw) {
        let location = new Location(hospitalRaw.lat, hospitalRaw.long);
        location.setAddress(hospitalRaw.address);
        location.setId(hospitalRaw.location_id);
        let hospital = new Hospital(hospitalRaw.name, location);
        hospital.setDescribe(hospitalRaw.describe);
        hospital.setPhone(hospitalRaw.phone);
        hospital.setId(id);
        return hospital;
    }

}

module.exports = HospitalFactoryFromRQ;
