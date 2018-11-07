const {mysqlConnection, mysqlPromise} = require('../database/mysqlConfig');
const userService = require('./userService');
const groupService = require('./groupService');
const eventService = require('./eventService');

module.exports={
	createGroup:async function(req, res) {
		
	},
	deleteGroup:async function(req, res) {

	},
	updateGroup:async function(req, res) {

	},
	createUser:async function() {

	},
	deleteUser:async function() {

	},
	updateUser:async function() {

	},
	getAllEvents:async function(){
		//also show the events sponsor information
	},
	getAllUsers:async function(){

	},
	getAllGroups:async function(){
		//also show the users in groups
	}

}