const mongoose = require('mongoose')
// const articleSchema = require("../models/articles");


const topicSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    "topic_name": {type:String , required : true},
    "topic_image":{type:String , required : true},
    "topic_id": {type:String , required : true},
});

module.exports = mongoose.model('Topics', topicSchema);