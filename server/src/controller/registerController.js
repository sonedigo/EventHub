const _ = require('lodash');	//load low_dash library
const xxxservice = require('../services/queryService');
const userService = require('../services/userService');

module.exports={
	registerUser(req, res){
		let queryPart = req.body;
		userService.createUser(queryPart, res);
	},
}