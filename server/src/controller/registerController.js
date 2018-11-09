const _ = require('lodash');	//load low_dash library
const queryService = require('../services/queryService');
const userService = require('../services/userService');
const authenticateService = require('../services/authenticateService');
const groupService = require('../services/groupService');

module.exports={
	registerUser:async(req, res)=>{
		userService.createUser(req.body, res);
	},
	registerGroup(req, res){
		groupService.createGroup(req.body, res);
	},
	checkDuplicateEmail:async function(req, res){
		authenticateService.checkDuplicateEmail(req.query.email);
	},
	checkDuplicateUsername:async function(req, res){
		authenticateService.checkDuplicateUsername(req.query.username);
	}
}