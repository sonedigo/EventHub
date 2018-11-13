const _ = require('lodash');	//load low_dash library
const queryService = require('../services/queryService');

module.exports={
	getUserInfo:function(req, res){
		queryService.getUserInfo(req.query, res);
	},
	getGroup:function(req, res){
		queryService.getGroup(req.query, res)
	},
	getGroupMember:function(req, res){
		queryService.getGroupMember(req.query, res);
	}
}
