const relationService = require("../../services/relationService");

const userId = 10;
const groupId = 10;
const eventId = 10;
const roleId = 10;
describe("Test RelationService",()=>{
	it("Test createEventUserRelation", async()=>{
		let return_info = await relationService.createEventUserRelation(eventId, userId);
		let return_info_error = await relationService.createEventUserRelation(eventId, null);
		expect(return_info).toBe(true);
		expect(return_info_error).toBe(false);

	});
	it("Test createEventGroupRelation", async()=>{
		let return_info = await relationService.createEventGroupRelation(eventId, groupId);
		let return_info_error = await relationService.createEventGroupRelation(eventId,null);
		expect(return_info).toBe(true);
		expect(return_info_error).toBe(false);

	});
	it("Test createUserRoleRelation", async()=>{
		let return_info = await relationService.createUserRoleRelation(userId, roleId);
		let return_info_error = await relationService.createUserRoleRelation(userId, null);
		expect(return_info).toBe(true);
		expect(return_info_error).toBe(false);
	});
	it("Test createGroupUserRelation", async()=>{
		let return_info = await relationService.createGroupUserRelation(2, 2);
		let return_info_error = await relationService.createGroupUserRelation(999, null);
		expect(return_info).toBe(true);
		expect(return_info_error).toBe(false);
	});
	it("Test removeUserFromGroup", async()=>{
		let return_info = await relationService.removeUserFromGroup(groupId, userId);
		let return_info_error = await relationService.removeUserFromGroup(groupId, null);
		expect(return_info).toBe(true);
	});
})