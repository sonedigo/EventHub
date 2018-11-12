const _ = require('lodash');	//load low_dash library
const queryService = require('../services/queryService');

module.exports={
	getUser:function(req, res){
		queryService.getUser(req, res);
	},
	getGroup:function(req, res){

	},
	getGroupMember:function(req, res){
		queryService.getGroupMember(req.query, res);
	}
}
