const {mysqlConnection} = require('../database/mysqlConfig');
const bcrypt = require('bcrypt');
module.exports={
	async encryptPassword(password){
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = bcrypt.hash(password, salt);
		return hashedPassword;
	},
	async validUser(username, password){
		const queryCommand = 'SELECT userName, password from users where userName = ?';
		mysqlConnection.query(queryCommand, username, function(error, results, fields){
			if(error) throw error;
			//if results show no user
			if(!results){
				res.status(400).send('no user found');
			}else{
				const vaildPassword = bcrypt.compare(results[0].password, password);
				if(!vaildPassword){

				}else{
					
				}
			}
		})
	},
}