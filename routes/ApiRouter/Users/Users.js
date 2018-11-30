var express = require('express');
var userRouter = express.Router();

userRouter.get('/', async (req, res, next) => {
    res.json({'firstName':'Zakaria'});
});


module.exports = userRouter;