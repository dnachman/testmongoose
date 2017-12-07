var mongoose = require('mongoose');

var item = mongoose.Schema({
    token: String,
    query: String
});

module.exports = mongoose.model('item', item);