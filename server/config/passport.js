const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const localStrategy = require('passport-local').Strategy;

const logging = require('./logging');
const User = require('../models/user.model');

/* 
    setting up passport middleware
    NOT USED - Pending to be removed
*/
const NAMESPACE = 'PASSPORT';

const JWT_OPTIONS = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET,
    ignoreExpiration: false,
};

passport.use(
    'jwt',
    new JwtStrategy(JWT_OPTIONS, (jwtPayload, done) => {
        console.log(jwtPayload);
        // valid jwt
        User.findOne({ _id: jwtPayload.id }, (err, user) => {
            logging.info(NAMESPACE, 'user', user);
            if (err) return done(err, false); // error

            // bind to req in protected route
            return user ? done(null, user) : done(null, false);
        });
    })
);

/*
passport.use(
    "login",
    new localStrategy(
        {
            usernameField: 'email',
            passwordField: 'password',
        },
        async (email, password, done) => {
            try {

            const user = await UserModel.findOne({ email });
            if(!user) {
                return done(null, false, { msg: 'user not found '});
            }

            const validate = await user.isValidPassword(password);
            if(!validate) {
                return done(null, false, { msg: 'wrong password '});
            } 

            // login OK
            return done(null, user, { msg: 'logged in successfully '})
            } catch(error) {
                logging.error(NAMESPACE, `error logging in ${error.message}`, error);
                return done(error);
            }
        }
    )
)
*/
