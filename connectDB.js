/* Connects to database */

const mysql = require('mysql');

// //LOCAL DATABASE CONNECTION
// const db = mysql.createConnection({
// 	host: 'localhost',
// 	user: 'root',
// 	password: 'root',
// 	database: 'trbokning'
// });

const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'trbokning'
});

db.connect((err) => {
	if (err) {
		throw err;
	}
	console.log('Connected to database');
});

module.exports = db;
