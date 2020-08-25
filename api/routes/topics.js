const express = require('express');
const mongoose = require('mongoose')
const { v4: uuid } = require('uuid');

const router = express.Router();
const Topic = require("../models/topics");
const { response } = require('express');

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
        "topic_name": request.body.name,
        "topic_image": request.body.image,
        "topic_id": request.body.id,
    });

    topic.save()
    .then(result => {
        response.status(201).json({
            message: "Topic has been created",
            details: {
                topic_name : result.topic_name,
                topic_image : result.topic_image,
                topic_id:result.topic_id,
                _id : result._id,
                get_request : {
                    type : "GET",
                    url : "http://localhost:5050/topics/" + result._id
                }
            }
        });
    })
    .catch(err => {
        console.log(err);
        response.status(500).json({
            error : err
        })
    });

    
});

// Get all topics
router.get('/', (request, response, next) => {
    Topic.find()
    .select('topic_name topic_image topic_id _id')
    .exec()
    .then(docs=>{
        const res = {
            count: docs.length,
            topics: docs.map(doc =>{
                return {
                    topic_name : doc.topic_name,
                    topic_image : doc.topic_image,
                    topic_id:doc.topic_id,
                    _id : doc._id,
                    details : {
                        type : "GET",
                        url : "http://localhost:5050/topics/" + doc._id
                    }
                }
            })
        };
        response.status(200).json(res);
    })
    .catch(err =>{
        console.log(err);
        response.status(500).json({error : err});
    });

});

// Get topic using topic ID
router.get('/:id', (request, response, next) => {
    const id = request.params.id;

    Topic.findById(id)
    .select('topic_name topic_image topic_id _id')
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

// PATCH topic using topic ID
router.patch('/:id' , (request , response , next) => {
    const id = request.params.id;
    const updateOps = {};

    for (const ops of request.body){
        updateOps[ops.keyName] = ops.value;
    }
    Topic.updateOne({_id : id} , {$set : updateOps})
    .exec()
    .then(result => {
        response.status(200).json({
            message : "Topic Updated",
            topic_id : id,
            details : {
                type : "GET",
                url : "http://localhost:5050/topics/" + id
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

// DELETE delete topics by topic ID
router.delete('/:id' , (request , response ,next) => {
    const id = request.params.id;
    Topic.remove({_id : id})
    .exec()
    .then(result => {
        response.status(200).json({
            message : "Product Deleted",
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