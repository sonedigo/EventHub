const {mysqlConnection, mysqlPromise} = require('../../database/mysqlConfig');
const authenticateService = require('../authenticateService');

module.exports={
	createUserId:async function(){
		let users;
		let userCounter = await mysqlPromise.then(function(connection){
			let NumberOfUser = connection.query('SELECT COUNT(userId) AS count FROM Users');
			return NumberOfUser;
		}).then(function(result){
			return result[0].count;
		}).catch(function(error){
			console.log(error);
		})
		let userId = await useridResult(userCounter);
		return userId;
	},
	createUserInfo:async function(req, userId){
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
	},
	getRoleId:function(role){
		if(role==='normalUser')return 1;
		else if(role==='group')return 2;
		else return 3;
	}

}


function useridResult(users){
	return users + 100000;
}