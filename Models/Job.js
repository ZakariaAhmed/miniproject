var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var JobSchema = new Schema({
    type: String,
    company: String,
    companyUrl : String
});

module.exports = mongoose.model("Job", JobSchema);