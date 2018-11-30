var mongoose = require('mongoose');

// getting rid of FindAndModify annoying warning
mongoose.set('useFindAndModify', false);

const connect = dbUriString => {
    const conStr = dbUriString ? dbUriString : dbURI;
    return mongoose.connect(conStr, { useNewUrlParser: true , useCreateIndex: true });
};

mongoose.connection.once('connected', function () {
    console.log('Connection occured');
});

mongoose.connection.once('error',function (err) {
    console.log('Mongoose default connection error: ' + err);
});

const closeConnection = () => mongoose.connection.close();

module.exports = {
    connect,
    closeConnection
};