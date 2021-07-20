const app = require('express')();
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const eventsRoute = require('./events.route');

/* 
    grouping REST routing path
*/

app.use('/auth', authRoute);
app.use('/user', userRoute);
app.use('/events', eventsRoute);

module.exports = app;

