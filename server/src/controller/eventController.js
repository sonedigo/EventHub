const _ = require('lodash');	//load low_dash library
const queryService = require('../services/queryService');
const userService = require('../services/userService');
const authenticateService = require('../services/authenticateService');
const groupService = require('../services/groupService');
const eventService = require('../services/eventService');
const relationService = require('../services/relationService');
const senderService = require('../services/senderService');

module.exports={
	userCreateEvent:async function(req, res){
		const infoPart = req.body;
		const eventCreateResponse = await eventService.createEvent(infoPart, res);
		const relationCreateResponse = await relationService.createEventUserRelation(eventCreateResponse.eventId, req.body.userId);
		if(eventCreateResponse.isEventCreated && relationCreateResponse){
			senderService.successSender(eventCreateResponse, res);
		}else{
			senderService.errorSender(eventCreateResponse, res);
		};
		
	},
	updateEvent:async function(req, res){
		const infoPart = req.body;
		const updateRes = await eventService.updateEvent(infoPart, res);
		if(updateRes.isEventUpdated){
			senderService.successSender(updateRes);
		}else{
			senderService.errorSender(updateRes);
		}
	},
	userDeleteEvent:async function(req, res){
		const infoPart = req.body;
		const step_1 = await eventService.deleteEvent(infoPart, res);
		const step_2 = await eventService.deleteUserEventRelation(infoPart, res);
		if(step_1.isEventDeleted && step_2.isEventDeleted){
			senderService.successSender(step_1,res);
		}else{
			senderService.errorSender(step_2,res)
		}
	},
	groupCreateEvent:async function(req, res){
		//need to be refactor with async 
			const infoPart = req.body;
		const eventCreateResponse = await eventService.createEvent(infoPart, res);
		const relationCreateResponse = await relationService.createEventGroupRelation(eventCreateResponse.eventId, req.body.userId);
		if(eventCreateResponse.isEventCreated && relationCreateResponse){
			senderService.successSender(eventCreateResponse, res);
		}else{
			senderService.errorSender(eventCreateResponse, res);
		};
	},
	groupDeleteEvent:async function(req, res){
		const infoPart = req.body;
		const step_1 = await eventService.deleteEvent(infoPart, res);
		const step_2 = await eventService.deleteUserEventRelation(infoPart, res);
		if(step_1.isEventDeleted && step_2.isDeleted){
			senderService.successSender({step_1,step_2},res);
		}else{
			senderService.errorSender({step_1, step_2},res);
		}
	},
	getEvent:async function(req, res){
		const infoPart = req.body;
		const result = await eventService.getEvent(infoPart, res);
		if(result.isGot){
			senderService.successSender(result, res);
		}else {
			senderService.errorSender(result, res);
		}
	},
}