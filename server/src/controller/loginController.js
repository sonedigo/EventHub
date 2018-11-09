const _ = require('lodash');	//load low_dash library
const xxxservice = require('../services/queryService');
const authenticateService = require('../services/authenticateService');
const loginService = require('../services/loginService');

module.exports={
	login:async function(req, res){
		loginService.SignIn(req.query, res); 
	},
	forgetPassword:async function(req, res){

	},
	forgetUsername:async function(req, res){
		
	}
}