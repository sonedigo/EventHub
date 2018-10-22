const {mysqlConnection, mysqlPromise} = require('../database/mysqlConfig');
const faker = require('faker');


module.exports={
	getUserInfo:async function(req, res){
		const userId = req.query.userId;
		mysqlConnection.query('SELECT * FROM Users WHERE userId = ?',userId, function(error, results, fields){
			if(error) {
				throw error;
				res.status(400).send(error);
			}
			res.status(200).send(results[0]);
			console.log(results[0])
		});
	},
	getGroupInfo:async function(req, res){
		const groupId = req.query.groupId;
		const command = 'SELECT * AS groupInfo FROM userGroups WHERE groupId = ?';
		const Result = mysqlPromise.then(function(connection){
			return connection.query(command, groupId);
		}).then(function(results){
			res.status(200).send(results[0].groupInfo);
		}).catch(function(error){
			console.log(error);
			res.status(400).send(error);
		})
	},
	insertData(req,res){
		console.log('Insert operation is below:');
		let person = {
			email: faker.internet.email(),
			created_at: faker.date.past()
		};

		let end_result = mysqlConnection.query('INSERT INTO users SET ?', person, function(err, result) {
			if (err) throw err;
			console.log(result);
		});
	},

}



