const express = require('express');
const bodyParser = require('body-parser');
const index = require('./routes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use('/', index);

app.listen(3000, function () {
    console.log('Sever listening on port 3000')
});