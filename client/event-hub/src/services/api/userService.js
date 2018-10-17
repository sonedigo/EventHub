import api from '../api'

export default {
	getUserInfo: function(userId){

		return api().get('',{
			params:{userId}
		})
	},
	updateUserInfo: function(userInfo){
		//will return updated result
		api().patch('',{
			userInfo
		}).then(function(response){

		}).then(function(error){

		});
	},
	getUserId: function(username){
		return api().get('',{
			params:{username}
		})
	}
}