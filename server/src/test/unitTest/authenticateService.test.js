const authenticateService = require('../../services/authenticateService');
const bcrypt = require('bcrypt');

describe('Authenticate Service Test', ()=>{

	it('should be vaild login',async function(){
		const username = 'sonedigo';
		const password = '123456';
		const password_invaild = '123455';
		const validResult = await authenticateService.validUser(username, password);
		const invalidResult = await authenticateService.validUser(username, password_invaild);
		expect(validResult).toBe(true);
		expect(invalidResult).toBe(false);
	});

	it('Test checkDuplicate',async function(){
		const email_duplicate = 'sonedigo@gmail.com';
		const email_new = 'sondigo@gmail.com';
		const duplicateResult = await authenticateService.checkDuplicate(email_duplicate);
		const not_duplicateResult = await authenticateService.checkDuplicate(email_new);
		expect(duplicateResult).not.toBe(0);
		expect(not_duplicateResult).toBe(0);
	})

})