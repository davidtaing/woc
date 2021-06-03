const router = require('express').Router();
const controller = require('../controller/user.controller');
// const passport = require('passport');

/* 
    crud operations for a user
*/

router.get(
    '/',
    // passport.authenticate('jwt', { session: false }),
    controller.getUser
);

module.exports = router;
