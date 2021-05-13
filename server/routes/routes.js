const app = require('express')();
const authRoute = require('./auth.route');

/* 
    grouping REST routing path
*/

app.use('/auth', authRoute);

module.exports = app;
