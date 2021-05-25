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
router.post('/checkemail', controller.checkEmail);
router.post('/login', controller.login);
router.post('/signup', controller.signup);

module.exports = router;
