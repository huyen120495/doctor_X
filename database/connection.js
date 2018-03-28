//require('dotenv').config();
const connection = require('knex')({
	client: 'mysql',
	connection: {
		host : 'localhost',
		user : 'root',
		password : '1',
		database : 'doctor_X'
	},
	useNullAsDefault: true
});

module.exports = connection;