const router = require('express').Router();
const controller = require('../controller/auth.controller');
const authValidator = require('../validator/auth.validate');
const { runValidation } = require('../validator/runValidator');
// const passport = require('passport');
const jwt = require('express-jwt');

/* 
    authentication routes
*/

router.get(
    '/',
    // passport.authenticate('jwt', { session: false }),
    // slap this into config
    jwt({
        secret: process.env.JWT_SECRET,
        algorithms: ['HS256'],
        requestProperty: 'token', // bind to prop of req
    }),
    (err, req, res, next) => {
        if (err.name === 'UnauthorizedError') console.log('somehting');
        next();
    },
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
