const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const Topic = require("../models/topics");
const Article = require("../models/articles");
const nodemon = require('nodemon');

//  ADMIN ONLY Create article with topic name / id

    // Sample call : localhost:5050/articles/5f45090621a1a535146729bb
    // {
    //     "id" : "254",
    //     "topicId": "5f45090621a1a535146729bb",
    //     "title" : "Article Title",
    //     "image" : "Image url",
    //     "content" : "Article content",
    //     "isFeatured" : "true"
    // }

router.post('/', (request, response, next) => {
    Topic.findById(request.body.topicId)
    .then(topic => {
        if (!topic){
            return response.status(404).json({
                message : "Topic not found"
            });
        }
        const article =  new Article({
            _id: mongoose.Types.ObjectId(),
            topic : request.body.topicId,
            "article_id" : request.body.id,
            "article_title" : request.body.title,
            "article_image" : request.body.image,
            "article_content" : request.body.content,
            "is_featured": request.body.isFeatured
        });
        article.save()
        .then(result => {
            response.status(201).json(result);
        })
        .catch(err => {
            response.status(500).json({
                error : err
            });
        });
    });
});



// Get all articles
router.get('/', (request, response, next) => {
    Article.find()
    .select("_id topic article_id article_title article_image article_content is_featured")
    .exec()
    .then(docs => {
        response.status(200).json({
            count : docs.length,
            articles : docs.map(doc =>{
                return { 
                    _id : doc._id,
                    topic : doc.topic,
                    id : doc.article_id,
                    title : doc.article_title,
                    image : doc.article_image,
                    content : doc.article_content,
                    featured : doc.isFeatured,
                    request : {
                        type : 'GET',
                        url : "http://localhost:5050/articles/" + doc._id
                    }}
            }),
        });
    })
    .catch(err => {
        response.status(500).json({
            error : err
        });
    });
});

// Get article with article id
router.get('/:id', (request, response, next) => {
    const id = request.params.id;

    Article.findById(id)
    .select('_id topic article_id article_title article_image article_content is_featured')
    .exec()
    .then(doc=>{
        console.log(doc);
        if (doc){
            response.status(200).json(doc);
        }
        else{
            response.status(404).json({message : "Database entry Not Found"})
        }
    })
    .catch(err=>{
        console.log(err);
        response.status(500).json({error : err});
    });

});

// Get all articles for a topic
router.get('/allarticles/:topicId', (request, response, next) => {
    const topic_Id = request.params.topicId
    Article.find({"topic" : topic_Id})
    .select("_id topic article_id article_title article_image article_content is_featured")
    .exec()
    .then(docs => {
        response.status(200).json({
            count : docs.length,
            articles : docs.map(doc =>{
                return { 
                    _id : doc._id,
                    topic : doc.topic,
                    id : doc.article_id,
                    title : doc.article_title,
                    image : doc.article_image,
                    content : doc.article_content,
                    featured : doc.isFeatured,
                    request : {
                        type : 'GET',
                        url : "http://localhost:5050/articles/" + doc._id
                    }}
            }),
        });
    })
    .catch(err => {
        response.status(500).json({
            error : err
        });
    });
});


// ADMIN ONLY Update article
//[
//     {
//         "keyName" : "title",
//         "value" : "updated_title"
//     }
// ]
router.patch('/:id' , (request , response , next) => {
    const id = request.params.id;
    const updateOps = {};

    for (const ops of request.body){
        updateOps[ops.keyName] = ops.value;
    }
    Article.updateOne({_id : id} , {$set : updateOps})
    .exec()
    .then(result => {
        response.status(200).json({
            message : "Article Updated",
            article_id : id,
            details : {
                type : "GET",
                url : "http://localhost:5050/articles/" + id
            }
        })
    })
    .catch(err => {
        console.log(err);
        response.status(500).json({
            error : err
        });
    });
});

// DELETE delete articles by topic ID
router.delete('/:id' , (request , response ,next) => {
    const id = request.params.id;
    Article.remove({_id : id})
    .exec()
    .then(result => {
        response.status(200).json({
            message : "Article Deleted",
            deleted_product_id : id
        });
    })
    .catch(err=>{
        console.log(err);
        response.status(500).json({
            error:err
        })
    });
});



module.exports = router;