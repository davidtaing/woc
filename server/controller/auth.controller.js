const bcrypt = require('bcrypt');
const passport = require('passport');
const jwtConf = require('../config/jwt');

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
    return res.status(200).json({...req.user})
}
module.exports.login = (req, res, next) => {
    passport.authenticate('login', async (err, user, info) => {
        try {
            if(err || !user) {
                // should this return a bad response instead
                return next(new Error('an error occured'));
            }
            
            // login from passport
            req.login(user, { session: false }, async (error) => {
                if(error) return next(error);

                const token = jwtConf.generateJWT({
                    _id: user._id,
                    email: user.email
                });

                return res.status(200).json({ msg: 'login OK', token });
            })

        } catch (error) {
            // should this return a bad response instead
            return next(error);
        }
    })(req, res, next)
};

module.exports.signup = async (req, res) => {
    // check existing email
    const exist = await User.findOne({ email: req.body.email });
    if (exist) {
        logging.error(NAMESPACE, 'Login - duplicated email');
        return res.status(400).json({ msg: 'Email already exist' });
    }
    

    console.log(req.body)
    console.log(process.env.SALT_ROUNDS)

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
