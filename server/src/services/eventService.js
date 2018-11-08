const {mysqlConnection, mysqlPromise} = require('../database/mysqlConfig');
const eventHelper = require('./helper/eventHelper');
const relationService = require('./relationService');
const senderService = require('../services/senderService');
const authenticateService = require('./authenticateService');

module.exports={
	userCreateEvent:async function(req, res){
		const event = await eventHelper.eventInfo_array(req);
		const InsertCommand = 'INSERT INTO Events(eventId, eventTitle, eventDescription, location, startsDate, endsDate, OrganizerName, OrganizerDescription, OrganizerEmail, OrganizerPhone) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
		const eventCreateResponse = await mysqlPromise
		.then(function(connection){
			connect = connection;
			return connection.query(InsertCommand, event);
		}).then(function(results){
			return {isEventCreated:true, eventId:event[0]};//should come with another service inside here
		}).catch(function(error){
			return {isEventCreated:false, Error:error}
		});
		//const eventCreateResponse = await createEvent(infoPart, res);
		const relationCreateResponse = await relationService.createEventUserRelation(eventCreateResponse.eventId, req.userId);
		if(eventCreateResponse.isEventCreated && relationCreateResponse){
			senderService.successSender(eventCreateResponse, res);
		}else{
			senderService.errorSender(eventCreateResponse, res);
		};
		return eventCreateResponse;
		
	},
	createEvent: async function(req, res){
		let connect;
		const event = await eventHelper.eventInfo_array(req);
		const InsertCommand = 'INSERT INTO Events(eventId, eventTitle, eventDescription, location, startsDate, endsDate, OrganizerName, OrganizerDescription, OrganizerEmail, OrganizerPhone) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
		const Result = await mysqlPromise
		.then(function(connection){
			connect = connection;
			return connection.query(InsertCommand, event);
		}).then(function(results){
			return {isEventCreated:true, eventId:event[0]};//should come with another service inside here
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
		if(Result.isGot){
			senderService.successSender(result, res);
		}else {
			senderService.errorSender(result, res);
		}
		return Result;
	},
	updateEvent:async function(_, res){
		const _=req;
		const Command = 'UPDATE Events SET eventTitle = ?, eventDescription = ?, location = ?, startsDate = ?, endsDate= ?, OrganizerName = ?, OrganizerDescription = ?, OrganizerEmail = ?, OrganizerPhone = ? WHERE eventId = ?';
		const eventInfo = 				[_.eventTitle, _.eventDescription, _.location, _.startsDate, _.endsDate, _.OrganizerName, _.OrganizerDescription, _.OrganizerEmail, _.OrganizerPhone, _.eventId];
		const updateResult = await mysqlPromise.then(function(connection){
			return connection.query(Command, eventInfo);
		}).then(function(results){
			return {isEventUpdated: true}
		}).catch(function(error){
			console.log(error);
			return {isEventUpdated:false,Error:error}
		});
		if(updateResult.isEventUpdated){
			senderService.successSender(updateRes);
		}else{
			senderService.errorSender(updateRes);
		}
		return updateResult;
	},
	updateEvent:async function(req, res){
		const infoPart = req.body;
		const updateRes = await eventService.updateEvent(infoPart, res);
		
	},
	userDeleteEvent:async function(req, res){
		const Command = 'DELETE FROM Events WHERE eventId = ?';
		const step_1 = await mysqlPromise.then(function(connection){
			return connection.query(Command, req.eventId);
		}).then(function(results){
			return {isEventDeleted: true};
		}).catch(function(error){
			console.log(error);
			return {isEventDeleted: false, Error:error};
		});
		const step_2 = await eventService.deleteUserEventRelation(req, res);
		if(step_1.isEventDeleted && step_2.isEventDeleted){
			senderService.successSender(step_1,res);
		}else{
			senderService.errorSender(step_2,res)
		}
		return [step_1,step_2];
	},
	groupDeleteEvent:async function(req, res){
		const infoPart = req.body;
		const step_1 = await mysqlPromise.then(function(connection){
			return connection.query(Command, req.eventId);
		}).then(function(results){
			return {isEventDeleted: true};
		}).catch(function(error){
			console.log(error);
			return {isEventDeleted: false, Error:error};
		});
		const step_2 = await eventService.deleteUserEventRelation(infoPart, res);
		if(step_1.isEventDeleted && step_2.isDeleted){
			senderService.successSender({step_1,step_2},res);
		}else{
			senderService.errorSender({step_1, step_2},res);
		}
		return [step_1, step_2];
	},
	groupCreateEvent:async function(req, res){
		//need to be refactor with async 
		//const eventCreateResponse = await eventService.createEvent(infoPart, res);
		let connect;
		const event = await eventHelper.eventInfo_array(req);
		const InsertCommand = 'INSERT INTO Events(eventId, eventTitle, eventDescription, location, startsDate, endsDate, OrganizerName, OrganizerDescription, OrganizerEmail, OrganizerPhone) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
		const eventCreateResponse = await mysqlPromise
		.then(function(connection){
			connect = connection;
			return connection.query(InsertCommand, event);
		}).then(function(results){
			return {isEventCreated:true, eventId:event[0]};//should come with another service inside here
		}).catch(function(error){
			return {isEventCreated:false, Error:error}
		});
		const relationCreateResponse = await relationService.createEventGroupRelation(eventCreateResponse.eventId, req.userId);
		if(eventCreateResponse.isEventCreated && relationCreateResponse){
			senderService.successSender(eventCreateResponse, res);
		}else{
			senderService.errorSender(eventCreateResponse, res);
		};
		return eventCreateResponse;
    }
}


