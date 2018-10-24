const {mysqlConnection, mysqlPromise} = require('../database/mysqlConfig');
const eventHelper = require('./helper/eventHelper');

module.exports={
	createEvent: async function(req, res){
		const event = await eventHelper.eventInfo_array(req);
		const InsertCommand = 'INSERT INTO Events(eventTitle, description, date, location, sponsor, sponsorPhone) VALUES(?, ?, ?, ?, ?, ?)';
		const Result = await mysqlConnection.query(InsertCommand, event, function(error, results, fields){
			if(error) {
				return {isEventCreated:false};
				res.status(400).send({isEventCreated:false});
				throw error;
			}
			res.status(200).send({isEventCreated:true});
			return {isEventCreated:true};
		});
	},
	getEvent:async function(req, res){
		const eventId = req.eventId;
		const Command = 'SELECT * AS EventInfo FROM Events WHERE eventId = ?';
		mysqlPromise.then(function(connection){
			return connection.query(Command, eventId);
		}).then(function(results){
			res.status(200).send(results[0].EventInfo);
		}).catch(function(error){
			console.log(error);
			res.status(400).send(error);
		});
	},
	updateEvent:async function(req, res){
		const Command = 'UPDATE Events SET eventTitle = ?, description = ?, date = ?, location = ?, sponsor = ?, sponsorPhone = ? WHERE eventId = ?';
		const eventInfo = await eventHelper.eventInfo_array_withId(req, req.eventId);
		mysqlPromise.then(function(connection){
			return connection.query(Command, eventInfo);
		}).then(function(results){
			res.status(200).send({isEventUpdated: true, results[]});
		}).catch(function(error){
			console.log(error);
			res.status(400).send({isEventUpdated:false, error});
		});
	},
	deleteEvent:async function(req, res){
		const Command = 'DELETE * FROM Events WHERE eventId = ?';
		const Result = await mysqlPromise.then(function(connection){
			return connection.query(Command, req.eventId);
		}).then(function(results){
			return true;
		}).catch(function(error){
			console.log(error);
		});
		return Result;
	},
}


