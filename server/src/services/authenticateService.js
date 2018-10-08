const {mysqlConnection, mysqlPromise} = require('../database/mysqlConfig');
const bcrypt = require('bcrypt');

module.exports.encryptPassword= async function(password){
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);
		return hashedPassword;
	}

module.exports.validUser = async function (username, password){
		let WhetherPass = false;
		let passwordDB;
		const queryCommand = 'SELECT password from users where userName = ?';
		const queryresult = await mysqlPromise.then(function(connection){
			return connection.query(queryCommand, username);
		}).then(function(result){
			passwordDB = result[0].password;
		})
		WhetherPass = await bcrypt.compare(results[0].password, passwordDB);
				if(!WhetherPass){
					return false;
				}else{
					return true;
				}
		}