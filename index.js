const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const expressSession = require('express-session');
const router = require('./http/router/router');
const Connecton = require('./database/connection');
const HospitalRepository = require('./app/hospital/hospital-repository');
const RaterRepository = require('./app/interaction/rater-repository');
const UserRepository = require('./app/account/user/user-repository');
const CredentialRepository = require('./app/account/credential/credential-repository');
const Authenticate = require('./app/authenticate/authenticate');
const HospitalFactoryFromRQ = require('./app/hospital/hospital-factory-from-rq');
const Hasher = require('./app/encrypt/bcrypt-hasher');
const CredentialFactory = require('./app/account/credential/credential-factory');

app.set('HospitalRepository', new HospitalRepository(Connecton));
app.set('RaterRepository', new RaterRepository(Connecton));
app.set('Authenticate', new Authenticate(new CredentialRepository(Connecton), new UserRepository(Connecton), new Hasher));
app.set('HospitalFactoryFromRQ', new HospitalFactoryFromRQ());
app.set('CredentialFactory', new CredentialFactory());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use('/', router);

app.listen(3000, function() {
    console.log('server listen port 3000 ...')
});
