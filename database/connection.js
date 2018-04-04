const connection = require('knex')({
    client: 'mysql',
    connection: {
        host : 'localhost',
        user : 'root',
        password : '9',
        database : 'doctor_X'
    }
});
module.exports = connection;