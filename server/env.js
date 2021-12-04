// pre-loading env to set it as dev or production

/* 
    this may fix the deployment problem as
    the dotenv package is not set as the field
*/

process.env.NODE_ENV = 'dev';

/*

So generally the arguements are I could either attach swagger UI or de couple it from the project 
There are pros and cons with either methodology [more here](https://stackoverflow.com/questions/31300756/can-swagger-autogenerate-its-yaml-based-on-existing-express-routes)

another guide on [coupling swagger IO with express to generate swagger io](https://stackoverflow.com/questions/31300756/can-swagger-autogenerate-its-yaml-based-on-existing-express-routes)


*/
