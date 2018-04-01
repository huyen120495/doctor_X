const Hospital = require('./app/hospital/hospital');
const HospitalRepository = require('./app/hospital/hospital-repository');
const Location = require('./app/location/location');
const LocationRepository = require('./app/location/location-repository');
const Connection = require('./database/connection');
const Search = require('./app/search-services/searcher');
const KeywordSearchCondition = require('./app/search-services/keyword-search-condition');
const User = require('./app/user/user');
const UserRepo = require('./app/user/user-repository');
const Credential = require('./app/credential/credential');
const CredentialRepo = require('./app/credential/credential-repository');
const Register = require('./app/register/register');
const Login = require('./app/login/login')
const Hasher = require('./app/encrypt/bcript-hasher');

let credentialRepo = new CredentialRepo(Connection);
let userRepo = new UserRepo(Connection);
let hasher = new Hasher();

let register = new Register(credentialRepo, userRepo, hasher);
let login = new Login(credentialRepo, hasher, userRepo);

let credential = new Credential('huyen120495@gmail.com', 'huyen123');
let user = new User();
user.setFirstName('dang');
user.setLastName('huyen');

login.login(credential).then(console.log,console.log)

// register.register(credential, user).then(() => {
//     console.log('ok');
// }, (a) => {
//     console.log(a);
// })


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
