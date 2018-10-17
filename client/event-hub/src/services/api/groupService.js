import api from '../api'

export default {
	getGroupMember:function(groupId){
		//will return a list of member in this group
		return api().get('',{
			params:{groupId}
		});
	},
	createUserByGroup: function(userInfo, groupId){

	},
	getGroupInfo: function(groupId){
		return api().get('',{
			params:{groupId}
		})
	},
	getGroupId: function(groupName){
		return api().get('',{
			params:{groupName}
		})
	},
	addUserInGroup:function(userId,GroupId){
		return api().post('',{

		})

	},
	deleteGroupMember:function(userId, GroupId){
		return api();
	}
}