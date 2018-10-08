const {mysqlConnection,mysqlPromise} = require('../database/mysqlConfig');
const userHelper = require('./helper/userHelper');
const queryService = require('./queryService');
const authenticateService = require('./authenticateService');
const _ = require('lodash');

module.exports.createUser= async function(req, res){
	let userId = await userHelper.createUserId();
	let userInfo = await userHelper.createUserInfo(req, userId);
	let createResult = await mysqlPromise.then(function(connection){
		const InsertCommand = 'INSERT INTO Users(userId,userName, email, phone, password, gender) VALUES(?, ?, ?, ?, ?)';
		 mysqlPromise.query(InsertCommand,userInfo);
	})
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
		authenticateService.encryptPassword(req.password),
		req.gender,
		req.userId
		];
		mysqlConnection.query(UpdateCommand, UpdateData, function(error, results, fields){
			if(error) throw error;
			res.status(200).send(results[0]);
		});
	}
module.exports.editEvent=async function(req, res){

	}

