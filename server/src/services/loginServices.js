const {mysqlConnection} = require('../database/mysqlConfig');
const authenticateService = require('./authenticateService');

module.exports={
		vaildUser(req, res){
		const username = req.query.username;
		const password = req.query.password;
		const userId = await authenticateService.vaildUser(req.query.username, req.query.password);
		if(userId){
			const queryCommand = '';
			const queryResult = await mysqlConnection.query(queryCommand, userId, function(error, results, fields){
				if(error) throw error;
				res.status(200).send({userId: userId, results: results});
			})
		}else {
			res.status(400).send('Invaild username or password');
		}
	}
}