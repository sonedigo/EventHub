const {mysqlConnection, mysqlPromise} = require('../database/mysqlConfig');
const userService = require('./userService');
const groupHelper = require('./helper/groupHelper');


module.exports={
	createGroup: async function(req, res){
		const groupId = await groupHelper.createGroupId();
		const groupInfo = await groupHelper.createGroupInfo(req, groupId);
		const groupCreater = await mysqlPromise.then(function(connection){
			const queryCommand = 'INSERT INTO userGroups(groupId, groupName, email, phone, password) VALUES(?, ?, ?, ?, ?)';
			return connection.query(queryCommand, groupInfo)
		}).then(function(results){
			res.status(200).send({
				groupCreated: true,
				description:"Create Group Success"
			})
		}).catch(function(error){
			console.log(error);
			res.status(400).send({
				groupCreated: false,
				description: 'error in create group'
			});
		});
	},
	updateGroupInfo: async function(req, res){
		const groupId = req.groupId;
		const groupInfo_array = await groupHelper.groupInfo_array(req);
		const Command = 'UPDATE';
		const Result =await mysqlPromise.then(function(connection){
			return connection.query(Command, groupInfo_array);
		}).then(function(results){
			res.status(200).send({
				groupUpdated: true,
				description:"Update Group Success"
			});
		}).catch(function(error){
			console.log(error);
			res.status(400).send({
				groupUpdated: false,
				description: 'error in update group information'
			});
		})
	},
	createUserForGroup:async function(req, res) {
		let groupId = req.groupId;
		let userId = await userService.createUser(req, res);
		let relationId = await relationService.createGroupUserRelation(groupId, userId);
		return relationId;
	},
	getGroupMembers: async function(req, res){
		let groupId = req.groupId;
		const command = 'SELECT userId AS users FROM GroupUsersRelation';
		const userArray = await mysqlPromise.then(function(connection){
			return connection.query(command, groupId);
		}).then(function(results){
			res.status(200).send(results[0].users);
			return results[0].users;
		}).catch(function(error){
			console.log(error);
		})
	}
}