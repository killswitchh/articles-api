const mongoose = require('mongoose')

const topicSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    "topic-name": String,
    "topic-image": String,
    "topic-id": String
});

module.exports = mongoose.model('Topics', topicSchema);