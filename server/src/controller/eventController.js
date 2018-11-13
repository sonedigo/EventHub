const _ = require('lodash');	//load low_dash library
const queryService = require('../services/queryService');
const userService = require('../services/userService');
const groupService = require('../services/groupService');
const eventService = require('../services/eventService');



module.exports={
	userCreateEvent:function(req, res){
		eventService.userCreateEvent(req.body, res);
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
		eventService.groupDeleteEvent(req.body, res);
	},
	getEvent:async function(req, res){
		eventService.getEvent(req.body, res);
	},
}