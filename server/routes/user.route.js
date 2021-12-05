const router = require('express').Router();
const controller = require('../controller/user.controller');
const { verifyToken: validateToken } = require('../utils/verifyToken');

/* 
    crud operations for a user
*/

// /api/user

router.get('/', controller.getUser);
router.get('/all', controller.getAllUsers);

router.get('/all/admins', controller.getAllAdmins);
router.get('/all/mentors', controller.getAllMentors);
router.get('/all/mentees', controller.getAllMentees);

module.exports = router;
