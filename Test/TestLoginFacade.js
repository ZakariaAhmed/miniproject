const expect = require("chai").expect;
const loginFacade = require('../Facades/LoginFacade');
const User = require('../Models/User');

describe("Testing Login Facade", () =>{

    it("Should allow Tester to Login", async () => {
        const friends = await loginFacade("Tester", "test", 12.515734, 55.646729, 1);
        expect(friends).not.to.equal(null);
    });

    it("Should Throw with a 403 status", async () => {
        try {
            const friends = await loginFacade("Tester", "unknown password", 12.515734, 55.646729, 55);
        } catch (err) {
            expect(err.status).to.be.equal(403);
        }
    });

});