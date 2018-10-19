const {mysqlConnection, mysqlPromise} = require('../database/mysqlConfig');

module.exports={
	createGroupUserRelation:async function(groupId, userId){
		const Command = 'INSERT INTO GroupUsersRelation(groupId, userId) VALUES(?, ?)';
		let WhetherSuccee = false;
		const Result = await mysqlPromise.then(function(connection){
			connection.query(Command, [groupId,userId]);
		}).then(function(results){
			WhetherSuccee = true;
		}).then(function(error){
			console.log(error);
		})
	},
	createEventUserRelation:async function(objectId){
		const eventId = objectId.eventId;
		const userId = objectId.userId;
		const Command = 'INSERT INTO EventUsersRelation(eventId, userId) VALUES(?, ?)';
		const Result = await mysqlPromise.then(function(connection){
			return connection.query(Command, [eventId, userId]);
		}).then(function(results){	

		}).then(function(error){
			console.log(error);
		});
	},
	createEventGroupRelation:async function(objectId){
		const eventId = objectId.eventId;
		const groupId = objectId.groupId;
		const Command = 'INSERT INTO EventUsersRelation(eventId, groupId) VALUES(?, ?)';
		const Result = await mysqlPromise.then(function(connection){
			return connection.query(Command, [eventId, groupId]);
		}).then(function(results){
		}).then(function(error){
			console.log(error);
		});
	},
	createUserRoleRelation:async function(objectId){

	},
	removeUserFromGroup:async function(groupId, userId){
		const Command = 'DELETE * FROM GroupUsersRelation WHERE groupId =? AND userId =?';
		const Result = await mysqlPromise.then(function(connection){
			return connection.query(Command, [groupId, userId]);
		}).then(function(results){
			console.log(results);
		}).then(function(error){
			console.log(error);
		});
	},

}