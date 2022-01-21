const router = require('express').Router();
const controller = require('../controller/events.controller');

/* 
    events routes
    
    /api/events
*/

router.get('/', controller.getEvents);

module.exports = router;
