const {mysqlConnection,mysqlPromise} = require('../database/mysqlConfig');

mysqlPromise.then(function(connection){
	const queryCommand = 'select * from users';
	let result = connection.query(queryCommand);
	connection.end();
	return result;
}).then(function(rows){
	console.log(rows);
})