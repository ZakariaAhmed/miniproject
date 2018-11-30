var mongoose = require('mongoose');
var User = require('../Models/User');
var Position = require('../Models/Position');

const findByUserName = username => User.findOne({userName:username});

const findFriends = (point, dist) => {
    let query = Position.find({
        loc:
            {
                $near:{
                    $geometry: point,
                    $maxDistance: dist
                }
            }
    }, { _id: 0, created: 0, __v: 0 }).populate("user",{userName:1, _id:0});
    return query.exec();
};

const login = async (username, password, longitude, latitude, distance) => {
    var user = await findByUserName(username);
    // User Validation
    if (user == null || user.password !== password) {
        throw {msg: "wrong username or password", status: 403}
    }
    // else we logged in, update users position

    const point =  {'type': "Point", coordinates:[longitude,latitude]};
    Position.findOneAndUpdate({user:user._id},{created:Date.now(),loc:point},{new:true,upsert:true}).exec();

    //Now find his friends
    const friends = await findFriends(point,distance*1000);
    const filtered =friends.filter(friend => friend.user.userName !==username).map(friend=>{
        return {
            userName: friend.user.userName,
            latitude: friend.loc.coordinates[1],
            longitude: friend.loc.coordinates[0]
        }
    });
    return {friends: filtered};
};

module.exports = login;