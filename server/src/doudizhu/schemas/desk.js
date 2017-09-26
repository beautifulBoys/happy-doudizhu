var mongoose = require('mongoose');
var deskSchemas = new mongoose.Schema({
    createTime: new Date(),
    sendTime: Object,
    content: String,
    userId: Number,
    color: String,
    fontSize: String
}, {
    versionKey: false
});

module.exports = mongoose.model('bullet', deskSchemas);
