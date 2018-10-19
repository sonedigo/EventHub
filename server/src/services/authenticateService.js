const {mysqlConnection, mysqlPromise} = require('../database/mysqlConfig');
const bcrypt = require('bcrypt');

module.exports.encryptPassword= async function(password){
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);
		return hashedPassword;
}

module.exports.validUser = async function (username, password){
		let passwordDB;
		const queryCommand = "SELECT password from users where userName = ?";
		const queryresult = mysqlPromise.then(function(connection){
			return connection.query(queryCommand, username);
		}).then(function(results){
			passwordDB = results[0].password;
		}).catch(function(error){
			console.log(error);
		})
		const WhetherPass = await bcrypt.compare(password, passwordDB);
		return WhetherPass;
}

module.exports.isDuplicatedEmail = async function(email){
		let functionReturn;	
		const queryCommand = 'SELECT COUNT(email) AS duplicateResult FROM Users WHERE email = ?';
		const queryresult = await mysqlPromise.then(function(connection){
			return connection.query(queryCommand, [email]);
		}).then(function(results){
			functionReturn = results[0].duplicateResult;
			if(functionReturn!=0)return true;
		else return false;
		}).catch(function(error){
			console.log(error);
		});
		return queryresult;
		
}
module.exports.isDuplicatedUsername = async function(username){
	let functionReturn;	
		const queryCommand = 'SELECT COUNT(userName) AS duplicateResult FROM Users WHERE userName = ?'
		const queryresult = await mysqlPromise.then(function(connection){
			return connection.query(queryCommand, [username]);
		}).then(function(results){
			functionReturn = results[0].duplicateResult;
			if(functionReturn!=0)return true;
		else return false;
		}).catch(function(error){
			console.log(error);
		});
		return queryresult;
		
}
module.exports.checkRegisterRole= async function(roleId){
	if(roleId === 1 || roleId ==2 )return true;
	else return false;
}
