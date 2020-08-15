const express = require ('express');
const router = express.Router();

// ADMIN ONLY Create article with topic name / id
router.post('/:topic', (request , response , next)=>{
    const topicName = request.params.topic;
    response.status(200).json({
        message : 'Created article for topic ' + topicName
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