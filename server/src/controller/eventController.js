const _ = require('lodash');	//load low_dash library
const queryService = require('../services/queryService');
const userService = require('../services/userService');
const authenticateService = require('../services/authenticateService');
const groupService = require('../services/groupService');
const eventService = require('../services/eventService');
const relationService = require('../services/relationService');
const senderService = require('../services/senderService');

module.exports={
	userCreateEvent:function(req, res){
				eventService.userCreateEvent(req, res);
	},
	updateEvent:async function(req, res){
		eventService.updateEvent(req.body, res);
	},
	userDeleteEvent:async function(req, res){
		eventService.userDeleteEvent(req.body, res);
	},
	groupCreateEvent:async function(req, res){
		eventService.groupCreateEvent(req.body, res);
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