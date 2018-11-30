const express = require('express');
const apiRouter = express.Router();
const authRouter = require('./Auth/Auth');
const userRouter = require('./Users/Users');
const positionRouter = require('./Position/Position');

apiRouter.use('/auth', authRouter);
apiRouter.use('/users', userRouter);
apiRouter.use('/positions', positionRouter);

module.exports = apiRouter;