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
		if(response.isEventCreated){
			senderService.successSender(response, res);
		}else{
			senderService.errorSender(response, res);
		};
		
	},
	updateEvent:async function(req, res){
		const infoPart = req.body;
		eventService.updateEvent(infoPart, res);
	},
	userDeleteEvent:async function(req, res){
		const infoPart = req.body;
		eventService.deleteEvent(infoPart, res);
		eventService.deleteUserEventRelation(infoPart, res);
	},
	groupCreateEvent:async function(req, res){
			const infoPart = req.body;
		eventService.createEvent(infoPart, res).then(function(result){
			relationService.createEventGroupRelation(infoPart);
		}).catch(function(error){
			console.log(error);
		});
	},
	groupDeleteEvent:async function(req, res){
		const infoPart = req.body;
		eventService.deleteEvent(infoPart, res);
		eventService.deleteUserEventRelation(infoPart, res);
	},
	getEvent:async function(req, res){
		const infoPart = req.body;
		eventService.getEvent(infoPart, res);
	},
	deleteEvent: async function(req, res){
		const infoPart = req.body;
		eventService.deleteEvent(infoPart, res);
	}

}