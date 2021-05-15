const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const logging = require('../config/logging');

/* 
    functions handling jwt
    TODO:
    - set what can be passed into payload
*/
const NAMESPACE = 'JWT';

const generateHash = async (password) => {
    const salt = await bcrypt.genSalt(parseInt(process.env.SALT_ROUNDS));
    return await bcrypt.hash(password, salt);
};

const checkHash = async (password, hash) =>
    await bcrypt.compare(password, hash);

const signToken = (dataObj) => {
    const expires = '1s';
    const SECRET = process.env.JWT_SECRET;

    const payload = {
        ...dataObj,
        iat: Date.now(),
    };

    const token = jwt.sign(payload, SECRET, { expiresIn: expires });
    return {
        token: `Bearer ${token}`,
        expiresIn: expires,
    };
};

// old stuff -------------------------------
/**
 *
 * @param {Object} jwt payload
 * @return valid jwt token for 1000 ms
 */
/*
const generateJWT = (payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1000" });
}
*/
/*
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
*/

module.exports = {
    //generateJWT, authenticateToken
    generateHash,
    checkHash,
    signToken,
};
