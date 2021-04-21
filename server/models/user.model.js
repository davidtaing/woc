const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    middleName: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: 2,
    },
    password: {
        type: String,
        required: true,
    },
});

// ok should i set up mongoose hooks
// or handle everything in the call

const UserModel = mongoose.model('users', UserSchema);

module.exports = UserModel;
