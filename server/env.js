// pre-loading env to set it as dev or production

/* 
    this may fix the deployment problem as
    the dotenv package is not set as the field
*/

process.env.NODE_ENV = 'dev';
