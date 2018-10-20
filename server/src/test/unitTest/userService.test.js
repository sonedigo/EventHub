const {mysqlConnection, mysqlPromise} = require('../../database/mysqlConfig');
const userService = require('../../services/userService');
const userHelper = require('../../services/helper/userHelper');

describe("register user by user", ()=>{
	it('should have a userId',function(){
		mysqlPromise.then(function(connection){
			let NumberOfUser = connection.query('SELECT COUNT(userId) AS count FROM Users');
			return NumberOfUser;
		}).then(async function(result){
			let users = result[0].count;
			users = users+100000;
			let userId = await userHelper.createUserId();
			expect(userId).toBe(100001);
		}).catch(function(error){
			console.log(error);
		});
	
	});

	it('should check userInfo',()=>{

	});

	
})