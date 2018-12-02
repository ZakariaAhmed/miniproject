const graphql = require('graphql');
const buildSchema = graphql.buildSchema;

const schema = buildSchema(`
    type Query {
        hello:String
        
    }
`)



module.exports = schema;