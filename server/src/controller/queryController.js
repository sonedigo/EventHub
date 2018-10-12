const _ = require('lodash');	//load low_dash library
const service = require('../services/queryService');

module.exports={
	getUser(req, res){
		service.getUser(req, res);
	},
	getGroup(req, res){

	},
}
