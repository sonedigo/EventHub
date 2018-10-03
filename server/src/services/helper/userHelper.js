const {mysqlConnection} = require('../../database/mysqlConfig');

module.exports={
	createUserId(){
		let userId=0;
		mysqlConnection.query('SELECT count(*) as numberofuser FROM Users',
			function(error, results, fields){
				if(error) throw error;
				let NumberofUser=0;
				NumberofUser += results[0].numberofuser;
				userId = ++NumberofUser;
				console.log(userId);
			});
		return userId;
	} 
}