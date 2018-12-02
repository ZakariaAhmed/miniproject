const express = require('express');
const graphQLRouter = express.Router();
const graphqlHTTP = require('express-graphql');
const schema = require('../../data/typeDefs');



// create a resolver

graphQLRouter.use('/', graphqlHTTP({
    schema:schema,
    graphiql:true
}));

graphQLRouter.get("/", (req, res) => {
    res.end('');
});




module.exports = graphQLRouter;