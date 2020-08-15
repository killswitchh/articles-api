const express = require('express');
const app = express();
const morgan = require('morgan');

const articleRoutes = require('./api/routes/articles');
const topicRoutes = require('./api/routes/topics');

app.use(morgan('dev'));

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