const http = require('http');
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const passport = require('passport');

const logging = require('./config/logging');
const config = require('./config/config');
const serverUtils = require('./config/serverUtils');

require('dotenv').config();

/**
 * TODO:
 * - set up cors to secure access
 */

// server config ------------------------------------------------------------------------------------------
const NAMESPACE = 'SERVER';
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// database connection ------------------------------------------------------------------------------------------
mongoose
    .connect(config.db.uri, config.db.config)
    .then((res) => logging.info(NAMESPACE, 'Mongo connected'))
    .catch((err) => logging.error(NAMESPACE, err.message, err));

// middleware ------------------------------------------------------------------------------------------
app.use(serverUtils.logAllRequests);

// init passport
require('./config/passport');
// app.use(passport.initialize());
// app.use(passport.session());

// serving static file ------------------------------------------------------------------------------------------
app.use(express.static(path.resolve(__dirname, '../web', 'build')));

// api routing ------------------------------------------------------------------------------------------
app.use('/api', require('./routes/routes'));

// error handling ------------------------------------------------------------------------------------------
app.use(serverUtils.errHandling);
app.get('*', serverUtils.redirectToIndex);

// start the server ------------------------------------------------------------------------------------------
app.listen(config.server.port, () => {
    logging.info(
        NAMESPACE,
        `Server running on ${config.server.hostname}:${config.server.port}`
    );
});
