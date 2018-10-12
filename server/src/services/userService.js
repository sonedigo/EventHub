const {mysqlConnection,mysqlPromise} = require('../database/mysqlConfig');
const userHelper = require('./helper/userHelper');
const queryService = require('./queryService');
const authenticateService = require('./authenticateService');
const _ = require('lodash');

module.exports.createUser= async function(req, res){
	let userId = await userHelper.createUserId();
	let userInfo = await userHelper.createUserInfo(req, userId);
	let checkRegisterRole = await authenticateService.checkRegisterRole(req.role);
	if(!checkRegisterRole){
		res.status(400).send({
			error:1,
			description: 'Invaild form'
		});
	}else {
		let createResult = await mysqlPromise.then(function(connection){
			const InsertCommand = 'INSERT INTO Users(userId, userName, email, phone, password, gender) VALUES(?, ?, ?, ?, ?, ?)';
			let Result = connection.query(InsertCommand,userInfo);
			const InsertCommand_role = 'INSERT INTO UserRoles(userId, roleId) VALUES(?, ?)';
			let Result_role = connection.query(InsertCommand_role,[userId, roleId]);
			return Result;
		}).then(function(result){
			res.status(200).send({Register: true});
		}).catch(function(error){
			console.log(error);
		});
	}	
}		
module.exports.getUserInfo_byItself=async function(req, res){
	queryService.getuser(req, res);
}
module.exports.updateUserInfo=async function(req, res){
	const UpdateCommand = 'UPDATE users SET userName = ?, email = ?, phone = ?, password = ?, gender = ? WHERE id = ?';
	const UpdateData = [
	req.userName,
	req.email,
	req.phone,
	await authenticateService.encryptPassword(req.password),
	req.gender,
	req.userId
	];
	mysqlConnection.query(UpdateCommand, UpdateData, function(error, results, fields){
		if(error) throw error;
		res.status(200).send(results[0]);
	});
}
module.exports.enrollGroup = async function(req, res){
	let groupId = req.groupId;
	let userId = req.userId;
}
module.exports.exitGroup = async function(req, res){
	let groupId = req.groupId;
	let groupId = req.userId;
}
module.exports.editEvent=async function(req, res){
	let eventId = req.eventId;
}

