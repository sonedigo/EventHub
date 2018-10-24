const axios = require('axios');
import mockAxios from 'jest-mock-axios';
const loginHelper = require('../../services/helper/loginHelper');
const loginService = require('../../services/loginService');

const MessageSent =(clientMessage)=>{
	let axiosPromise = axios.post('',{data: clientMessage});
	return axiosPromise;
}

afterEach(() => {
	mockAxios.reset();
})

describe('Login test',()=>{
	it('loginHelper Test: getRole',async function(){
		let clientMessage = {
			userName: 'sonedigo',
			password: '123456'
		}
		let catchFn = jest.fn(), thenFn = jest.fn();
		MessageSent(clientMessage)
		.then(thenFn).catch(catchFn);

		expect(mockAxios.post).toHaveBeenCalledWith('localhost:3000/register',clientMessage);

		let responseObj={data:'server says hello!'};
		mockAxios.mockResponse(responseObj);

		expect(thenFn).toHaveBeenCalledWith('server says hello!');

		expect(catchFn).not.toHaveBeenCalledWith();
	})
})