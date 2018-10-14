const {mysqlConnection, mysqlPromise} = require('../../database/mysqlConfig');

module.exports={
	createGroupId: async function(){
		let groupId;
		const queryCommand = 'SELECT COUNT(groupId) AS num_of_group FROM Groups';
		const queryResult = await mysqlPromise.then(function(connection){
			return connection.query(queryCommand);
		}).then(function(results){
			groupId = groupIdResult(results[0].num_of_group);
		})
		return groupId;
	},
	createGroupInfo: async function(groupInfo){

	},
	updateGroupInfo: async function(){

	},
}

function groudIdResult(num_of_group){
	return num_of_group + 100000;
}