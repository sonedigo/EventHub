const {mysqlConnection, mysqlPromise} = require('../../database/mysqlConfig');
const authenticateService = require('../authenticateService');

module.exports.createUserId=async function(){
	mysqlPromise.then(function(connection){
		connection.query();
	})
}
module.exports.createUserInfo=async function(req, userId){
	const password = await authenticateService.encryptPassword(req.password);
	const userInfo= [
			 userId,
			 req.userName,
			 req.email,
			 req.phone,
			 password,
			 req.gender,
		];
		return userInfo;
}