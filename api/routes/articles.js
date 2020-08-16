const express = require ('express');
const router = express.Router();

// ADMIN ONLY Create article with topic name / id
router.post('/:topicId', (request , response , next)=>{

    // Sample call Request body : localhost:5050/articles/21
    // {
    //     "title" : "Article Title",
    //     "name"  : "Article Name",
    //     "image" : "Image url",
    //     "isFeatured" : "True"
    // }

    const createdBody = {
        "topic-id"           : request.params.topicId,
        "article-title"      : request.body.title,
        "article-name"       : request.body.name,
        "article-image"      : request.body.image,
        "article-isFeatured" : request.body.isFeatured
    };
    response.status(201).json({
        message : 'Created article for topic ',
        "article-details" : createdBody
    });
});

// ADMIN ONLY Update article
router.patch('/:articleId' , (request , response , next) =>{
    const id = request.params.articleId;

    response.status(200).json({
        message : id + " Article Updated"
    });
});

// Get all articles for a topic
router.get('/allarticles/:topic' , (request , response , next)=>{
    const topicName = request.params.topic
    response.status(200).json({
        message : "Display all articles for " + topicName
    });
});

// Get article with article id
router.get('/:id' , (request , response , next)=>{
    const articleId = request.params.id;
    response.status(200).json({
        message : "Displays Articles having articleID : "  + articleId
    });
});

module.exports = router;