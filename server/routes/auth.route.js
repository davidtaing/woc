const router = require('express').Router();
const controller = require('../controller/auth.controller');
const passport = require('passport');

/* 
    authentication routes
*/

router.get(
    '/',
    passport.authenticate('jwt', { session: false }),
    controller.user
);
router.post('/checkemail', controller.checkEmail); // v - email
router.post('/login', controller.login); // v - email, password
router.post('/signup', controller.signup); // v - register data

module.exports = router;
