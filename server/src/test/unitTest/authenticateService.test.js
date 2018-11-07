const authenticateService = require('../../services/authenticateService');
const bcrypt = require('bcrypt');
//Should change environment to test database for testing
//need to set sqlPassword & NODE_ENV before testing
describe('Authenticate Service Test', ()=>{

	it('test encrypt: should return 32bit hash string',async function(){
		const password = '1234431441';
		const encryptedPasswordLength = await authenticateService.encryptPassword(password);
		expect(encryptedPasswordLength.length).toBe(60);
	});

	it('should be vaild login',async function(){
		const username = 'sonedigo';
		const password = '123456';
		const password_invaild = '123455';
		const validResult = await authenticateService.validUser(username, password);
		const invalidResult = await authenticateService.validUser(username, password_invaild);
		expect(validResult).toBe(true);
		expect(invalidResult).toBe(false);
	});

	it('Test checkDuplicate Email',async function(){
		const email_duplicate = 'sonedigo@gmail.com';
		const email_new = 'sondigo@gmail.com111';
		const duplicateResult = await authenticateService.isDuplicatedEmail(email_duplicate);
		const not_duplicateResult = await authenticateService.isDuplicatedEmail(email_new);
		expect(duplicateResult).toEqual(true);
		expect(not_duplicateResult).toBe(false);
	});

	it('Test isDuplicatedUsername', async function(){
		const user_duplicate = 'sonedigo';
		const user_not_duplicate = 'sonedigo123123';
		const duplicateResult = await authenticateService.isDuplicatedUsername(user_duplicate);
		const not_duplicateResult = await authenticateService.isDuplicatedUsername(user_not_duplicate);
		expect(duplicateResult).toBe(true);
		expect(not_duplicateResult).toBe(false);
	});

})