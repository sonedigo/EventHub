const _ = require('lodash');	//load low_dash library
const queryService = require('../services/queryService');
const userService = require('../services/userService');
const groupService = require('../services/groupService');
const adminService = require('../services/adminService');


module.exports={
	getUserInfo(req, res){

	},
	getUserId(req, res){

	},
	updateUserInfo(req, res){
		userService.updateUserInfo(req.body, res);
	},
}