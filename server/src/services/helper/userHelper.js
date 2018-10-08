const {mysqlConnection, mysqlPromise} = require('../../database/mysqlConfig');
const authenticateService = require('../authenticateService');

module.exports.createUserId=async function(){
	let users;
	let userCounter = await mysqlPromise.then(function(connection){
		let NumberOfUser = connection.query('SELECT COUNT(userId) AS count FROM Users');
		return NumberOfUser;
	}).then(function(result){
		users = result[0].count;
	})
	let userId = await useridResult(users);
	return userId;
}
module.exports.createUserInfo=async function(req, userId){
	const userInfo= [
			 userId,
			 req.userName,
			 req.email,
			 req.phone,
			 await authenticateService.encryptPassword(req.password),
			 req.gender,
		];
		console.log(userInfo);
		return userInfo;
}

function useridResult(users){
	return users + 100000;
}