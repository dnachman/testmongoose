var mongoose = require('mongoose');
var Item = require('./models/item');

mongoose.connect('mongodb://jeanie:27017/testdb', { useMongoClient: true });
mongoose.Promise = global.Promise;

console.log('Start');

var newitem = new Item({ token: 'first', query: 'second' });
newitem.save(function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log('done');
    }
});

Item.find({}, function(err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log(result);
    }
});