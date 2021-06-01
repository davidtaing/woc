const { check } = require('express-validator');

/*
    validation rules for user authentication
    containing:
    - checkEmail
    - login
    - sign i
*/

const emailValidator = [
    check('email')
        .not()
        .isEmpty()
        .isLength({ max: 50 })
        .isEmail()
        .withMessage('Must be Valid email address'),
];

const loginValidator = [
    check('email')
        .not()
        .isEmpty()
        .isLength({ max: 50 })
        .isEmail()
        .withMessage('Message must be Valid email address'),
    check('password').not().isEmpty().withMessage('Invalid Password Format'),
];

// double check the form/ data structure to see whats required and what is not
const signupValidator = [];

module.exports = {
    emailValidator,
    loginValidator,
    signupValidator,
};
