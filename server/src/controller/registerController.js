const _ = require('lodash');	//load low_dash library
const queryService = require('../services/queryService');
const userService = require('../services/userService');
const authenticateService = require('../services/authenticateService');
const groupService = require('../services/groupService');

module.exports={
	registerUser:async(req, res)=>{
		let queryPart = req.body;
		userService.createUser(queryPart, res);
	},
	registerGroup(req, res){
		let queryPart = req.body;
		groupService.createGroup(queryPart, res);
	},
	checkDuplicateEmail:async function(req, res){
		let email = req.body.email;
		let whetherDuplicate = await authenticateService.checkDuplicateEmail(email);
		if(whetherDuplicate){
			res.status(400).send({duplicate: true});
		}else {
			res.status(200).send({duplicate: false});
		}
	},
	checkDuplicateUsername:async function(req, res){
		let username = req.body.username;
		let WhetherDuplicate = await authenticateService.checkDuplicateUsername(username);
		if(WhetherDuplicate){
			res.status(400).send({duplicate: true });
		}else {
			res.status(200).send({duplicate: false });
		}
	}
}