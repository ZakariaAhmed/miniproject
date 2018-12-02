const express = require('express');
const authRouter = express.Router();
const login = require('../../../Facades/LoginFacade');

authRouter.get('/', async (req, res, next) => {
    res.json({'Auth':'Login'});
});

authRouter.post('/login', async (req, res, next) =>{
    const data = req.body;
    console.log(data);
    try {
        const friends = await login(data.username, data.password, data.longitude, data.latitude, data.distance);
        console.log('FRIENDS', friends);
        res.json(friends);
    } catch (err){
        console.log('ERROR', err);
        res.status(403);
        res.json(err);
    }
});

module.exports = authRouter;