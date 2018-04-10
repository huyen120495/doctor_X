const Hospital = require('./src/hospital/hospital');
const HospitalRepository = require('./src/hospital/hospital-repository');
const Location = require('./src/location/location');
const LocationRepository = require('./src/location/location-repository');
const Connection = require('./database/connection');
const Hasher = require('./src/encrypt/bcrypt-hasher');
const Credential = require('./src/credential/credential');
const RadiusSearchCondition = require('./src/search-services/radius-search-condition');
const UserRepo = require('./src/user/user-repository');
const User = require('./src/user/user');
const RaterRepository = require('./src/rater/rater-repository');
const Rater = require('./src/rater/rater');
const Searcher = require('./src/search-services/searcher');
const SearchKeywordCondition = require('./src/search-services/keyword-search-condition');
const TopRateSearchCondition = require('./src/search-services/top-rate-search-condition');
const HospitalFactory = require('./src/hospital/hospital-factory');
// const hospitalRepo = new HospitalRepository(Connection);
// const locationRepo = new LocationRepository(Connection);
// const location1 = new Location( 23, 105);
// const hospital = new Hospital('huyên', location1);
// const location2 = new Location(8, 104);
// const radiusSearch = new RadiusSearchCondition(20,location1);

// locationRepo.add(location1).then(function (id) {
//     location1.setId(id);
//     hospitalRepo.add(hospital).then(console.log)
// });
// console.log(location1.distance(location2));

// user = new User('huyên', 'lợn');
//
// userRepo = new UserRepo(Connection);
// rate = new Rater(user, hospital, 'ngu vl', 4);
// console.log(rate);
// rateRepo = new RaterRepository(Connection);
// rateRepo.add(rate).then(console.log);
//
//
let key = new SearchKeywordCondition('u');
let search = new Searcher(Connection, new HospitalFactory());
search.search(key).then(console.log);