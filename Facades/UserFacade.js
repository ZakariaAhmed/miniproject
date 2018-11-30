var mongoose = require('mongoose');
var User = require('../Models/User');

const getAllUsers = () => User.find({}).exec();

const addUser = (firstname, lastname, username, password, email) => new User(firstname, lastname, username, password, email).save();

const findByUsername = username => User.findOne({username:username}).exec();

const getUserById = id => User.findById({_id:id}).exec();

module.exports = {
    getAllUsers,
    addUser,
    findByUsername,
    getUserById
};