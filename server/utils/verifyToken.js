const jwt = require('jsonwebtoken');

/**
 *  Validate token then bind payload to req.token
 *  return 401 if token is bad
 *  TODO:
 *  - ALSO handle this on react - clear the key then redirect to Login
 */
module.exports.validateToken = (req, res, next) => {
    // token validation
    const auth = req.header('Authorization');
    const token = auth.split(' ')[1];

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err.name === 'JsonWebTokenError') {
            // bad token
            return res.status(401).json({ err });
        } else if (err) return res.status(401).json(authErrMsg); //  misc error

        return res.status(200).json({
            err,
            result: decoded,
        });
    });
    next();
};
