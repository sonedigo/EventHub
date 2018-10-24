const groupService = require("../../services/groupService");

let groupInfo = {
			groupName: "sadad",
			phone:"1233455677",
			email:"sddd@gmail.com",
			password:"123344"
		};

console.log(groupInfo);

describe("groupService Test", ()=>{
	it("Test createGroup",async function(){
		let return_info = await groupService.createGroup(groupInfo);
		let isError = return_info.groupCreated.isError;
		expect(isError).toBe(false);
		expect(return_info.groupId).toBeGreaterThanOrEqual(100000);
	});

	it("Test updateGroupInfo",()=>{

	});

	it("Test createUserForGroup", ()=>{

	});

	it("Test getGroupMembers", ()=>{

	});


});