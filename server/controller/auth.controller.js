const bcrypt = require('bcrypt');
const passport = require('passport');
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
 * - SignUp:
 *  - email verification??
 * - LogIn (JWT)
 * - changePassword
 */
const NAMESPACE = 'AuthController';

// route definitions --------------------------------------------------------------------------------
module.exports.user = (req, res) => {
    if (!req.user)
        return res.status(401).json({ message: 'not authenticated' });
    return res.status(200);
};

module.exports.login = async (req, res) => {
    // check matching account
    const user = await User.findOne({ email: req.body.email });
    if (!user)
        return res
            .status(401)
            .json({ success: false, msg: 'Account does not exist' });

    // check matching password
    // console.log(user.obj, req.body);
    const checkPassword = await authUtil.checkHash(
        req.body.password,
        user.passwordHash
    );
    if (!checkPassword)
        return res
            .status(401)
            .json({ success: false, msg: 'Invalid password' });

    // successful
    console.log(user);
    const tokenObj = await authUtil.signToken({ id: user._id });
    return res.status(200).json({
        success: true,
        token: tokenObj.token,
        expiresIn: tokenObj.expiresIn,
    });

    // sign jwt
    // return token
    /* old stuff
    passport.authenticate('login', async (err, user, info) => {
        
        try {
            if (err || !user) {
                // should this return a bad response instead
                return next(new Error('an error occured'));
            }

            // login from passport
            req.login(user, { session: false }, async (error) => {
                if (error) return next(error);

                const token = jwtConf.generateJWT({
                    _id: user._id,
                    email: user.email,
                });

                return res.status(200).json({ msg: 'login OK', token });
            });
        } catch (error) {
            // should this return a bad response instead
            return next(error);
        }
    })(req, res, next);
    */
};

module.exports.checkEmail = async (req, res) => {
    // check existing email
    User.findOne({ email: req.body.email });
    return exist
        ? res.status(200).json({ exist: true, msg: 'Email already exist' })
        : res.status(200).json({ exist: false, msg: 'OK to use' });
};

module.exports.signup = async (req, res) => {
    // already done in checkEmail but leaving this here for safety
    const exist = await User.findOne({ email: req.body.email });
    if (exist) {
        return res.status(200).json({ msg: 'Email already exist' });
    }

    // hash password
    // const hash = authUtil.generateHash(req.body.password);

    // new user object
    const newUser = new User({
        ...req.body,
        passwordHash: await authUtil.generateHash(req.body.password),
    });

    console.log(newUser);

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
        return res
            .status(400)
            .json({ msg: 'Signup error. Please try again or contact support' });
    }
};

// change password
