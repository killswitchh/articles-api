const express = require('express');
const app = express();

const articleRoutes = require('./api/routes/articles');
const topicRoutes = require('./api/routes/topics');

app.use('/articles' , articleRoutes);
app.use('/topics' , topicRoutes);

module.exports = app;