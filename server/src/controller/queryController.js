const _ = require('lodash');	//load low_dash library
const service = require('../services/queryService');

module.exports={
	getuser(req, res){
		service.getuser(req, res);
	},
}
