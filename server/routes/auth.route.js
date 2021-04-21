const router = require('express').Router();
const controller = require('../controller/auth.controller');

/* 
    sample api route
*/

router.post('/login', controller.login);
router.post('/signup', controller.signup);

module.exports = router;
