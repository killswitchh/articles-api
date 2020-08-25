const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
    "article-id" : mongoose.Schema.Types.ObjectId,
    "article-title" : String,
    "article-image" : String,
    "content" : String,
    "is-featured" : Boolean
});

module.exports = mongoose.model('Articles', articleSchema);