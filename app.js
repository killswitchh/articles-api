const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const articleRoutes = require('./api/routes/articles');
const topicRoutes = require('./api/routes/topics');

const app = express();

app.use(morgan('dev'));
// app.use(bodyParser.urlencoded({extended : false}));
// app.use(bodyParser.json());
app.use(express.urlencoded({extended : false}));
app.use(express.json());

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