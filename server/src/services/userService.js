const {mysqlConnection} = require('../database/mysqlConfig');
const userHelper = require('./helper/userHelper');
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
		const InsertCommand = 'INSERT INTO Users( userName, email, phone, password, gender) VALUES(?, ?, ?, ?, ?)';
		let InsertData = [ userInfo.userName, userInfo.email, userInfo.phone, userInfo.password, userInfo.gender];
		mysqlConnection.query(InsertCommand, 
			InsertData,
			function(error, results, fields){
				if(error) throw error;
				res.status(200).send(results);
			});
	},
	updateUserInfo(req, res){

	},
	editEvent(req, res){

	},
}

