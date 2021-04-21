const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/user.model');
const logging = require('../config/logging');

/**
 * Authentication controller
 *
 * COMPLETED:
 * - SignUp
 *
 * TODO:
 * - SignUp:
 *  - email verification??
 * - LogIn (JWT)
 * - changePassword
 */
const NAMESPACE = 'AuthController';

// route definitions --------------------------------------------------------------------------------
module.exports.login = (req, res) => {
    // check existing email

    // check password

    return res.status(200).json({ message: 'Hallo' });
};

module.exports.signup = async (req, res) => {
    // check existing email
    const exist = await User.findOne({ email: req.body.email });
    if (exist) {
        logging.error(NAMESPACE, 'Login - duplicated email');
        return res.status(400).json({ msg: 'Email already exist' });
    }

    // hash password
    const salt = await bcrypt.genSalt(parseInt(process.env.SALT_ROUNDS));
    const hash = await bcrypt.hash(req.body.password, salt);

    // new user object
    const newUser = new User({
        ...req.body,
        password: hash,
    });

    // save
    try {
        const saved = await newUser.save();
        logging.info(NAMESPACE, 'New User Created');
        return res.status(200).json({
            msg: 'New User Created',
            // saved,
        });
    } catch (err) {
        logging.error(NAMESPACE, `Signup ${err.message}`, err);
        return res.status(400).json({ err });
    }
};

// change password
