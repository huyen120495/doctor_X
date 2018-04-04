const Hospital = require('./src/hospital/hospital');
const HospitalRepository = require('./src/hospital/hospital-repository');
const Location = require('./src/location/location');
const LocationRepository = require('./src/location/location-repository');
const Connection = require('./database/connection');
const Hasher = require('./src/encrypt/bcrypt-hasher');
const Credential = require('./src/credential/credential');
const RadiusSearchCondition = require('./src/search-services/radius-search-condition');

// const hospitalRepo = new HospitalRepository(Connection);
// const locationRepo = new LocationRepository(Connection);
// const hospital = new Hospital('huyên', location);
const location1 = new Location( 23, 105);
// const location2 = new Location(8, 104);
const radiusSearch = new RadiusSearchCondition(20,location1);

// locationRepo.add(location).then(function (id) {
//     location.setId(id);
//     hospitalRepo.add(hospital).then(function () {
//         console.log('ok');
//     })
// });
// console.log(location1.distance(location2));


