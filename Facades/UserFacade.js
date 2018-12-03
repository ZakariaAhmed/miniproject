var mongoose = require('mongoose');
var ObjectId = require('mongoose').Types.ObjectId;
var User = require('../Models/User');

const getAllUsers = () => User.find({}).exec();

const addUser = (firstName, lastName, userName, password) => new User({firstName, lastName, userName, password}).save();

const findByUsername = username => User.findOne({userName:username}).exec();

const getUserById = userId => User.findOne({'_id': userId}).exec();

module.exports = {
    getAllUsers,
    addUser,
    findByUsername,
    getUserById
};