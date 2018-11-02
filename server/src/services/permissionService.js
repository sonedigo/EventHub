const {mysqlConnection, mysqlPromise} = require('../database/mysqlConfig');
const bcrypt = require('bcrypt');

module.exports={
	updateUserInfoPermit: async(userId)=>{
		let permitId;
		let roleId;
		let whetherPermit;
	},
	updateGroupInfoPermit: async(groupId)=>{
		let permitId;
		let roleId;
		let whetherPermit;
	},
	updateEventPermit: async(eventId)=>{
		let permitId;
		let roleId;
		let whetherPermit;
	},
	createUserPermit: async(adminId)=>{
		let permitId;
		let roleId;
		let whetherPermit;
	},
}