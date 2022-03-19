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

// update all information
router.post('/update', controller.update);
router.post('/update/role', controller.updateRole);

module.exports = router;
