const jwt = require('jsonwebtoken');
const { authErrMsg } = require('../utils/auth.util');
const User = require('../models/user.model');

/**
 *  Validate token then bind user data to req.user
 *  return 401 if token is bad
 *  TODO:
 *  - ALSO handle this on react - clear the key then redirect to Login
 */
module.exports.verifyToken = async (req, res, next) => {
    // token validation
    const auth = req.header('Authorization');
    const token = auth.split(' ')[1];

    try {
        const payload = await jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findOne({ _id: payload.id });

        // pass user object if success
        req.user = user;
        next();
    } catch (e) {
        if (e.name === 'JsonWebTokenError')
            return res.status(401).json({ err });
        return res.status(401).json(authErrMsg); //  misc error
    }
};
