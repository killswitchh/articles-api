const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const articleRoutes = require('./api/routes/articles');
const topicRoutes = require('./api/routes/topics');

const app = express();

mongoose.connect(
    "mongodb+srv://balaji:"
    +process.env.MONGO_ATLAS_PWD+
    "@article-topic-api.x3jlk.gcp.mongodb.net/"
    +process.env.MONGO_ATLAS_DB_NAME+
    "?retryWrites=true&w=majority",
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    }
    )
    .then(() => console.log("Successfully connected to MongoDB."))
    .catch(err => console.error("Connection error", err));

mongoose.Promise = global.Promise;
    
app.use(morgan('dev'));
app.use(express.urlencoded({extended : false}));
app.use(express.json());

app.use((request , response , next )=>{
    response.header("Access-Control-Allow-Origin" , "*");
    response.header(
        "Access-Control-Allow-Headers",
        "Origin , X-Requested-With , Content-Type , Accept , Authorization"
        );
    
    if (request.method === "OPTIONS"){
        response.header("Access-Control-Allow-Methods" , "PUT, POST, PATCH, DELETE, GET");
        return response.status(200).json({});
    }
    next();
});

app.use('/articles' , articleRoutes);
app.use('/topics' , topicRoutes);

app.use((request , response , next )=>{
    const error = new Error('Invalid API call');
    error.status = 404;
    next(error);
});

app.use((error , request , response , next )=>{
    response.status(error.status || 500);
    response.json({
        error : {
            message : error.message
        }
    });
});

module.exports = app;