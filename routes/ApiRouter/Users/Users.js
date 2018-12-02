var express = require('express');
var userRouter = express.Router();
var userFacade = require("../../../Facades/UserFacade");

userRouter.get('/', async (req, res, next) => {
    let users = await userFacade.getAllUsers();
    res.json(users);
});


module.exports = userRouter;