const {mysqlConnection} = require('../database/mysqlConfig');
const bcrypt = require('bcrypt');
module.exports.encryptPassword= async function(password){
		await encryptPassword(password);
	}

module.exports.validUser = async function (username, password, usergroup){
		await vaildUser(username, password, usergroup);
	}

let encryptPassword = async function(password){
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);
		return hashedPassword;
	}

let vaildUser = async function(username, password, usergroup){
	const queryCommand = 'SELECT userName, password from users where userName = ?';
		const queryresult = await mysqlConnection.query(queryCommand, username, async function(error, results, fields){
			if(error) throw error;
			//if results show no user
			if(!results){
				return false;
			}else{
				const vaildPassword = await bcrypt.compare(results[0].password, password);
				if(!vaildPassword){
					return false;
				}else{
					return true;
				}
			}

		});
		console.log(queryresult);
}