const {mysqlConnection} = require('../database/mysqlConfig');
const faker = require('faker');


module.exports={
	getuser(req, res){
		const userId = req.userId;
		mysqlConnection.query('SELECT * FROM users WHERE userId = ?',userId, function(error, results, fields){
			if(error) {
				throw error;
				res.status(400).send(error);
			}
			res.status(200).send(results);
		});
	},

	insertdata(req,res){
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



