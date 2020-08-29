const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,

    topic : {
        type:mongoose.Schema.Types.ObjectId,
        ref : 'Topic',
        required : true
    },

    "article_id" :{type : Number,required:true},
    "article_title" :{type : String,required:true},
    "article_image" :{type : String,required:true},
    "article_content":{type : String,required:true},
    "is_featured":{type : Boolean,required:true}

});

module.exports = mongoose.model('Articles', articleSchema);