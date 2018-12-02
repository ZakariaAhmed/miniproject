const resolvers = require('./resolvers');
const graphql = require('graphql-tools');

const typeDefs = `
    type User {
        id:ID
        firstName:String
        lastName:String
        userName:String
        password:String
    }
    
    type Query { 
        getUserById(id: ID): User
        getAllUsers:[User]
    }
    input UserInput {
        firstName:String
        lastName:String
        userName:String
        password:String
    }
    type Mutation {
        addUser(input:UserInput):User
    }
`;

const schema = graphql.makeExecutableSchema({typeDefs, resolvers})

module.exports = schema;