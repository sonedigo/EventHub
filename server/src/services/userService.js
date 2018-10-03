const {mysqlConnection} = require('../database/mysqlConfig');
const userHelper = require('./helper/userHelper');
const queryService = require('./queryService');
const _ = require('lodash');

module.exports={
		createUser(req, res) {
			console.log(userHelper.createUserId());
		let userId = userHelper.createUserId();
		const userInfo= {
			userName : req.userName,
			email : req.email,
			phone : req.phone,
			password: req.password,
			gender : req.gender,
		}
		console.log(userInfo);
		const InsertCommand = 'INSERT INTO Users(userName, email, phone, password, gender) VALUES(?, ?, ?, ?, ?)';
		let InsertData = [ 
		userInfo.userName, 
		userInfo.email, 
		userInfo.phone, 
		userInfo.password, 
		userInfo.gender
		];
		mysqlConnection.query(InsertCommand, InsertData,function(error, results, fields){
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
		req.password,
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

