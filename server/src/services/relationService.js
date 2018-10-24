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
			return false;
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
			return false;
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
			return false;
		});
		return whetherSuccess;
	},
	createUserRoleRelation:async function(userId, roleId){
		const command = 'INSERT INTO UserRolesRelation(userId, roleId) VALUES(?,?)';
		const whetherSuccess = await mysqlPromise.then(function(connection){
			return connection.query(command, [userId, roleId]);
		}).then(function(results){
			return true;
		}).catch(function(error){
			console.log(error);
			return false;
		});
		return whetherSuccess;
	},
	removeUserFromGroup:async function(groupId, userId){
		const Command = 'DELETE * FROM GroupUsersRelation WHERE groupId =? AND userId =?';
		const whetherSuccess = await mysqlPromise.then(function(connection){
			return connection.query(Command, [groupId, userId]);
		}).then(function(results){
			return true;
		}).catch(function(error){
			console.log(error);
			return false;
		});
		return whetherSuccess;
	},

}