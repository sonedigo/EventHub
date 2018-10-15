const {mysqlConnection, mysqlPromise} = require('../database/mysqlConfig');

module.exports={
		createEvent: async function(req, res){
			const event = [
			req.eventTitle,
			req.description,
			req.date,
			req.location,
			req.sponsor,
			req.sponsorPhone,
			];
			const InsertCommand = 'INSERT INTO Events(eventTitle, description, date, location, sponsor, sponsorPhone) VALUES(?, ?, ?, ?, ?, ?)';
			mysqlConnection.query(InsertCommand, event, function(error, results, fields){
				if(error) {
					res.status(400).send({isEventCreated:false});
					throw error;
				}
				res.status(200).send({isEventCreated:true});
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
			const eventId = req.eventId;
			const Command = 'UPDATE Events SET eventTitle = ?, description = ?, date = ?, location = ?, sponsor = ?, sponsorPhone = ? WHERE eventId = ?';
			const eventInfo = [
			req.eventTitle,
			req.description,
			req.date,
			req.location,
			req.sponsor,
			req.sponsorPhone,
			eventId
			];
			mysqlPromise.then(function(connection){
				return connection.query(Command, eventInfo);
			}).then(function(results)){
				res.status(200).send({isEventUpdated: true, results});
			}.then(function(error){
				console.log(error);
				res.status(400).send({isEventUpdated:false, error});
			});
		},
		deleteEvent:async function(req, res){
			const eventId = req.eventId;
			const Command = 'DELETE * FROM Events WHERE eventId = ?';
			const Result = await mysqlPromise.then(function(connection){
				return connection.query(Command, eventId);
			}).then(function(results){

			}).then(function(error){
				console.log(error);
			});
		},
		createEventUserRelation:async function(res){
			const eventId = res.eventId;
			const userId = res.userId;
			const Command = 'INSERT INTO EventUsersRelation(eventId, userId) VALUES(?, ?)';
			const Result = await mysqlPromise.then(function(connection){
				return connection.query(Command, [eventId, userId]);
			}).then(function(results){

			}).then(function(error){
				console.log(error);
			});
		},
		createEventGroupRelation:async function(res){
			const eventId = res.eventId;
			const groupId = res.groupId;
			const Command = 'INSERT INTO EventUsersRelation(eventId, groupId) VALUES(?, ?)';
			const Result = await mysqlPromise.then(function(connection){
				return connection.query(Command, [eventId, groupId]);
			}).then(function(results){

			}).then(function(error){
				console.log(error);
			});
		},
}


