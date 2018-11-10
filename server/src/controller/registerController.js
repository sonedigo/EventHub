const _ = require('lodash')	//load low_dash library
import {queryService} from '../services/queryService'
import {userService} from '../services/userService'
import {authenticateService} from'../services/authenticateService'
import {groupService} from '../services/groupService'

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
