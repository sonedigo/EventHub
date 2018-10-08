const {mysqlConnection, mysqlPromise} = require('../database/mysqlConfig');
const authenticateService = require('./authenticateService');
const loginHelper = require('./helper/loginHelper');

module.exports.signIn=async function(req, res){
	const password = req.password;
	const username = req.username;
	let vaildation = await authenticateService.vaildUser(username, password); 
	if(!validation){
		res.status(400).send('Invalid Username or Password');
	}else {
		let userid = await loginHelper.getUserId(username);
		let role = await loginHelper.assignRole(userid);
	}

}