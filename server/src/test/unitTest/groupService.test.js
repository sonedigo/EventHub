const groupService = require("../../services/groupService");
const {mysqlConnection,mysqlPromise} = require("../../database/mysqlConfig");

let groupInfo = {
			groupName: "sadad",
			phone:"1233455677",
			email:"sddd@gmail.com",
			password:"123344"
		};
const groupId = 100000;
console.log(groupInfo);

describe("groupService Test", async()=>{
	it("Test createGroup",async function(){
		let return_info = await groupService.createGroup(groupInfo);
		let isError = return_info.groupCreated.isError;
		expect(isError).toBe(false);
		expect(return_info.groupId).toBeGreaterThanOrEqual(100000);
	});

	it("Test updateGroupInfo",async()=>{
		const groupId = 100000;
		const groupId_error = 200000;
		//let return_info = await groupService.updateGroupInfo(groupId);
		//let return_info_error = await groupService.updateGroupInfo(groupId_error);
		//expect(return_info.isUpdated).toBe(true);
		//expect(return_info.isUpdated).toBe(false);
	});

	it("Test createUserForGroup", ()=>{

	});

	it("Test getGroupMembers", async()=>{
		
		const return_info = await groupService.getGroupMembers({groupId});

	});


});