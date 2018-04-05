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

let user = new User();
user.setFirstName('dang');
user.setLastName('huyen');
user.setId(1);

let location1 = new Location(123.54, 23.11);
location1.setId(2);
let hospital1 = new Hospital('hos2', location1);
hospital1.setId(2);


let Rater = require('./app/interaction/rater');
let RaterRepo = require('./app/interaction/rater-repository');
let raterRepo = new RaterRepo(Connection);
let rater = new Rater(user,hospital1, 9, 'content ... edit');
console.log(rater);

raterRepo.add(rater).then(console.log);
