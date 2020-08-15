const express = require ('express');
const router = express.Router();

// ADMIN ONLY Create Topic 
router.post('/create/:id' , (request , response , next) => {
    const topicId = request.params.id;
    response.status(200).json({
        message : "Topic with id " + topicId +  " has been created"
    });
});

// Get all topics for a topic
router.get('/alltopics' , (request , response , next)=>{
    response.status(200).json({
        message : "Display all topics"
    });
});

// Get topic using topic  ID
router.get('/topicid/:id' , (request , response , next)=>{
    const id = request.params.id;
    response.status(200).json({
        message : "Topics on Topic id : "  + id
    });
});



module.exports = router;