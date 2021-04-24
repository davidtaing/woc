const passport = require("passport")
const localStrategy = require('passport-local').Strategy

const logging = require('./logging')
const UserModel = require('../models/user.model')


/* 
    setting up passport middleware
*/
const NAMESPACE = "PASSPORT"

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