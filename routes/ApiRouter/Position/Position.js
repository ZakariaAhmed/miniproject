const express = require('express');
const positionRouter = express.Router();

positionRouter.get('/', async (req, res, next) => {
    res.json({'Position':'Router'});
});

module.exports = positionRouter;