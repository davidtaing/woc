const router = require('express').Router();
const controller = require('../controller/events.controller');
const passport = require('passport');

/* 
    authentication routes
*/

router.get(
    '/',
    controller.getEvents
);
module.exports = router;
