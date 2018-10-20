const {mysqlConnection, mysqlPromise} = require('../../database/mysqlConfig');
const authenticateService = require('../authenticateService');

module.exports={
	createGroupId: async function(){
		let groupId;
		const queryCommand = 'SELECT COUNT(groupId) AS num_of_group FROM userGroups';
		const queryResult = await mysqlPromise.then(function(connection){
			return connection.query(queryCommand);
		}).then(function(results){
			groupId = groupIdResult(results[0].num_of_group);
		}).catch(function(error){
			console.log(error);
		})
		return groupId;
	},
	createGroupInfo: async function(request, groupId){
		let infoArray;
		infoArray = [
		groupId,
		request.groupName,
		request.email,
		request.phone,
		await authenticateService.encryptPassword(request.password),
		];
		return infoArray;
	},
	groupInfo_array: async function(request){
		let infoArray;
		infoArray = [
		request.groupName,
		request.email,
		request.phone,
		await authenticateService.encryptPassword(request.password),
		];
		return infoArray;
	}
}

function groudIdResult(num_of_group){
	return num_of_group + 100000;
}