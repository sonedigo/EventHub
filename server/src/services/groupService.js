const {mysqlConnection, mysqlPromise} = require('../database/mysqlConfig');
const userService = require('./userService');
const groupHelper = require('./helper/groupHelper');
const senderService = require('./senderService');


module.exports={
	createGroup: async function(req){
		const groupId = await groupHelper.createGroupId();
		const groupInfo = await groupHelper.createGroupInfo(req, groupId);
		const groupCreated = await mysqlPromise.then(function(connection){
			const queryCommand = 'INSERT INTO userGroups(groupId, groupName, email, phone, password) VALUES(?, ?, ?, ?, ?)';
			return connection.query(queryCommand, groupInfo)
		}).then(function(results){
			return{
				isCreated: true,
				isError: false,
				description:'Create Group Success'
			};
		}).catch(function(error){
			console.log(error);
			return {
				isCreated: false,
				isError: true,
				description: 'error in create group'
			};
		});
		return {groupCreated, groupId};
	},
	updateGroupInfo: async function(req, res){
		const groupId = req.groupId;
		const groupInfo_array = await groupHelper.groupInfo_array(req);
		const Command = 'UPDATE userGroups SET groupName=?, phone=?, email=?, password=? WHERE groupId = ?';
		const Result = await mysqlPromise.then(function(connection){
			return connection.query(Command, groupInfo_array);
		}).then(function(results){
			return {
				isUpdated: true,
				description:"Update Group Success"
			};
		}).catch(function(error){
			console.log(error);
			return {
				isUpdated: false,
				description: 'error in update group information'
			};
		});
		return Result;
	},
	createUserForGroup:async function(req, res) {
		let groupId = req.groupId;
		let userId = await userService.createUser(req, res);
		let relationId = await relationService.createGroupUserRelation(groupId, userId);
		return relationId;
	},
	getGroupMember: async function(req, res){
		let groupId = req.groupId;
		const command = 'SELECT userId AS users FROM GroupUsersRelation';
		const queryResult = await mysqlPromise.then(function(connection){
			return connection.query(command, groupId);
		}).then(function(results){
			return {
				isGot: true,
				result:results[0].users
			};
		}).catch(function(error){
			console.log(error);
			return {
				isGot: false,
				result: error
			}
		});
		if(queryResult.isGot){
			senderService.success(queryResult, res);
		}else {
			senderService.error(queryResult, res);
		}
		return queryResult;
	}
}