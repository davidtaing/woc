const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/user.model');
const logging = require('../config/logging');

/* 
    sample controller 
*/
const NAMESPACE = 'AuthController';

// route definitions --------------------------------------------------------------------------------
module.exports.login = (req, res) => {
    // check existing email

    // hash password

    // new user object

    // save
    return res.status(200).json({ message: 'Hallo' });
};

module.exports.signup = (req, res) => {
    return res.status(200).json({ message: 'Hallo' });
};

// change password
