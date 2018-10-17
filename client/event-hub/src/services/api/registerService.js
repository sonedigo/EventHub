import api from '../api'


const information_infuntion = 'information';
export default {
	createUser:function(userInfo){
		api().post('/register/user',{
			information: 1234,
			information_infuntion
		}).then(function (response) {
			console.log(response);
		}).catch(function (error) {
			console.log(error);
		});
	},
	createGroup:function(groupInfo){
		api().post('/register/group',{
			information: 1234,
			information_infuntion
		}).then(function (response) {
			console.log(response);
		}).catch(function (error) {
			console.log(error);
		});
	},

}