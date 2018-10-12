const _ = require('lodash');	//load low_dash library
const queryService = require('../services/queryService');
const userService = require('../services/userService');
const authenticateService = require('../services/authenticateService');

module.exports={
	registerUser(req, res){
		let queryPart = req.body;
		userService.createUser(queryPart, res);
	},
	registerGroup(req, res){

	},
	checkDuplicate:async function(req, res){
		let email = req.body.email;
		let whetherDuplicate = await authenticateService.checkDuplicate(email);
		if(whetherDuplicate){
			res.status(400).send({duplicate: true});
		}else {
			res.status(200).send({duplicate: false});
		}
	},
}