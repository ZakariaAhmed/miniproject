const express = require('express');
const authRouter = express.Router();

authRouter.get('/', async (req, res, next) => {
    res.json({'Auth':'Login'});
});

module.exports = authRouter;