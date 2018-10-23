const {mysqlConnection,mysqlPromise} = require('../database/mysqlConfig');
const userHelper = require('./helper/userHelper');
const queryService = require('./queryService');
const authenticateService = require('./authenticateService');
const relationService = require('./relationService');
const eventService = require('./eventService');
const _ = require('lodash');

module.exports.createUser= async function(req, res){
	let userId = await userHelper.createUserId();
	let userInfo = await userHelper.createUserInfo(req, userId);
	let roleId = await userHelper.getRoleId(req.role);
	let checkRegisterRole = await authenticateService.checkRegisterRole(roleId);
	let isDuplicatedEmail = await authenticateService.isDuplicatedEmail(req.email);
	let isDuplicatedUsername = await authenticateService.isDuplicatedUsername(req.userName);
	if((isDuplicatedEmail || isDuplicatedUsername)){
		res.status(400).send({
			error: 2,
			description: 'duplicate Email or Username'
		})
	}else{
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
	return userId;
}

module.exports.getUserInfo_byItself=async function(req, res){
	queryService.getuser(req, res);
}

module.exports.updateUserInfo=async function(req, res){
	const password = await authenticateService.encryptPassword(req.password)
	const UpdateCommand = 'UPDATE users SET userName = ?, email = ?, phone = ?, password = ?, gender = ? WHERE userId = ?';
	const UpdateData = [req.userName, req.email, req.phone, password, req.gender,req.userId];
	mysqlConnection.query(UpdateCommand, UpdateData, function(error, results, fields){
		if(error) throw error;
		res.status(200).send("succeed update");
	});
}
module.exports.enrollGroup = async function(req, res){
	let whetherSuccee = await relationService.createGroupUserRelation(req.groupId, req.userId);
	if(whetherSuccee){
		res.status(200).send({isEnrolled:true});
	}else {
		res.status(400).send({isEnrolled:false});
	}
}
module.exports.exitGroup = async function(req, res){
	let whetherSuccee = await relationService.removeUserFromGroup(req.groupId, req.userId);
	if(whetherSuccee){
		res.status(200).send({isExited: true});
	}else {
		res.status(400).send({isExited: false});
	}
}
module.exports.editEvent=async function(req, res){
	let eventId = req.eventId;
}

