const jwt = require("jsonwebtoken")
const logging = require('./logging')

/* 
    functions handling jwt
    TODO:
    - set what can be passed into payload
*/
const NAMESPACE = "JWT"

/**
 * 
 * @param {Object} jwt payload 
 * @return valid jwt token for 1000 ms
 */
const generateJWT = (payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1000" });
}

const authenticateToken = (req, res, next) => {
    const header = req.headers['authorization'];
    const token = header && header.split(" ")[1];

    if(token === null) {
        logging.error(NAMESPACE, `access attempt without token`);
        return res.status(401).json({ msg: 'missing token' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if(err) {
            logging.error(NAMESPACE, `access attempt with bad token ${err.message}`, err)
            return res.status(402).json({ msg: 'bad token' })
        }

        // should i have this
        req.user = user;

        next();
    })
}

module.exports = { generateJWT, authenticateToken };