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

})