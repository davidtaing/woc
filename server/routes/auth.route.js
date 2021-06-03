const router = require('express').Router();
const controller = require('../controller/auth.controller');
const authValidator = require('../validator/auth.validate');
const { runValidation } = require('../validator/runValidator');
// const passport = require('passport');

/* 
    authentication routes
*/

router.get(
    '/',
    // passport.authenticate('jwt', { session: false }),
    controller.user
);

// test this
router.post(
    '/checkemail',
    authValidator.emailValidator,
    runValidation,
    controller.checkEmail
);

router.post('/login', runValidation, controller.login); // v - email, password
router.post('/signup', controller.signup); // v - register data

module.exports = router;
