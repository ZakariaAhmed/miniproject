const graphql = require('graphql-tools');
const userFacade = require('../Facades/UserFacade');

const resolvers = {
    Query: {
        getUserById: (obj, args) => userFacade.getUserById(args.id)
        ,
        getAllUsers: () => userFacade.getAllUsers()
    },
    Mutation: {
        addUser: (root,{input}) => userFacade.addUser(input.firstName, input.lastName, input.userName, input.password)
    }
};


module.exports = resolvers