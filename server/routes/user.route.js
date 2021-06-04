const router = require('express').Router();
const controller = require('../controller/user.controller');
const { validateToken } = require('../utils/verifyToken');

/* 
    crud operations for a user
*/

router.get('/', validateToken, controller.getUser);

module.exports = router;
