const connection = require('knex')({
    client: 'mysql',
    connection: {
        host      : 'localhost',
        user      : 'root',
        password  : '169614',
        database  : 'doctor_X',
        charset   : 'utf8'
    },
    useNullAsDefault: true
});

module.exports = connection;