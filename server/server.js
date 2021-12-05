const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const swaggerUI = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
// const swaggerDoc = require('./swagger.json');

const logging = require('./config/logging');
const config = require('./config/config');
const serverUtils = require('./utils/server.util');

/**
 * TODO:
 * - set up cors to secure access
 */

// server config ------------------------------------------------------------------------------------------
const NAMESPACE = 'SERVER';
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// database connection ---------------------------------------------------------------------------------------
mongoose
    .connect(config.db.uri, config.db.config)
    .then((res) => logging.info(NAMESPACE, 'Mongo connected'))
    .catch((err) => logging.error(NAMESPACE, err.message, err));

// middlewares -----------------------------------------------------------------------------------------------
app.use(serverUtils.logAllRequests);

// serving static file ---------------------------------------------------------------------------------------
app.use(express.static(path.resolve(__dirname, '../web', 'build')));

// Swagger UI setup ------------------------------------------------------------------------------------------
const specs = swaggerJSDoc(config.swagger);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs));

// api routing -----------------------------------------------------------------------------------------------
app.use('/api', require('./routes/routes'));

// error handling --------------------------------------------------------------------------------------------
app.use(serverUtils.errHandling);
app.get('*', serverUtils.redirectToIndex);

// start the server ------------------------------------------------------------------------------------------
app.listen(config.server.port, () => {
    logging.info(
        NAMESPACE,
        `Server running on ${config.server.hostname}:${config.server.port}`
    );
});
