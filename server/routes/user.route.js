const router = require('express').Router();
const controller = require('../controller/user.controller');
const { verifyToken: validateToken } = require('../utils/verifyToken');

/* 
    crud operations for a user
*/

router.get('/', controller.getUser);

module.exports = router;
