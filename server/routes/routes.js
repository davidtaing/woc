const app = require('express')();
const { verifyToken, verifyAdmin } = require('../utils/verifyToken');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');

/* 
    grouping REST routing path
*/

app.use('/auth', authRoute);

// user only routes
app.use(verifyToken);
app.use('/user', userRoute);

// admin only routes;
app.use(verifyAdmin);
app.get('/admin', (req, res) => {
    return res.status(200).json({ msg: 'ok' });
});

module.exports = app;
