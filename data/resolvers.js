const graphql = require('graphql-tools');
const userFacade = require('../Facades/UserFacade');

const resolvers = {
    Query: {
        getUserById: ({ id }) => userFacade.getUserById(id),
        getAllUsers: () => userFacade.getAllUsers()
    },
    Mutation: {
        addUser: ({input}) => userFacade.addUser(input.firstName, input.lastName, input.userName, input.password)
    }
};


module.exports = resolvers