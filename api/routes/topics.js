const express = require('express');
const mongoose = require('mongoose')
const { v4: uuid } = require('uuid');

const router = express.Router();
const Topic = require("../models/topics");

// ADMIN ONLY Create Topic 
router.post('/', (request, response, next) => {

    // Sample call
    // localhost:5050/topics/
    // {
    //     "name"  : "Topic Name",
    //     "image" : "Image url"
    // }
    const topicId = new mongoose.Types.ObjectId()
    const topic = new Topic({
        _id: topicId,
        "topic-name": request.body.name,
        "topic-image": request.body.image,
        "topic-id": topicId
    });

    topic.save()
    .then(result => {
        console.log(result);
        response.status(201).json({
            message: "Topic has been created",
            details: topic
        });
    })
    .catch(err => {
        console.log(err);
        response.status(500).json({
            error : err
        })
    });

    
});


// Get all topics for a topic
router.get('/alltopics', (request, response, next) => {
    Topic.find()
    .exec()
    .then(docs=>{
        console.log(docs);
        response.status(200).json(docs);
    })
    .catch(err =>{
        console.log(err);
        response.status(500).json({error : err});
    });

});

// Get topic using topic  ID
router.get('/topicid/:id', (request, response, next) => {
    const id = request.params.id;

    Topic.findById(id)
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



module.exports = router;