const {mysqlConnection} = require('../database/mysqlConfig');
const userHelper = require('./helper/userHelper');
const queryService = require('./queryService');
const authenticateService = require('./authenticateService');
const _ = require('lodash');

module.exports={
		async createUser(req, res) {
		const userInfo= {
			userName : req.userName,
			email : req.email,
			phone : req.phone,
			password: authenticateService.encryptPassword(req.password),
			gender : req.gender,
		}

		const InsertCommand = 'INSERT INTO Users(userName, email, phone, password, gender) VALUES(?, ?, ?, ?, ?)';
		await mysqlConnection.query(InsertCommand, userInfo, function(error, results, fields){
				if(error) throw error;
				res.status(200).send(results[0]);
			});
	},
	getUserInfo_byItself(req, res){
		queryService.getuser(req, res);
	},
	updateUserInfo(req, res){
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
	},
	editEvent(req, res){

	},
}

