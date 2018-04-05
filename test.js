const Hospital = require('./app/hospital/hospital');
const HospitalRepository = require('./app/hospital/hospital-repository');
const Location = require('./app/location/location');
const LocationRepository = require('./app/location/location-repository');
const Connection = require('./database/connection');
const Search = require('./app/search-service/searcher');
const KeywordSearchCondition = require('./app/search-service/keyword-search-condition');
const User = require('./app/account/user/user');
const UserRepo = require('./app/account/user/user-repository');
const Credential = require('./app/account/credential/credential');
const CredentialRepo = require('./app/account/credential/credential-repository');
const Authenticate = require('./app/authenticate/authenticate');
const Hasher = require('./app/encrypt/bcrypt-hasher');
const RegistrationForm = require('./app/authenticate/registration-form');

let credentialRepo = new CredentialRepo(Connection);
let userRepo = new UserRepo(Connection);
let hasher = new Hasher();

let authenticate = new Authenticate(credentialRepo, userRepo, hasher);

let credential = new Credential('huyen120495@gmail.com', 'huyen123');
let user = new User();
user.setFirstName('dang');
user.setLastName('huyen');
let registrationForm = new RegistrationForm(credential, user);

//authenticate.signUp(registrationForm).then(console.log);
authenticate.signIn(credential).then(console.log)

// let hospitalRepo = new HospitalRepository(Connection);

// let locationRepo = new LocationRepository(Connection);

// let search = new Search(Connection);

// let keywordSearch = new KeywordSearchCondition('a');

// search.search(keywordSearch).then(console.log);


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
