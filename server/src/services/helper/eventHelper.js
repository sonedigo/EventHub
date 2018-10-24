const {mysqlConnection, mysqlPromise} = require('../../database/mysqlConfig');

module.exports={
	eventInfo_array: async(req)=>{
		const eventId = await createEventId();
		if(!req.eventTitle)return null;
		else{
			const event = [
			eventId,
			req.eventTitle,
			req.eventDescription,
			req.location,
			req.startsDate,
			req.endsDate,
			req.OrganizerName,
			req.OrganizerDescription,
			req.OrganizerEmail,
			req.OrganizerPhone,
			];
			return event;
		}
		
	}
}

function createEventId(){
	return mysqlPromise.then(function(connection){
		return connection.query("SELECT COUNT(eventId) AS event_counter FROM Events");
	}).then(function(results){
		return results[0].event_counter;
	}).catch(function(error){
		console.log(error);
		return null;
	})
}