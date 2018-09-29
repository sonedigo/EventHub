let mysql = require('mysql');
let password = process.env.sqlPassword;
let mysqlConnection = mysql.createConnection({
	host: 'localhost',
  user: 'sonedigo',
  password: password,
  database: 'EventHub'
});

mysqlConnection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + mysqlConnection.threadId);
});

module.exports = {mysqlConnection};