var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Job = require('./Job');

var UserSchema = new Schema({
    username: {type: String, unique: true, required: true},
    firstname : String,
    lastname : String,
    password : {type: String, required: true},
    email: {type: String, required: true},
    //Observe embedding
    job : [job],
    created: {type: Date, default: Date.now},
    lastUpdated : Date
})

UserSchema.pre("save",function(next){
    this.password = "hash_me_and_add_some_salt "+this.password;
    this.lastUpdated = new Date();
    next();
})

UserSchema.pre("update",function(next){
    this.update({},{$set : {lastUpdated: new Date()}});
    next();
})

module.exports = mongoose.model("User",UserSchema);
