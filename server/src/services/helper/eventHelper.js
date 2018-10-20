const {mysqlConnection, mysqlPromise} = require('../../database/mysqlConfig');

module.exports={
	eventInfo_array:async function(req){
		const event = [
			req.eventTitle,
			req.description,
			req.date,
			req.location,
			req.sponsor,
			req.sponsorPhone,
			];
			return event;
	}
}