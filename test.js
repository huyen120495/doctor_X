const Hospital = require('./app/hospital/hospital');
const HospitalRepository = require('./app/hospital/hospital-repository');
const Location = require('./app/location/location');
const LocationRepository = require('./app/location/location-repository');
const Connection = require('./database/connection');
const Search = require('./app/search-services/searcher');
const KeywordSearchCondition = require('./app/search-services/keyword-search-condition');

let hospitalRepo = new HospitalRepository(Connection);

let locationRepo = new LocationRepository(Connection);

let search = new Search(Connection);

let keywordSearch = new KeywordSearchCondition('f');

search.search(keywordSearch).then(console.log);


// let location = new Location(321, 111);
// location.setId(9);
// locationRepo.edit(location).then(() => {
//     let hospital = new Hospital('ten hospital', location);
//     hospital.setId(13);
//     hospitalRepo.edit(hospital).then(() => {
//         console.log('ok');
//     }, () => {
//         console.log('fail');
//     });
// });

// hospitalRepo.delete(12).then(console.log);

// hospitalRepo.all().then(console.log);
