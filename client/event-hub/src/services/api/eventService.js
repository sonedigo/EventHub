import api from '../api'

export default {
	createEvent: function(EventInfo){
		return api().post('',{

		});
	},
	updateEvent: function(EventInfo){
		return api().update();
	},
	getEvent: function(EventId){
		return api().get('',{
			params:{EventId};
		})
	},
	deleteEvent: function(EventId){
		return api();
	}
}