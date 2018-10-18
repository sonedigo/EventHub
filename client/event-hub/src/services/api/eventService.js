import api from '../api'

export default {
	userCreateEvent: function(EventInfo, Id){
		api().post('/user/create_event',{
			EventInfo,Id
		}).then(function(response){
			console.log(response);
		}).then(function(error){
			console.log(error);
		});
	},
	groupCreateEvent: function(EventInfo, Id){
		api().post('/group/create_event',{
			EventInfo,Id
		}).then(function(response){
			console.log(response);
		}).then(function(error){
			console.log(error);
		})
	},
	updateEvent: function(EventInfo){
		api().patch('/patch/eventinfo',{
			EventInfo
		}).then(function(response){
			console.log(response);
		}).then(function(error){
			console.log(error);
		});
	},
	getEvent: function(EventId){
		return api().get('/event/getevent',{
			params:{EventId};
		});
	},
	deleteEvent: function(EventId){
		api().delete('/event/detele',{
			EventId
		}).then(function(response){
			console.log(response);
		}).then(function(error){
			console.log(error);
		});
	}
}