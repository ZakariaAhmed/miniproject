const express = require('express');
const viewRouter = express.Router();
const mainRouter = require('./Main/Main');

viewRouter.use('/', mainRouter);

module.exports = viewRouter;