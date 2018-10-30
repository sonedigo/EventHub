const {mysqlConnection, mysqlPromise} = require('../database/mysqlConfig');

module.exports={
	createGroupUserRelation:async function(groupId, userId){
		const Command = 'INSERT INTO GroupUsersRelation(groupId, userId) VALUES(?, ?)';
		const whetherSuccess = await mysqlPromise.then(function(connection){
			return connection.query(Command, [groupId,userId]);
		}).then(function(results){
			return true;
		}).catch(function(error){
			console.log(error);
			return false;
		})
		return whetherSuccess;
	},
	createEventUserRelation:async function(eventId, userId){
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
	createEventGroupRelation:async function(eventId, groupId){
		const Command = 'INSERT INTO EventGroupsRelation(eventId, groupId) VALUES(?, ?)';
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
	deleteEventUserRelation:async(eventId, userId)=>{
		const command = 'DELETE FROM EventUsersRelation WHERE eventId=? OR userId=?';
		const whetherSuccess = await mysqlPromise.then(function(connection){
			return connection.query(command,[eventId,userId]);
		}).then(function(results){
			return true;
		}).catch(function(error){
			console.log(error);
			return false;
		});
		return whetherSuccess;
	},
	deleteEventGroupRelation:async(eventId, groupId)=>{
		const command = 'DELETE FROM EventGroupsRelation WHERE eventId=? OR groupId=?';
		const whetherSuccess = await mysqlPromise.then(function(connection){
			return connection.query(command,[eventId,groupId]);
		}).then(function(results){
			return true;
		}).catch(function(error){
			console.log(error);
			return false;
		});
		return whetherSuccess;
	},
	deleteGroupUserRelation:async(userId, groupId)=>{
		const command = 'DELETE FROM GroupUsersRelation WHERE userId=? OR groupId=?';
		const whetherSuccess = await mysqlPromise.then(function(connection){
			return connection.query(command,[userId,groupId]);
		}).then(function(results){
			return true;
		}).catch(function(error){
			console.log(error);
			return false;
		});
		return whetherSuccess;
	},
	deleteUserRoleRelation:async()=>{
		const command = 'DELETE FROM UserRolesRelation WHERE  userId=?';
		const whetherSuccess = await mysqlPromise.then(function(connection){
			return connection.query(command,[userId]);
		}).then(function(results){
			return true;
		}).catch(function(error){
			console.log(error);
			return false;
		});
		return whetherSuccess;
	},
	removeUserFromGroup:async function(groupId, userId){
		const Command = 'DELETE FROM GroupUsersRelation WHERE groupId =? AND userId =?';
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