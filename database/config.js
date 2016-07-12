var mongoose = require('mongoose');

mongoose.connect(process.env.CUSTOMCONNSTR_MONGOLAB_URI || 'mongodb://localhost/collab-comp-db');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
 console.log('Mongodb connection open');
});

module.exports = db;
