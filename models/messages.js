const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
    name: String,
    email: String,
    message: String
});

const messageModel = mongoose.model('messages', messageSchema);

module.exports = messageModel;