import api from '../api'

export default {
	getUserInfo: function(userId){

		return api().get('',{
			params:{userId}
		})
	},
	updateUserInfo: function(){
		//will return updated result
		return api().update('',{

		})
	},
	getUserId: function(username){
		return api().get('',{
			params:{username}
		})
	}
}