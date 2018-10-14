const {mysqlConnection, mysqlPromise} = require('../database/mysqlConfig');
const userService = require('./userService');
const groupHelper = require('./helper/groupHelper');


module.exports={
	createGroup: async function(req, res){
		const groupId = await groupHelper.createGroupId();
		const groupInfo = await groupHelper.createGroupInfo();
		const groupCreater = await mysqlPromise.then(function(connection){
			const queryCommand = 'INSERT INTO Groups() VALUES()'
			return connection.query(queryCommand, groupInfo)
		}).then(function(results){
			res.status(200).send({
				groupCreated: true,
				description:"Create Group Succee"
			})
		}).catch(function(error){
			res.status(400).send("The error is:"+error);
		});
	},
	updateGroupInfo: async function(){

	},
	updateEvent:async function() {

	},
	createUserForGroup:async function(req, res) {
		let groupId = req.groupId;
		userService.createUser
	}
}