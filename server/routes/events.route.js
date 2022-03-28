const router = require('express').Router();
const controller = require('../controller/events.controller');

/* 
    authentication routes
*/

router.get('/', controller.getEvents);

module.exports = router;
