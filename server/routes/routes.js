const app = require('express')();
const authRoute = require('./auth.route');
const userRoute = require('./user.route');

/* 
    grouping REST routing path
*/

app.use('/auth', authRoute);
app.use('/user', userRoute);

module.exports = app;
