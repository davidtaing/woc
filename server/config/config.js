if (process.env.NODE_ENV === 'dev') require('dotenv').config(); //.env file in main folder

// NOTE: feels bad? react having access to .env

/* 
    config for things
*/

const SERVER_PORT = process.env.PORT || 8080;
const SERVER_HOSTNAME = process.SERVER_HOSTNAME || 'localhost';

const MONGO_CONF = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
const MONGO_URI = process.env.MONGO_URI;

const SWAGGER_CONF = {
    definition: {
        // openapi: '3.0.0',
        info: {
            title: 'LogRocket Express API with Swagger',
            version: '0.1.0',
            description:
                'This is a simple CRUD API application made with Express and documented with Swagger',
            license: {
                name: 'MIT',
                url: 'https://spdx.org/licenses/MIT.html',
            },
            contact: {
                name: 'LogRocket',
                url: 'https://logrocket.com',
                email: 'info@email.com',
            },
        },
        servers: [
            {
                url: 'http://localhost:3000/books',
            },
        ],
    },
    apis: ['./routes/books.js'],
};

// for exporting --------------------------------------------------------------------------------
const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT,
};

const DB = {
    uri: MONGO_URI,
    config: MONGO_CONF,
};

const config = {
    server: SERVER,
    db: DB,
    swagger: SWAGGER_CONF,
};

module.exports = config;
