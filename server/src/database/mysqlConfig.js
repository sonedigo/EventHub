const mysql = require('mysql');
const faker = require('faker');
const config = require('config');
const mysql_Promise = require('promise-mysql');
const password = process.env.sqlPassword;
let setting = {
	host: 'localhost',
	user: 'eventAdmin',
	password: password,
	database: config.get('setting.database')
};
console.log(`Connecting to ${config.get('setting.database')}`);
let mysqlConnection = mysql.createConnection(setting);

let mysqlPromise = mysql_Promise.createConnection(setting);

mysqlConnection.connect(function(err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('connected as id ' + mysqlConnection.threadId);

});

module.exports = {mysqlConnection, mysqlPromise};