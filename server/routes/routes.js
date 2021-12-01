const app = require('express')();
const { verifyToken, verifyAdmin } = require('../utils/verifyToken');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const eventsRoute = require('./events.route');

/* 
    grouping REST routing path

    nov - 22 
    may have to redo this to 
*/

// open =================================================================
app.use('/auth', authRoute);
app.use('/events', eventsRoute);

app.use('/ding', (req, res) => res.status(200).json('ding'));

// user only ============================================================
// app.use(verifyToken); // Change auth to be called on locked paths
app.use('/user', userRoute);

// admin only ===========================================================
app.use(verifyAdmin);
app.get('/admin', (req, res) => {
    return res.status(200).json({ msg: 'ok' });
});

module.exports = app;
