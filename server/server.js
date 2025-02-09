const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const swagger = require('swagger-ui-express')

const logging = require('./config/logging');
const config = require('./config/config');
const serverUtils = require('./utils/server.util');

/* 
    main server entry point and configs
*/

// server config ------------------------------------------------------------------------------------------
const NAMESPACE = 'SERVER';
const app = express();
app.use(cors());        // TODO: change to whitelisting only
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

// api routing -----------------------------------------------------------------------------------------------
app.use('/api', require('./routes/routes'));

const swaggerOp = {
  swaggerOptions: {
    validatorUrl: null
  }
}
app.use('/api/docs', swagger.serve, swagger.setup(require('./swagger.json'), swaggerOp));

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
