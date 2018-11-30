const expect = require("chai").expect;
const userFacade = require('../Facades/UserFacade');
const User = require('../Models/User');

describe("Testing User Facade", () =>{

    it("It should find all users created in make test data", async () =>{
        let users = await userFacade.getAllUsers();
        expect(users.length).to.be.equal(5);
    });

    it("Add A User", async () =>{
        let user = await userFacade.addUser("Zakaria", "Ahmed", "za37", "abc123");
        expect(user.firstName).equal("Zakaria");
    });

    it("Should Find Kurt Wonnegut", async () => {
        var user = await userFacade.findByUsername("Swimmer1");
        expect(user.firstName).to.be.equal("Kurt");
    });

});