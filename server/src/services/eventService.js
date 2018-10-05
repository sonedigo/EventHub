const {mysqlConnection} = require('../database/mysqlConfig');

module.exports={
		createEvent(req, res){
			const event = [
			req.eventTitle,
			req.description,
			req.date,
			req.location,
			req.sponsor,
			req.sponsorPhone,
			];
			const InsertCommand = 'INSERT INTO Events(eventTitle, description, date, location, sponsor)'
		},
}