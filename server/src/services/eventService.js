const {mysqlConnection, mysqlPromise} = require('../database/mysqlConfig');
const eventHelper = require('./helper/eventHelper');

module.exports={
	createEvent: async function(req, res){
		const event = await eventHelper.eventInfo_array(req);
		const InsertCommand = 'INSERT INTO Events(eventId, eventTitle, eventDescription, location, startsDate, endsDate, OrganizerName, OrganizerDescription, OrganizerEmail, OrganizerPhone) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
		const Result = await mysqlPromise
		.then(function(connection){
			return connection.query(InsertCommand, event);
		}).then(function(results){
			return {isEventCreated:true, eventId:event[6]};//should come with another service inside here
		}).catch(function(error){
			return {isEventCreated:false, Error:error}
		});
		return Result;
	},
	getEvent:async function(req, res){
		const eventId = req.eventId;
		const Command = 'SELECT * FROM Events WHERE eventId = ?';
		const Result = await mysqlPromise.then(function(connection){
			return connection.query(Command, eventId);
		}).then(function(results){
			return {result: results[0], isGot:true}
		}).catch(function(error){
			console.log(error);
			return {Error:error, isGot:false};
		});
		return Result;
	},
	updateEvent:async function(_, res){
		//const _=req;
		const Command = 'UPDATE Events SET eventTitle = ?, eventDescription = ?, location = ?, startsDate = ?, endsDate= ?, OrganizerName = ?, OrganizerDescription = ?, OrganizerEmail = ?, OrganizerPhone = ? WHERE eventId = ?';
		const eventInfo = 				[_.eventTitle, _.eventDescription, _.location, _.startsDate, _.endsDate, _.OrganizerName, _.OrganizerDescription, _.OrganizerEmail, _.OrganizerPhone, _.eventId];
		const Result = await mysqlPromise.then(function(connection){
			return connection.query(Command, eventInfo);
		}).then(function(results){
			return {isEventUpdated: true}
		}).catch(function(error){
			console.log(error);
			return {isEventUpdated:false,Error:error}
		});
		return Result;
	},
	deleteEvent:async function(req, res){
		const Command = 'DELETE FROM Events WHERE eventId = ?';
		const Result = await mysqlPromise.then(function(connection){
			return connection.query(Command, req.eventId);
		}).then(function(results){
			return {isEventDeleted: true};
		}).catch(function(error){
			console.log(error);
			return {isEventDeleted: false, Error:error};
		});
		return Result;
	},
}


