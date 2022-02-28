const router = require('express').Router();
const controller = require('../controller/user.controller');
const { verifyToken: validateToken } = require('../utils/verifyToken');

/* 
    crud operations for a user
*/

// /api/user

// router.update('/update', controller.updateUser);
router.get('/', controller.getUser);
router.get('/all', controller.getAllUsersRole);


module.exports = router;
