const {mysqlConnection, mysqlPromise} = require('../database/mysqlConfig');

module.exports={
	createGroupUserRelation:async function(groupId, userId){
		const Command = 'INSERT INTO GroupUsersRelation(groupId, userId) VALUES(?, ?)';
		const whetherSuccess = await mysqlPromise.then(function(connection){
			connection.query(Command, [groupId,userId]);
		}).then(function(results){
			return true;
		}).catch(function(error){
			console.log(error);
		})
		return whetherSuccess;
	},
	createEventUserRelation:async function(objectId){
		const eventId = objectId.eventId;
		const userId = objectId.userId;
		const Command = 'INSERT INTO EventUsersRelation(eventId, userId) VALUES(?, ?)';
		const whetherSuccess = await mysqlPromise.then(function(connection){
			return connection.query(Command, [eventId, userId]);
		}).then(function(results){	
			return true;
		}).catch(function(error){
			console.log(error);
		});
		return whetherSuccess;
	},
	createEventGroupRelation:async function(objectId){
		const eventId = objectId.eventId;
		const groupId = objectId.groupId;
		const Command = 'INSERT INTO EventUsersRelation(eventId, groupId) VALUES(?, ?)';
		const whetherSuccess = await mysqlPromise.then(function(connection){
			return connection.query(Command, [eventId, groupId]);
		}).then(function(results){
			return true;
		}).catch(function(error){
			console.log(error);
		});
		return whetherSuccess;
	},
	createUserRoleRelation:async function(objectId){

	},
	removeUserFromGroup:async function(groupId, userId){
		const Command = 'DELETE * FROM GroupUsersRelation WHERE groupId =? AND userId =?';
		const whetherSuccess = await mysqlPromise.then(function(connection){
			return connection.query(Command, [groupId, userId]);
		}).then(function(results){
			return true;
		}).catch(function(error){
			console.log(error);
		});
		return whetherSuccess;
	},

}