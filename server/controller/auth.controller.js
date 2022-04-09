const bcrypt = require('bcrypt');
const authUtil = require('../utils/auth.util');

const User = require('../models/user.model');
const logging = require('../config/logging');

/**
 * Authentication controller
 *
 * COMPLETED:
 * - SignUp
 *
 * TODO:
 * - changePassword
 * - maybe using flags to trigger what msg to use is cleaner?? (minor optimization)
 */
const NAMESPACE = 'AuthController';

// route definitions --------------------------------------------------------------------------------
// may not need this
module.exports.user = (req, res) => {
    if (!req.token)
        return res
            .status(401)
            .json({ message: 'controller not authenticated' });
    return res.status(200).json({ message: 'authenticated', user: req.token });
};

module.exports.login = async (req, res) => {
    const errMsg = 'Account does not exist or Invalid password';
    // check matching account
    const user = await User.findOne({ email: req.body.email });
    if (!user)
        return res
            .status(401)
            .json({ success: false, msg: errMsg });

    console.log("account ok");
    // check matching password
    const checkPassword = await authUtil.checkHash(
        req.body.password,
        user.passwordHash
    );
    if (!checkPassword)
        return res
            .status(401)
            .json({ success: false, msg: errMsg });

    // successful
    const tokenObj = await authUtil.signToken({ id: user._id });

    return res.status(200).json({
        success: true,
        token: tokenObj.token,
        expiresIn: tokenObj.expiresIn, // just for response
    });
};

/**
 *  Check existing Email
 */
module.exports.checkEmail = async (req, res) => {
    const exist = await User.findOne({ email: req.body.email });
    return exist
        ? res.status(200).json({ exist: true, msg: 'Email already exist' })
        : res.status(200).json({ exist: false, msg: 'OK to use' });
};

module.exports.signup = async (req, res) => {
    // already done in checkEmail but leaving this here for safety
    const exist = await User.findOne({ email: req.body.email });
    if (exist) {
        return res.status(200).json({ success: false, msg: 'Email already exist' });
    }

    // new user object
    const newUser = new User({
        ...req.body,
        passwordHash: await authUtil.generateHash(req.body.password),
        user: "user",   // prevent admin from being created
    });

    // save
    try {
        const saved = await newUser.save();
        logging.info(NAMESPACE, 'New User Created');
        return res.status(200).json({
            success: true,
            msg: 'New User Created'
            // user: newUser,
            // saved,
        });
    } catch (err) {
        logging.error(NAMESPACE, `Signup ${err.message}`, err);
        return res
            .status(400)
            .json({ success: false, msg: 'Signup error. Please try again or contact support' });
    }
};

// change password
// - compare old password hash
// - update new password
