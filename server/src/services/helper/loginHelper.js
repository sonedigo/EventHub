const {mysqlConnection, mysqlPromise} = require('../database/mysqlConfig');

module.exports.assignRole=async function(userid){
	let roleId;
	let role;
	const CommandRoleId = 'SELECT roleId FROM UserRoles WHERE userId = ?';
	const getRoleId = await mysqlPromise.then(function(connection){
		return connection.query(CommandRoleId, userid);
	}).then(function(result){
		roleId = result[0].roleId;
	})
	const CommandRole = 'SELECT Role from Roles WHERE roleId = ?';
	const getRole = await mysqlPromise.then(function(connection){
		return connection.query(CommandRole, roleId);
	}).then(function(result){
		role = result[0].Role;
	});
	return role;
}

module.exports.getUserId = async function(username){
	let userid;
	const Command = 'SELECT userId AS userId FROM Users WHERE userName = ?';
	const getuserId = await mysqlPromise.then(function(connection){
		return connection.query(Command, username);
		}).then(function(result){
			userid = result[0].userId;
	});
		console.log(userid);
		return userid;
}