const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const expressSession = require('express-session');
const router = require('./http/router/router');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use('/', router);

app.listen(3000, function() {
    console.log('server listen port 3000 ...')
});
