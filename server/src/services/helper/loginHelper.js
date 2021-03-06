const {mysqlConnection, mysqlPromise} = require('../../database/mysqlConfig');

module.exports.assignRole=async function(userid){
	const CommandRoleId = 'SELECT roleId FROM UserRoles WHERE userId = ?';
	const roleId = await mysqlPromise.then(function(connection){
		return connection.query(CommandRoleId, userid);
	}).then(function(result){
		return result[0].roleId;
	}).catch(function(error){
		console.log(error);
	})

	const CommandRole = 'SELECT Role from Roles WHERE roleId = ?';
	const role = await mysqlPromise.then(function(connection){
		return connection.query(CommandRole, roleId);
	}).then(function(result){
		return result[0].Role;
	}).catch(function(error){
		console.log(error);
	});
	return role;
}

module.exports.getUserId = async function(username){
	let userid;
	const Command = 'SELECT userId AS userId FROM Users WHERE userName = ?';
	const userid = await mysqlPromise.then(function(connection){
		return connection.query(Command, username);
		}).then(function(result){
			return result[0].userId;
	}).catch(function(error){
		console.log(error);
	});
		return userid;
}