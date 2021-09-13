const UserProvider = require('../providers/user.provider');
const UserCtrl = require('./user.controller');
const mock = require('./mock');

beforeEach(() => {
	jest.clearAllMocks();
});

/** @test {User.controller} */
describe('User controller ', () => {
    test("It adds two numbers", () => {
        expect(1 + 1).toBe(2);
    });
	/** @test {getUsers} */
	test('retorna operación exitosa: lista de usuarios', async () => {
	
		UserProvider.findUsers = jest.fn().mockResolvedValue(mock.findUsers);
            console.log("UserProvider.findUsers", UserProvider.findUsers);
		const data = await UserCtrl.getUsers();
            console.log("res test", data);
		expect(data.length).toBe(2);
	});

});
