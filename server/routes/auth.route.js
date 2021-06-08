const router = require('express').Router();
const controller = require('../controller/auth.controller');
const authValidator = require('../validator/auth.validate');
const { runValidation } = require('../validator/runValidator');

const NAMESPACE = 'AUTH ROUTE';
/* 
    authentication routes
    would only contains open routes (no token needed)
*/

/* 
    TODO: 
    - add login, sign up validation
    - test validation
*/

// test this
router.post(
    '/checkemail',
    runValidation(authValidator.emailValidator),
    controller.checkEmail
);

router.post('/login', runValidation, controller.login); // v - email, password
router.post('/signup', controller.signup); // v - register data

module.exports = router;
